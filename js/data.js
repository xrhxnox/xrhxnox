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
  },
  {
    id: 2,
    titulo: "Pokémon TCG Pocket",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-tcg-pocket-2.jpg",
    plataformas: ["movil"],
    resena: "Lo sabía, terminé volviéndome adicto a las cartitas. Nunca quise coleccionar cartas físicas de Pokémon porque sabía que iba a entrar en un círculo vicioso; por suerte existe esto. Tengo el Pase Prémium y abrir 4 sobres al día prácticamente es obligatorio si quieres completar las expansiones. El combate es básico, pero entretenido. Llegué a Master una vez y con eso tuve, prefiero coleccionar. PD. Intercambiemos cartas de Pikachu.",
    puntuacion: 5,
    fecha: "2024-10-30"
  },
  {
    id: 3,
    titulo: "League of Legends",
    categoria: "videojuego",
    imagen: "assets/img/league-of-legends-3.webp",
    plataformas: ["pc"],
    resena: "El peor juego del mundo, no lo descarguen si no quieren arruinar su vida. Duré casi 8 años jugándolo prácticamente a diario (con amigos, porque Solo Q es un infierno) y apenas el año pasado lo dejé. De vez en cuando todavía me echo una que otra partida, pero ya muy casual. Lo más alto que llegué fue Platino. Top laner de corazón. Main Gnar, Jayce, Kennen y Rumble. PD. No me me pregunten cuanto gasté en skins.",
    puntuacion: 0.5,
    fecha: "2016-06-01"
  },
  {
    id: 4,
    titulo: "Animal Crossing: New Horizons",
    categoria: "videojuego",
    imagen: "assets/img/animal-crossing-new-horizons-4.png",
    plataformas: ["switch","switch2"],
    resena: "Es el mejor juego de la historia, punto. Ya en serio, esta cosa salió al inicio de la pandemia y despues de haberle metido alrededor de 1000 horas, todavía no me lo he \"terminado\". Es absurdamente adictivo. La verdad ya no juego tanto como antes, pero de vez en cuando me dan semanas de entrar diario y hacer actividades en la isla. PD: La actualización para Switch 2 añadió resolución 4K. No es un cambio enorme, pero se agradece.",
    puntuacion: 5,
    fecha: "2020-04-20"
  },
  {
    id: 5,
    titulo: "Adidas adiFOM Climacool",
    categoria: "compras",
    imagen: "assets/img/adidas-adifom-climacool-5.png",
    resena: "Estas bellezas abstractas se convirtieron en mis tenis de diario. No se dejen engañar por el diseño, porque son de los tenis más cómodos que he usado. El único detalle es que, por el material y al ser blancos, se ensucian demasiado rapido, aunque la verdad también son fáciles de limpiar. En serio necesito otro par, aunque no se si todavía los venden lol.",
    puntuacion: 5,
    fecha: "2024-11-28"
  }
];
