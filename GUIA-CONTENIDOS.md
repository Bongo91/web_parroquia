# Guía provisional de contenidos parroquiales

## Fuente y alcance

Fuente: `C:\Users\franc\Downloads\programa parroquial (1).docx`, revisada el 21 de septiembre de 2026.

El usuario ha indicado que este documento debe orientar el desarrollo de la web,
que no es una versión final y que admite recomendaciones de mejora. Esta guía
resume su estructura para futuras tareas; no sustituye el documento ni confirma
los datos pendientes. Las revisiones posteriores del usuario pueden modificarla.

Las notas del documento describen propuestas de contenido. No constituyen por sí
solas órdenes de implementación o publicación. En esta revisión no se ha cambiado
el contenido público de la web.

El archivo incluye anotaciones dentro del texto, como «POR COMPLETAR», «PROPUESTA
DE NOMBRE» e «Inicio previsto». No se encontraron comentarios de revisión de Word
ni inserciones o eliminaciones con control de cambios.

## Enfoque del documento

Presentar la parroquia como una comunidad donde vivir la fe juntos. Ayudar a cada
persona a encontrar una propuesta según su edad, momento vital e inquietudes,
incluyendo a quienes se acercan por primera vez o tienen preguntas.

## Estructura de referencia

1. **Presentación de la parroquia.** Acogida, comunidad y diversidad de propuestas.
2. **Catequesis.** Despertar (3 a 6 años), Primera Comunión (aproximadamente 6 a 9
   años, itinerario de tres años), adolescentes con Life Teen y Edge, y jóvenes
   de Bachillerato y universidad. Los grupos de adolescentes se denominan
   Alevines (6.º de Primaria a 1.º de ESO) y Juveniles (2.º a 4.º de ESO).
3. **Preparación para los sacramentos.** Bautismo, Primera Comunión, Confirmación
   de adolescentes y jóvenes, y Confirmación de adultos. El documento distingue
   diferentes itinerarios de bautismo según la edad.
4. **Primer anuncio y nueva evangelización.** Alpha Jóvenes y Alpha Adultos.
5. **Adultos: formación, fe y oración.** Escuela de Biblia, Café con Fe y Oración
   de Madres.
6. **Comisiones parroquiales.** Cultura y Fe, con programación cultural, y
   Montaña, cuyo nombre definitivo está pendiente.
7. **Celebración, oración y vida sacramental.** Eucaristía, Confesión, Adoración
   al Santísimo y Hora Santa.
8. **Matrimonio, novios y vida en pareja.** Cursos prematrimoniales y curso para
   novios; son propuestas diferentes.
9. **Belenismo y preparación de la Navidad.** Grupo para preparar y construir el
   belén en comunidad.
10. **Retiros y tiempos fuertes.** Retiro de Cuaresma y charlas cuaresmales; otras
    propuestas litúrgicas quedan por completar.
11. **Biblioteca parroquial.** Proyecto de biblioteca con carné y préstamo para
    niños y adultos; apertura, catálogo y funcionamiento pendientes.
12. **Recursos para vivir la fe.** Oración, Biblia y Sagrada Escritura, y recursos
    para familias y niños, incluyendo materiales para escuchar la Biblia.
13. **Enlaces de interés.** Diócesis de Getafe, delegaciones diocesanas,
    Conferencia Episcopal Española y Alpha España, con enlaces por completar.

La numeración anterior organiza este resumen. El original termina con un
apartado «15. IDEA DE FONDO PARA TODA LA WEB» y presenta saltos de numeración;
no se deducen secciones ausentes a partir de esos saltos.

## Datos pendientes y diferencias que requieren revisión

- Muchas propuestas carecen de horario, contacto, responsable, inscripción,
  lugar o calendario. No completar esos datos por deducción.
- Alpha Jóvenes menciona viernes e inicio previsto el 16 de octubre; Alpha
  Adultos menciona miércoles de 21:00 a 23:00 e inicio previsto el 17 de octubre.
  Falta el año. Esas dos fechas consecutivas no pueden corresponder a viernes
  y miércoles del mismo año: confirmar fechas y si el inicio es una excepción
  al día habitual antes de crear eventos.
