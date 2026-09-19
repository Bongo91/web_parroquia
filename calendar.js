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
