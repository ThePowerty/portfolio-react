---
version: alpha
name: "Williams Infanzón Fernández Portfolio"
description: "Portfolio técnico-editorial para presentar el perfil backend y full-stack de Williams, con Java y Spring como especialidad."
colors:
  primary: "#4FE0BE"
  ink: "#0E192B"
  surface: "#121F33"
  surface-strong: "#17263D"
  text: "#F7F9FF"
  text-muted: "#A9B8CC"
  accent: "#4FE0BE"
  accent-soft: "#93F0DA"
  border: "#2D435F"
  success: "#62D6A2"
  danger: "#FF7A90"
typography:
  sans:
    fontFamily: "Manrope, Arial, sans-serif"
  mono:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
rounded:
  DEFAULT: "0.75rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.5rem"
spacing:
  section-gap: "7rem"
  page-max: "74rem"
components:
  button: {}
  navigation: {}
  project-case: {}
  form: {}
---

# Williams Infanzón Fernández Portfolio Design System

## Overview

### Creative North Star

Un cuaderno de arquitectura de software convertido en portfolio: superficies oscuras, trazas de petición, anotaciones monoespaciadas y una jerarquía editorial precisa. Debe sentirse como el trabajo de alguien que entiende sistemas, no como una plantilla SaaS.

### Product context and register

- **Audience and primary job:** responsables de contratación y equipos técnicos que necesitan entender en segundos la especialidad, el criterio y el trabajo demostrable de Williams.
- **Target market(s) and evidence:** España y oportunidades remotas; el contenido existente sitúa al perfil en Madrid.
- **Locale(s) and language policy:** español como idioma único de la interfaz. El inglés se reserva para nombres oficiales de tecnologías.
- **Usage scene:** revisión rápida desde portátil o móvil, habitualmente desde LinkedIn, un CV o una candidatura.
- **Register:** marca profesional personal.
- **Memorable signature:** una traza visual de la consulta de seguimiento de Yomio, desde el cliente hasta los datos del usuario.
- **Restraint:** navegación, formularios y lectura de casos deben ser silenciosos, directos y familiares.
- **Anti-references:** carruseles de logos, mosaicos de tarjetas genéricas, neón multicolor, sombras pesadas y texto aspiracional sin evidencia.
- **Token ownership/runtime mapping:** las variables CSS de `src/index.css` son la fuente runtime canónica. Este documento refleja sus valores aceptados; los componentes consumen exclusivamente variables semánticas.

## Colors

`ink` es el lienzo principal. `surface` y `surface-strong` separan profundidad sin sombras ornamentales. `accent` identifica acciones, foco y la traza técnica; no se usan degradados. `success` y `danger` quedan reservados para estados del formulario. Texto principal y secundario mantienen contraste WCAG AA.

La identidad se apoya en el monograma `W›`, azul marino y verde turquesa. Los recursos canónicos viven en `public/marca`: `logo-fondo-oscuro.png` para esta interfaz, `logo-fondo-claro.png` para soportes claros, iconos PWA, favicons y la imagen social Open Graph.

## Typography

Manrope comunica con claridad y suficiente carácter en nombre, titulares y cuerpo. IBM Plex Mono identifica tecnologías, rutas, etiquetas y detalles de arquitectura. Los párrafos se limitan a unas 65–72 letras y se escribe en sentence case.

## Layout

Contenedor máximo de 74rem, gutters fluidos y secciones separadas por 7rem. El hero ocupa el primer viewport descontando la navegación. Los casos de estudio alternan texto y visual técnico; en móvil se convierten en una sola columna sin perder acciones.

## Elevation & Depth

La jerarquía se construye con tono, borde y espacio. No hay sombras en contenido estático. La navegación puede usar desenfoque al quedar fija; el modal no forma parte de la experiencia principal.

## Shapes

Controles con radio de 0.75rem; superficies editoriales grandes con 1.5rem. Las etiquetas técnicas no usan píldoras decorativas: son texto monoespaciado separado por puntos o divisores.

## Components

### Foundational visual states

Todo control define estado base, hover, focus-visible, active y disabled/busy. El foco usa `accent-soft` con separación visible. Los estados de éxito y error combinan color con texto explícito.

### Buttons and actions

La acción primaria es sólida en `accent`; la secundaria es transparente con borde. Mantienen geometría durante el envío y usan verbos concretos: “Ver proyectos”, “Descargar CV”, “Enviar mensaje”.

### Navigation and data display

La navegación es compacta, fija y accesible. En móvil usa un botón real con `aria-expanded`; al elegir destino, el panel se cierra y devuelve el scroll al documento.

### Forms and overlays

Campos con etiquetas persistentes, errores asociados mediante ARIA y resultado inline. No se usan diálogos nativos del navegador. El textarea no es redimensionable y el envío bloquea duplicados.

### Iconography

Se prefieren símbolos CSS y texto. Los enlaces externos muestran una flecha textual; ningún icono sustituye una etiqueta necesaria.

### Motion

Entrada del hero de 650ms, pulso de traza de 2.8s y revelado progresivo de casos. `prefers-reduced-motion` elimina animación y desplazamiento suave.

### Content and data visualization

La voz es específica y verificable. Cada caso explica problema, enfoque y tecnología sin inventar métricas. Los diagramas son alternativas visuales al contenido, nunca la única fuente de significado.

## Do's and Don'ts

- **Do:** demostrar especialidad backend mediante decisiones y arquitectura reales.
- **Do:** mantener español coherente y nombres oficiales de tecnologías.
- **Don't:** convertir tecnologías en una nube de logos sin contexto.
- **Don't:** usar degradados, sombras o movimiento como sustituto de jerarquía.
