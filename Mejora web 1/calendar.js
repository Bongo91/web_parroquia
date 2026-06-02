// Edita este archivo para añadir, quitar o modificar eventos sin tocar el HTML.
// Copia un bloque completo y cambia los datos.
//
// Campos importantes:
// - date: fecha en formato AAAA-MM-DD.
// - time: hora opcional en formato HH:MM. Sirve para ordenar eventos del mismo día.
// - groupId: debe coincidir con el id de una tarjeta en content.js para enlazar al grupo.
// - image: foto pequeña del evento.

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
    image: "images/templo.png",
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
    image: "images/templo.png",
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
  {
    id: "retiro-adviento",
    date: "2026-07-07",
    time: "10:00",
    title: "Campamento El Espinar",
    category: "Vida parroquial",
    groupId: "retiros",
    image: "images/Cruz monte.png",
    summary: "Retiro de niños, una semana de encuentro con el señor, actividades divertidas y descubrimiento.",
    location: "Casa retiro - El Espinar San Rafael",
    signupUrl: "https://forms.gle/",
    contactUrl: "mailto:jesusysanmartin@gmail.com"
  }
];
