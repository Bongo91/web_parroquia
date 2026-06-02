// Edita este archivo para añadir, quitar o modificar tarjetas sin tocar el HTML.
// Copia un bloque completo, cambia el id, section, textos, imagen y enlaces.
// Para textos largos con formato usa descriptionHtml con etiquetas sencillas:
// <p>, <strong>, <em>, <ul>, <ol>, <li>, <h3> y <br>.
// Para destacar una tarjeta en portada usa:
// featured: true,
// featuredTitle: "Título destacado",
// featuredSummary: "Texto breve para la franja destacada",
// featuredOrder: 1,

const parishCards = [
  {
    id: "despertar",
    section: "vida-parroquial",
    eyebrow: "Infancia",
    title: "Despertar",
    image: "images/templo.png",
    summary: "Primeros pasos en la fe desde la alegría, la familia y el descubrimiento.",
    featured: false,
    featuredTitle: "Despertar: primeros pasos en la fe",
    featuredSummary: "Una propuesta cercana para que niños y familias descubran la parroquia como casa, comunidad y camino.",
    featuredOrder: 1,
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
    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con catequesis"
  },
  {
    id: "cafe-con-fe",
    section: "adultos",
    eyebrow: "Encuentro",
    title: "Café con Fe",
    image: "images/templo.png",
    summary: "Conversaciones tranquilas para mirar la vida desde el Evangelio.",
    description: "Café con Fe propone conversaciones sencillas y profundas en torno a temas de actualidad, vida cristiana y preguntas cotidianas, en un ambiente cálido y abierto.",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con el equipo"
  },
  {
    id: "retiros",
    section: "actividades",
    eyebrow: "Oración",
    title: "Retiros",
    image: "images/Cruz monte.png",
    summary: "Tiempos de silencio, oración y renovación interior.",
    featured: false,
    featuredTitle: "Retiro parroquial",
    featuredSummary: "Una pausa para volver a lo esencial, rezar con calma y compartir vida de comunidad.",
    featuredOrder: 2,
    description: "Los retiros parroquiales son pausas para volver a lo esencial, escuchar a Dios, descansar interiormente y compartir un día de oración con la comunidad.",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Contactar con organización"
  },
  {
    id: "rosario",
    section: "recursos",
    eyebrow: "Oración",
    title: "Cómo rezar el rosario",
    image: "images/templo.png",
    summary: "Guía sencilla para rezarlo solo, en familia o en comunidad.",
    description: "Este recurso ofrece una guía clara para rezar el rosario paso a paso, con misterios, oraciones y pequeñas indicaciones para vivirlo con calma.",
    signupUrl: "",
    contactUrl: "mailto:jesusysanmartin@gmail.com",
    contactLabel: "Enviar consulta"
  }
];
