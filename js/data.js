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
    imagen: "assets/img/pokemon-champions-1.jpg",
    plataformas: ["switch","switch2","movil"],
    resena: "La mejor forma de entrar al competitivo (sin contar Showdown lol). El gameplay es buenísimo porque al final sigue siendo el sistema de combate clásico de Pokémon, que para mí está casi perfecto. Eso sí, en lo técnico y gráfico queda debiendo bastante; ni siquiera tiene una versión nativa para Switch 2. Si siguen actualizando el meta, creo que me mantendrá entretenido. Intentaré llegar a Master cada season. PD: Blastoise siempre en mi equipo.",
    puntuacion: 7,
    fecha: "2026-04-08"
  },
  {
    id: 2,
    titulo: "Pokémon TCG Pocket",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-tcg-pocket-2.jpg",
    plataformas: ["movil"],
    resena: "Lo sabía, terminé volviéndome adicto a las cartitas. Nunca quise coleccionar cartas físicas de Pokémon porque sabía que iba a entrar en un círculo vicioso; por suerte existe esto. Tengo el Pase Prémium y abrir 4 sobres al día prácticamente es obligatorio si quieres completar las expansiones. El combate es básico, pero entretenido. Llegué a Master una vez y con eso tuve, prefiero coleccionar. PD: Intercambiemos cartas de Pikachu.",
    puntuacion: 9,
    fecha: "2024-10-30"
  },
  {
    id: 3,
    titulo: "League of Legends",
    categoria: "videojuego",
    imagen: "assets/img/league-of-legends-3.jpg",
    plataformas: ["pc"],
    resena: "El peor juego del mundo, no lo descarguen si no quieren arruinar su vida. Duré casi 8 años jugándolo prácticamente a diario (con amigos, porque Solo Q es un infierno) y apenas el año pasado lo dejé. De vez en cuando todavía me echo una que otra partida, pero ya muy casual. Lo más alto que llegué fue Platino. Top laner de corazón. Main Gnar, Jayce, Kennen y Rumble. PD: No me me pregunten cuanto gasté en skins.",
    puntuacion: 0,
    fecha: "2016-06-01"
  },
  {
    id: 4,
    titulo: "Animal Crossing: New Horizons",
    categoria: "videojuego",
    imagen: "assets/img/animal-crossing-new-horizons-4.png",
    plataformas: ["switch","switch2"],
    resena: "Es el mejor juego de la puta historia, punto. Ya en serio, esta cosa salió a inicios de pandemia y despues de haberle metido alrededor de 1000 horas, todavía no me lo he \"terminado\". Es absurdamente adictivo. La verdad ya no juego tanto como antes, pero de vez en cuando me dan semanas de entrar diario y hacer actividades en la isla. PD: La actualización para Switch 2 añadió resolución 4K. No es un cambio enorme, pero se agradece.",
    puntuacion: 10,
    fecha: "2020-04-20"
  },
  {
    id: 5,
    titulo: "Adidas adiFOM Climacool",
    categoria: "escenciales",
    imagen: "assets/img/adidas-adifom-climacool-5.jpg",
    generos: ["Ropa"],
    resena: "Estas bellezas abstractas se convirtieron en mis tenis de diario. No se dejen engañar por el diseño, porque son de los tenis más cómodos que he usado. El único detalle es que, por el material y al ser blancos, se ensucian demasiado rapido, aunque la verdad también son fáciles de limpiar. En serio necesito otro par, aunque no se si todavía los venden lol.",
    puntuacion: 9.5,
    fecha: "2024-11-28"
  },
  {
    id: 6,
    titulo: "Adidas Originals SST Airliner",
    categoria: "escenciales",
    imagen: "assets/img/adidas-originals-sst-airliner-6.jpg",
    generos: ["Otros"],
    resena: "Esta mmm ¿bolsa? es demasiado util. Está hecha de un material rígido que protege muy bien todo lo que llevo dentro. La mayor parte del tiempo la uso sin la correa.\nNo es de gran capacidad, pero sin problema caben mis cosas del diario: celular, lentes, cartera, llaves e incluso un Beyblade. Por el material, más de una vez me han preguntado si traigo una Switch o un dron lol, pero no le saben a la moda.",
    puntuacion: 8,
    fecha: "2024-11-28"
  },
  {
    id: 7,
    titulo: "Star Fox",
    categoria: "videojuego",
    imagen: "assets/img/star-fox-7.jpg",
    plataformas: ["switch2"],
    resena: "Definitivamente es un juegazo. Y para los que dicen que es muy corto tengo algo que decirles: tienen razón lol. La campaña dura unas 2 horas, pero es un juego arcade y el chiste está en la rejugabilidad. Mejorar tu puntuación, conseguir todas las medallas, descubrir las rutas alternas, completar todos los desafíos y repetir todo en modo Experto alarga muchísimo la vida del juego. PD: Do a barrel roll!",
    puntuacion: 9,
    fecha: "2026-07-04"
  },
  {
    id: 8,
    titulo: "Beyblade X Reaper Rhino C 4-55D CX",
    categoria: "escenciales",
    imagen: "assets/img/reaper-rhino-c-4-55d-cx-8.jpg",
    generos: ["Otros"],
    resena: "Sí, es un Beyblade. Después de ver demasiados videos me convencí de comprar uno. Obviamente no soy muy fan de los colores y unque tengo entendido que no es de los mejores Beyblade que hay, elegí este simplemente porque el rinoceronte es mi animal favorito. Siempre lo traigo conmigo aunque no tengo a nadie con quién jugar lol. PD: Go Shoot! (Let it Rip!)",
    puntuacion: 7,
    fecha: "2026-03-19"
  },
  {
    id: 9,
    titulo: "The Drama",
    categoria: "pelicula",
    imagen: "assets/img/the-drama-9.jpg",
    generos: ["Drama"],
    resena: "Pues el titulo lo dice todo. No sé cómo opinar de ella sin hablar del plot twist, porque ocurre muy temprano en la película y prácticamente toda la trama gira alrededor de él. Solo dire que de verdad vale la pena verla sin saber absolutamente nada.",
    puntuacion: 8.5,
    fecha: "2026-07-16"
  },
  {
    id: 10,
    titulo: "Pikmin 4",
    categoria: "videojuego",
    imagen: "assets/img/pikmin-4-10.jpg",
    plataformas: ["switch"],
    resena: "Siempre quise probar un Pikmin, pero me daba flojera empezar. Al final Pikmin 4 me sorprendió. Le metí 40 horas para sacar el 100% (modo normal) y nunca se me hizo aburrido; a lo mucho, un poco lento por momentos. La exploración de las áreas, las cuevas, las misiones de noche, las batallas y el postgame hacen que haya mucho por hacer. Me pareció un gran juego para pasar el rato.",
    puntuacion: 8,
    fecha: "2026-07-13"
  },
  {
    id: 11,
    titulo: "Pokémon FireRed",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-firered-11.jpg",
    plataformas: ["switch","gba"],
    resena: "Nada que no se sepa, es un clásico. Aún conservo mi cartucho de Game Boy Advance, pero no dudé ni un segundo en descargar el port para Switch. Eso sí, esta versión no agrega absolutamente nada nuevo; de hecho, siento que hasta empeora en algunas cosas lol. Aun así, siempre es un gusto volver a Kanto con los primeros 151. PD: Los que no le saben eligen a Charmander, los que le saben a Bulbasaur y los que le sabemos demasiado a Squirtle.",
    puntuacion: 8.5,
    fecha: "2026-02-27"
  },
  {
    id: 12,
    titulo: "PowerA Wireless Controller for Nintendo Switch - Pikachu Ecstatic",
    categoria: "escenciales",
    imagen: "assets/img/powera-wireless-controller-for-nintendo-switch-pikachu-ecstatic-12.jpg",
    generos: ["Gadgets"],
    resena: "Lo compré porque a todos mis demás controles de Switch les dio drift lol. Llevo casi 3 meses usándolo y, hasta ahora, cero problemas. Es ergonómico, ligero y además tiene un diseño GOD. Mi único pero es que usa baterías; cuando lo compré pensé que era recargable. Por los $764 que me costó, espero que dure buen rato.",
    puntuacion: 7.5,
    fecha: "2026-04-15"
  },
  {
    id: 14,
    titulo: "GoPro Hero 13 Black",
    categoria: "escenciales",
    imagen: "assets/img/gopro-hero-13-black-14.jpg",
    generos: ["Gadgets"],
    resena: "La compré principalmente para grabar mis partidos de padel y algunos viajes, y la verdad ha cumplido de sobra. La calidad de imagen es muy buena y el tamaño hace que pueda llevarla a cualquier lado sin estorbar. Eso sí, la batería podría durar más si grabas en resoluciones altas y algunos accesorios oficiales están carísimos. Fuera de eso, me ha gustado mucho y siento que todavía no le saco todo el provecho. Necesito más pretextos para usarla.",
    puntuacion: 9,
    fecha: "2025-03-13"
  },
  {
    id: 15,
    titulo: "Metroid Dread",
    categoria: "videojuego",
    imagen: "assets/img/metroid-dread-15.jpg",
    plataformas: ["switch"],
    resena: "Top 5 de mis juegos favoritos de la consola, sin duda. Nunca había jugado un Metroid 2D completo y este me dejó con ganas de jugar toda la saga. De verdad es una pinche joya. El gameplay, la exploración, los jefes y la tensión que se siente cada vez que te encuentras con un E.M.M.I. hacen que sea una locura de juego. 100% recomendado alv.",
    puntuacion: 10,
    fecha: "2021-11-20"
  },
  {
    id: 16,
    titulo: "Black Owala 24oz FreeSip",
    categoria: "escenciales",
    imagen: "assets/img/black-owala-24oz-freesip-16.jpg",
    generos: ["Otros"],
    resena: "No pensé que un simple termo pudiera gustarme tanto lol. Se siente muy resistente, es práctico y el sistema para tomar agua con o sin popote es un game changer. Tenía dudas entre este y el de 32oz, pero ya teniéndolo en las manos creo que el tamaño es perfecto para llevarlo a todos lados sin que estorbe. Puede sonar obvio, pero no está de más mencionar que sí mantiene el agua fría durante bastante tiempo.",
    puntuacion: 9,
    fecha: "2026-01-10"
  },
  {
    id: 17,
    titulo: "Beats Solo Buds - Negro Mate",
    categoria: "escenciales",
    imagen: "assets/img/beats-solo-buds-negro-17.jpg",
    generos: ["Gadgets"],
    resena: "Los compré porque quería unos audífonos pequeños, cómodos y que sonaran bien, y cumplen muy bien en todo eso. Aunque el estuche no carga los audífonos, la batería dura unas 15 horas, así que realmente no me resulta un problema. Tampoco tienen cancelación de ruido, pero la verdad también me da un poco igual lol. Por el precio los recomiendo, aunque sé que hay opciones mejores por un poco más de dinero o incluso por un precio similar.",
    puntuacion: 7.5,
    fecha: "2025-06-01"
  },
  {
    id: 18,
    titulo: "Pokémon Violet",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-violet-18.jpg",
    plataformas: ["switch"],
    resena: "Soy consciente de que el mundo abierto es bastante plano y vacío, que técnicamente es un desastre y que gráficamente deja muchísimo que desear. Aun así, no voy a mentir: lo disfruté a pesar de todo lo anterior. En Switch 2 el rendimiento mejora bastante, aunque visualmente sigue viéndose feo. Con todos sus problemas, creo que el gameplay y la fórmula de Pokémon lograron mantenerme enganchado. Eso sí, no quita que sea un juego mediocre.",
    puntuacion: 6.5,
    fecha: "2022-11-20"
  },
  {
    id: 19,
    titulo: "Pokémon Legends: Z-A",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-legends-za-19.jpg",
    plataformas: ["switch","switch2"],
    resena: "No me voy a cansar de decir que es una oportunidad bastante desperdiciada limitar todo el juego a una ciudad tan vacía. El gameplay es bastante entretenido, aunque pierde bastante el lado estratégico y con el tiempo puede volverse repetitivo. La verdad me la pasé bien jugándolo, pero pues lo de siempre: Pokémon quedándose corto.",
    puntuacion: 8,
    fecha: "2025-10-20"
  },
  {
    id: 20,
    titulo: "Your Name (Kimi no Na wa)",
    categoria: "pelicula",
    imagen: "assets/img/your-name-kimi-no-na-wa-20.jpg",
    generos: ["Fantasía","Romance","Animación"],
    resena: "Obra maestra. La historia, la animación, el soundtrack, todo es excelente. No diré nada más. Solo véanla.",
    puntuacion: 10,
    fecha: "2017-08-05"
  },
  {
    id: 21,
    titulo: "Beats Pill - Negro Mate",
    categoria: "escenciales",
    imagen: "assets/img/beats-pill-negro-mate-21.jpg",
    generos: ["Gadgets"],
    resena: "Justo lo que buscaba. Para el tamaño que tiene, suena muy bien, la batería dura bastante y además es resistente al agua. Obviamente no reemplaza una bocina grande, pero para el día a día, viajes o reuniones pequeñas cumple muy bien. Por el precio en que la conseguí (poco menos de $2,000), creo que es una opción que vale mucho la pena.",
    puntuacion: 9,
    fecha: "2025-03-13"
  },
  {
    id: 23,
    titulo: "Nintendo Switch 2",
    categoria: "escenciales",
    imagen: "assets/img/nintendo-switch-2-23.jpg",
    generos: ["Gadgets"],
    resena: "La sucesora de, en mi opinión, la mejor consola de Nintendo. La mejora en hardware y software se nota muchísimo. Principalmente la uso en modo portátil; siendo sinceros, la batería podría durar un poco más, aunque nunca me ha representado un gran problema. No puedo esperar a ver todos los juegos que llegarán en los próximos años. Si Nintendo mantiene el nivel de sus first party, tiene todo para convertirse en la mejor consola de la historia.",
    puntuacion: 9.5,
    fecha: "2025-06-25"
  },
  {
    id: 24,
    titulo: "Think Tank Photo Shape Shifter",
    categoria: "escenciales",
    imagen: "assets/img/think-tank-photo-shape-shifter-24.jpg",
    generos: ["Otros"],
    resena: "Me la gané en un giveaway y terminó convirtiéndose en mi mochila de viajes. Aunque está pensada principalmente para cámaras, tiene muchísimo espacio, materiales de gran calidad y un montón de compartimientos que sirven para organizar de todo.",
    puntuacion: 9,
    fecha: "2020-12-10"
  },
  {
    id: 25,
    titulo: "The Legend of Zelda: Breath of the Wild",
    categoria: "videojuego",
    imagen: "assets/img/the-legend-of-zelda-breath-of-the-wild-25.jpg",
    plataformas: ["wiiu","switch","switch2"],
    resena: "Lo jugué en Wii U, lo jugué en Nintendo Switch y ahora en Switch 2, y este juego siempre logra sorprenderme. La libertad, la exploración y la forma en que el mundo te invita a descubrir cosas por tu cuenta hacen que cada partida sea diferente. La versión de Switch 2 añade mejoras gráficas y de rendimiento que hacen que la experiencia sea todavía mejor, pero de verdad, las 3 versiones del juego son perfectas. Sin duda, una obra maestra.",
    puntuacion: 10,
    fecha: "2025-08-01"
  },
  {
    id: 26,
    titulo: "Donkey Kong Bananza",
    categoria: "videojuego",
    imagen: "assets/img/donkey-kong-bananza-26.jpg",
    plataformas: ["switch2"],
    resena: "De los juegos más divertidos que he jugado en muchisimo tiempo. El gameplay es una pasada y la exploración hace que siempre quieras seguir avanzando para ver qué encuentras. Además, el soundtrack está buenísimo. Todo el rato estuve con una sensacion de nostalgia, era como volver a jugar por primera vez a los plataformas de mi infancia. GOTY OF THE YEAR DEL AÑO.",
    puntuacion: 10,
    fecha: "2025-07-25"
  },
  {
    id: 27,
    titulo: "Pokémon Sword",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-sword-27.jpg",
    plataformas: ["switch"],
    resena: "Me pareció un juego bastante mediocre, y creo que eso resume perfectamente mi opinión. Como el primer Pokémon principal en una consola de sobremesa, esperaba muchísimo más en gráficos, innovación y ambición. Aun así, el gameplay sigue siendo tan divertido como siempre y la verdad el soundtrack está lleno de temazos lol. Al final terminé disfrutándolo, pero no dejo de sentir que pudo haber sido muchísimo mejor.",
    puntuacion: 6,
    fecha: "2019-11-30"
  },
  {
    id: 28,
    titulo: "Pokémon Brilliant Diamond",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-brilliant-diamond-28.jpg",
    plataformas: ["switch"],
    resena: "El juego es prácticamente un remake 1:1 del original y, aunque el gameplay sigue funcionando, el apartado visual es una decepción: en lugar de reinventar Sinnoh con un estilo moderno, optaron por la opción más sencilla, que fue prácticamente ponerle una skin en 3D. Lo podría recomendar para alguien que está iniciando en Pokémon, pero para los que ya llevamos rato en la saga, es demasiado skipeable.",
    puntuacion: 5,
    fecha: "2022-01-30"
  },
  {
    id: 29,
    titulo: "Pokémon Legends: Arceus",
    categoria: "videojuego",
    imagen: "assets/img/leyendas-pokemon-arceus-29.jpg",
    plataformas: ["switch"],
    resena: "Hasta que por fin se atrevieron a cambiar (un poco) la fórmula de Pokémon. La exploración de un \"mundo abierto\" da una experiencia diferente a los juegos tradicionales y, para mí, fue un cambio muy necesario. El estilo de arte me gusta mucho, aunque es imposible ignorar que el apartado gráfico en ocasiones vuelve a dejar mucho que desear. Aun así, es de las mejores y más divertidas ideas que ha tenido Pokémon en años.",
    puntuacion: 8,
    fecha: "2022-01-28"
  }
];
