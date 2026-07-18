const CATEGORY_LABELS = {
  anime: "Anime",
  app: "App",
  comida: "Comida",
  compras: "Compras",
  deportes: "Deportes",
  libro: "Libro",
  musica: "Música",
  pelicula: "Película",
  "real-madrid": "Real Madrid",
  serie: "Serie",
  "trash-tv": "Trash TV",
  videojuego: "Videojuego"
};

const CATEGORY_ICONS = {
  anime: "fa-solid fa-dragon",
  app: "fa-solid fa-mobile-screen-button",
  comida: "fa-solid fa-utensils",
  compras: "fa-solid fa-bag-shopping",
  deportes: "fa-solid fa-trophy",
  libro: "fa-solid fa-book",
  musica: "fa-solid fa-music",
  pelicula: "fa-solid fa-clapperboard",
  "real-madrid": "fa-solid fa-shield-halved",
  serie: "fa-solid fa-tv",
  "trash-tv": "fa-solid fa-trash",
  videojuego: "fa-solid fa-gamepad"
};

const DATE_LABEL_BY_CATEGORY = {
  videojuego: "Jugado el",
  serie: "Vista el",
  pelicula: "Vista el",
  anime: "Visto el",
  "trash-tv": "Visto el",
  deportes: "Partido del",
  "real-madrid": "Partido del",
  musica: "Escuchado el",
  app: "Usado el",
  comida: "Probado el",
  compras: "Adquirido el",
  libro: "Leído el"
};

const PLATFORM_GROUPS = {
  nintendo: {
    label: "Nintendo",
    color: "#e60012",
    text: "#ffffff",
    items: {
      nes: "NES",
      snes: "SNES",
      n64: "Nintendo 64",
      gamecube: "GameCube",
      wii: "Wii",
      wiiu: "Wii U",
      switch: "Switch",
      switch2: "Switch 2",
      gameboy: "Game Boy",
      gba: "Game Boy Advance",
      nds: "Nintendo DS",
      n3ds: "Nintendo 3DS"
    }
  },
  playstation: {
    label: "PlayStation",
    color: "#0070d1",
    text: "#ffffff",
    items: {
      ps1: "PS1",
      ps2: "PS2",
      ps3: "PS3",
      ps4: "PS4",
      ps5: "PS5",
      psp: "PSP",
      psvita: "PS Vita"
    }
  },
  xbox: {
    label: "Xbox",
    color: "#107c10",
    text: "#ffffff",
    items: {
      xbox: "Xbox",
      xbox360: "Xbox 360",
      xboxone: "Xbox One",
      xboxseries: "Xbox Series X|S"
    }
  },
  pc: {
    label: "PC",
    color: "#e6c229",
    text: "#1f1f1e",
    items: {
      pc: "PC"
    }
  },
  mobile: {
    label: "Móvil",
    color: "#00b8a9",
    text: "#ffffff",
    items: {
      movil: "Móvil"
    }
  }
};

const GENRE_OPTIONS = {
  libro: ["Ficción", "No ficción", "Fantasía", "Ciencia ficción", "Misterio", "Terror", "Romance", "Biografía", "Autoayuda", "Historia", "Ensayo", "Poesía", "Clásico"],
  pelicula: ["Acción", "Aventura", "Comedia", "Drama", "Terror", "Ciencia ficción", "Fantasía", "Romance", "Suspenso", "Animación", "Documental", "Crimen", "Bélica", "Musical"],
  serie: ["Acción", "Aventura", "Comedia", "Drama", "Terror", "Ciencia ficción", "Fantasía", "Romance", "Suspenso", "Documental", "Crimen", "Sitcom"],
  anime: ["Shonen", "Shojo", "Seinen", "Josei", "Isekai", "Mecha", "Slice of Life", "Deporte", "Romance", "Comedia", "Terror", "Psicológico", "Fantasía", "Acción", "Drama", "Sobrenatural"],
  musica: ["Pop", "Rock", "Hip-Hop", "R&B", "Reggaetón", "Electrónica", "Jazz", "Clásica", "Indie", "Metal", "Punk", "Folk", "Country", "K-Pop", "Latina", "Soul"],
  "real-madrid": ["Liga", "Copa del Rey", "Champions League", "Fichaje"],
  deportes: ["Fútbol", "Básquetbol", "Béisbol", "Tenis", "Fórmula 1", "Boxeo", "MMA", "Vóleibol", "Golf", "Ciclismo", "Natación", "Atletismo", "Rugby", "Hockey", "Esports"]
};

const MUSIC_TYPE_LABELS = {
  album: "Álbum",
  cancion: "Canción"
};

// Orden cronológico aproximado de lanzamiento, de más antigua a más nueva.
// "pc" y "movil" se excluyen de aquí porque siempre van al final (ver
// platformSortIndex).
const PLATFORM_ORDER = [
  "nes", "gameboy", "snes", "ps1", "n64", "ps2", "gba", "gamecube",
  "xbox", "nds", "psp", "xbox360", "ps3", "wii", "n3ds", "psvita",
  "wiiu", "ps4", "xboxone", "switch", "xboxseries", "ps5", "switch2"
];

function platformSortIndex(key) {
  if (key === "pc") return PLATFORM_ORDER.length;
  if (key === "movil") return PLATFORM_ORDER.length + 1;
  const idx = PLATFORM_ORDER.indexOf(key);
  return idx === -1 ? PLATFORM_ORDER.length - 1 : idx;
}

const PLATFORM_LABELS = {};
const PLATFORM_COLORS = {};
const PLATFORM_TEXT_COLORS = {};
Object.values(PLATFORM_GROUPS).forEach(group => {
  Object.entries(group.items).forEach(([key, label]) => {
    PLATFORM_LABELS[key] = label;
    PLATFORM_COLORS[key] = group.color;
    PLATFORM_TEXT_COLORS[key] = group.text;
  });
});

function foldAccents(text) {
  const accented = "áéíóúüñÁÉÍÓÚÜÑ";
  const plain = "aeiouunAEIOUUN";
  let result = text;
  for (let i = 0; i < accented.length; i++) {
    result = result.split(accented[i]).join(plain[i].toLowerCase());
  }
  return result;
}

function starsMarkup(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<i class="fa-solid fa-star filled"></i>';
    else if (i === full && half) html += '<i class="fa-solid fa-star-half-stroke filled"></i>';
    else html += '<i class="fa-regular fa-star empty"></i>';
  }
  return html;
}
