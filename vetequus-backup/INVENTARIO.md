# Inventario de vetequus.com (Wix)

Revisado el 12/10/2026. Esta carpeta contiene una copia completa del contenido para no depender de Wix.

```
vetequus-backup/
├── INVENTARIO.md            ← este documento
├── contenido/
│   ├── portada.md           ← todos los textos de la página principal
│   └── blog/                ← los 8 artículos, en Markdown
├── imagenes/
│   ├── home/  (7)           ← logos y fotos de la portada, a resolución original
│   └── blog/  (30)          ← fotos de los artículos
└── descargar_imagenes.py    ← vuelve a descargar las imágenes si hiciera falta
```

## 1. Infraestructura actual

| Pieza | Proveedor | Notas |
|---|---|---|
| Dominio `vetequus.com` | **WordPress.com** (Automattic) | Caduca el **29/04/2027**. No hace falta transferirlo. |
| DNS | Wix (`ns8/ns9.wixdns.net`) | Hay que moverlos (p. ej. a Cloudflare) antes de cancelar Wix. |
| Correo | Google Workspace (MX `aspmx.l.google.com`) | Copiar los 5 registros MX tal cual. **Sin SPF/DKIM/DMARC** (ver §5). |
| Web | Wix | Plan de pago, en principio lo único que se elimina. |
| Email de contacto en la web | `vetequus@gmail.com` | Ojo: es Gmail, no el correo del dominio. |

## 2. Estructura del sitio

Es una web de **una sola página + blog**:

| URL | Contenido |
|---|---|
| `/` | Portada: presentación, 8 servicios (carrusel), "Sobre mí", horario, zona de trabajo, formulario de contacto |
| `/blog` | Listado de entradas |
| `/post/…` | 8 artículos, todos de feb. 2019 |

### Secciones de la portada
1. **Cabecera**: logo y menú (Inicio, Blog)
2. **Hero**: "VETEQUUS – Servicios veterinarios", texto de presentación y foto de caballo tordo
3. **Servicios**: carrusel de 8 diapositivas: Medicina general · Medicina deportiva · Reproducción asistida y neonatología · Odontología · Diagnóstico por imagen · Exámenes precompra · Medicina preventiva · Identificación equina y gestión de documentos
4. **Sobre mí**: biografía de Aída (colegiada 291102, Certificado Español en Clínica Equina 2019, etc.)
5. **Horario**: L-V 10–18 h; sábados, domingos y festivos solo urgencias
6. **Áreas de trabajo**: provincia de Málaga y alrededores, con mapa de Andalucía
7. **Formulario de contacto**: nombre, dirección, email, teléfono, asunto, mensaje
8. **Pie**: suscripción por email, teléfono 669 937 061, Facebook, Instagram, widgets de últimas entradas del blog y feed de Instagram

### Artículos del blog

Las visitas son las que muestra Wix. Hay tráfico real desde Google, así que **las URLs deben conservarse o redirigirse**.

| Artículo | Visitas | Archivo |
|---|---:|---|
| Los aplomos del caballo: parte 1, miembros anteriores | 4.019 | `los-aplomos-del-caballo-parte-1-miembros-anteriores.md` |
| Genética de capas en los caballos | 2.048 | `genetica-de-capas-en-los-caballos.md` |
| Los aplomos del caballo: parte 2, miembro posterior | 1.923 | `los-aplomos-del-caballo-parte-2-miembro-posterior.md` |
| Infección por Rhodococcus equi | 191 | `infeccion-por-rhodococcus-equi.md` |
| El cólico en el caballo: los síntomas | 42 | `el-colico-en-el-caballo-los-sintomas.md` |
| El cólico en el caballo: cómo reaccionar | — | `el-colico-en-el-caballo-como-reaccionar.md` |
| Determinación de la edad según la dentición | — | `determinacion-edad-caballo-denticion.md` |
| El parto de la yegua | — | `el-parto-de-la-yegua.md` |

(Las tres últimas no aparecían en la primera página del listado.)

## 3. Funcionalidad dinámica que hay que sustituir

| En Wix | Sustituto propuesto (gratis) |
|---|---|
| Formulario de contacto | Netlify Forms / Formspree / Web3Forms, que envían un email a Aída. También se puede simplificar a botones de llamar, WhatsApp y email. |
| Formulario de suscripción del pie | Probablemente nadie lo usa: **eliminar**, salvo que Aída envíe boletines. |
| Widget del feed de Instagram | Enlace o botón a Instagram. Los feeds embebidos son lentos y suelen romperse. |
| Widget de últimas entradas del blog | Se genera solo con el generador estático. |
| Likes, contadores de visitas y comentarios del blog | Eliminar (había 0 comentarios). |

