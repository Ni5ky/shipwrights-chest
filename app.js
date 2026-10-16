(function () {
  const C = window.SOT_COSMETICS;
  const SHIPS = window.SOT_SHIPS;

  const state = {
    ship: "sloop",
    name: "The Morning Star",
    hull: C.hulls[0].id,
    sails: C.sails[0].id,
    figurehead: C.figureheads[0].id,
    cannons: C.cannons[0].id,
    capstan: C.capstans[0].id,
    wheel: C.wheels[0].id,
    flag: C.flags[0].id,
    flare: C.flares[0].id
  };

  const slots = [
    { key: "hull", label: "Hull Livery", list: C.hulls },
    { key: "sails", label: "Sails", list: C.sails },
    { key: "figurehead", label: "Figurehead", list: C.figureheads },
    { key: "cannons", label: "Cannons", list: C.cannons },
    { key: "capstan", label: "Capstan", list: C.capstans },
    { key: "wheel", label: "Wheel", list: C.wheels },
    { key: "flag", label: "Flag", list: C.flags },
    { key: "flare", label: "Cannon Flare", list: C.flares }
  ];

  const $ = (sel) => document.querySelector(sel);

  function find(list, id) {
    return list.find((item) => item.id === id) || list[0];
  }

  function applyCssVars() {
    const hull = find(C.hulls, state.hull);
    const sails = find(C.sails, state.sails);
    const fh = find(C.figureheads, state.figurehead);
    const cannons = find(C.cannons, state.cannons);
    const cap = find(C.capstans, state.capstan);
    const wheel = find(C.wheels, state.wheel);
    const flag = find(C.flags, state.flag);
    const flare = find(C.flares, state.flare);
    const root = document.documentElement;

    const map = {
      "--hull": hull.colors.hull,
      "--hull-stripe": hull.colors.stripe,
      "--hull-trim": hull.colors.trim,
      "--sail": sails.colors.sail,
      "--sail-mark": sails.colors.mark,
      "--sail-accent": sails.colors.accent,
      "--fh-wood": fh.colors.wood,
      "--fh-accent": fh.colors.accent,
      "--fh-glow": fh.colors.glow,
      "--cannon-metal": cannons.colors.metal,
      "--cannon-accent": cannons.colors.accent,
      "--cap-wood": cap.colors.wood,
      "--cap-metal": cap.colors.metal,
      "--wheel-wood": wheel.colors.wood,
      "--wheel-metal": wheel.colors.metal,
      "--flag-cloth": flag.colors.cloth,
      "--flag-mark": flag.colors.mark,
      "--flare": flare.colors.flare
    };
    Object.entries(map).forEach(([k, v]) => root.style.setProperty(k, v));
  }

  function loadoutText() {
    const ship = SHIPS.find((s) => s.id === state.ship);
    const lines = [
      `${state.name} — ${ship.name} (${ship.crew} crew)`,
      "────────────────────────────────",
      ...slots.map((slot) => {
        const item = find(slot.list, state[slot.key]);
        return `${slot.label}: ${item.name}  [${item.set} · ${item.source}]`;
      })
    ];
    return lines.join("\n");
  }

  function renderLoadout() {
    $("#loadout").textContent = loadoutText();
    $("#nameplate").textContent = state.name;
  }

  function fillSelect(select, list, currentId, query) {
    const q = (query || "").trim().toLowerCase();
    const filtered = list.filter((item) => {
      if (!q) return true;
      return [item.name, item.set, item.source].join(" ").toLowerCase().includes(q);
    });
    select.innerHTML = "";
    (filtered.length ? filtered : list).forEach((item) => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = `${item.name} — ${item.set}`;
      select.appendChild(opt);
    });
    if (filtered.some((item) => item.id === currentId)) {
      select.value = currentId;
    }
  }

  function buildControls() {
    const wrap = $("#slots");
    wrap.innerHTML = "";
    slots.forEach((slot) => {
      const div = document.createElement("div");
      div.className = "slot";
      div.innerHTML = `
        <label for="sel-${slot.key}">${slot.label}</label>
        <select id="sel-${slot.key}"></select>
        <div class="meta" id="meta-${slot.key}"></div>
      `;
      wrap.appendChild(div);
      const select = div.querySelector("select");
      fillSelect(select, slot.list, state[slot.key], $("#search").value);
      select.addEventListener("change", () => {
        state[slot.key] = select.value;
        updateMeta();
        applyCssVars();
        renderLoadout();
        persist();
      });
    });
    updateMeta();
  }

  function updateMeta() {
    slots.forEach((slot) => {
      const item = find(slot.list, state[slot.key]);
      const el = document.querySelector(`#meta-${slot.key}`);
      if (el) el.textContent = `${item.source} · set: ${item.set}`;
    });
  }

  function persist() {
    try {
      localStorage.setItem("sot-shipwright", JSON.stringify(state));
    } catch (_) { /* ignore private mode */ }
  }

  function restore() {
    try {
      const raw = localStorage.getItem("sot-shipwright");
      if (!raw) return;
      const saved = JSON.parse(raw);
      Object.assign(state, saved);
    } catch (_) { /* ignore */ }
  }

  function randomize() {
    const pick = (list) => list[Math.floor(Math.random() * list.length)].id;
    state.hull = pick(C.hulls);
    state.sails = pick(C.sails);
    state.figurehead = pick(C.figureheads);
    state.cannons = pick(C.cannons);
    state.capstan = pick(C.capstans);
    state.wheel = pick(C.wheels);
    state.flag = pick(C.flags);
    state.flare = pick(C.flares);
    syncUi();
  }

  function matchSet() {
    const hull = find(C.hulls, state.hull);
    const setName = hull.set;
    const tryMatch = (list) => {
      const hit = list.find((item) => item.set === setName);
      return hit ? hit.id : null;
    };
    ["sails", "figurehead", "cannons", "capstan", "wheel", "flag", "flare"].forEach((key) => {
      const slot = slots.find((s) => s.key === key);
      const id = tryMatch(slot.list);
      if (id) state[key] = id;
    });
    syncUi();
  }

  function syncUi() {
    $("#ship-type").value = state.ship;
    $("#ship-name").value = state.name;
    const shipEl = $("#ship");
    shipEl.classList.remove("sloop", "brigantine", "galleon");
    shipEl.classList.add(state.ship);
    buildControls();
    applyCssVars();
    renderLoadout();
    persist();
  }

  function fireCannons() {
    const ship = $("#ship");
    ship.classList.remove("firing");
    void ship.offsetWidth;
    ship.classList.add("firing");
  }

  async function copyLoadout() {
    const text = loadoutText();
    try {
      await navigator.clipboard.writeText(text);
      $("#copy-btn").textContent = "Copied!";
      setTimeout(() => { $("#copy-btn").textContent = "Copy loadout"; }, 1200);
    } catch (_) {
      window.prompt("Copy this loadout:", text);
    }
  }

  function downloadLoadout() {
    const blob = new Blob([loadoutText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${state.name.replace(/\s+/g, "-").toLowerCase()}-loadout.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function init() {
    restore();
    const shipSelect = $("#ship-type");
    SHIPS.forEach((ship) => {
      const opt = document.createElement("option");
      opt.value = ship.id;
      opt.textContent = `${ship.name} (${ship.crew})`;
      shipSelect.appendChild(opt);
    });
    shipSelect.addEventListener("change", () => {
      state.ship = shipSelect.value;
      syncUi();
    });
    $("#ship-name").addEventListener("input", (e) => {
      state.name = e.target.value || "Unnamed Vessel";
      renderLoadout();
      persist();
    });
    $("#search").addEventListener("input", () => buildControls());
    $("#random-btn").addEventListener("click", randomize);
    $("#match-btn").addEventListener("click", matchSet);
    $("#copy-btn").addEventListener("click", copyLoadout);
    $("#save-btn").addEventListener("click", downloadLoadout);
    $("#fire-btn").addEventListener("click", fireCannons);
    syncUi();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
