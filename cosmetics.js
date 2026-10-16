/**
 * Fan-made catalogue of well-known Sea of Thieves ship cosmetics.
 * Names and sources follow community / wiki conventions.
 * Palettes are original approximations for preview only — not official art.
 */
window.SOT_COSMETICS = {
  hulls: [
    { id: "sailor-hull", name: "Sailor Hull", set: "Sailor", source: "Default", colors: { hull: "#6b4a2e", stripe: "#3d2a18", trim: "#c9a46a" } },
    { id: "admiral-hull", name: "Admiral Hull", set: "Admiral", source: "Shipwright", colors: { hull: "#1e3a5f", stripe: "#c9a227", trim: "#e8d48b" } },
    { id: "ceremonial-admiral-hull", name: "Ceremonial Admiral Hull", set: "Ceremonial Admiral", source: "Shipwright", colors: { hull: "#16324f", stripe: "#d4af37", trim: "#f3e2a0" } },
    { id: "sovereign-hull", name: "Sovereign Hull", set: "Sovereign", source: "Shipwright", colors: { hull: "#5c1a4a", stripe: "#d4af37", trim: "#f0c36a" } },
    { id: "royal-sovereign-hull", name: "Royal Sovereign Hull", set: "Royal Sovereign", source: "Shipwright", colors: { hull: "#4a0e3a", stripe: "#e8c547", trim: "#fff1b0" } },
    { id: "sea-dog-hull", name: "Sea Dog Hull", set: "Sea Dog", source: "Shipwright", colors: { hull: "#5a3a1a", stripe: "#8b1e1e", trim: "#c4a574" } },
    { id: "ruffian-sea-dog-hull", name: "Ruffian Sea Dog Hull", set: "Ruffian Sea Dog", source: "Shipwright", colors: { hull: "#3d2412", stripe: "#6b1515", trim: "#a67c52" } },
    { id: "bilge-rat-hull", name: "Bilge Rat Hull", set: "Bilge Rat", source: "Shipwright", colors: { hull: "#6a5a32", stripe: "#4a3d22", trim: "#9a8a55" } },
    { id: "legendary-hull", name: "Legendary Hull", set: "Athena's Fortune", source: "Pirate Legend", colors: { hull: "#1a1430", stripe: "#c9a227", trim: "#7ec8e3" } },
    { id: "ghost-hull", name: "Ghost Hull", set: "Ghost", source: "Athena's Fortune", colors: { hull: "#2a3d3a", stripe: "#7dffc2", trim: "#c8fff0" } },
    { id: "reaper-hull", name: "Reaper's Bones Hull", set: "Reaper's Bones", source: "Reaper's Bones", colors: { hull: "#2b0a0a", stripe: "#c41e1e", trim: "#8a0f0f" } },
    { id: "gold-hoarders-hull", name: "Gold Hoarders Hull", set: "Gold Hoarders", source: "Gold Hoarders", colors: { hull: "#5a3d12", stripe: "#e6c35c", trim: "#fff0b0" } },
    { id: "order-of-souls-hull", name: "Order of Souls Hull", set: "Order of Souls", source: "Order of Souls", colors: { hull: "#3a1a4a", stripe: "#c96ad4", trim: "#e8b0f0" } },
    { id: "merchant-hull", name: "Merchant Alliance Hull", set: "Merchant Alliance", source: "Merchant Alliance", colors: { hull: "#1a3d3a", stripe: "#3cb89a", trim: "#b8e8d8" } },
    { id: "ashen-dragon-hull", name: "Ashen Dragon Hull", set: "Ashen Dragon", source: "Commendation", colors: { hull: "#3a1208", stripe: "#e85a12", trim: "#ffb347" } },
    { id: "kraken-hull", name: "Kraken Hull", set: "Kraken", source: "Shipwright", colors: { hull: "#1a2438", stripe: "#5a2a6a", trim: "#9b6bb8" } },
    { id: "inky-kraken-hull", name: "Inky Kraken Hull", set: "Inky Kraken", source: "Shipwright", colors: { hull: "#0d1220", stripe: "#2a1848", trim: "#6a4a9a" } },
    { id: "wild-rose-hull", name: "Wild Rose Hull", set: "Wild Rose", source: "Doubloons", colors: { hull: "#4a2030", stripe: "#e8a0b8", trim: "#f8d0dc" } },
    { id: "bone-crusher-hull", name: "Bone Crusher Hull", set: "Bone Crusher", source: "Commendation", colors: { hull: "#cfc6b0", stripe: "#8a7a60", trim: "#efe8d4" } },
    { id: "bear-bird-hull", name: "Bear & Bird Hull", set: "Bear & Bird", source: "Pirate Emporium", colors: { hull: "#2a4a38", stripe: "#e8c547", trim: "#7ec8a0" } },
    { id: "golden-nile-hull", name: "Golden Nile Hull", set: "Golden Nile", source: "Pirate Emporium", colors: { hull: "#1a4a32", stripe: "#d4af37", trim: "#6ad4a0" } },
    { id: "royal-revenge-hull", name: "Royal Revenge Hull", set: "Royal Revenge", source: "Pirate Emporium", colors: { hull: "#3a0e0e", stripe: "#c9a227", trim: "#8b1a1a" } },
    { id: "night-wulf-hull", name: "Night Wulf Hull", set: "Night Wulf", source: "Pirate Emporium", colors: { hull: "#12141c", stripe: "#6a2a8a", trim: "#c080ff" } },
    { id: "obsidian-hull", name: "Obsidian Hull", set: "Obsidian", source: "Twitch / Promo", colors: { hull: "#0a0a0c", stripe: "#3a3a42", trim: "#8a8a96" } },
    { id: "parrot-hull", name: "Parrot Hull", set: "Parrot", source: "Pirate Emporium", colors: { hull: "#1a5a28", stripe: "#e84040", trim: "#f0c040" } },
    { id: "forsaken-ashes-hull", name: "Forsaken Ashes Hull", set: "Forsaken Ashes", source: "Commendation", colors: { hull: "#4a2a18", stripe: "#c04018", trim: "#e8a060" } },
    { id: "wailing-barnacle-hull", name: "Wailing Barnacle Hull", set: "Wailing Barnacle", source: "Time-limited", colors: { hull: "#3a5a4a", stripe: "#6a8a6a", trim: "#b8d4b0" } },
    { id: "dark-adventurers-hull", name: "Dark Adventurers Hull", set: "Dark Adventurers", source: "Pirate Legend Emporium", colors: { hull: "#0c0c10", stripe: "#4a1010", trim: "#8a2020" } }
  ],

  sails: [
    { id: "sailor-sails", name: "White Sailor Sails", set: "Sailor", source: "Default", colors: { sail: "#f4efe4", mark: "#c9b896", accent: "#8a7048" } },
    { id: "black-sailor-sails", name: "Black Sailor Sails", set: "Sailor", source: "Shipwright", colors: { sail: "#1a1a1c", mark: "#3a3a40", accent: "#8a8a90" } },
    { id: "royal-blue-sails", name: "Royal Blue Sailor Sails", set: "Sailor", source: "Shipwright", colors: { sail: "#1e3a6a", mark: "#c9a227", accent: "#7aa0d4" } },
    { id: "admiral-sails", name: "Admiral Sails", set: "Admiral", source: "Shipwright", colors: { sail: "#1a3058", mark: "#d4af37", accent: "#e8d48b" } },
    { id: "sovereign-sails", name: "Sovereign Sails", set: "Sovereign", source: "Shipwright", colors: { sail: "#5c1848", mark: "#e8c547", accent: "#f0a0c8" } },
    { id: "sea-dog-sails", name: "Sea Dog Sails", set: "Sea Dog", source: "Shipwright", colors: { sail: "#6b2a14", mark: "#c4a574", accent: "#3d1a0c" } },
    { id: "legendary-sails", name: "Legendary Sails", set: "Athena's Fortune", source: "Pirate Legend", colors: { sail: "#16102c", mark: "#d4af37", accent: "#7ec8e3" } },
    { id: "ghost-sails", name: "Ghost Sails", set: "Ghost", source: "Athena's Fortune", colors: { sail: "#c8fff0", mark: "#3a6a5a", accent: "#7dffc2" } },
    { id: "reaper-sails", name: "Reaper's Bones Sails", set: "Reaper's Bones", source: "Reaper's Bones", colors: { sail: "#2a0808", mark: "#e02020", accent: "#8a1010" } },
    { id: "gold-hoarders-sails", name: "Gold Hoarders Sails", set: "Gold Hoarders", source: "Gold Hoarders", colors: { sail: "#6a4a18", mark: "#f0d060", accent: "#fff8d0" } },
    { id: "ashen-dragon-sails", name: "Ashen Dragon Sails", set: "Ashen Dragon", source: "Commendation", colors: { sail: "#2a1008", mark: "#ff6a20", accent: "#ffc070" } },
    { id: "kraken-sails", name: "Kraken Sails", set: "Kraken", source: "Shipwright", colors: { sail: "#1a2040", mark: "#7a3a9a", accent: "#c090e0" } },
    { id: "wild-rose-sails", name: "Wild Rose Sails", set: "Wild Rose", source: "Doubloons", colors: { sail: "#f0d0dc", mark: "#a03050", accent: "#e8a0b8" } },
    { id: "bear-bird-sails", name: "Bear & Bird Sails", set: "Bear & Bird", source: "Pirate Emporium", colors: { sail: "#e8d48b", mark: "#2a4a38", accent: "#c04030" } },
    { id: "golden-nile-sails", name: "Golden Nile Sails", set: "Golden Nile", source: "Pirate Emporium", colors: { sail: "#e8d060", mark: "#1a4a32", accent: "#2a8a58" } },
    { id: "royal-revenge-sails", name: "Royal Revenge Sails", set: "Royal Revenge", source: "Pirate Emporium", colors: { sail: "#4a1010", mark: "#d4af37", accent: "#f0e0a0" } },
    { id: "night-wulf-sails", name: "Night Wulf Sails", set: "Night Wulf", source: "Pirate Emporium", colors: { sail: "#16101c", mark: "#c080ff", accent: "#6a2a8a" } },
    { id: "parrot-sails", name: "Parrot Sails", set: "Parrot", source: "Pirate Emporium", colors: { sail: "#2a8a38", mark: "#e84040", accent: "#f0c040" } },
    { id: "obsidian-sails", name: "Obsidian Sails", set: "Obsidian", source: "Twitch / Promo", colors: { sail: "#101014", mark: "#5a5a66", accent: "#c0c0c8" } },
    { id: "bone-crusher-sails", name: "Bone Crusher Sails", set: "Bone Crusher", source: "Commendation", colors: { sail: "#efe8d4", mark: "#6a5a40", accent: "#cfc6b0" } },
    { id: "dark-adventurers-sails", name: "Dark Adventurers Sails", set: "Dark Adventurers", source: "Pirate Legend Emporium", colors: { sail: "#0c0c10", mark: "#8a2020", accent: "#4a1010" } },
    { id: "collectors-legendary-sails", name: "Collector's Legendary Sails", set: "Athena's Fortune", source: "Pirate Emporium", colors: { sail: "#0e0a20", mark: "#7ec8e3", accent: "#d4af37" } }
  ],

  figureheads: [
    { id: "sailor-fh", name: "Sailor Figurehead", set: "Sailor", source: "Default", colors: { wood: "#8a6038", accent: "#c9a46a", glow: "transparent" } },
    { id: "admiral-fh", name: "Admiral Figurehead", set: "Admiral", source: "Shipwright", colors: { wood: "#c9a227", accent: "#1e3a5f", glow: "transparent" } },
    { id: "sovereign-fh", name: "Sovereign Figurehead", set: "Sovereign", source: "Shipwright", colors: { wood: "#d4af37", accent: "#5c1a4a", glow: "transparent" } },
    { id: "sea-dog-fh", name: "Sea Dog Figurehead", set: "Sea Dog", source: "Shipwright", colors: { wood: "#6b2a14", accent: "#c4a574", glow: "transparent" } },
    { id: "legendary-fh", name: "Legendary Figurehead", set: "Athena's Fortune", source: "Pirate Legend", colors: { wood: "#d4af37", accent: "#7ec8e3", glow: "#7ec8e3" } },
    { id: "ghost-fh", name: "Ghost Figurehead", set: "Ghost", source: "Athena's Fortune", colors: { wood: "#7dffc2", accent: "#c8fff0", glow: "#7dffc2" } },
    { id: "reaper-fh", name: "Reaper's Bones Figurehead", set: "Reaper's Bones", source: "Reaper's Bones", colors: { wood: "#8a1010", accent: "#e02020", glow: "#c41e1e" } },
    { id: "ashen-dragon-fh", name: "Ashen Dragon Figurehead", set: "Ashen Dragon", source: "Commendation", colors: { wood: "#e85a12", accent: "#ffb347", glow: "#ff6a20" } },
    { id: "kraken-fh", name: "Kraken Figurehead", set: "Kraken", source: "Shipwright", colors: { wood: "#5a2a6a", accent: "#9b6bb8", glow: "#7a3a9a" } },
    { id: "wild-rose-fh", name: "Wild Rose Figurehead", set: "Wild Rose", source: "Doubloons", colors: { wood: "#e8a0b8", accent: "#4a2030", glow: "transparent" } },
    { id: "bear-bird-fh", name: "Bear & Bird Figurehead", set: "Bear & Bird", source: "Pirate Emporium", colors: { wood: "#6a4a28", accent: "#e8c547", glow: "transparent" } },
    { id: "golden-nile-fh", name: "Golden Nile Figurehead", set: "Golden Nile", source: "Pirate Emporium", colors: { wood: "#d4af37", accent: "#1a4a32", glow: "#e8d060" } },
    { id: "royal-revenge-fh", name: "Royal Revenge Figurehead", set: "Royal Revenge", source: "Pirate Emporium", colors: { wood: "#c9a227", accent: "#3a0e0e", glow: "#e02020" } },
    { id: "night-wulf-fh", name: "Night Wulf Figurehead", set: "Night Wulf", source: "Pirate Emporium", colors: { wood: "#6a2a8a", accent: "#c080ff", glow: "#c080ff" } },
    { id: "parrot-fh", name: "Parrot Figurehead", set: "Parrot", source: "Pirate Emporium", colors: { wood: "#2a8a38", accent: "#e84040", glow: "transparent" } },
    { id: "bone-crusher-fh", name: "Bone Crusher Figurehead", set: "Bone Crusher", source: "Commendation", colors: { wood: "#efe8d4", accent: "#6a5a40", glow: "transparent" } },
    { id: "obsidian-fh", name: "Obsidian Figurehead", set: "Obsidian", source: "Twitch / Promo", colors: { wood: "#2a2a32", accent: "#8a8a96", glow: "#5a5a66" } },
    { id: "dark-adventurers-fh", name: "Dark Adventurers Figurehead", set: "Dark Adventurers", source: "Pirate Legend Emporium", colors: { wood: "#2a0808", accent: "#8a2020", glow: "#4a1010" } }
  ],

  cannons: [
    { id: "sailor-cannons", name: "Sailor Cannons", set: "Sailor", source: "Default", colors: { metal: "#4a4a4e", accent: "#8a6038" } },
    { id: "admiral-cannons", name: "Admiral Cannons", set: "Admiral", source: "Shipwright", colors: { metal: "#2a3a50", accent: "#d4af37" } },
    { id: "sovereign-cannons", name: "Sovereign Cannons", set: "Sovereign", source: "Shipwright", colors: { metal: "#4a1840", accent: "#d4af37" } },
    { id: "sea-dog-cannons", name: "Sea Dog Cannons", set: "Sea Dog", source: "Shipwright", colors: { metal: "#4a3020", accent: "#8b1e1e" } },
    { id: "legendary-cannons", name: "Legendary Cannons", set: "Athena's Fortune", source: "Pirate Legend", colors: { metal: "#2a2040", accent: "#d4af37" } },
    { id: "ghost-cannons", name: "Ghost Cannons", set: "Ghost", source: "Athena's Fortune", colors: { metal: "#3a5a52", accent: "#7dffc2" } },
    { id: "reaper-cannons", name: "Reaper's Bones Cannons", set: "Reaper's Bones", source: "Reaper's Bones", colors: { metal: "#2a0a0a", accent: "#c41e1e" } },
    { id: "ashen-dragon-cannons", name: "Ashen Dragon Cannons", set: "Ashen Dragon", source: "Commendation", colors: { metal: "#3a1a10", accent: "#e85a12" } },
    { id: "kraken-cannons", name: "Kraken Cannons", set: "Kraken", source: "Shipwright", colors: { metal: "#2a2040", accent: "#7a3a9a" } },
    { id: "bear-bird-cannons", name: "Bear & Bird Cannons", set: "Bear & Bird", source: "Pirate Emporium", colors: { metal: "#3a4a38", accent: "#e8c547" } },
    { id: "golden-nile-cannons", name: "Golden Nile Cannons", set: "Golden Nile", source: "Pirate Emporium", colors: { metal: "#2a4a32", accent: "#d4af37" } },
    { id: "royal-revenge-cannons", name: "Royal Revenge Cannons", set: "Royal Revenge", source: "Pirate Emporium", colors: { metal: "#3a1010", accent: "#c9a227" } },
    { id: "night-wulf-cannons", name: "Night Wulf Cannons", set: "Night Wulf", source: "Pirate Emporium", colors: { metal: "#1a1420", accent: "#c080ff" } },
    { id: "obsidian-cannons", name: "Obsidian Cannons", set: "Obsidian", source: "Twitch / Promo", colors: { metal: "#1a1a1e", accent: "#8a8a96" } },
    { id: "dark-adventurers-cannons", name: "Dark Adventurers Cannons", set: "Dark Adventurers", source: "Pirate Legend Emporium", colors: { metal: "#101014", accent: "#8a2020" } }
  ],

  capstans: [
    { id: "sailor-capstan", name: "Sailor Capstan", set: "Sailor", source: "Default", colors: { wood: "#8a6038", metal: "#4a4a4e" } },
    { id: "admiral-capstan", name: "Admiral Capstan", set: "Admiral", source: "Shipwright", colors: { wood: "#1e3a5f", metal: "#d4af37" } },
    { id: "sovereign-capstan", name: "Sovereign Capstan", set: "Sovereign", source: "Shipwright", colors: { wood: "#5c1a4a", metal: "#d4af37" } },
    { id: "sea-dog-capstan", name: "Sea Dog Capstan", set: "Sea Dog", source: "Shipwright", colors: { wood: "#5a3a1a", metal: "#8b1e1e" } },
    { id: "legendary-capstan", name: "Legendary Capstan", set: "Athena's Fortune", source: "Pirate Legend", colors: { wood: "#1a1430", metal: "#d4af37" } },
    { id: "ghost-capstan", name: "Ghost Capstan", set: "Ghost", source: "Athena's Fortune", colors: { wood: "#2a3d3a", metal: "#7dffc2" } },
    { id: "reaper-capstan", name: "Reaper's Bones Capstan", set: "Reaper's Bones", source: "Reaper's Bones", colors: { wood: "#2b0a0a", metal: "#c41e1e" } },
    { id: "ashen-dragon-capstan", name: "Ashen Dragon Capstan", set: "Ashen Dragon", source: "Commendation", colors: { wood: "#3a1208", metal: "#e85a12" } },
    { id: "bear-bird-capstan", name: "Bear & Bird Capstan", set: "Bear & Bird", source: "Pirate Emporium", colors: { wood: "#2a4a38", metal: "#e8c547" } },
    { id: "golden-nile-capstan", name: "Golden Nile Capstan", set: "Golden Nile", source: "Pirate Emporium", colors: { wood: "#1a4a32", metal: "#d4af37" } },
    { id: "royal-revenge-capstan", name: "Royal Revenge Capstan", set: "Royal Revenge", source: "Pirate Emporium", colors: { wood: "#3a0e0e", metal: "#c9a227" } },
    { id: "night-wulf-capstan", name: "Night Wulf Capstan", set: "Night Wulf", source: "Pirate Emporium", colors: { wood: "#12141c", metal: "#c080ff" } },
    { id: "obsidian-capstan", name: "Obsidian Capstan", set: "Obsidian", source: "Twitch / Promo", colors: { wood: "#0a0a0c", metal: "#8a8a96" } }
  ],

  wheels: [
    { id: "sailor-wheel", name: "Sailor Wheel", set: "Sailor", source: "Default", colors: { wood: "#8a6038", metal: "#4a4a4e" } },
    { id: "admiral-wheel", name: "Admiral Wheel", set: "Admiral", source: "Shipwright", colors: { wood: "#1e3a5f", metal: "#d4af37" } },
    { id: "sovereign-wheel", name: "Sovereign Wheel", set: "Sovereign", source: "Shipwright", colors: { wood: "#5c1a4a", metal: "#d4af37" } },
    { id: "sea-dog-wheel", name: "Sea Dog Wheel", set: "Sea Dog", source: "Shipwright", colors: { wood: "#5a3a1a", metal: "#8b1e1e" } },
    { id: "legendary-wheel", name: "Legendary Wheel", set: "Athena's Fortune", source: "Pirate Legend", colors: { wood: "#1a1430", metal: "#d4af37" } },
    { id: "ghost-wheel", name: "Ghost Wheel", set: "Ghost", source: "Athena's Fortune", colors: { wood: "#2a3d3a", metal: "#7dffc2" } },
    { id: "reaper-wheel", name: "Reaper's Bones Wheel", set: "Reaper's Bones", source: "Reaper's Bones", colors: { wood: "#2b0a0a", metal: "#c41e1e" } },
    { id: "ashen-dragon-wheel", name: "Ashen Dragon Wheel", set: "Ashen Dragon", source: "Commendation", colors: { wood: "#3a1208", metal: "#e85a12" } },
    { id: "bear-bird-wheel", name: "Bear & Bird Wheel", set: "Bear & Bird", source: "Pirate Emporium", colors: { wood: "#2a4a38", metal: "#e8c547" } },
    { id: "golden-nile-wheel", name: "Golden Nile Wheel", set: "Golden Nile", source: "Pirate Emporium", colors: { wood: "#1a4a32", metal: "#d4af37" } },
    { id: "royal-revenge-wheel", name: "Royal Revenge Wheel", set: "Royal Revenge", source: "Pirate Emporium", colors: { wood: "#3a0e0e", metal: "#c9a227" } },
    { id: "night-wulf-wheel", name: "Night Wulf Wheel", set: "Night Wulf", source: "Pirate Emporium", colors: { wood: "#12141c", metal: "#c080ff" } },
    { id: "obsidian-wheel", name: "Obsidian Wheel", set: "Obsidian", source: "Twitch / Promo", colors: { wood: "#0a0a0c", metal: "#8a8a96" } }
  ],

  flags: [
    { id: "white-flag", name: "White Flag", set: "Sailor", source: "Default", colors: { cloth: "#f4efe4", mark: "#8a7048" } },
    { id: "black-flag", name: "Black Flag", set: "Sailor", source: "Shipwright", colors: { cloth: "#1a1a1c", mark: "#8a8a90" } },
    { id: "jolly-roger", name: "Jolly Roger Flag", set: "Sailor", source: "Shipwright", colors: { cloth: "#111114", mark: "#f4efe4" } },
    { id: "admiral-flag", name: "Admiral Flag", set: "Admiral", source: "Shipwright", colors: { cloth: "#1e3a5f", mark: "#d4af37" } },
    { id: "sovereign-flag", name: "Sovereign Flag", set: "Sovereign", source: "Shipwright", colors: { cloth: "#5c1a4a", mark: "#d4af37" } },
    { id: "legendary-flag", name: "Legendary Flag", set: "Athena's Fortune", source: "Pirate Legend", colors: { cloth: "#1a1430", mark: "#d4af37" } },
    { id: "reaper-flag", name: "Reaper's Bones Flag", set: "Reaper's Bones", source: "Reaper's Bones", colors: { cloth: "#2b0a0a", mark: "#c41e1e" } },
    { id: "alliance-flag", name: "Alliance Pennant", set: "Sailor", source: "Default", colors: { cloth: "#3cb89a", mark: "#f4efe4" } },
    { id: "ashen-dragon-flag", name: "Ashen Dragon Flag", set: "Ashen Dragon", source: "Commendation", colors: { cloth: "#3a1208", mark: "#e85a12" } },
    { id: "wild-rose-flag", name: "Wild Rose Flag", set: "Wild Rose", source: "Doubloons", colors: { cloth: "#4a2030", mark: "#e8a0b8" } },
    { id: "bear-bird-flag", name: "Bear & Bird Flag", set: "Bear & Bird", source: "Pirate Emporium", colors: { cloth: "#2a4a38", mark: "#e8c547" } },
    { id: "night-wulf-flag", name: "Night Wulf Flag", set: "Night Wulf", source: "Pirate Emporium", colors: { cloth: "#12141c", mark: "#c080ff" } }
  ],

  flares: [
    { id: "default-flare", name: "Sailor Cannon Flare", set: "Sailor", source: "Default", colors: { flare: "#f4c878" } },
    { id: "admiral-flare", name: "Admiral Cannon Flare", set: "Admiral", source: "Shipwright", colors: { flare: "#7aa0d4" } },
    { id: "legendary-flare", name: "Legendary Cannon Flare", set: "Athena's Fortune", source: "Pirate Legend", colors: { flare: "#7ec8e3" } },
    { id: "ghost-flare", name: "Ghost Cannon Flare", set: "Ghost", source: "Athena's Fortune", colors: { flare: "#7dffc2" } },
    { id: "reaper-flare", name: "Reaper's Bones Cannon Flare", set: "Reaper's Bones", source: "Reaper's Bones", colors: { flare: "#e02020" } },
    { id: "ashen-dragon-flare", name: "Ashen Dragon Cannon Flare", set: "Ashen Dragon", source: "Commendation", colors: { flare: "#ff6a20" } },
    { id: "kraken-flare", name: "Kraken Cannon Flare", set: "Kraken", source: "Shipwright", colors: { flare: "#9b6bb8" } },
    { id: "wild-rose-flare", name: "Wild Rose Cannon Flare", set: "Wild Rose", source: "Doubloons", colors: { flare: "#e8a0b8" } },
    { id: "bear-bird-flare", name: "Bear & Bird Cannon Flare", set: "Bear & Bird", source: "Pirate Emporium", colors: { flare: "#e8c547" } },
    { id: "night-wulf-flare", name: "Night Wulf Cannon Flare", set: "Night Wulf", source: "Pirate Emporium", colors: { flare: "#c080ff" } },
    { id: "obsidian-flare", name: "Obsidian Cannon Flare", set: "Obsidian", source: "Twitch / Promo", colors: { flare: "#8a8a96" } }
  ]
};

window.SOT_SHIPS = [
  { id: "sloop", name: "Sloop", crew: "1–2", masts: 1, cannons: 2 },
  { id: "brigantine", name: "Brigantine", crew: "2–3", masts: 2, cannons: 4 },
  { id: "galleon", name: "Galleon", crew: "3–4", masts: 3, cannons: 8 }
];
