// Edita este archivo para añadir, quitar o modificar eventos sin tocar el HTML.
// Copia un bloque completo y cambia los datos.
//
// Campos obligatorios: id, date, title y summary.
// - date: fecha en formato AAAA-MM-DD.
// Campos opcionales: time, category, groupId, image, location, signupUrl y contactUrl.
// - time: hora en formato HH:MM. Sirve para ordenar eventos del mismo día.
// - groupId: debe coincidir con el id de una tarjeta en content.js para enlazar al grupo.
// Los errores de estructura se muestran en la consola del navegador durante el desarrollo.

const pastoralEvents = [
  // Cultura y Fe: programa del curso 2026–2027, continuado hasta diciembre de 2027.
  {id: "cultura-fe-corazon-jesus-2026", date: "2026-09-18", title: "Estreno de la película del Corazón de Jesús", category: "Cultura y Fe", summary: "Estreno de la película del Corazón de Jesús en el Cerro.", location: "El Cerro"},
  {id: "cultura-fe-puy-du-fou-2026", date: "2026-10-10", title: "Visita a Puy du Fou", category: "Cultura y Fe", summary: "Salida cultural a Puy du Fou."},
  {id: "cultura-fe-alcala-2026", date: "2026-11-14", title: "Alcalá de Henares: catedral y casco antiguo", category: "Cultura y Fe", summary: "Mes de las catedrales. Visita guiada a la Catedral Magistral y recorrido por la ciudad. Comida juntos, llevando cada uno la suya. Inscripción en secretaría con entrega del importe, pendiente de concretar.", location: "Alcalá de Henares"},
  {id: "cultura-fe-belenes-2026", date: "2026-12-07", title: "Belenes de Madrid", category: "Cultura y Fe", summary: "Visita a los belenes de Madrid y bocata de calamares.", location: "Madrid"},
  {id: "cultura-fe-prado-2027", date: "2027-01-26", title: "Museo del Prado", category: "Cultura y Fe", summary: "Visita al Museo del Prado. Mes del Museo del Prado.", location: "Museo del Prado"},
  {id: "cultura-fe-arqueologico-2027", date: "2027-02-20", title: "Museo Arqueológico: prehistoria", category: "Cultura y Fe", summary: "Una nueva propuesta para conocer la prehistoria. Mes del Museo Arqueológico.", location: "Museo Arqueológico"},
  {id: "cultura-fe-illescas-esquivias-2027", date: "2027-03-13", title: "Visita a Illescas y Esquivias", category: "Cultura y Fe", summary: "Salida cultural a Illescas y Esquivias.", location: "Illescas / Esquivias"},
  {id: "cultura-fe-fatima-2027", date: "2027-04-30", endDate: "2027-05-02", title: "Fátima", category: "Cultura y Fe", summary: "Salida a Fátima del 30 de abril al 2 de mayo de 2027.", location: "Fátima"},
  {id: "cultura-fe-belenes-2027", date: "2027-12-07", title: "Visita a los belenes", category: "Cultura y Fe", summary: "Visita a los belenes para preparar la Navidad."},
  {
    id: "retiro-adultos-junio",
    date: "2026-06-15",
    time: "10:30",
    title: "Retiro de adultos",
    category: "Adultos",
    groupId: "cafe-con-fe",
    image: "images/Cruz monte.png",
    summary: "Mañana de silencio, oración y convivencia para adultos.",
    location: "Parroquia Jesús y San Martín",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com"
  },
  {
    id: "despertar-familias-junio",
    date: "2026-06-15",
    time: "18:00",
    title: "Encuentro de familias de Despertar",
    category: "Vida parroquial",
    groupId: "despertar",
    image: "images/logo_parroquia_1.jpeg",
    summary: "Tarde de encuentro, oración sencilla y convivencia familiar.",
    location: "Salones parroquiales",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com"
  },
  {
    id: "rosario-comunitario-julio",
    date: "2026-07-03",
    time: "19:00",
    title: "Rosario comunitario",
    category: "Recursos",
    groupId: "rosario",
    image: "images/logo_parroquia_1.jpeg",
    summary: "Oración del rosario con guía para quienes quieran aprender a rezarlo.",
    location: "Templo parroquial",
    signupUrl: "",
    contactUrl: "mailto:jesusysanmartin@gmail.com"
  },
  {
    id: "retiro-adviento",
    date: "2026-12-05",
    time: "10:00",
    title: "Retiro de Adviento",
    category: "Actividades",
    groupId: "retiros",
    image: "images/Cruz monte.png",
    summary: "Una pausa de oración para preparar el corazón antes de Navidad.",
    location: "Parroquia Jesús y San Martín",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com"
  },
  
];

// Sin día confirmado: no asignar fechas ficticias. Al concretarlas, trasladar a pastoralEvents.
const pastoralPendingEvents = [
  {month: "2027-04", title: "Posible visita al cuartel de cría caballar de Ávila", summary: "Propuesta y fecha pendientes de confirmación."},
  {month: "2027-06", title: "Aranjuez", summary: "12 o 19 de junio, pendiente de la fiesta de fin de curso de la parroquia."},
  {month: "2027-10", title: "Visita al Jardín del Capricho", summary: "Madrid. Día de la visita pendiente de confirmar."},
  {month: "2027-11", title: "Catedral de Toledo y misa mozárabe", summary: "Mes de las catedrales. Día de la visita pendiente de confirmar."}
];
