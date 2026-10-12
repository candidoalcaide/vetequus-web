# Decisiones del proyecto

## Respuestas de Aída (12/10/2026)

1. **Aviso legal**
   - Nombre: Aída Montserrat Huertas Domínguez
   - NIF: 74832065R
   - Domicilio: Finca La Capellanía, 29150, Málaga
   - Colegiada n.º 291102, Colegio Oficial de Veterinarios de Málaga. Licenciada en Veterinaria (Universidad de Córdoba, España)
2. **Teléfono y WhatsApp profesional:** 669 937 061 (+34). Será el canal principal de contacto.
3. **Formularios:** apenas se usan, pero Aída prefiere **mantener el de contacto, mejorado**. Se elimina la suscripción.
   - Convive con los botones de llamar, WhatsApp y email (canal principal).
   - Campos: nombre, teléfono, email, localidad, tipo de consulta y mensaje (se quita "dirección"; se pide localidad para valorar el desplazamiento).
   - Todo en español, casilla de aceptación de la política de privacidad (RGPD), protección antispam y mensaje de confirmación.
   - Envío a vetequus@gmail.com mediante un servicio gratuito (Web3Forms, Formspree o Netlify Forms).
4. **Contenidos (servicios, horario, zona, formación):** se migran tal cual; se actualizarán más adelante. Solo se corrigen erratas evidentes.
5. **Google Business Profile:** no tiene. → Pendiente para después de la migración (gratis y muy útil para búsquedas locales).
6. **Email público:** vetequus@gmail.com por ahora; más adelante, uno corporativo.
   - Google Workspace del dominio: parece obsoleto (no se paga ni por Wix ni, al parecer, a Google). No merece la pena pagarlo.
   - En el cambio de DNS: **quitar los MX de Google** y activar el **reenvío gratuito de Cloudflare Email Routing** (p. ej. info@ y aida@vetequus.com → vetequus@gmail.com).
   - Más adelante, si quiere enviar como @vetequus.com: Zoho Mail Lite (~1 €/mes).
   - Plan de Wix actual: Premium Light.
7. **Fotos nuevas:** más adelante. → Se usan las fotos actuales.
8. **Mantenimiento de la web:** lo gestiona Cándido. → No hace falta panel de edición (CMS).

## Enfoque

Prioridad: **migración fiel y rápida**, con un diseño limpio que mantenga la identidad actual (logo, colores, fotos) y arregle los problemas detectados (carrusel de servicios, erratas, textos legales, móvil).

## Estado (12/10/2026)

- Web nueva hecha con Astro en `~/Proyectos/vetequus-web` (fuera de iCloud: Documentos sincronizado hacía inviable el desarrollo).
- Código en GitHub: `candidoalcaide/vetequus-web` (privado). Cada `git push` publica automáticamente.
- Web de prueba: https://vetequus-web.candidoalcaide.workers.dev (Cloudflare Workers).
- Comprobado en la web de prueba: todas las páginas, la 404 propia y las redirecciones 301 de las URLs antiguas `/post/...` de Wix.
- vetequus.com sigue apuntando a Wix; el correo no se ha tocado.

## Pendiente

1. Revisión de Aída (sobre todo los textos legales; conviene que los vea su gestoría).
2. Clave de Web3Forms (web3forms.com con vetequus@gmail.com) → `web3formsKey` en `src/site.ts`.
3. Cambio de dominio:
   - Añadir vetequus.com en Cloudflare (plan Free) y revisar los registros DNS importados.
   - Quitar los MX de Google y activar Email Routing → vetequus@gmail.com.
   - Cambiar los nameservers en WordPress.com (ahora `ns8/ns9.wixdns.net`) por los de Cloudflare.
   - Asociar vetequus.com y www.vetequus.com al Worker `vetequus-web`.
   - Dar de alta la web en Google Search Console y enviar el sitemap.
4. Cancelar el plan Premium Light de Wix 1–2 semanas después del cambio, sin dejar que se renueve.
5. Después: ficha de Google Business Profile; valorar trasladar el dominio a Cloudflare Registrar antes del 29/04/2027.
