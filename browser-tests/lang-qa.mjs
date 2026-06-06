// Language QA for the demos. Catches text left in the wrong language, the exact
// mistake an incomplete localization makes. Run after touching any demo:
//
//   node browser-tests/lang-qa.mjs
//
// Spanish demos live under es/ejemplos and live-demos/es. English ones under
// en/examples and live-demos/en. Each must not contain the other language's
// tell-tale words. Exit code 1 if anything leaks.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// Words that should only ever appear in an English demo.
const EN_TELLS = [
  // ch01
  "two eras", "lines of CSS", "falls back", "the support state",
  "live demos", "hand built", "comes for free", "Pick a fruit",
  "Part of", "Zero JavaScript", "still works", "the old way",
  "styled native select", "once you make it accessible",
  // ch02
  "Animated gradient", "One variable", "light to dark",
  "Drag the slider", "Hover the button", "Hover me",
  "the whole theme", "Verify the support",
  // ch03
  "Green wins", "Layer order beats", "does not leak",
  "In scope", "Nested", "untouched", "no leaks",
  // ch04
  "Dashboard from named", "auto-fit gallery", "no media queries",
  "Resize the window", "watch the columns", "drawn with words",
  // ch05
  "Responsive nav", "Sidebar that stacks", "Side by side when",
  "Sign up", "wrap on their own", "One dimension",
  // ch06
  "Same card, two containers", "Type scales with",
  "narrow one stacks", "First programmer", "the viewport",
  // ch07
  "Short title", "wraps onto two lines", "Footer, aligned",
  "no measuring", "across all three cards", "no JavaScript",
  // ch08
  "validates itself", "Pick a plan", "type to see it react",
  "used to need JavaScript", "Submit",
  // ch09
  "Clean architecture", "no Sass, no BEM", "View source",
  "nested block", "the featured variant", "Standard",
  // ch10
  "any language without rewriting", "Hello world",
  "the start edge, here the left", "share one class",
  // ch11
  "no hand-written indexes", "draws a wave", "Each bar is offset",
  "expected Baseline 2026", "Staggered motion",
  // ch12
  "One color, a whole palette", "color-mix() scale",
  "the second value wins", "all derived from", "one function",
  // ch13
  "Professional type without", "evens the line", "Tabular numbers",
  "digits into columns", "Resize the window to see it scale",
  // ch14
  "used to need SVG", "notched ticket with mask", "Admit one",
  "blended layers", "Gradient border-image", "No images, no SVG",
  // ch15
  "Dropdown from display", "Accordion, no JavaScript", "Account menu",
  "fades and springs in", "Expressive animation",
  // ch16
  "not the clock", "Reveal on enter", "Off the main thread",
  "no scroll listeners", "Scroll down. The bar", "Progress bar",
];
// Words that should only ever appear in a Spanish demo.
const ES_TELLS = [
  // cap01
  "líneas de CSS", "Elige una fruta", "dos épocas", "demos de CSS",
  "hecho a mano", "vienen gratis", "Parte de", "sigue funcionando",
  "Ciruela", "Higo", "a la antigua", "el foco", "select nativo estilizado",
  // cap02
  "Gradiente animado", "Una variable", "claro a oscuro",
  "Arrastra el slider", "Pásame el ratón", "todo el tema",
  "Verifica el", "Sin JavaScript",
  // cap03
  "Gana el verde", "El orden de capa", "no se filtra",
  "En el scope", "Anidado", "sin fugas", "sin tocar",
  // cap04
  "Dashboard con áreas", "Galería auto-fit", "sin media queries",
  "Cambia el ancho", "recolocarse", "dibujado con palabras",
  // cap05
  "Nav responsive", "Barra lateral que se apila", "Crear cuenta",
  "se envuelven solos", "una al lado de otra", "Una dimensión",
  // cap06
  "La misma card, dos contenedores", "La tipografía escala",
  "La estrecha se apila", "Primera programadora", "al viewport",
  // cap07
  "Título corto", "ocupa dos líneas", "Pie, alineado",
  "Sin medir", "en las tres cards", "sin JavaScript",
  // cap08
  "se valida solo", "Elige un plan", "escribe para verlo",
  "antes pedían JavaScript", "Enviar",
  // cap09
  "Arquitectura limpia", "sin Sass, sin BEM", "el código fuente",
  "bloque anidado", "variante destacada", "Estándar",
  // cap10
  "cualquier idioma sin reescribir", "Hola mundo",
  "borde de inicio, aquí la izquierda", "comparten una clase",
  // cap11
  "índices a mano", "dibuja una onda", "Cada barra va desfasada",
  "esperado Baseline 2026", "Movimiento escalonado",
  // cap12
  "Un color, una paleta entera", "Escala con color-mix",
  "gana el segundo valor", "todos derivados de", "una sola función",
  // cap13
  "Tipografía profesional sin", "iguala el largo", "Números tabulares",
  "dígitos en columnas", "míralo escalar",
  // cap14
  "antes pedían SVG", "ticket dentado con mask", "Entrada",
  "capas mezcladas", "Border-image en degradado", "Sin imágenes, sin SVG",
  // cap15
  "Dropdown desde display", "Acordeón, sin JavaScript", "Menú de cuenta",
  "un fundido y un rebote", "Animación expresiva", "Cerrar sesión",
  // cap16
  "no al reloj", "Reveal al entrar", "Fuera del hilo principal",
  "sin listeners de scroll", "Baja con el scroll", "Barra de progreso",
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules") continue;
      out.push(...walk(p));
    } else if (name.endsWith(".html")) {
      out.push(p);
    }
  }
  return out;
}

function check(globDir, forbidden, forbiddenLabel, fileLang) {
  let problems = 0;
  let files = 0;
  for (const file of walk(join(ROOT, globDir))) {
    files++;
    const text = readFileSync(file, "utf-8");
    const hits = forbidden.filter((w) => text.includes(w));
    if (hits.length) {
      problems += hits.length;
      console.log(`\n  ${file.replace(ROOT, "")}`);
      for (const h of hits) console.log(`    leaked ${forbiddenLabel}: "${h}"`);
    }
    // lang attribute sanity: the file must declare its own language
    const wantLang = `lang="${fileLang}"`;
    if (!text.includes(wantLang)) {
      problems++;
      console.log(`\n  ${file.replace(ROOT, "")}`);
      console.log(`    missing ${wantLang}`);
    }
  }
  return { problems, files };
}

console.log("Language QA for demos");
// Spanish folders must not contain English tells, and must declare lang="es".
const es1 = check("es/ejemplos", EN_TELLS, "English", "es");
const es2 = check("live-demos/es", EN_TELLS, "English", "es");
// English folders must not contain Spanish tells, and must declare lang="en".
const en1 = check("en/examples", ES_TELLS, "Spanish", "en");
const en2 = check("live-demos/en", ES_TELLS, "Spanish", "en");

const total = es1.problems + es2.problems + en1.problems + en2.problems;
const files = es1.files + es2.files + en1.files + en2.files;
console.log(`\nScanned ${files} demo file(s). ${total} language problem(s).`);
process.exit(total ? 1 : 0);