## 4. Problemas detectados en la web actual

**Legales (importante para una autónoma):**
- ❌ **No hay aviso legal** (obligatorio por la LSSI: nombre, NIF, domicilio, colegio profesional y n.º de colegiada).
- ❌ **No hay política de privacidad**, y el formulario recoge datos personales (RGPD).
- ❌ **No hay política de cookies**, y Wix instala cookies de terceros.

**Contenido y erratas:**
- "Teféfono" en un botón; "entiendemos"; "Tenemosla"; "ampliar *sus* conocimientos" y "completé *su* formación" (cambio de persona en la biografía).
- El formulario está a medias en inglés: "Submit", "Type your message here...".
- Pie de página: "©2019 by Vetequus. Proudly created with Wix.com".
- Mezcla de "usted" y "tú" en el tono.
- En *Genética de capas*, ejemplo 2: el genotipo de la yegua (CCr) no coincide con la explicación (CrCr / Cremella). Conviene que lo revise Aída.
- En *Genética de capas* falta una foto ("Capa negra") que ya no carga ni en Wix.
- Los servicios están escondidos en un carrusel: solo se ve el primero y Google y los usuarios apenas ven el resto.

**SEO y visibilidad:**
- No existen páginas por servicio ni para "veterinario equino + localidad" (Marbella, Ronda, Antequera, Coín, etc.).
- No hay dirección ni datos estructurados de negocio local (`LocalBusiness` / `VeterinaryCare`).
- No hay enlace a la ficha de Google Business (habría que comprobar si existe).

## 5. Correo: mejora recomendada

El dominio no tiene registros **SPF, DKIM ni DMARC**. Desde 2024 Gmail y Outlook los exigen cada vez más, y sin ellos los emails de @vetequus.com pueden acabar en spam. Se arregla en 10 minutos al migrar las DNS:
- SPF: `v=spf1 include:_spf.google.com ~all`
- DKIM: se genera en la consola de Google Workspace
- DMARC: `v=DMARC1; p=none; rua=mailto:…`

## 6. Mapa de redirecciones (para no perder posicionamiento)

Si mantenemos las mismas URLs no hace falta nada. Si se usan URLs nuevas, más limpias y sin tildes:

```
/post/conceptos-básicos-sobre-la-determinación-de-la-edad-del-caballo-según-su-dentición  →  /blog/edad-caballo-denticion
/post/infección-por-rhodococcus-equi                       →  /blog/rhodococcus-equi
/post/genetica-de-capas-en-los-caballos                    →  /blog/genetica-de-capas
/post/el-colico-en-el-caballo-los-sintomas                 →  /blog/colico-sintomas
/post/el-cólico-en-el-caballo-cómo-reaccionar              →  /blog/colico-como-reaccionar
/post/los-aplomos-del-caballo-parte-1-miembros-anteriores  →  /blog/aplomos-miembros-anteriores
/post/los-aplomos-del-caballo-parte-2-miembro-posterior    →  /blog/aplomos-miembros-posteriores
/post/el-parto-de-la-yegua                                 →  /blog/parto-yegua
```

## 7. Propuesta de nueva estructura

```
/                     Portada: quién es, servicios en rejilla (no carrusel), zona, CTA llamar/WhatsApp
/servicios/<x>        Una página por servicio (opcional, mejora mucho el SEO local)
/sobre-mi             Biografía y formación
/zona-de-trabajo      Localidades atendidas (SEO local)
/blog                 Artículos
/contacto             Teléfono, WhatsApp, email, horario, formulario
/aviso-legal  /privacidad  /cookies
```

**Pila técnica recomendada:** Astro (blog en Markdown, que ya tenemos) + Cloudflare Pages (hosting y DNS gratis) + Web3Forms o Formspree para el formulario. Sin cookies de terceros, así que no hace falta banner.

## 8. Pendiente de confirmar con Aída

1. NIF y domicilio profesional para el aviso legal (¿le vale el domicilio fiscal?).
2. ¿Tiene WhatsApp profesional en el 669 937 061? Es el canal más natural para su clientela.
3. ¿Usa el formulario de suscripción o el de contacto? ¿Le llegan mensajes?
4. ¿Sigue vigente todo lo que dice? Servicios, horario, zona y formación: el texto es de 2019 y quizá haya novedades.
5. ¿Tiene ficha en Google Business Profile?
6. ¿Prefiere `vetequus@gmail.com` o un correo del dominio como contacto público?
7. ¿Fotos más recientes de su trabajo? Son lo que más mejora el diseño.
8. ¿Quiere poder editar ella misma (blog, horarios) o lo gestionas tú?
