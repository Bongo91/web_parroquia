// Contacto común para todas las fichas. Los formularios siguen siendo propios de cada grupo.
const parishContact = {
  email: "jesusysanmartin@gmail.com",
  phone: "+34 618 811 654",
  whatsappUrl: "https://chat.whatsapp.com/J4hEDbLKEdw9IwA11eyHxp?s=sw&p=a&mlu=4&ilr=4"
};
// En cada ficha: signupUrl para inscripción y contactFormUrl para formulario de contacto.
// Añade showContact: false cuando una ficha no deba mostrar el contacto común.

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
  {
    id: "coro-parroquial",
    categories: ["oracion", "comunidad"],
    section: "vida-parroquial",
    eyebrow: "Para todas las edades",
    title: "Coro parroquial",
    image: "images/logo_parroquia_1.jpeg",
    summary: "Cantamos juntos para alabar a Dios y cuidar la belleza de la liturgia.",
    descriptionHtml: `<p>¡Nos gustaría formar un coro en la parroquia Jesús y San Martín para alabar a Dios en la liturgia, cuidando especialmente su belleza! Si tienes oído, voz y disponibilidad, te invitamos a participar.</p>
      <p><strong>Para todas las edades.</strong></p>
      <h3>Ensayos</h3><p>Los domingos a las 11:00, antes de la misa de las 12:00.</p>
      <p>El inicio está previsto para el domingo 25; os confirmaremos la fecha por WhatsApp.</p>
      <p>Para cualquier duda, puedes contactar con Pilar: 634 549 291.</p>
      <p>¡Muchas gracias! «Cantad al Señor un cántico nuevo» (Salmo 96, 1).</p>`,
    signupUrl: "https://forms.gle/fCbndzJzs2QAc45H7",
    contacts: [
      {label: "Llamar a Pilar", href: "tel:+34634549291"},
      {label: "WhatsApp de Pilar", href: "https://wa.me/34634549291"}
    ]
  },
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
    summary: "Primeros pasos en la fe para niños de 3 a 6 años, vividos junto a sus familias con alegría, cercanía y descubrimiento.",
    featured: true,
    featuredTitle: "Despertar: primeros pasos en la fe",
    featuredSummary: "Una propuesta cercana para que niños y familias descubran la parroquia como casa, comunidad y camino.",
    featuredPriority: 1,
    description: "Una propuesta para acompañar a los niños más pequeños y a sus familias en sus primeros encuentros con la fe y con la comunidad parroquial.",
    descriptionHtml: `
      <p><strong>Despertar</strong> es una propuesta para acompañar a los niños más pequeños y a sus familias en sus primeros encuentros con la fe y con la comunidad parroquial.</p>

      <p>A través de celebraciones sencillas, dinámicas adaptadas a su edad y momentos compartidos en familia, los niños comienzan a descubrir a Jesús, la oración y la parroquia como una casa cercana y acogedora.</p>

      <h3>¿A quién está dirigido?</h3>
      <ul>
        <li>Familias con niños de 3 a 6 años.</li>
        <li>Quienes desean iniciar este camino de forma gradual, alegre y acompañada.</li>
      </ul>
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
    "juventud",
    "infancia"
  ],
  "section": "infancia",
  "title": "Alevines",
  "image": "images/alevines.JPG",
  "summary": "Un espacio cercano para quienes cursan de 6.º de Primaria a 1.º de ESO, donde crecer en amistad, fe y vida de comunidad.",
  "description": "Un espacio para compartir, hacer amigos, plantear preguntas y descubrir que la fe también forma parte de la vida cotidiana.",
  "descriptionHtml": `
    <p><strong>Alevines</strong> acompaña a quienes viven una etapa de cambio entre la infancia y la adolescencia. Es un espacio para compartir, hacer amistades, plantear preguntas y descubrir que la fe también forma parte de la vida cotidiana.</p>

    <p>Mediante encuentros, juegos, conversación, oración y actividades de grupo, cada persona puede encontrar su lugar en la parroquia y avanzar acompañada por otras personas de su edad.</p>

    <h3>¿A quién está dirigido?</h3>
    <ul>
      <li>Quienes cursan 6.º de Primaria y 1.º de ESO.</li>
      <li>Quienes desean compartir amistad, fe y vida de comunidad.</li>
    </ul>
  `,
  "showContact": false,
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
  "image": "images/catequesis_caja.jpeg",
  "summary": "Un itinerario de catequesis para conocer a Jesús, crecer en la fe y prepararse para recibir la Primera Comunión.",
  "description": "Un camino progresivo de catequesis para niños y familias que desean preparar la Primera Comunión.",
  "descriptionHtml": `
    <p>La catequesis de <strong>Primera Comunión</strong> acompaña a los niños y a sus familias en el descubrimiento de Jesús, del Evangelio y de la vida de la Iglesia.</p>

    <p>Es un camino progresivo, pensado aproximadamente para niños de 6 a 9 años y desarrollado a lo largo de tres años. Durante este tiempo se profundiza en la oración, la celebración, el perdón, la Eucaristía y el sentido de pertenecer a una comunidad cristiana.</p>

    <p>La preparación no se limita al día de la celebración: busca que los niños y sus familias vivan la fe de manera cercana, compartida y continuada en la parroquia.</p>
  `,
  "showContact": false,
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
  "summary": "Un espacio de catequesis para compartir la fe, la amistad y las preguntas propias de los años de ESO.",
  "description": "Un espacio de catequesis para crecer en la fe y compartir las preguntas de la adolescencia.",
  "descriptionHtml": `
    <p><strong>Juveniles</strong> está dirigido a quienes cursan de 2.º a 4.º de ESO. Es un espacio para crecer en la fe, hablar con libertad sobre las preguntas de esta etapa y compartir el camino con personas de la misma edad.</p>

    <p>La catequesis ayuda a descubrir a Jesús de forma cercana y a sentirse parte de la comunidad parroquial.</p>

    <h3>¿A quién está dirigido?</h3>
    <ul>
      <li>A quienes cursan de 2.º a 4.º de ESO.</li>
      <li>A quienes desean compartir la fe y sus preguntas con personas de su edad.</li>
    </ul>
  `,
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
  "summary": "Un grupo para seguir creciendo en la fe y compartir la vida durante Bachillerato y la universidad.",
  "description": "Un lugar de encuentro, amistad y reflexión para integrar la fe en esta etapa vital.",
  "descriptionHtml": `
    <p><strong>Bachillerato y universitarios</strong> es un lugar para quienes viven Bachillerato o la universidad y desean seguir vinculados a la parroquia.</p>

    <p>Ofrece un espacio de encuentro, amistad y reflexión para integrar la fe en los cambios, decisiones y experiencias de esta etapa vital.</p>
  `,
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
  ],
  "section": "primer-anuncio",
  "title": "Alpha Jóvenes",
  "image": "images/alpha_oficial.jpeg",
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

// ==================================================
// CONTENIDOS DE QUIÉNES SOMOS
// ==================================================
// Cada elemento genera una ficha propia en quienes-detalle.html?id=...
// Modifica image, imageAlt, summary y descriptionHtml para actualizar su contenido.
// En Clero, members permite añadir personas con name, role, image, imageAlt y description.
const parishIdentityCards = [
  {
    id: "clero",
    eyebrow: "Servicio pastoral",
    title: "Conoce al equipo parroquial",
    image: "images/logo_parroquia_1.jpeg",
    imageAlt: "Logotipo de la Parroquia Jesús y San Martín",
    summary: "Sacerdotes, seminaristas, fraternidad de hermanas y laicos al servicio de la comunidad.",
    descriptionHtml: `
      <p>Nuestro equipo parroquial está formado por sacerdotes, seminaristas, una fraternidad de hermanas y laicos que comparten la misión de acompañar y servir a la comunidad.</p>
      <p>Junto a ellos, las personas consagradas colaboran con su vocación, su oración y su servicio en la vida de la comunidad de fieles.</p>
      <h3>Su misión en la parroquia</h3>
      <ul>
        <li>Acompañar a la comunidad en su camino de fe.</li>
        <li>Celebrar la liturgia y administrar los sacramentos.</li>
        <li>Anunciar el Evangelio y servir a quienes más lo necesitan.</li>
      </ul>
    `,
    members: []
  },
  {
    id: "comunicaciones",
    eyebrow: "Equipo parroquial",
    title: "Comisión de Comunicaciones",
    image: "images/logo_parroquia_1.jpeg",
    imageAlt: "Logotipo de la Parroquia Jesús y San Martín",
    summary: "Comunicar y compartir la vida de la parroquia con cercanía y claridad.",
    descriptionHtml: `
      <p>La Comisión de Comunicaciones ayuda a dar a conocer las celebraciones, actividades y propuestas de la parroquia.</p>
      <p>Su servicio facilita que la información llegue a la comunidad a través de la web, las redes sociales y los demás canales parroquiales.</p>
    `
  },
  {
    id: "cultura-fe",
    eyebrow: "Encuentro y formación",
    title: "Cultura y Fe",
    image: "images/Cruz monte.png",
    imageAlt: "Cruz sobre el monte al atardecer",
    summary: "Cultura, diálogo y fe para comprender mejor la realidad que vivimos.",
    descriptionHtml: `
      <p>Cultura y Fe propone encuentros y actividades que ayudan a poner en diálogo la experiencia cristiana con la cultura y las preguntas de nuestro tiempo.</p>
      <p>Es un espacio abierto para compartir inquietudes, aprender juntos y profundizar en la fe.</p>
    `
  },
  {
    id: "montana",
    eyebrow: "Naturaleza y convivencia",
    title: "Montaña",
    image: "images/logo_parroquia_1.jpeg",
    imageAlt: "Logotipo de la Parroquia Jesús y San Martín",
    summary: "Caminar juntos, disfrutar de la naturaleza y fortalecer la convivencia.",
    descriptionHtml: `
      <p>Montaña reúne salidas y encuentros en la naturaleza para compartir camino, conversación y convivencia.</p>
      <p>Estas actividades permiten descubrir la creación, fortalecer los vínculos de la comunidad y vivir la fe también fuera de los espacios habituales.</p>
    `
  }
];

// TABLÓN: sin fechas el anuncio es fijo. Con start/end se publica en ese periodo.
// Para un mes de publicación, indica las dos fechas AAAA-MM-DD. href es opcional.
const parishAnnouncements = [
  {id: "hollywins", title: "Hollywins", summary: "Una nueva actividad para compartir en la parroquia. Próximamente publicaremos los detalles.", image: "images/logo_parroquia_1.jpeg", priority: 1},
  {id: "confirmacion-adultos", title: "Catequesis de Confirmación de adultos", summary: "Un camino para profundizar en la fe y preparar la Confirmación.", image: "images/Confirmation_card.jpeg", href: "detalle.html?id=confirmacion-adultos", priority: 2},
  {id: "alpha", title: "Cenas Alpha · Jóvenes y adultos", summary: "Las cenas Alpha ya han comenzado. Un espacio para compartir mesa y conversar sobre la vida y la fe.", image: "images/cena_alfa_1.jpg", href: "categoria.html?id=primer-anuncio", priority: 3},
  {id: "alcala", title: "Próxima salida: Alcalá", summary: "Cultura y Fe prepara su próxima salida a Alcalá. Fecha y detalles próximamente.", image: "images/Cruz monte.png", href: "cultura-fe.html#proxima-salida", priority: 4},
  {id: "coro", title: "¡Forma parte del coro parroquial!", summary: "Para todas las edades. Ensayos los domingos a las 11:00, antes de la misa de las 12:00.", image: "images/logo_parroquia_1.jpeg", href: "detalle.html?id=coro-parroquial", priority: 5}
];
