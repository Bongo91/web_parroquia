# AGENTS.md

## Objetivo del proyecto

Sitio web de la Parroquia Jesús y San Martín.

Debe ser sencillo, mantenible y fácil de actualizar. Su finalidad es mostrar
información parroquial, horarios, grupos, formaciones, recursos, eventos y
anuncios temporales.

No se pretende construir una aplicación compleja ni prepararla para una
escalabilidad innecesaria.

## Arquitectura actual

- Sitio web estático multipágina.
- HTML, CSS y JavaScript vanilla.
- Sin backend.
- Sin framework frontend.
- Sin bundler ni proceso de compilación.
- `index.html` es la página principal.
- `styles.css` contiene los estilos globales.
- `script.js` contiene el comportamiento compartido.
- `content.js` contiene grupos, formaciones y recursos.
- `calendar.js` contiene eventos con fecha.
- `detalle.html` muestra fichas dinámicas mediante el parámetro `id`.

Aunque algunas partes se generan dinámicamente, el proyecto no es una SPA.

## Principios de trabajo

- Conservar el comportamiento y el diseño existentes salvo petición expresa.
- Priorizar cambios pequeños, claros y de bajo riesgo.
- Evitar reescrituras completas.
- No añadir frameworks, backend, bundlers o dependencias sin una necesidad
  concreta y aprobación del usuario.
- No introducir abstracciones únicamente pensando en una posible escalabilidad.
- Favorecer código fácil de entender para una persona con conocimientos de
  desarrollo web que está retomando el sector.
- Explicar brevemente cualquier cambio que aumente la complejidad.

## Sistema de contenidos

### Horarios habituales

Incluyen misas, confesiones, secretaría y otras actividades recurrentes.

- Se muestran como información permanente.
- No deben generarse como eventos diarios individuales.

### Eventos puntuales

Se almacenan en `calendar.js`.

Cada evento puede contener:

- `id`
- `date`
- `time`
- `title`
- `category`
- `groupId`
- `image`
- `summary`
- `location`
- `signupUrl`
- `contactUrl`

Reglas:

- Cada `id` debe ser único.
- `date` utiliza el formato `AAAA-MM-DD`.
- `groupId`, cuando exista, debe corresponder con una ficha de `content.js`.
- Los enlaces opcionales pueden estar vacíos.
- Los eventos pasados pueden permanecer en el archivo aunque no se muestren.

### Grupos, formaciones y recursos

Se almacenan en `content.js` y utilizan `detalle.html` para mostrar su ficha.

Cada elemento puede contener:

- `id`
- `section`
- `eyebrow`
- `title`
- `image`
- `summary`
- `description` o `descriptionHtml`
- `signupUrl`
- `contactUrl`
- `contactLabel`
- propiedades opcionales para aparecer como destacado

Cada `id` debe ser único y estable.

### Anuncios temporales

El sistema específico de anuncios todavía está pendiente.

Cuando se implemente:

- debe convivir con la arquitectura actual;
- debe permitir fecha de inicio y caducidad;
- no debe requerir backend salvo petición expresa;
- debe ocultar automáticamente los anuncios caducados.

## Contenido durante el desarrollo

Los textos, fechas, horarios, imágenes y enlaces actuales pueden ser ficticios.

No deben considerarse errores mientras sean técnicamente válidos. Solo deben
corregirse sin petición expresa cuando provoquen problemas estructurales, como:

- identificadores duplicados;
- relaciones inexistentes;
- fechas con formato inválido;
- rutas locales inexistentes;
- campos obligatorios ausentes;
- errores de sintaxis.

## HTML, CSS y JavaScript

- Mantener HTML semántico.
- Conservar un único `h1` principal por página.
- Mantener etiquetas alternativas apropiadas en las imágenes.
- Los controles interactivos deben poder utilizarse con teclado.
- Los menús deben comunicar su estado mediante atributos ARIA.
- Los cambios visuales deben revisarse en escritorio y móvil.
- Evitar `innerHTML` con contenido externo o no confiable.
- No retirar CSS aparentemente sin uso sin comprobar antes todas las páginas.
- No dividir archivos ni crear módulos si el beneficio práctico es pequeño.

## Verificación mínima

Después de modificar JavaScript:

```text
node --check script.js
node --check content.js
node --check calendar.js
```

Antes de dar una tarea por terminada:

- ejecutar `git diff --check`;
- comprobar que no haya errores de consola;
- revisar las páginas afectadas;
- comprobar al menos escritorio y móvil si hay cambios visuales;
- confirmar que no aparezca desplazamiento horizontal inesperado;
- verificar teclado y foco si se modifican controles interactivos.

No instalar dependencias solamente para realizar estas comprobaciones.

## Git

- Revisar `git status` antes de modificar archivos.
- Preservar cambios existentes del usuario.
- No descartar ni sobrescribir cambios ajenos.
- Usar ramas con el prefijo `codex/`, salvo indicación contraria.
- No crear commits ni hacer push sin petición o confirmación del usuario.
- Mantener los commits pequeños y con mensajes descriptivos.
- No reescribir el historial de Git.

## Comunicación

- Responder en español.
- Utilizar explicaciones prácticas y lenguaje claro.
- Evitar jerga innecesaria.
- Indicar qué archivos se han modificado.
- Resumir las comprobaciones realizadas.
- Diferenciar entre errores reales, contenido ficticio y mejoras opcionales.
- Antes de introducir una herramienta nueva, explicar qué problema concreto
  resuelve y qué mantenimiento adicional implica.
