// Textos de la web en español e inglés.
// Al cambiar un texto, cambiarlo en los dos idiomas. El inglés es británico (en-GB).
// Los datos del negocio (teléfono, NIF, etc.) están en site.ts.

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

/** Rutas equivalentes en cada idioma (para el selector de idioma y hreflang). */
export const RUTAS = {
  inicio: { es: '/', en: '/en' },
  avisoLegal: { es: '/aviso-legal', en: '/en/legal-notice' },
  privacidad: { es: '/privacidad', en: '/en/privacy' },
  cookies: { es: '/cookies', en: '/en/cookies' },
} as const;

const es = {
  htmlLang: 'es',
  ogLocale: 'es_ES',
  langName: 'Español',
  switchLabel: 'Cambiar idioma',
  invitacionIngles: { texto: 'We speak English', enlace: 'English version' },

  nav: { servicios: 'Servicios', sobreMi: 'Sobre mí', blog: 'Blog', contacto: 'Contacto', home: 'Vetequus, inicio', principal: 'Principal' },
  llamar: 'Llamar',
  llamarAl: 'Llamar al',

  meta: {
    title: 'Vetequus · Veterinaria de caballos en Málaga y provincia',
    description: 'Clínica ambulante equina de Aída Huertas. Medicina general y deportiva, reproducción, odontología, diagnóstico por imagen, exámenes precompra y documentación en Málaga y provincia.',
  },

  hero: {
    eyebrow: 'Clínica ambulante equina',
    title: 'Veterinaria de caballos en Málaga y provincia',
    lead: 'Hemos hecho de nuestra pasión, los caballos, nuestra profesión. Vamos a su cuadra para que su caballo se mantenga sano, atlético y feliz.',
    imgAlt: 'Caballo tordo con cabezada en el campo',
    badgeTitle: 'Atendemos en su cuadra',
    badgeText: 'Provincia de Málaga y alrededores',
    credentials: [
      { b: 'Desde 2005', span: 'cuidando caballos en Málaga' },
      { b: 'Col. 291102', span: 'Colegio de Veterinarios de Málaga' },
      { b: 'Certificado', span: 'Español en Clínica Equina (2019)' },
    ],
  },

  servicios: {
    eyebrow: 'Servicios',
    title: 'El mejor cuidado posible, y cariño para su caballo',
    lead: 'Atendemos en su cuadra o finca. Pulse en cada servicio para ver el detalle.',
    mas: 'Más información',
    items: [
      { nombre: 'Medicina general', resumen: 'Problemas digestivos, respiratorios, dermatológicos y de medicina interna.', detalle: 'La base de la veterinaria equina es la medicina general. Estamos disponibles para cualquier consulta y sobre todo las relacionadas con la medicina interna. Ya sean problemas digestivos, respiratorios, dermatológicos o de cualquier otro tipo, no dude en ponerse en contacto con nosotros para concertar una cita y realizar un estudio detallado de cualquier problema que ataña a su caballo.' },
      { nombre: 'Medicina deportiva', resumen: 'Diagnóstico de cojeras y de problemas de rendimiento.', detalle: 'Cada día la exigencia de rendimiento de nuestros caballos es más alta, y deben contar con la ayuda de un veterinario que les ayude a mostrar su máximo potencial. Ofrecemos servicios de diagnóstico de cojeras, ecografía, radiología digital y diagnóstico de problemas de rendimiento.' },
      { nombre: 'Reproducción y neonatología', resumen: 'Ginecología, andrología, obstetricia, inseminación y transferencia embrionaria.', detalle: 'Ofertamos amplios servicios de ginecología, andrología y obstetricia. Además de diagnóstico y control de gestación, diagnóstico de problemas ginecológicos e inseminación artificial, hemos incorporado la extracción, valoración, refrigeración y comercialización de semen refrigerado y el trasplante embrionario.' },
      { nombre: 'Odontología', resumen: 'Cuidado dental preventivo para resolver los problemas a tiempo.', detalle: 'Incluso si su caballo está sano, el cuidado dental de los équidos es esencial. Si se detectan a tiempo, hay problemas que se pueden resolver de manera rápida y económica. Por eso en Vetequus estamos comprometidos con el cuidado preventivo.' },
      { nombre: 'Diagnóstico por imagen', resumen: 'Radiología digital y ecografía en la propia cuadra.', detalle: 'La radiología digital y la ecografía nos permiten abordar de manera completa diversas patologías para su diagnóstico y tratamiento: diagnóstico de cojeras, control y seguimiento de patologías del aparato locomotor, evaluación de infosuras/laminitis, cuidados ortopédicos, evaluación reproductiva…' },
      { nombre: 'Exámenes precompra', resumen: 'Valoración completa en estático y en movimiento antes de comprar.', detalle: 'El examen precompra permite conocer la salud actual del caballo para su valoración por parte de vendedor y comprador. Incluye pruebas en estático (aparato digestivo, respiratorio, cutáneo, oftalmológico, odontológico, palpación y valoración de miembros, dorso y cuello) y en movimiento (pruebas de flexión, valoración de cojeras, pruebas de esfuerzo), apoyadas por reconocimiento radiológico, pruebas de laboratorio ante cualquier sospecha y exámenes reproductivos en animales destinados a la cría.' },
      { nombre: 'Medicina preventiva', resumen: 'Vacunación, desparasitación, nutrición y manejo.', detalle: 'Asesoramiento para la prevención de todo tipo de enfermedades. Programas de vacunación y desparasitación frente a las enfermedades infecciosas más frecuentes (influenza, tétanos, fiebre del Nilo Occidental…). Medidas nutricionales, odontológicas y de manejo para prevenir problemas digestivos (cólicos), respiratorios y alérgicos. La prevención es la mejor herramienta para ahorrar dinero y salvaguardar la salud de nuestros animales.' },
      { nombre: 'Identificación y documentación', resumen: 'Microchip, pasaporte/DIE, cambios de titularidad y transporte.', detalle: 'Elaboración de reseñas, implantación de microchip y gestión de los trámites del pasaporte/DIE, cambios de propietario, documentación para el transporte de équidos y libros de explotación. Tenemos la mejor relación con las administraciones y las asociaciones de ganaderos para agilizar todas sus gestiones.' },
    ],
  },

  horario: {
    eyebrow: 'Horario de servicio',
    title: 'Llámenos y concierte su cita',
    filas: [
      { dias: 'Lunes a viernes', horas: '10:00 – 18:00' },
      { dias: 'Sábados, domingos y festivos', horas: 'Guardia de urgencias para pacientes habituales' },
    ],
    nota: 'Fuera del horario laborable, solo atendemos urgencias de los caballos que son pacientes habituales de la clínica.',
    resumen: 'Lunes a viernes, 10:00–18:00. Fuera de horario, urgencias solo para pacientes habituales.',
  },

  sobreMi: {
    eyebrow: 'Sobre mí',
    imgAlt: 'Aída Huertas abrazada a su caballo Coquito',
    caption: 'Aída con Coquito',
    intro: 'Nací en una familia que se ha dedicado con pasión a la cría de caballos, lo que me dio acceso a los conocimientos de cría, mejora y selección de ganado equino. En 2006 decidí comenzar a trabajar de forma autónoma como clínica ambulante equina, y desde entonces ofrezco mis servicios sin descuidar la formación continua.',
    cv: [
      { year: '2003', text: 'Licenciada en Veterinaria por la Universidad de Córdoba' },
      { year: '2006', text: 'Inicio de Vet-Equus Servicios Veterinarios, clínica ambulante equina' },
      { year: '2019', text: 'Certificado Español en Clínica Equina, primera promoción' },
      { year: 'Col.', text: 'N.º 291102 del Colegio de Veterinarios de Málaga' },
      { year: '+', text: 'Posgrado en Medicina Interna Equina (UAB) y MBA (ESIC)' },
    ],
    masTitulo: 'Formación y trayectoria completa',
    mas: [
      'Durante mis estudios fui alumna interna de Etnología, Etología y Radiología, y del Hospital Clínico Veterinario de la Universidad de Córdoba. En vacaciones hice prácticas en hospitales europeos como el Hospital Equinia (Noorderwijk, Bélgica).',
      'Después realicé el internado en el Centro Policlínico Veterinario San Vicente del Raspeig bajo la supervisión del Dr. Manuel Alejandro Rodríguez, donde completé mi formación en reproducción equina, clínica ambulante, cuidados intensivos y cirugía. Más tarde realicé estancias en hospitales de referencia como el Hospital Clínico Veterinario de la Universidad Autónoma de Barcelona, el Hospital De Morette (Bélgica), el Animal Health Trust (Reino Unido) y el Three Counties Equine Hospital (Reino Unido).',
    ],
    firma: 'Siempre con ilusión, cariño y ganas de seguir aprendiendo.',
  },

  blog: {
    eyebrow: 'Blog',
    title: 'Artículos para propietarios',
    nota: '',
    verTodos: (n: number) => `Ver los ${n} artículos`,
  },

  contacto: {
    eyebrow: 'Contacto',
    title: 'Hablemos de su caballo',
    lead: 'Si su caballo es paciente habitual y tiene una urgencia, llame o escriba por WhatsApp.',
    telefono: 'Teléfono y WhatsApp',
    email: 'Email',
    zona: 'Zona de trabajo',
    zonaTexto: 'Provincia de Málaga y zonas colindantes. Consúltenos para otras zonas.',
    horario: 'Horario',
  },

  form: {
    title: 'Escríbanos',
    nombre: 'Nombre',
    localidad: 'Localidad',
    localidadAyuda: '(dónde está el caballo)',
    telefono: 'Teléfono',
    email: 'Email',
    tipo: 'Tipo de consulta',
    tipoPlaceholder: 'Seleccione una opción',
    otro: 'Otro',
    mensaje: 'Mensaje',
    noRellenar: 'No rellenar',
    privacidadAntes: 'He leído y acepto la',
    privacidadEnlace: 'política de privacidad',
    nota: 'Déjenos un teléfono o un email para poder responderle. El formulario no es para urgencias: si su caballo es paciente habitual, llámenos.',
    enviar: 'Enviar mensaje',
    enviando: 'Enviando…',
    errNombre: 'Escriba su nombre.',
    errContacto: 'Déjenos un teléfono o un email para poder responderle.',
    errMensaje: 'Escriba su mensaje.',
    errPrivacidad: 'Debe aceptar la política de privacidad.',
    ok: 'Mensaje enviado. Le responderemos en horario laborable.',
    errEnvio: 'No se ha podido enviar el mensaje. Llámenos o escríbanos por WhatsApp al',
  },

  footer: {
    descripcion: 'Clínica ambulante equina de Aída Huertas Domínguez, veterinaria colegiada n.º 291102.',
    contacto: 'Contacto',
    zona: 'Provincia de Málaga y zonas colindantes',
    siganos: 'Síganos',
    avisoLegal: 'Aviso legal',
    privacidad: 'Privacidad',
    cookies: 'Cookies',
  },

  legal: { eyebrow: 'Información legal', actualizado: 'Última actualización', nota: '' },
};

