// ============================================================
// Aquí agregas cada videojuego, película, serie o libro que
// termines. Este archivo se actualiza automáticamente desde
// admin.html — también puedes editarlo a mano si prefieres.
//
// categoria: "videojuego" | "app" | "libro" | "pelicula" | "serie" |
//            "trash-tv" | "anime" | "comida" | "otro"
// plataformas: solo para videojuego, lista de claves (ver js/utils.js)
// generos: solo para libro/pelicula/serie/anime, lista de strings
// puntuacion: número del 1 al 5 (acepta medios puntos, ej. 3.5)
// imagen: ruta a la portada/carátula (guárdala en assets/img/)
// fecha: cuándo lo terminaste, formato AAAA-MM-DD
// ============================================================

const entries = [
  {
    id: 1,
    titulo: "Pokémon Champions",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-champions-1.png",
    plataformas: ["switch","switch2","movil"],
    resena: "La mejor forma de entrar al competitivo (sin contar Showdown lol). El gameplay es buenísimo porque al final sigue siendo el sistema de combate clásico de Pokémon, que para mí está casi perfecto. Eso sí, en lo técnico y gráfico queda debiendo bastante. Si siguen actualizando el meta, creo que me mantendrá entretenido. Intentaré llegar a Master cada season... o hasta que me aburra. PD. Blastoise siempre en mi equipo.",
    puntuacion: 3.5,
    fecha: "2026-04-08"
  }
];
