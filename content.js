// Contacto común para todas las fichas. Los formularios siguen siendo propios de cada grupo.
const parishContact = {
  email: "jesusysanmartin@gmail.com",
  phone: "+34 618 811 654",
  whatsappUrl: "https://chat.whatsapp.com/J4hEDbLKEdw9IwA11eyHxp?s=sw&p=a&mlu=4&ilr=4"
};
// En cada ficha: signupUrl para inscripción y contactFormUrl para formulario de contacto.

// GUÍA PARA PUBLICAR IMÁGENES
// 1. Guarda todas las fotografías dentro de la carpeta images.
// 2. Usa nombres de archivo claros, sin espacios ni tildes, por ejemplo:
//    images/cafe_con_fe.jpg e images/cafe_con_fe_detalle.jpg.
//    Respeta exactamente mayúsculas, minúsculas y extensión: GitHub Pages las distingue.
// 3. image es la fotografía de la tarjeta y de los carruseles.
//    - Formato horizontal 3:2.
//    - Tamaño recomendado: 1200 x 800 px, en JPEG o WebP.
//    - Deja margen alrededor de las personas y del motivo principal para que el recorte
//      se adapte bien en escritorio y móvil.
// 4. detailImage es la fotografía interior, situada junto a la información de la ficha.
//    - Debe ser una escena diferente que amplíe o complete la imagen de la tarjeta.
//    - Formato vertical 4:5.
//    - Tamaño recomendado: 1200 x 1500 px, en JPEG o WebP.
//    - Elige una imagen con un punto de interés claro y evita texto dentro de la fotografía.
// 5. imageAlt y detailImageAlt describen brevemente lo que aparece en cada imagen.
//    No uses nombres de archivo ni frases como "imagen del grupo". Ejemplo:
//    imageAlt: "Personas conversando durante un encuentro de Café con Fe",
//    detailImageAlt: "Encuentro de Café con Fe en la parroquia",
// 6. Si todavía no hay una fotografía interior, omite detailImage y detailImageAlt.
//    La ficha reutilizará image automáticamente hasta que se añada la imagen definitiva.
// 7. Después de añadir una imagen, comprueba la tarjeta y la ficha en escritorio y móvil.
//
// Edita este archivo para añadir, quitar o modificar tarjetas sin tocar el HTML.
// Copia un bloque completo, cambia el id, categories, section, textos, imágenes y enlaces.
// Ejemplo mínimo de los campos de imagen:
// image: "images/nombre_grupo.jpg",
// imageAlt: "Descripción de la escena de la tarjeta",
// detailImage: "images/nombre_grupo_detalle.jpg", // Opcional.
// detailImageAlt: "Descripción de la escena de la ficha", // Opcional.
// Para textos largos con formato usa descriptionHtml con etiquetas sencillas:
// <p>, <strong>, <em>, <ul>, <ol>, <li>, <h3> y <br>.
// Para destacar una tarjeta en portada usa:
// featured: true,
// featuredTitle: "Título destacado",
// featuredSummary: "Texto breve para la franja destacada",
// featuredPriority: 1,
// featuredStart: "2026-09-01", // Opcional. Si se omite, empieza inmediatamente.
// featuredEnd: "2026-12-31",  // Opcional. Si se omite, no caduca.
// Sin featuredStart ni featuredEnd, el destacado es permanente.

