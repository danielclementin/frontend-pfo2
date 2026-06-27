# PRÁCTICA FORMATIVA OBLIGATORIA 2

## PROMPT ENGINEERING EN AGENTES DE IA

### Datos del estudiante

**Daniel Clementín**
**Comisión: D**

### Contexto del Proyecto

**Pulse Agency** – Landing Page para una agencia de marketing digital ficticia.

### Breve explicación del proyecto

Se diseñó y utilizó un único prompt inicial con especificaciones funcionales, visuales y técnicas para generar una Landing Page moderna, responsiva y orientada a la conversión. El mismo prompt fue ejecutado en distintos agentes de desarrollo para evaluar su capacidad de interpretación, generación de código y resolución autónoma.

### Agentes de desarrollo seleccionados

* **Codex** — Modelo GPT-5.5
* **Claude** — Modelo Claude Sonnet

### Link al deploy unificado

*(Completar con la URL del proyecto desplegado.)*

## Prompt exacto utilizado:

### Rol
Actuás como desarrollador front-end senior con especialización en diseño web moderno, UI/UX y experiencia de usuario. Tu misión es construir una landing page profesional, visualmente distintiva y completamente lista para desplegar — sin intervención humana posterior.

### Contexto del proyecto
La landing page es para una agencia de marketing digital ficticia llamada "Pulse Agency". La empresa ofrece servicios de branding, gestión de redes sociales y campañas de performance. El público objetivo son pequeñas y medianas empresas que buscan crecer en el mundo digital. El tono debe ser moderno, dinámico y confiable.

### Restricción crítica
Esta generación ocurre en un entorno de evaluación con restricción estricta: **no habrá intervención humana ni se modificará el código manualmente después de tu respuesta**. Está terminantemente prohibido:
- Dejar secciones incompletas o con marcadores de posición ("agrega tu código aquí", "// TODO", etc.)
- Usar comentarios que impliquen que el usuario debe completar algo
- Omitir estilos, secciones o contenido bajo ninguna excusa

Todo el HTML, CSS y JavaScript debe estar 100% completo, integrado y funcional desde el primer intento.

### Tarea
Generá una landing page de una sola página (single page) usando únicamente HTML5 semántico, CSS3 moderno y JavaScript vanilla. Sin frameworks, sin librerías externas, sin dependencias de build. El sitio debe poder abrirse directamente haciendo doble clic en `index.html` y verse perfectamente.

### Secciones obligatorias (en este orden exacto)
1. **Header**: barra de navegación fija en la parte superior con el logo "Pulse Agency" a la izquierda y un menú con enlaces ancla a cada sección (Inicio, Sobre Nosotros, Servicios, Testimonios, Contacto). En mobile, el menú debe colapsar en un botón hamburguesa funcional con animación de apertura/cierre.
2. **Hero Section**: título impactante, subtítulo descriptivo y un botón de llamada a la acción (CTA) bien visible con efecto hover. Fondo visualmente atractivo (puede ser un gradiente, una forma geométrica o un patrón sutil).
3. **Sobre Nosotros**: descripción de la agencia, filosofía de trabajo, y al menos 3 datos destacados (ej: "150+ clientes", "8 años de experiencia", "320 campañas exitosas") presentados de forma visual.
4. **Servicios**: mínimo 3 tarjetas (cards), cada una con un ícono SVG o emoji, título y descripción breve. Layout en grid responsivo.
5. **Testimonios**: mínimo 3 reseñas de clientes simulados, con nombre, cargo/empresa y texto del testimonio. Diseño visual diferenciado del resto de la página.
6. **Formulario de contacto**: campos para nombre, email, asunto y mensaje, más un botón de envío estilizado. Solo maquetado visual, sin lógica de backend. Los inputs deben tener estilos consistentes con la identidad visual.
7. **Footer**: nombre de la agencia, texto de copyright simulado, y enlaces a redes sociales (Twitter/X, Instagram, LinkedIn) representados con íconos SVG inline o texto estilizado.

### Requisitos de diseño
- Diseño moderno, limpio y con personalidad propia. Evitá explícitamente el aspecto genérico de plantilla.
- Totalmente responsive con enfoque mobile-first. Debe verse bien en mobile (360px), tablet (768px) y desktop (1280px+).
- Paleta de colores coherente y profesional: elegí una paleta de 4 a 6 colores con intención, que refleje energía y confianza.
- Tipografía cuidada: podés importar fuentes de Google Fonts. Usá al menos 2 fuentes con roles distintos (display y cuerpo).
- Animaciones y transiciones sutiles: scroll suave entre secciones, efectos hover en botones y cards, y al menos una animación de entrada en el Hero.
- Jerarquía visual clara: el espaciado, los tamaños y los pesos tipográficos deben guiar la lectura de forma natural.

### Requisitos técnicos
- Entregá el código en tres archivos separados: `index.html`, `styles.css` y `script.js`.
- El archivo `index.html` debe enlazar correctamente `styles.css` y `script.js`.
- No uses CDN ni recursos externos que requieran conexión, excepto Google Fonts (mediante `@import` en el CSS o `<link>` en el HTML).
- Código limpio, ordenado y con comentarios de sección en los bloques principales.
- El sitio debe ser completamente funcional al abrir `index.html` directamente en el navegador.

### Formato de salida
Generá los tres archivos en orden: primero `index.html`, luego `styles.css`, luego `script.js`. Antes de cada archivo, indicá claramente su nombre. Al finalizar, listá brevemente los archivos generados y cómo abrir el sitio.

## Capturas de pantalla

### Agente Claude
<img width="1895" height="836" alt="5" src="https://github.com/user-attachments/assets/7d572765-d24f-47ae-88b6-345440c5f5d4" />
<img width="1888" height="843" alt="4" src="https://github.com/user-attachments/assets/12faefff-534a-4180-a79e-382ebb674a8b" />
<img width="1458" height="835" alt="3" src="https://github.com/user-attachments/assets/29ad99b5-8789-429b-827f-3ddf034c3742" />
<img width="1891" height="835" alt="2" src="https://github.com/user-attachments/assets/fad0b243-dfd0-46ac-b69c-5186e0d90705" />
<img width="1372" height="811" alt="1" src="https://github.com/user-attachments/assets/28c399f9-cb81-419c-acf6-e78a8bfd7da0" />


### Agente Codex
<img width="1186" height="833" alt="5" src="https://github.com/user-attachments/assets/6762dd5e-21c2-4fae-9f76-a0f999f4085e" />
<img width="1193" height="774" alt="4" src="https://github.com/user-attachments/assets/cf539570-3db3-4c88-9c1b-3708716753dd" />
<img width="1306" height="753" alt="3" src="https://github.com/user-attachments/assets/5ea631bd-bc88-4802-ac9d-9a4012420041" />
<img width="1336" height="750" alt="2" src="https://github.com/user-attachments/assets/fe88e907-39e9-4319-8442-41be7fa652da" />
<img width="1854" height="838" alt="1" src="https://github.com/user-attachments/assets/b7a2a52c-3f64-48a0-9a74-9104acd22601" />