type Textos = typeof es;

const en: Textos = {
  htmlLang: 'en-GB',
  ogLocale: 'en_GB',
  langName: 'English',
  switchLabel: 'Change language',
  invitacionIngles: { texto: '', enlace: '' },

  nav: { servicios: 'Services', sobreMi: 'About me', blog: 'Blog', contacto: 'Contact', home: 'Vetequus, home', principal: 'Main' },
  llamar: 'Call',
  llamarAl: 'Call',

  meta: {
    title: 'Vetequus · Equine vet in Málaga and the Costa del Sol',
    description: 'Ambulatory equine vet Aída Huertas. General and sports medicine, reproduction, dentistry, diagnostic imaging, pre-purchase examinations and paperwork across the province of Málaga.',
  },

  hero: {
    eyebrow: 'Ambulatory equine practice',
    title: 'Equine vet in Málaga and the surrounding area',
    lead: 'We have turned our passion for horses into our profession. We come to your yard to keep your horse healthy, athletic and happy.',
    imgAlt: 'Grey horse wearing a bridle in the countryside',
    badgeTitle: 'We come to your yard',
    badgeText: 'Province of Málaga and nearby areas',
    credentials: [
      { b: 'Since 2005', span: 'caring for horses in Málaga' },
      { b: 'Reg. 291102', span: 'Málaga College of Veterinary Surgeons' },
      { b: 'Certified', span: 'Spanish Certificate in Equine Practice (2019)' },
    ],
  },

  servicios: {
    eyebrow: 'Services',
    title: 'The best possible care, and real affection for your horse',
    lead: 'We visit you at your yard or farm. Tap each service for details.',
    mas: 'More information',
    items: [
      { nombre: 'General medicine', resumen: 'Digestive, respiratory, skin and internal medicine problems.', detalle: 'General medicine is the foundation of equine practice. We are available for any consultation, particularly internal medicine. Whether the problem is digestive, respiratory, dermatological or of any other kind, please get in touch to book an appointment and a thorough work-up of your horse.' },
      { nombre: 'Sports medicine', resumen: 'Lameness work-ups and poor performance investigations.', detalle: 'The performance demanded of our horses keeps rising, and they need a vet who helps them reach their full potential. We offer lameness diagnosis, ultrasound, digital radiography and investigation of poor performance.' },
      { nombre: 'Reproduction and neonatology', resumen: 'Gynaecology, stallion work, foaling, insemination and embryo transfer.', detalle: 'We offer a full range of gynaecology, andrology and obstetrics services. As well as pregnancy diagnosis and monitoring, investigation of gynaecological problems and artificial insemination, we provide semen collection, evaluation, chilling and sale of chilled semen, and embryo transfer.' },
      { nombre: 'Dentistry', resumen: 'Preventive dental care to catch problems early.', detalle: 'Even if your horse is healthy, dental care is essential. Caught early, many problems can be solved quickly and affordably. That is why Vetequus is committed to preventive care.' },
      { nombre: 'Diagnostic imaging', resumen: 'Digital radiography and ultrasound at your yard.', detalle: 'Digital radiography and ultrasound allow us to diagnose and treat a wide range of conditions: lameness, monitoring of musculoskeletal problems, laminitis assessment, orthopaedic care, reproductive assessment and more.' },
      { nombre: 'Pre-purchase examinations', resumen: 'A full static and dynamic assessment before you buy.', detalle: 'A pre-purchase examination establishes the horse’s current health for both buyer and seller. It includes a static examination (digestive, respiratory, skin, eyes, teeth, palpation of limbs, back and neck) and a dynamic one (flexion tests, lameness assessment, exercise tests), supported by radiographs, laboratory tests where anything is suspected, and reproductive examinations for breeding animals.' },
      { nombre: 'Preventive medicine', resumen: 'Vaccination, worming, nutrition and management.', detalle: 'Advice on preventing all kinds of disease. Vaccination and worming programmes against the most common infectious diseases (equine influenza, tetanus, West Nile virus…). Nutritional, dental and management measures to prevent digestive problems (colic), respiratory problems and allergies. Prevention is the best way to save money and protect your horse’s health.' },
      { nombre: 'Identification and paperwork', resumen: 'Microchips, passports, change of ownership and transport.', detalle: 'Markings charts, microchipping and handling of equine passport (DIE) applications, changes of ownership, transport documents and holding registers. We have an excellent relationship with the authorities and breeders’ associations, which speeds up all your paperwork.' },
    ],
  },

  horario: {
    eyebrow: 'Opening hours',
    title: 'Call us to book an appointment',
    filas: [
      { dias: 'Monday to Friday', horas: '10:00 – 18:00' },
      { dias: 'Weekends and bank holidays', horas: 'Emergency cover for regular patients' },
    ],
    nota: 'Outside working hours, we only attend emergencies for horses that are regular patients of the practice.',
    resumen: 'Monday to Friday, 10:00–18:00. Out of hours, emergencies for regular patients only.',
  },

  sobreMi: {
    eyebrow: 'About me',
    imgAlt: 'Aída Huertas hugging her horse Coquito',
    caption: 'Aída with Coquito',
    intro: 'I was born into a family devoted to breeding horses, which gave me first-hand knowledge of breeding, improvement and selection. In 2006 I set up on my own as an ambulatory equine practice, and I have been providing my services ever since, always keeping my training up to date.',
    cv: [
      { year: '2003', text: 'Degree in Veterinary Medicine, University of Córdoba' },
      { year: '2006', text: 'Founded Vet-Equus Veterinary Services, an ambulatory equine practice' },
      { year: '2019', text: 'Spanish Certificate in Equine Practice, first cohort' },
      { year: 'Reg.', text: 'No. 291102, Málaga College of Veterinary Surgeons' },
      { year: '+', text: 'Postgraduate in Equine Internal Medicine (UAB) and MBA (ESIC)' },
    ],
    masTitulo: 'Full training and experience',
    mas: [
      'During my degree I was a student intern in Ethnology, Ethology and Radiology, and at the Veterinary Teaching Hospital of the University of Córdoba. During holidays I trained at European hospitals such as Equinia Hospital (Noorderwijk, Belgium).',
      'I then completed an internship at the Centro Policlínico Veterinario San Vicente del Raspeig under Dr Manuel Alejandro Rodríguez, training in equine reproduction, ambulatory practice, intensive care and surgery. Later I spent time at leading hospitals such as the Veterinary Teaching Hospital of the Autonomous University of Barcelona, De Morette Hospital (Belgium), the Animal Health Trust (UK) and Three Counties Equine Hospital (UK).',
    ],
    firma: 'Always with enthusiasm, care and a desire to keep learning.',
  },

  blog: {
    eyebrow: 'Blog',
    title: 'Articles for horse owners',
    nota: 'Our articles are currently available in Spanish only.',
    verTodos: (n: number) => `See all ${n} articles (in Spanish)`,
  },

  contacto: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your horse',
    lead: 'If your horse is a regular patient and it is an emergency, call or send a WhatsApp message.',
    telefono: 'Phone and WhatsApp',
    email: 'Email',
    zona: 'Area covered',
    zonaTexto: 'Province of Málaga and surrounding areas. Ask us about other areas.',
    horario: 'Hours',
  },

  form: {
    title: 'Send us a message',
    nombre: 'Name',
    localidad: 'Town or area',
    localidadAyuda: '(where the horse is kept)',
    telefono: 'Phone',
    email: 'Email',
    tipo: 'Type of enquiry',
    tipoPlaceholder: 'Choose an option',
    otro: 'Other',
    mensaje: 'Message',
    noRellenar: 'Leave this empty',
    privacidadAntes: 'I have read and accept the',
    privacidadEnlace: 'privacy policy',
    nota: 'Leave a phone number or email so we can reply. This form is not for emergencies: if your horse is a regular patient, please call.',
    enviar: 'Send message',
    enviando: 'Sending…',
    errNombre: 'Please enter your name.',
    errContacto: 'Please leave a phone number or email so we can reply.',
    errMensaje: 'Please write your message.',
    errPrivacidad: 'Please accept the privacy policy.',
    ok: 'Message sent. We will reply during working hours.',
    errEnvio: 'Your message could not be sent. Please call or WhatsApp us on',
  },

  footer: {
    descripcion: 'Ambulatory equine practice of Aída Huertas Domínguez, registered veterinary surgeon no. 291102.',
    contacto: 'Contact',
    zona: 'Province of Málaga and surrounding areas',
    siganos: 'Follow us',
    avisoLegal: 'Legal notice',
    privacidad: 'Privacy',
    cookies: 'Cookies',
  },

  legal: {
    eyebrow: 'Legal information',
    actualizado: 'Last updated',
    nota: 'This is an English translation provided for convenience. In case of any discrepancy, the Spanish version prevails.',
  },
};

export const T: Record<Lang, Textos> = { es, en };

/** Nombres de servicio en español, para el email que recibe Aída sea cual sea el idioma. */
export const SERVICIOS_ES = es.servicios.items.map((s) => s.nombre);
