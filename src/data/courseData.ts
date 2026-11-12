import { InnovationTerm, CaseStudy, QuizQuestion, Badge } from '../types';

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'wef_pioneer',
    title: 'Estratega WEF 4IR',
    description: 'Dominaste el panorama de habilidades del Foro Económico Mundial y la 4ª Revolución Industrial.',
    icon: 'Globe',
    color: 'cyan'
  },
  {
    id: 'neuro_thinker',
    title: 'Mente Neuro-Flex',
    description: 'Superaste la fijación funcional y aplicaste técnicas de neuroplasticidad y entrenamiento mental.',
    icon: 'Brain',
    color: 'orange'
  },
  {
    id: 'design_architect',
    title: 'Arquitecto Design Thinking',
    description: 'Estructuraste un proyecto completo empatizando con usuarios reales y creando prototipos rápidos.',
    icon: 'Layers',
    color: 'green'
  },
  {
    id: 'disruptive_master',
    title: 'Modelador Disruptivo',
    description: 'Creaste un modelo de negocio emergente (XaaS/Plataforma) para la era digital actual.',
    icon: 'Zap',
    color: 'red'
  }
];

export const INNOVATION_TERMS: InnovationTerm[] = [
  {
    id: 'term_wef_4ir',
    term: 'Cuarta Revolución Industrial (4IR)',
    category: 'WEF',
    summary: 'La convergencia de tecnologías físicas, digitales y biológicas (IA, IoT, Robótica, Biotecnología).',
    detailedExplanation: 'Según el Foro Económico Mundial (WEF), la 4IR no se trata solo de máquinas inteligentes, sino de la interconexión masiva de datos y modelos de negocio en tiempo real. La velocidad y escala de esta transformación superan a todas las revoluciones industriales anteriores.',
    keyTakeaway: 'Las empresas ya no compiten producto contra producto, sino ecosistema contra ecosistema.',
    question: {
      prompt: '¿Cuál es la característica principal de la 4ª Revolución Industrial según el Foro Económico Mundial?',
      options: [
        'La invención exclusiva de la máquina de vapor industrial.',
        'La fusión de sistemas físicos, digitales y biológicos transformando industrias completas.',
        'El reemplazo total de los trabajadores humanos por robots sin intervención humana.',
        'La reducción del uso de internet en el entorno empresarial.'
      ],
      correctIndex: 1,
      explanation: '¡Correcto! El WEF destaca que la 4IR se define por la convergencia de lo físico, lo digital y lo biológico a escala global.'
    }
  },
  {
    id: 'term_ambidextrous',
    term: 'Organización Ambidextra',
    category: 'Business',
    summary: 'Capacidad empresarial de explotar el negocio actual mientras se explora el negocio del futuro.',
    detailedExplanation: 'En administración de empresas, la innovación falla cuando una compañía consume el 100% de sus recursos en mantener las operaciones del día a día (Explotar) y olvida crear los productos que la mantendrán viva en 5 años (Explorar).',
    keyTakeaway: 'Una mano mantiene el motor encendido hoy; la otra diseña el vehículo del mañana.',
    question: {
      prompt: '¿Por qué es crucial para una empresa ser "ambidextra"?',
      options: [
        'Porque permite contratar únicamente ejecutivos zurdos y diestros.',
        'Porque equilibra la optimización del negocio actual (explotar) con la creación de nuevas oportunidades (explorar).',
        'Porque obliga a duplicar el presupuesto de marketing cada trimestre.',
        'Porque elimina la necesidad de contar con un departamento de investigación.'
      ],
      correctIndex: 1,
      explanation: '¡Excelente! Explotar el presente e investigar el futuro evita que las empresas caigan en la obsolescencia.'
    }
  },
  {
    id: 'term_growth_mindset',
    term: 'Mentalidad de Crecimiento (Carol Dweck)',
    category: 'Psychology',
    summary: 'La convicción de que la creatividad y la inteligencia se desarrollan con práctica, fracaso inteligente y esfuerzo.',
    detailedExplanation: 'La psicología demuestra que las personas con mentalidad fija ven el error como prueba de ineptitud, mientras que los innovadores ven el error como datos valiosos para iterar. La seguridad psicológica (Edmondson) permite probar ideas arriesgadas sin miedo al castigo.',
    keyTakeaway: 'El error no es el opuesto del éxito, es el combustible de la innovación.',
    question: {
      prompt: 'En la psicología de la innovación, ¿cómo reacciona una persona con Mentalidad de Crecimiento ante un prototipo fallido?',
      options: [
        'Abandona el proyecto inmediatamente y busca otra profesión.',
        'Oculta el fallo para no recibir críticas de su equipo.',
        'Analiza los datos del error para aprender, ajustar la hipótesis y volver a iterar.',
        'Culpa a sus compañeros de equipo por el mal resultado.'
      ],
      correctIndex: 2,
      explanation: '¡Muy bien! Los innovadores tratan las fallas como hipótesis no validadas e insumos de aprendizaje rápido.'
    }
  },
  {
    id: 'term_blue_ocean',
    term: 'Estrategia de Océano Azul (Chan Kim & Mauborgne)',
    category: 'Business',
    summary: 'Crear un espacio de mercado no disputado en lugar de competir encarnizadamente en un mercado saturado.',
    detailedExplanation: 'En lugar de pelear por los mismos clientes (Océano Rojo lleno de tiburones), la innovación en modelos de negocio redefine las reglas creando nuevo valor. Ejemplo: El Cirque du Soleil eliminó los animales y el costo elevado, enfocándose en el teatro sofisticado para adultos.',
    keyTakeaway: 'Hacer que la competencia sea irrelevante creando una propuesta de valor única.',
    question: {
      prompt: '¿Cuál es el objetivo central de una Estrategia de Océano Azul en administración estratégica?',
      options: [
        'Reducir precios al mínimo absoluto para quebrar a la competencia.',
        'Crear un nuevo espacio de mercado que vuelva irrelevante a la competencia mediante la innovación en valor.',
        'Invertir todo el capital en publicidad televisiva tradicional.',
        'Copiar exactamente el producto del líder del mercado.'
      ],
      correctIndex: 1,
      explanation: '¡Correcto! En lugar de pelear en el océano rojo saturado, el océano azul abre demandas completamente nuevas.'
    }
  },
  {
    id: 'term_xaas',
    term: 'Everything-as-a-Service (XaaS) y Modelos de Plataforma',
    category: 'Digital',
    summary: 'Transformación de productos físicos vendidos una sola vez en servicios continuos basados en la nube y datos.',
    detailedExplanation: 'En la era digital (Clase 9), gigantes como Microsoft, Adobe o Rolls-Royce pasaron de vender licencias/motores a vender suscripciones por uso y valor recurrente. Las plataformas conectan oferta y demanda con costes marginales cercanos a cero.',
    keyTakeaway: 'El valor no está en la posesión del producto, sino en el acceso continuo a la solución.',
    question: {
      prompt: '¿Qué cambio fundamental caracteriza a los modelos de negocio emergentes como XaaS (Servicios continuos)?',
      options: [
        'Cobrar un pago único gigante y desentenderse del cliente.',
        'Pasar de vender productos físicos individuales a ofrecer acceso recurrente, actualizaciones constantes y valor basado en datos.',
        'Exigir a los usuarios que instalen hardware físico en sus hogares.',
        'Prohibir el uso de la nube y volver al papel y lápiz.'
      ],
      correctIndex: 1,
      explanation: '¡Exacto! El modelo XaaS garantiza ingresos recurrentes y relaciones de valor a largo plazo con el cliente.'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'netflix',
    company: 'Netflix',
    logo: 'Film',
    tagline: 'De DVDs por correo a Titán Global de Streaming y Algoritmos',
    theSpark: 'Reed Hastings enfrentó una multa de $40 por devolver la película Apollo 13 con retraso en la tienda Blockbuster.',
    theDisruption: 'En lugar de resentirse, cuestionó el modelo de cobro por mora y diseñó una suscripción mensual fija sin cargos por retraso. Años después, cuando la velocidad de internet lo permitió, sacrificó su negocio de correo para liderar el streaming.',
    theSecretFormula: 'Cultura de libertad y responsabilidad + Algoritmos de recomendación hiper-personalizada + Producción original basada en big data.',
    keyLesson: 'Esté dispuesto a canibalizar su propio producto exitoso antes de que un competidor lo haga por usted.',
    interactiveChallenge: {
      scenario: 'Blockbuster tuvo la oportunidad de comprar Netflix por $50 millones en el año 2000 y se negó. ¿Qué sesgo administrativo cometió Blockbuster?',
      options: [
        {
          text: 'Fijación funcional en sus tiendas físicas de alquiler y ceguera ante el costo de oportunidad digital.',
          isCorrect: true,
          feedback: '¡Exacto! Blockbuster estaba atrapado en su modelo de ingresos por penalización por mora y tiendas de ladrillo.'
        },
        {
          text: 'Exceso de innovación en tecnología móvil.',
          isCorrect: false,
          feedback: 'Incorrecto. Blockbuster no innovó en tecnología móvil en el año 2000.'
        },
        {
          text: 'Falta de presupuesto para contratar personal de ventas.',
          isCorrect: false,
          feedback: 'Incorrecto. Blockbuster tenía abundantes recursos financieros en su época de auge.'
        }
      ]
    }
  },
  {
    id: 'apple_iphone',
    company: 'Apple (iPhone 2007)',
    logo: 'Smartphone',
    tagline: 'La Convergencia Disruptiva de Tres Dispositivos en Uno',
    theSpark: 'Steve Jobs identificó que los smartphones de la época (BlackBerry, Palm) tenían teclados plásticos fijos que ocupaban la mitad del dispositivo sin adaptarse a las aplicaciones.',
    theDisruption: 'Combinó un iPod de pantalla ancha con controles táctiles, un teléfono revolucionario y un comunicador de internet móvil. Eliminó el teclado físico e inventó la pantalla multitáctil capacitiva.',
    theSecretFormula: 'Diseño centrado en la experiencia humana (Design Thinking) + Integración vertical de hardware y software (App Store).',
    keyLesson: 'La verdadera innovación no es añadir más botones, es simplificar y redefinir la interacción humana.',
    interactiveChallenge: {
      scenario: '¿Por qué la App Store (creada en 2008) convirtió al iPhone en un Ecosistema Plataforma imbatible?',
      options: [
        {
          text: 'Porque permitió a millones de desarrolladores externos crear valor sobre la plataforma, multiplicando la utilidad del teléfono.',
          isCorrect: true,
          feedback: '¡Excelente! Creó un efecto de red bilateral donde más apps atraían más usuarios y viceversa.'
        },
        {
          text: 'Porque regalaba fundas protectoras con cada descarga.',
          isCorrect: false,
          feedback: 'Incorrecto. La App Store es una plataforma de software digital.'
        },
        {
          text: 'Porque obligaba a los usuarios a comprar música física.',
          isCorrect: false,
          feedback: 'Incorrecto. La App Store eliminó el formato físico.'
        }
      ]
    }
  },
  {
    id: 'airbnb',
    company: 'Airbnb',
    logo: 'Home',
    tagline: 'Diseño de la Confianza y Economía de Plataforma Bilateral',
    theSpark: 'Brian Chesky y Joe Gebbia no podían pagar el alquiler de su apartamento en San Francisco durante una conferencia donde los hoteles estaban llenos.',
    theDisruption: 'Pusieron colchones inflables ("Air Bed & Breakfast") y ofrecieron desayuno a los asistentes. Aplicaron Design Thinking para diseñar un sistema de evaluaciones mutuas, fotos profesionales y garantías de seguridad que hicieron posible la confianza entre desconocidos.',
    theSecretFormula: 'Resolución de problemas de confianza a través de UX elegante + Modelo de activos ligeros (sin poseer hoteles).',
    keyLesson: 'Puedes construir el negocio hotelero más grande del mundo sin poseer una sola habitación de hotel.',
    interactiveChallenge: {
      scenario: 'Cuando Airbnb estaba quebrada en 2008, ¿qué acción de Design Thinking salvó a la empresa?',
      options: [
        {
          text: 'Viajaron personalmente a Nueva York a tomar fotos de alta calidad de los apartamentos y escuchar cara a cara a los anfitriones.',
          isCorrect: true,
          feedback: '¡Sí! Al empatizar directamente con los usuarios y mejorar la calidad visual, las reservas aumentaron de inmediato.'
        },
        {
          text: 'Lanzaron una campaña publicitaria en la televisión nacional por 5 millones de dólares.',
          isCorrect: false,
          feedback: 'Incorrecto. No tenían capital para publicidad masiva.'
        },
        {
          text: 'Cambiaron el logo de la empresa por un color diferente.',
          isCorrect: false,
          feedback: 'Incorrecto. El cambio cosmético no resuelve dolores de usuarios.'
        }
      ]
    }
  },
  {
    id: 'spacex',
    company: 'SpaceX',
    logo: 'Rocket',
    tagline: 'Reusabilidad Aeroespacial y Principios Fundamentales (First Principles)',
    theSpark: 'Elon Musk descubrió que comprar un cohete en Rusia costaba $8m, pero el costo bruto de los materiales (aluminio, titanio, combustible) era solo el 2% del precio final del cohete.',
    theDisruption: 'Razonó desde los "Primeros Principios" físicos (First Principles Thinking), construyó los cohetes internamente y diseñó la primera etapa aterrizable y reutilizable del Falcon 9, reduciendo los costos de lanzamiento en más del 70%.',
    theSecretFormula: 'Innovación radical desde la materia prima + Tolerancia al fallo controlado durante pruebas rápidas.',
    keyLesson: 'Cuestione las suposiciones de la industria desglosando los problemas hasta sus verdades físicas fundamentales.',
    interactiveChallenge: {
      scenario: '¿Qué técnica de resolución de problemas aplicó SpaceX para reducir los costos de cohetes en un 70%?',
      options: [
        {
          text: 'Pensamiento de Primeros Principios (First Principles): desglosar el costo hasta las materias primas básicas.',
          isCorrect: true,
          feedback: '¡Correcto! Desmantelar las verdades aceptadas y reconstruir desde los elementos primarios.'
        },
        {
          text: 'Aumentar el precio del billete espacial para los clientes.',
          isCorrect: false,
          feedback: 'Incorrecto. Aumentar precios no reduce costos de fabricación.'
        },
        {
          text: 'Subcontratar toda la fabricación a intermediarios costosos.',
          isCorrect: false,
          feedback: 'Incorrecto. SpaceX trajo el 85% de la fabricación in-house.'
        }
      ]
    }
  }
];

export const WEF_FUTURE_SKILLS = [
  { name: 'Pensamiento Crítico y Análisis', level: 95, desc: 'Evaluar datos e hipótesis sin sesgos.', color: 'from-orange-500 to-red-500' },
  { name: 'Resolución de Problemas Complejos', level: 92, desc: 'Navegar la ambigüedad y problemas sistémicos.', color: 'from-red-500 to-rose-500' },
  { name: 'Creatividad, Originalidad e Iniciativa', level: 90, desc: 'Conectar ideas aparentemente no relacionadas.', color: 'from-emerald-400 to-teal-500' },
  { name: 'Alfabetización Digital e IA', level: 88, desc: 'Aprovechar herramientas tecnológicas emergentes.', color: 'from-cyan-400 to-blue-500' },
  { name: 'Resiliencia y Flexibilidad Cognitiva', level: 86, desc: 'Adaptarse rápidamente al cambio y aprender del fallo.', color: 'from-amber-400 to-orange-500' }
];

export const EMERGING_BUSINESS_MODELS_DATA = [
  {
    id: 'platform',
    name: 'Economía de Plataforma (Ecosystem)',
    icon: 'Share2',
    color: 'orange',
    tag: 'Redes Bilaterales',
    description: 'Conecta creadores y consumidores directamente. El valor crece exponencialmente con cada nuevo usuario (Efecto de Red).',
    examples: 'Uber, Airbnb, Shopify, App Store'
  },
  {
    id: 'xaas',
    name: 'Everything-as-a-Service (XaaS)',
    icon: 'CloudLightning',
    color: 'cyan',
    tag: 'Suscripción & Datos',
    description: 'Transforma activos físicos e infraestructuras en servicios basados en uso con ingresos recurrentes predichos por software.',
    examples: 'Adobe Cloud, Microsoft Copilot, Rolls-Royce Power-by-Hour'
  },
  {
    id: 'circular',
    name: 'Economía Circular Digital',
    icon: 'RefreshCw',
    color: 'green',
    tag: 'Sostenibilidad Smart',
    description: 'Modelos de negocio diseñados para eliminar residuos mediante rastreabilidad digital, reacondicionamiento y reciclaje de alto valor.',
    examples: 'Patagonia Worn Wear, Back Market, EcoVadis'
  },
  {
    id: 'ai_hyper',
    name: 'Hiper-Personalización con IA Generativa',
    icon: 'Sparkles',
    color: 'red',
    tag: 'Sistemas Autónomos',
    description: 'Algoritmos adapten la oferta, contenido y precios en tiempo real para cada individuo, generando deleite instantáneo.',
    examples: 'Spotify Daylist, TikTok For You, Duolingo Max'
  }
];

export const MASTERCLASS_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    hour: 1,
    question: 'Según el Foro Económico Mundial (WEF), ¿cuál de las siguientes es una de las habilidades más demandadas para los innovadores de la era digital?',
    options: [
      'Memorización pasiva de manuales antiguos.',
      'Pensamiento crítico y resolución de problemas complejos.',
      'Evitar el uso de tecnologías digitales en la oficina.',
      'Seguir órdenes sin cuestionar los procesos existentes.'
    ],
    correctIndex: 1,
    explanation: 'El informe de Futuro del Empleo del WEF destaca el pensamiento crítico, la creatividad y la resolución de problemas complejos como las competencias clave.'
  },
  {
    id: 'q2',
    hour: 1,
    question: 'En la psicología de la innovación, ¿qué postula la "Seguridad Psicológica" de Amy Edmondson (Google Project Aristotle)?',
    options: [
      'Que los empleados deben usar cascos protectores en las reuniones.',
      'Que los miembros de un equipo se sienten seguros para asumir riesgos creativos e ideas audaces sin temor a ser humillados.',
      'Que el líder debe tomar todas las decisiones de forma aislada.',
      'Que se debe prohibir cualquier desacuerdo entre los colaboradores.'
    ],
    correctIndex: 1,
    explanation: 'La seguridad psicológica es el factor #1 de los equipos de alto rendimiento en innovación: la libertad de proponer ideas arriesgadas sin miedo.'
  },
  {
    id: 'q3',
    hour: 2,
    question: 'En la metodología Design Thinking, ¿cuál es el primer paso indispensable antes de generar soluciones?',
    options: [
      'Diseñar el prototipo final y lanzarlo al mercado.',
      'Empatizar profundamente con el usuario para comprender sus dolores y necesidades reales.',
      'Calcular el margen de ganancia del segundo año.',
      'Contratar una agencia de publicidad externa.'
    ],
    correctIndex: 1,
    explanation: 'Design Thinking siempre empieza en las personas. Empatizar nos ayuda a descubrir problemas verdaderos antes de construir nada.'
  },
  {
    id: 'q4',
    hour: 2,
    question: '¿Qué diferencia a una "Organización Ambidextra" en la administración estratégica de empresas?',
    options: [
      'Trabaja solo en el turno de la mañana y de la tarde.',
      'Exploita su modelo de negocio actual mientras explora simultáneamente innovaciones para el futuro.',
      'Tiene sedes en dos países diferentes.',
      'Sustituye todo su personal por inteligencia artificial.'
    ],
    correctIndex: 1,
    explanation: 'Ser ambidextro en negocios es la clave para la longevidad corporativa: rendimiento en el presente e innovación hacia el futuro.'
  },
  {
    id: 'q5',
    hour: 3,
    question: 'En los modelos de negocio emergentes de la Clase 9 (Era Digital), ¿qué caracteriza al modelo XaaS (Everything-as-a-Service)?',
    options: [
      'Exige la compra de propiedades inmobiliarias obligatorias.',
      'Convierte productos y capacidades en servicios por suscripción accesibles desde la nube y enriquecidos con datos.',
      'Elimina todo tipo de atención al cliente.',
      'Se enfoca exclusivamente en la venta de productos de plástico desechable.'
    ],
    correctIndex: 1,
    explanation: '¡Felicidades! XaaS reinventa la propuesta de valor ofreciendo flexibilidad, ingresos recurrentes y actualización continua.'
  }
];