- El documento indica misa de lunes a sábado a las 20:00 y domingo a las 12:00.
  La portada actual indica L-V 20:00. Registrar la diferencia para confirmarla;
  no interpretar el contenido de desarrollo como un error técnico.
- El documento describe confesiones antes o después de misa y por acuerdo con
  el sacerdote; la portada indica 30 minutos antes. Confirmar la formulación.
- Confirmar horarios especiales de celebraciones, Hora Santa, turnos de
  adoración y vías reales de inscripción o contacto.
- La comisión de montaña necesita nombre, responsables y programación. Para
  cada salida, el documento propone dificultad, exigencia física, duración,
  distancia, características y recomendaciones.
- La biblioteca se describe como un proyecto que se pondrá en marcha. No
  anunciar apertura, catálogo disponible ni préstamo operativo sin confirmación.
- Escuela de Biblia repite una frase introductoria. Las notas editoriales,
  repeticiones y anotaciones pendientes necesitan revisión antes de publicarse.

## Encaje con la web actual

- `vida-parroquial.html` contiene diez categorías provisionales con el mensaje
  «Contenido próximamente». Todavía no incorpora las fichas de `content.js`.
- La web separa Jóvenes como categoría; el documento lo incluye dentro de
  Catequesis. Esta diferencia de navegación puede ser útil y no exige duplicar
  los contenidos.
- «Actividades en comunidad» aparece en la web como categoría general, pero no
  tiene un apartado equivalente independiente en el documento.
- `comisiones-parroquiales.html` muestra propuestas genéricas. Queda pendiente
  adaptarla a las comisiones Cultura y Fe y Montaña descritas en el documento.
- `biblioteca.html` ya existe y puede adaptarse cuando se concrete el proyecto.
- Las fichas actuales incluyen Despertar, Café con Fe, Retiros y Rosario.
  Sus identificadores deben conservarse para mantener los enlaces.
- La ficha `jovenes_trabajadores` no aparece expresamente en el documento.
  La omisión en una guía provisional no autoriza a eliminarla.

## Recomendaciones de implementación pendientes de desarrollar

Estas recomendaciones son propuestas del asistente, no decisiones contenidas
en el documento ni cambios ya implementados.

- Mantener Vida parroquial como directorio de categorías y propuestas. Mostrar
  resúmenes breves y enlazar a las fichas para evitar una página excesivamente
  larga.
- Utilizar `content.js` y `detalle.html` para grupos, formaciones y recursos que
  comparten estructura. Una ficha tendrá una dirección propia aunque use la
  misma plantilla que las demás.
- Dar a cada ficha una introducción clara, destinatarios, descripción y datos
  prácticos cuando estén disponibles. Admitir información pendiente sin inventar
  contactos, horarios ni enlaces de inscripción.
- Reutilizar una misma ficha cuando se llegue desde varias categorías. Por
  ejemplo, Primera Comunión puede encontrarse desde Catequesis y Sacramentos;
  no duplicar su descripción ni sus horarios. Si se implementan varias
  categorías por ficha, adaptar el modelo con el cambio mínimo necesario.
- Reservar páginas específicas para ámbitos que necesiten contenido o
  funcionamiento propio, aprovechando las páginas existentes cuando encajen.
- Mantener horarios habituales como información permanente. Usar `calendar.js`
  para convocatorias con fecha y relacionarlas con su ficha mediante `groupId`
  cuando corresponda. No convertir cada reunión semanal o misa en un evento.
- Diferenciar la presentación estable de un grupo de sus convocatorias y de
  los destacados temporales de portada.
- Conservar los pendientes en la documentación de trabajo. En la web, omitir
  datos no confirmados o usar un mensaje público claro cuando sea necesario;
  no publicar literalmente notas internas como «POR COMPLETAR».