const parishCards = [
  // ==================================================
  // TARJETA: INFANCIA
  // ==================================================

  // GRUPO: Despertar
  {
    id: "despertar",
    categories: ["infancia"],
    section: "vida-parroquial",
    eyebrow: "Infancia",
    title: "Despertar",
    image: "images/jesus_ninos.jpeg",
    summary: "Primeros pasos en la fe desde la alegría, la familia y el descubrimiento.",
    featured: true,
    featuredTitle: "Despertar: primeros pasos en la fe",
    featuredSummary: "Una propuesta cercana para que niños y familias descubran la parroquia como casa, comunidad y camino.",
    featuredPriority: 1,
    description: "Despertar acompaña a los más pequeños y a sus familias en el inicio del camino cristiano.",
    descriptionHtml: `
      <p><strong>Despertar</strong> es una comunidad parroquial pensada para iniciar a los niños y a sus familias en una experiencia sencilla, alegre y cercana de fe.</p>

      <p>Además de las celebraciones litúrgicas, la parroquia ofrece actividades orientadas al <strong>acompañamiento espiritual</strong>, la formación y la ayuda mutua entre vecinos.</p>

      <h3>¿A quién está dirigido?</h3>
      <ul>
        <li>Familias que quieren acercar la fe a sus hijos.</li>
        <li>Niños que empiezan a descubrir la parroquia como casa.</li>
        <li>Personas que desean integrarse poco a poco en la vida comunitaria.</li>
      </ul>

      <h3>Qué se suele trabajar</h3>
      <ul>
        <li>Oraciones sencillas y gestos de la fe.</li>
        <li>Primer contacto con la comunidad parroquial.</li>
        <li>Dinámicas de convivencia, escucha y participación.</li>
      </ul>

      <p>Más allá de lo religioso, la parroquia también cumple una función social importante: fomenta la convivencia, el compromiso con los demás y el sentimiento de pertenencia a una comunidad cercana, acogedora y participativa.</p>
    `,
    signupUrl: "https://forms.gle/",



    contactFormUrl: "",



    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con catequesis"
  },

  // GRUPO: Alevines
  {
  "id": "alevines",
  "categories": [
    "infancia"
  ],
  "section": "infancia",
  "title": "Alevines",
  "image": "images/jesus_ninos.jpeg",
  "summary": "Un camino de fe y comunidad para alumnos de 6.º de Primaria a 1.º de ESO.",
  "description": "Un camino de fe y comunidad para alumnos de 6.º de Primaria a 1.º de ESO. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
  },

  // GRUPO: Primera Comunión (también aparece en: Sacramentos)
  {
  "id": "primera-comunion",
  "categories": [
    "infancia",
    "sacramentos"
  ],
  "section": "infancia",
  "title": "Primera Comunión",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Catequesis para descubrir la fe y prepararse para recibir la Primera Comunión.",
  "description": "Catequesis para descubrir la fe y prepararse para recibir la Primera Comunión. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: ADOLESCENTES Y JÓVENES
  // ==================================================

  // GRUPO: Juveniles
  {
  "id": "juveniles",
  "categories": [
    "juventud"
  ],
  "section": "juventud",
  "title": "Juveniles",
  "image": "images/grupo_jovenes.jpeg",
  "summary": "Encuentros de fe y acompañamiento para adolescentes de 2.º a 4.º de ESO.",
  "description": "Encuentros de fe y acompañamiento para adolescentes de 2.º a 4.º de ESO. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Bachillerato y universitarios
  {
  "id": "bachillerato-universitarios",
  "categories": [
    "juventud"
  ],
  "section": "juventud",
  "title": "Bachillerato y universitarios",
  "image": "images/grupo_bachiller_uni.jpeg",
  "summary": "Compartir la fe, las preguntas y la vida durante Bachillerato y la universidad.",
  "description": "Compartir la fe, las preguntas y la vida durante Bachillerato y la universidad. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: PRIMER ANUNCIO
  // ==================================================

  // GRUPO: Alpha Jóvenes (también aparece en: Adolescentes y jóvenes)
  {
  "id": "alpha-jovenes",
  "categories": [
    "primer-anuncio",
    "juventud"
  ],
  "section": "primer-anuncio",
  "title": "Alpha Jóvenes",
  "image": "images/cena_alfa_1.jpg",
  "summary": "Encuentros para explorar las preguntas sobre la vida y la fe junto a otros jóvenes.",
  "description": "Encuentros para explorar las preguntas sobre la vida y la fe junto a otros jóvenes. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Alpha Adultos
  {
  "id": "alpha-adultos",
  "categories": [
    "primer-anuncio"
  ],
  "section": "primer-anuncio",
  "title": "Alpha Adultos",
  "image": "images/cena_alfa_1.jpg",
  "summary": "Un espacio de encuentro y conversación para descubrir la fe cristiana.",
  "description": "Un espacio de encuentro y conversación para descubrir la fe cristiana. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: ADULTOS
  // ==================================================

  // GRUPO: Café con Fe
  {
    id: "cafe-con-fe",
    categories: ["adultos"],
    section: "adultos",
    eyebrow: "Encuentro",
    title: "Café con Fe",
    image: "images/cafe_con_fe.jpg",
    imageAlt: "Personas conversando durante un encuentro de Café con Fe",
    detailImage: "images/cafe_con_fe_1.jpeg",
    detailImageAlt: "Encuentro de Café con Fe en la parroquia",
    summary: "Conversaciones tranquilas para mirar la vida desde el Evangelio.",
    featured: true,
    featuredTitle: "Café con Fe",
    featuredSummary: "Un espacio cercano para conversar, escuchar y mirar juntos la vida desde el Evangelio.",
    featuredPriority: 4,
    description: "Café con Fe propone conversaciones sencillas y profundas en torno a temas de actualidad, vida cristiana y preguntas cotidianas, en un ambiente cálido y abierto.",
    signupUrl: "https://forms.gle/",



    contactFormUrl: "",



    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con el equipo"
  },

  // GRUPO: Jóvenes trabajadores
  {
    id: "jovenes_trabajadores",
    categories: ["adultos"],
    section: "adultos",
    eyebrow: "Jovenes trabajadores",
    title: "Jovenes trabajadores",
    image: "images/logo_parroquia_1.jpeg",
    summary: "Jovenes trabajadores.",
    description: "Jovenes trabajadores",
    signupUrl: "",



    contactFormUrl: "",



    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Enviar consulta"
  },

  // GRUPO: Escuela de Biblia
  {
  "id": "escuela-biblia",
  "categories": [
    "adultos"
  ],
  "section": "adultos",
  "title": "Escuela de Biblia",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Acercarse a la Sagrada Escritura y profundizar juntos en su lectura.",
  "description": "Acercarse a la Sagrada Escritura y profundizar juntos en su lectura. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Oración de Madres
  {
  "id": "oracion-madres",
  "categories": [
    "adultos"
  ],
  "section": "adultos",
  "title": "Oración de Madres",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Un espacio para compartir la oración por los hijos y las familias.",
  "description": "Un espacio para compartir la oración por los hijos y las familias. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: SACRAMENTOS
  // ==================================================

  // GRUPO: Preparación para el Bautismo
  {
  "id": "bautismo",
  "categories": [
    "sacramentos"
  ],
  "section": "sacramentos",
  "title": "Preparación para el Bautismo",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Acompañamiento para preparar el Bautismo con itinerarios según la edad.",
  "description": "Acompañamiento para preparar el Bautismo con itinerarios según la edad. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Confirmación de adolescentes y jóvenes (también aparece en: Adolescentes y jóvenes)
  {
  "id": "confirmacion-jovenes",
  "categories": [
    "sacramentos",
    "juventud"
  ],
  "section": "sacramentos",
  "title": "Confirmación de adolescentes y jóvenes",
  "image": "images/Confirmation_card.jpeg",
  "summary": "Un itinerario de preparación para profundizar en la fe y recibir la Confirmación.",
  "description": "Un itinerario de preparación para profundizar en la fe y recibir la Confirmación. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Confirmación de adultos (también aparece en: Adultos)
  {
  "id": "confirmacion-adultos",
  "categories": [
    "sacramentos",
    "adultos"
  ],
  "section": "sacramentos",
  "title": "Confirmación de adultos",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Preparación para recibir la Confirmación en la vida adulta.",
  "description": "Preparación para recibir la Confirmación en la vida adulta. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: NOVIOS
  // ==================================================

  // GRUPO: Cursos prematrimoniales
  {
  "id": "prematrimoniales",
  "categories": [
    "novios"
  ],
  "section": "sacramentos",
  "title": "Cursos prematrimoniales",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Preparación para celebrar el sacramento del Matrimonio.",
  "description": "Preparación para celebrar el sacramento del Matrimonio. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Curso para novios
  {
  "id": "curso-novios",
  "categories": [
    "novios"
  ],
  "section": "sacramentos",
  "title": "Curso para novios",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Una propuesta para acompañar el noviazgo y reflexionar sobre la vida en pareja.",
  "description": "Una propuesta para acompañar el noviazgo y reflexionar sobre la vida en pareja. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: MATRIMONIOS
  // ==================================================
  // Actualmente no hay grupos publicados en esta tarjeta.

  // ==================================================
  // TARJETA: ORACIÓN, CELEBRACIONES Y RETIROS
  // ==================================================

  // GRUPO: Retiros
  {
    id: "retiros",
    categories: ["oracion"],
    section: "actividades",
    eyebrow: "Oración",
    title: "Retiros",
    image: "images/Cruz monte.png",
    summary: "Tiempos de silencio, oración y renovación interior.",
    featured: true,
    featuredTitle: "Retiro parroquial",
    featuredSummary: "Una pausa para volver a lo esencial, rezar con calma y compartir vida de comunidad.",
    featuredPriority: 2,
    featuredStart: "2026-09-01",
    featuredEnd: "2026-12-05",
    description: "Los retiros parroquiales son pausas para volver a lo esencial, escuchar a Dios, descansar interiormente y compartir un día de oración con la comunidad.",
    signupUrl: "https://forms.gle/",



    contactFormUrl: "",



    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con organización"
  },

  // GRUPO: Cómo rezar el rosario
  {
    id: "rosario",
    categories: ["oracion"],
    section: "recursos",
    eyebrow: "Oración",
    title: "Cómo rezar el rosario",
    image: "images/logo_parroquia_1.jpeg",
    summary: "Guía sencilla para rezarlo solo, en familia o en comunidad.",
    featured: true,
    featuredTitle: "Cómo rezar el rosario",
    featuredSummary: "Una guía práctica para rezarlo personalmente, en familia o junto a la comunidad.",
    featuredPriority: 3,
    description: "Este recurso ofrece una guía clara para rezar el rosario paso a paso, con misterios, oraciones y pequeñas indicaciones para vivirlo con calma.",
    signupUrl: "",



    contactFormUrl: "",



    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Enviar consulta"
  },

  // GRUPO: Eucaristía
  {
  "id": "eucaristia",
  "categories": [
    "oracion"
  ],
  "section": "oracion",
  "title": "Eucaristía",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Celebrar juntos la fe en la misa. Consulta los horarios habituales en la portada.",
  "description": "Celebrar juntos la fe en la misa. Consulta los horarios habituales en la portada. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Confesión
  {
  "id": "confesion",
  "categories": [
    "oracion"
  ],
  "section": "oracion",
  "title": "Confesión",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Un encuentro de reconciliación y acompañamiento espiritual.",
  "description": "Un encuentro de reconciliación y acompañamiento espiritual. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Adoración al Santísimo
  {
  "id": "adoracion",
  "categories": [
    "oracion"
  ],
  "section": "oracion",
  "title": "Adoración al Santísimo",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Un tiempo de oración y recogimiento ante el Santísimo.",
  "description": "Un tiempo de oración y recogimiento ante el Santísimo. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Hora Santa
  {
  "id": "hora-santa",
  "categories": [
    "oracion"
  ],
  "section": "oracion",
  "title": "Hora Santa",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Compartir un tiempo de oración comunitaria ante el Señor.",
  "description": "Compartir un tiempo de oración comunitaria ante el Señor. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Charlas cuaresmales
  {
  "id": "charlas-cuaresmales",
  "categories": [
    "oracion"
  ],
  "section": "oracion",
  "title": "Charlas cuaresmales",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Reflexiones para preparar y vivir el tiempo de Cuaresma.",
  "description": "Reflexiones para preparar y vivir el tiempo de Cuaresma. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: ENCUENTROS Y ACTIVIDADES
  // ==================================================

  // GRUPO: Belenismo
  {
  "id": "belenismo",
  "categories": [
    "comunidad"
  ],
  "section": "comunidad",
  "title": "Belenismo",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Preparar y construir el belén en comunidad durante el camino hacia la Navidad.",
  "description": "Preparar y construir el belén en comunidad durante el camino hacia la Navidad. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Convivencia parroquial
  {
  "id": "convivencia",
  "categories": [
    "comunidad"
  ],
  "section": "comunidad",
  "title": "Convivencia parroquial",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Actividades y encuentros para conocernos y compartir la vida de la parroquia.",
  "description": "Actividades y encuentros para conocernos y compartir la vida de la parroquia. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // ==================================================
  // TARJETA: CONTENIDOS DE QUIÉNES SOMOS (FUERA DE VIDA PARROQUIAL)
  // ==================================================

  // GRUPO: Cultura y Fe
  {
  "id": "cultura-fe",
  "categories": [],
  "section": "comunidad",
  "title": "Cultura y Fe",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Encuentros y propuestas culturales para compartir inquietudes y profundizar en la fe.",
  "description": "Encuentros y propuestas culturales para compartir inquietudes y profundizar en la fe. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
},

  // GRUPO: Montaña
  {
  "id": "montana",
  "categories": [],
  "section": "comunidad",
  "title": "Montaña",
  "image": "images/logo_parroquia_1.jpeg",
  "summary": "Compartir el encuentro con la naturaleza y la convivencia en las salidas de la comunidad.",
  "description": "Compartir el encuentro con la naturaleza y la convivencia en las salidas de la comunidad. Próximamente ampliaremos la información de esta propuesta.",
  "signupUrl": "",



  contactFormUrl: "",



  "contactUrl": ""
}

];

// Categorías del directorio. Cada ficha puede pertenecer a varias mediante categories.
const parishCategories = [
  {
    "id": "infancia",
    "title": "Infancia",
    "summary": "Primeros pasos en la fe junto a los niños y sus familias."
  },
  {
    "id": "juventud",
    "title": "Adolescentes y jóvenes",
    "summary": "Amistad, acompañamiento y fe compartida desde la adolescencia."
  },
  {
    "id": "primer-anuncio",
    "title": "Primer anuncio",
    "summary": "Un espacio para acercarte, preguntar y descubrir la fe."
  },
  {
    "id": "adultos",
    "title": "Adultos",
    "summary": "Aprender, conversar y rezar juntos en la vida adulta."
  },
  {
    "id": "sacramentos",
    "title": "Sacramentos",
    "summary": "Preparación para recibir y celebrar los sacramentos."
  },
  {
    "id": "novios",
    "title": "Novios",
    "summary": "Acompañamiento para el noviazgo y la preparación al matrimonio."
  },
  {
    "id": "matrimonios",
    "title": "Matrimonios",
    "summary": "Actividades y grupos para cuidar y compartir la vida matrimonial."
  },
  {
    "id": "oracion",
    "title": "Oración, celebraciones y retiros",
    "summary": "Celebrar la fe y encontrar tiempo para la oración y el silencio."
  },
  {
    "id": "comunidad",
    "title": "Encuentros y actividades",
    "summary": "Compartir aficiones, colaborar y construir comunidad."
  }
];