- La biblioteca no implica construir ahora un sistema de préstamos, cuentas
  de usuario o un backend. Su presentación informativa puede seguir siendo
  estática.

## Próximo paso propuesto

Preparar el mapa de categorías y fichas a partir de esta guía, identificar qué
textos están listos y cuáles necesitan revisión, y después conectar Vida
parroquial con las fichas. Revisar con el usuario las discrepancias de datos
cuando afecten al contenido que se vaya a publicar.

## Actualización: directorio por categorías (26 de septiembre de 2026)

Esta implementación sustituye la descripción anterior de las diez cajas provisionales.
Vida parroquial muestra nueve categorías: Infancia; Adolescentes y jóvenes;
Primer anuncio; Adultos; Sacramentos; Novios; Matrimonios; Oración,
celebraciones y retiros; Encuentros y actividades.

- `parishCategories`, en `content.js`, define títulos y presentaciones.
- Cada ficha de `parishCards` incorpora `categories`, una lista de identificadores
  de categoría. Una misma ficha puede aparecer en varias sin duplicarse.
- `categoria.html?id=infancia` muestra los grupos de la categoría.
- `detalle.html?id=despertar` conserva la ficha individual y sus enlaces existentes.
- Las cajas usan carruseles manuales cuando contienen varios grupos, con una
  imagen por ficha, nombre e indicador de posición. No avanzan automáticamente.
- Para cambiar la fotografía de una tarjeta o carrusel, modifica `image` y
  describe la escena con `imageAlt`. Recomendación: WebP o JPEG horizontal de
  1200 × 800 píxeles, con margen alrededor del motivo principal.
- Para usar una fotografía diferente en la ficha individual, añade `detailImage`
  y `detailImageAlt`. Recomendación: WebP o JPEG vertical de 1200 × 1500 píxeles.
  Si `detailImage` está vacío o no existe, la ficha reutiliza `image`.
- Las fichas nuevas emplean el logo provisional. Se conservan las imágenes y
  los textos de las fichas anteriores. Los detalles pendientes no se inventan.
- Las categorías con un solo grupo enlazan directamente a su ficha y no muestran
  flechas. Los grupos sin fotografía usan el logo provisional.

Para añadir un grupo, copia una ficha, asigna un `id` único, rellena `title`,
`summary`, `description`, `image` y `categories`. Conserva `section` para los
listados antiguos. Deja los enlaces opcionales vacíos hasta tenerlos confirmados.

## Contacto común y formularios por grupo

Los contactos de las fichas se mantienen una sola vez en `parishContact`, dentro
 de `content.js`: `email`, `phone` y `whatsappUrl`. Se reutilizan el correo,
 el móvil y el grupo de WhatsApp que ya estaban publicados en la web.
Los pies de página estáticos conservan sus datos actuales.

Cada ficha conserva `signupUrl` para inscripción y admite `contactFormUrl`
para un formulario de contacto propio. Déjalos vacíos cuando no existan.
Los antiguos `contactUrl` de tipo HTTP se conservan como alternativa compatible.

«Enviar una consulta» abre campos de asunto y mensaje. «Abrir correo para enviar»
prepara un correo al destinatario común, con el nombre del grupo entre corchetes
al principio del asunto. El visitante debe enviarlo desde su aplicación de correo.
La web no envía ni almacena el mensaje y no requiere backend ni servicios externos.

La navegación al final de las fichas se muestra como enlaces secundarios bajo
«También en»: categorías relacionadas y «Todas las categorías».

## Navegación de comisiones y servicios

Las comisiones quedan bajo el desplegable «Quiénes somos»: Comisión de
Comunicaciones, Cultura y Fe y Montaña. Por ello, Cultura y Fe y Montaña no se
muestran como tarjetas de Vida parroquial.

«Servicios» tiene un desplegable propio con Cáritas, Biblioteca y Visita de
enfermos. La visita de enfermos cuenta con una página informativa y un enlace
para preparar una consulta por correo; no publica horarios ni condiciones que
aún no estén confirmados.
