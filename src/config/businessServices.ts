import type { ContextualLink } from "@/components/seo/ContextualLinks";
import type { FaqItem } from "@/components/seo/SeoFaq";

export type BusinessService = {
  slug: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  badge: string;
  description: string;
  introTitle: string;
  intro: string[];
  problems: string[];
  includesTitle: string;
  includesIntro: string;
  includes: Array<{ title: string; text: string }>;
  audienceTitle: string;
  audience: string[];
  methodTitle: string;
  methodIntro: string;
  process: Array<{ title: string; text: string }>;
  sections: Array<{ title: string; paragraphs: string[]; bullets?: string[] }>;
  scopeNote: string;
  whatsappMessage: string;
  related: ContextualLink[];
  faq: FaqItem[];
  professionalReview?: boolean;
};

export const businessServices: BusinessService[] = [
  {
    slug: "asesoria-financiera",
    shortName: "Asesoría financiera",
    title: "Asesoría financiera para micro y medianas empresas",
    metaTitle: "Asesoría Financiera para Empresas",
    metaDescription: "Asesoría financiera para MYPE: flujo de caja, costos, márgenes, presupuesto y planificación para tomar decisiones empresariales con mayor claridad.",
    keywords: ["asesoría financiera para empresas", "consultoría financiera", "asesor financiero para empresas", "asesoría financiera para MYPE"],
    badge: "Finanzas empresariales",
    description: "Ordena la información financiera de tu negocio y conviértela en criterios útiles para planificar, priorizar y decidir con mayor claridad.",
    introTitle: "Decidir mejor comienza por entender cómo se mueve el dinero del negocio",
    intro: [
      "Una empresa puede vender más y, aun así, enfrentar tensiones de caja, márgenes insuficientes o compromisos difíciles de atender. La asesoría financiera empresarial ayuda a relacionar ventas, cobros, compras, costos, gastos y necesidades de capital para comprender qué está ocurriendo y qué decisiones requieren prioridad.",
      "BREICORP acompaña a micro y medianas empresas en la organización y lectura de su situación financiera. El servicio parte de información disponible y objetivos definidos con la empresa. No sustituye la decisión de sus responsables: aporta estructura, preguntas, escenarios y seguimiento para que esas decisiones tengan una base más clara.",
      "El alcance se adapta al nivel de orden existente. Algunas empresas necesitan empezar por separar movimientos y construir un flujo de caja; otras requieren revisar márgenes, presupuestos, compromisos o alternativas para sostener una etapa de crecimiento.",
    ],
    problems: [
      "La caja del negocio se confunde con movimientos personales o extraordinarios.",
      "Las ventas crecen, pero no está claro qué productos, clientes o canales aportan margen.",
      "Los pagos próximos se conocen cuando ya existe presión de liquidez.",
      "El presupuesto se prepara, pero no se compara con lo realmente ejecutado.",
      "Las decisiones de inversión se evalúan sin un escenario financiero común.",
      "La gerencia recibe cifras aisladas, sin una explicación que conecte causas y efectos.",
    ],
    includesTitle: "Qué puede incluir la asesoría financiera",
    includesIntro: "El contenido se define después de revisar la necesidad, la calidad de los datos y las responsabilidades internas. Un acompañamiento puede abordar los siguientes frentes sin asumir que todos aplican por igual.",
    includes: [
      { title: "Diagnóstico financiero", text: "Revisión inicial de ingresos, egresos, compromisos, prácticas de registro y preguntas de gestión que la empresa necesita responder." },
      { title: "Flujo de caja", text: "Organización de cobros y pagos por periodos para observar disponibilidad, anticipar tensiones y acordar responsables de actualización." },
      { title: "Costos y márgenes", text: "Lectura de la estructura de costos y de los márgenes disponibles para discutir precios, mezcla comercial y prioridades operativas." },
      { title: "Presupuesto", text: "Construcción o revisión de una referencia mensual que permita comparar lo previsto con lo ejecutado y explicar desviaciones." },
      { title: "Escenarios de decisión", text: "Evaluación referencial de supuestos para compras, contratación, expansión u otras decisiones, sin presentar proyecciones como resultados asegurados." },
      { title: "Acompañamiento", text: "Sesiones de revisión para interpretar avances, actualizar supuestos y convertir hallazgos financieros en acciones asignables." },
    ],
    audienceTitle: "Para empresas que necesitan pasar de registrar cifras a gestionarlas",
    audience: [
      "MYPE con ventas activas que todavía administran la caja mediante archivos separados o controles informales.",
      "Empresas que desean revisar costos y márgenes antes de ajustar precios, negociar compras o ampliar operaciones.",
      "Gerencias que necesitan una rutina de presupuesto, seguimiento y conversación financiera con su equipo.",
      "Negocios que preparan una inversión o una etapa de crecimiento y requieren comparar escenarios y necesidades de capital.",
    ],
    methodTitle: "Un acompañamiento financiero basado en información y contexto",
    methodIntro: "La asesoría debe responder a una pregunta empresarial concreta. El proceso no comienza con una promesa de rentabilidad, sino con la definición del problema, la revisión de los datos y el acuerdo sobre cómo se utilizarán los resultados.",
    process: [
      { title: "Definir la decisión", text: "Acordamos qué situación debe comprenderse y qué decisiones esperan tomar los responsables de la empresa." },
      { title: "Ordenar información", text: "Identificamos fuentes, periodos, criterios y limitaciones de los registros disponibles." },
      { title: "Analizar alternativas", text: "Relacionamos caja, costos, márgenes, presupuesto y supuestos pertinentes para construir una lectura útil." },
      { title: "Acompañar el seguimiento", text: "Revisamos acciones, desviaciones y cambios de contexto con la periodicidad acordada." },
    ],
    sections: [
      {
        title: "Flujo de caja, rentabilidad y liquidez no significan lo mismo",
        paragraphs: [
          "El flujo de caja muestra entradas y salidas de dinero en el tiempo. Un negocio puede registrar utilidad contable y enfrentar falta de efectivo si cobra tarde, acumula inventario o concentra pagos en determinadas fechas. Por eso la conversación financiera debe distinguir disponibilidad, resultados y estructura de capital.",
          "También es importante separar los problemas recurrentes de los eventos puntuales. Una compra extraordinaria puede reducir temporalmente la caja; un margen insuficiente o una política de crédito sin control pueden sostener la presión durante varios periodos. La asesoría ayuda a formular estas diferencias y a decidir qué indicador merece seguimiento.",
        ],
      },
      {
        title: "Decisiones operativas con impacto financiero",
        paragraphs: [
          "Los números del negocio no se explican únicamente en el área financiera. Precios, descuentos, tiempos de cobro, rotación de inventario, compras mínimas, devoluciones y productividad influyen en los resultados. El acompañamiento debe conectar la lectura financiera con los procesos que originan cada cifra.",
          "Cuando la información está dispersa, la digitalización puede ayudar a registrar operaciones con criterios consistentes. Si el problema incluye duplicidad de datos o reportes tardíos, la asesoría puede relacionarse con una revisión de procesos o con herramientas de gestión, sin convertir el software en el objetivo principal del servicio.",
        ],
        bullets: ["Condiciones y plazos de cobro", "Políticas de descuentos", "Compras e inventario", "Costos fijos y variables", "Capacidad operativa", "Necesidades de capital"],
      },
    ],
    scopeNote: "Las estimaciones, escenarios y recomendaciones dependen de la información proporcionada y de los supuestos acordados. La asesoría no garantiza rentabilidad, utilidades, financiamiento ni resultados futuros.",
    whatsappMessage: "Hola, quiero información sobre asesoría financiera para mi empresa.",
    related: [
      { href: "/analisis-financiero", title: "Análisis financiero", description: "Evalúa información, indicadores, tendencias y escenarios de la empresa." },
      { href: "/planificacion-financiera", title: "Planificación financiera", description: "Construye presupuestos, proyecciones y referencias para el seguimiento." },
      { href: "/educacion-financiera", title: "Educación financiera", description: "Fortalece la comprensión financiera de empresarios y equipos." },
    ],
    faq: [
      { question: "¿Qué incluye una asesoría financiera empresarial?", answer: "El alcance puede incluir diagnóstico, flujo de caja, revisión de costos y márgenes, presupuesto, escenarios y sesiones de seguimiento. Se define según la pregunta de gestión, los datos disponibles y las responsabilidades de la empresa." },
      { question: "¿La asesoría financiera garantiza mayores utilidades?", answer: "No. La asesoría organiza información y criterios para decidir, pero los resultados dependen del mercado, la ejecución, la calidad de los datos y múltiples factores propios del negocio." },
      { question: "¿Necesito tener estados financieros completos para empezar?", answer: "No siempre. Primero se revisa qué información existe y qué tan confiable es. Si hay vacíos, el trabajo inicial puede concentrarse en ordenar registros y definir una rutina mínima de actualización." },
      { question: "¿Cuál es la diferencia entre asesoría y análisis financiero?", answer: "La asesoría implica acompañamiento y orientación para decisiones. El análisis financiero se concentra en evaluar estructuradamente información, indicadores, tendencias y escenarios de un periodo o situación." },
      { question: "¿Puede participar mi contador o responsable administrativo?", answer: "Sí. La coordinación con quienes preparan y utilizan la información ayuda a comprender criterios, evitar duplicaciones y acordar responsables de seguimiento." },
      { question: "¿La asesoría sirve para evaluar una inversión?", answer: "Puede ayudar a ordenar supuestos, flujos esperados, necesidades de capital y riesgos de una decisión. Las proyecciones son escenarios referenciales y no garantizan el resultado de una inversión." },
    ],
    professionalReview: true,
  },
  {
    slug: "analisis-financiero",
    shortName: "Análisis financiero",
    title: "Análisis financiero para tomar mejores decisiones empresariales",
    metaTitle: "Análisis Financiero Empresarial",
    metaDescription: "Análisis financiero para empresas: ingresos, costos, márgenes, liquidez, endeudamiento, flujo de caja, indicadores, tendencias y escenarios.",
    keywords: ["análisis financiero para empresas", "análisis financiero", "diagnóstico financiero", "indicadores financieros", "análisis de estados financieros"],
    badge: "Diagnóstico y decisiones",
    description: "Convierte registros y estados financieros en una lectura estructurada de liquidez, márgenes, endeudamiento, tendencias y escenarios.",
    introTitle: "Los datos financieros adquieren valor cuando responden preguntas de gestión",
    intro: [
      "Un reporte aislado describe cifras, pero no necesariamente explica por qué cambiaron ni qué debería observar la gerencia. El análisis financiero relaciona ingresos, costos, gastos, activos, obligaciones y movimientos de caja para construir una lectura consistente de la situación de la empresa.",
      "BREICORP desarrolla análisis orientados a decisiones empresariales. El punto de partida es acordar el periodo, las fuentes y las preguntas relevantes: capacidad de pago, evolución del margen, presión del endeudamiento, comportamiento de gastos, necesidades de capital o diferencias entre crecimiento comercial y disponibilidad de efectivo.",
      "La calidad del resultado depende de la calidad y comparabilidad de la información. Por eso se documentan limitaciones, reclasificaciones y supuestos relevantes antes de interpretar indicadores o construir escenarios.",
    ],
    problems: [
      "Los estados o reportes se reciben, pero no se traducen en decisiones concretas.",
      "La empresa desconoce qué explica la variación de sus márgenes entre periodos.",
      "Existen cifras distintas para una misma pregunta según el archivo consultado.",
      "El endeudamiento se observa por cuota, sin revisar su efecto conjunto en la caja.",
      "Los indicadores se calculan sin criterios estables ni una referencia de comparación.",
      "Las proyecciones mezclan datos históricos, expectativas y supuestos no documentados.",
    ],
    includesTitle: "Componentes de un análisis financiero empresarial",
    includesIntro: "La selección de herramientas responde al objetivo del análisis. No se trata de producir todos los indicadores posibles, sino de elegir los que ayudan a comprender la situación evaluada.",
    includes: [
      { title: "Calidad de información", text: "Revisión de periodos, fuentes, consistencia y limitaciones antes de comparar o interpretar resultados." },
      { title: "Ingresos, costos y gastos", text: "Lectura de composición, variaciones y relaciones que influyen en los resultados operativos." },
      { title: "Márgenes", text: "Análisis de márgenes disponibles y de factores comerciales u operativos que pueden explicar sus cambios." },
      { title: "Liquidez y caja", text: "Observación de disponibilidad, tiempos de cobro y pago, capital de trabajo y concentración de compromisos." },
      { title: "Endeudamiento", text: "Lectura de obligaciones y capacidad financiera sin reducir la evaluación a una sola cuota o razón." },
      { title: "Tendencias y escenarios", text: "Comparación entre periodos y construcción de escenarios referenciales con supuestos visibles." },
    ],
    audienceTitle: "Para organizaciones que necesitan una lectura financiera explicable",
    audience: [
      "Gerencias que reciben estados o reportes, pero necesitan interpretar cambios y prioridades.",
      "Empresas que preparan presupuesto, negociación, inversión o ajustes operativos.",
      "MYPE que desean establecer indicadores consistentes y una frecuencia de revisión.",
      "Equipos administrativos que necesitan reconciliar fuentes y documentar criterios de cálculo.",
    ],
    methodTitle: "Del dato disponible a una conclusión con contexto",
    methodIntro: "El análisis evita conclusiones automáticas. Cada indicador se interpreta junto con el modelo de negocio, la estacionalidad, los criterios contables, las decisiones operativas y las limitaciones de la información.",
    process: [
      { title: "Pregunta y alcance", text: "Definimos decisiones, periodos, unidades de análisis y fuentes pertinentes." },
      { title: "Preparación", text: "Revisamos consistencia, comparabilidad y ajustes necesarios para trabajar con una base entendible." },
      { title: "Evaluación", text: "Calculamos y relacionamos indicadores, variaciones, tendencias y escenarios pertinentes." },
      { title: "Interpretación", text: "Presentamos hallazgos, límites y preguntas abiertas en lenguaje útil para la gerencia." },
    ],
    sections: [
      {
        title: "Indicadores financieros con propósito",
        paragraphs: [
          "Liquidez, endeudamiento, margen y rotación responden preguntas diferentes. Un indicador no debe calificarse como bueno o malo sin revisar sector, ciclo comercial, políticas de crédito, composición de inventario y momento del negocio. La utilidad del análisis está en conectar la medida con una decisión y una causa posible.",
          "También conviene evitar tableros saturados. Una MYPE puede comenzar con un conjunto reducido de medidas estables, responsables claros y una frecuencia realista. Conforme mejora la calidad de los registros, es posible ampliar el análisis sin perder trazabilidad.",
        ],
      },
      {
        title: "Análisis histórico y construcción de escenarios",
        paragraphs: [
          "La historia permite reconocer tendencias, estacionalidad y cambios de estructura, pero no predice por sí sola el futuro. Un escenario financiero combina datos observados con supuestos explícitos sobre ventas, costos, cobros, pagos u otras variables relevantes.",
          "Presentar varios escenarios ayuda a conversar sobre sensibilidad y capacidad de respuesta. No convierte una proyección en certeza: permite entender qué condiciones sostienen cada resultado y qué señales deben vigilarse durante la ejecución.",
        ],
        bullets: ["Comparación mensual y anual", "Variaciones de margen", "Ciclo de cobro y pago", "Capital de trabajo", "Carga financiera", "Supuestos documentados"],
      },
    ],
    scopeNote: "El análisis se basa en la información entregada y en criterios acordados. No constituye auditoría, calificación crediticia ni garantía de desempeño futuro.",
    whatsappMessage: "Hola, quiero información sobre análisis financiero para mi empresa.",
    related: [
      { href: "/asesoria-financiera", title: "Asesoría financiera", description: "Acompañamiento para convertir la lectura financiera en decisiones y seguimiento." },
      { href: "/planificacion-financiera", title: "Planificación financiera", description: "Presupuestos, proyecciones, metas y necesidades de capital." },
      { href: "/consultoria-empresarial", title: "Consultoría empresarial", description: "Relaciona hallazgos financieros con procesos, organización e indicadores." },
    ],
    faq: [
      { question: "¿Qué información se necesita para un análisis financiero?", answer: "Depende del objetivo. Pueden utilizarse estados financieros, reportes de ventas y costos, movimientos de caja, obligaciones, cuentas por cobrar y pagar, presupuestos y documentos que expliquen criterios o eventos relevantes." },
      { question: "¿El análisis financiero es lo mismo que una auditoría?", answer: "No. El análisis interpreta información para responder preguntas de gestión. Una auditoría tiene objetivos, procedimientos y responsabilidades profesionales específicos que no se presumen dentro de este servicio." },
      { question: "¿Qué indicadores conviene revisar en una MYPE?", answer: "No existe un conjunto universal. Liquidez, margen, endeudamiento, caja y capital de trabajo suelen ser referencias útiles, pero deben elegirse según el modelo de negocio y la decisión que se desea apoyar." },
      { question: "¿Se pueden analizar varios periodos?", answer: "Sí, siempre que la información sea comparable o que las diferencias de criterio puedan identificarse. Comparar periodos ayuda a observar tendencias y cambios de estructura." },
      { question: "¿El análisis incluye proyecciones?", answer: "Puede incluir escenarios referenciales cuando existe información suficiente. Cada escenario debe mostrar sus supuestos y no se presenta como un resultado asegurado." },
      { question: "¿Cómo se presentan los hallazgos?", answer: "Se organizan alrededor de las preguntas acordadas, con indicadores pertinentes, explicaciones, limitaciones y puntos que requieren decisión o seguimiento por parte de la empresa." },
    ],
    professionalReview: true,
  },
  {
    slug: "educacion-financiera",
    shortName: "Educación financiera",
    title: "Educación financiera para empresarios y equipos de MYPE",
    metaTitle: "Educación Financiera para Empresarios",
    metaDescription: "Formación financiera para empresarios y equipos de MYPE sobre caja, presupuesto, costos, márgenes, deuda, capital de trabajo y decisiones del negocio.",
    keywords: ["educación financiera para empresarios", "educación financiera empresarial", "finanzas para emprendedores", "finanzas para MYPE"],
    badge: "Capacitación empresarial",
    description: "Fortalece la capacidad del equipo para leer los números del negocio, conversar con criterios comunes y tomar decisiones financieras responsables.",
    introTitle: "Comprender las finanzas del negocio no debería depender de una sola persona",
    intro: [
      "Las decisiones comerciales y operativas tienen consecuencias financieras. Un descuento modifica el margen, una compra inmoviliza capital, una venta a crédito retrasa la entrada de efectivo y un gasto fijo aumenta el punto de equilibrio. Cuando el equipo comprende estas relaciones, puede coordinar mejor sus acciones.",
      "La educación financiera empresarial de BREICORP se presenta como formación y orientación para propietarios, responsables administrativos y equipos de MYPE. No es asesoramiento de inversión personal ni promete fórmulas universales: utiliza conceptos, ejercicios y situaciones vinculadas con la gestión cotidiana de una empresa.",
      "El contenido puede adaptarse al rol y al nivel de experiencia. La prioridad es que cada concepto se conecte con decisiones reales y que los participantes puedan formular preguntas, reconocer límites y utilizar un lenguaje financiero común.",
    ],
    problems: [
      "Las áreas utilizan palabras como utilidad, caja y margen como si significaran lo mismo.",
      "El presupuesto se percibe como una tarea contable y no como una herramienta de coordinación.",
      "Las condiciones de crédito se acuerdan sin comprender su impacto en capital de trabajo.",
      "Los responsables reciben reportes, pero no saben qué preguntas realizar.",
      "Las decisiones de precio se apoyan únicamente en referencias de competencia.",
      "El conocimiento financiero está concentrado y no existe una rutina de aprendizaje compartida.",
    ],
    includesTitle: "Temas que pueden trabajarse en la formación",
    includesIntro: "El programa se ajusta a los participantes y objetivos acordados. Los temas se abordan con ejemplos empresariales, evitando recomendaciones de inversión personal o afirmaciones sin contexto.",
    includes: [
      { title: "Flujo de caja", text: "Diferencia entre vender, cobrar y disponer de efectivo; organización básica de entradas y salidas." },
      { title: "Presupuesto", text: "Uso del presupuesto como referencia, comparación con lo ejecutado y análisis de desviaciones." },
      { title: "Costos y márgenes", text: "Relación entre costos, precio, descuentos, volumen y margen disponible para sostener la operación." },
      { title: "Deuda", text: "Conceptos para comprender cuotas, costo financiero, plazos, capacidad de pago y compromisos acumulados." },
      { title: "Capital de trabajo", text: "Efecto de inventarios, cuentas por cobrar y cuentas por pagar en la continuidad de la operación." },
      { title: "Lectura de reportes", text: "Preguntas útiles para interpretar información financiera sin depender de indicadores aislados." },
    ],
    audienceTitle: "Formación para quienes toman o ejecutan decisiones empresariales",
    audience: [
      "Propietarios y gerentes que desean fortalecer su lectura financiera del negocio.",
      "Equipos comerciales que necesitan comprender el efecto de precios, descuentos y crédito.",
      "Responsables de compras, inventario o administración que influyen en el uso de capital.",
      "Emprendedores que están formalizando su gestión y necesitan construir hábitos financieros básicos.",
    ],
    methodTitle: "Aprendizaje aplicado al contexto de la empresa",
    methodIntro: "La formación combina conceptos, casos, ejercicios y conversación. El objetivo no es memorizar fórmulas, sino comprender qué mide cada herramienta, cuándo puede utilizarse y qué información adicional hace falta antes de decidir.",
    process: [
      { title: "Objetivo de aprendizaje", text: "Definimos qué decisiones o conversaciones necesitan fortalecer los participantes." },
      { title: "Nivel y contexto", text: "Adaptamos ejemplos, lenguaje y profundidad al rol y experiencia del grupo." },
      { title: "Sesión aplicada", text: "Trabajamos conceptos con ejercicios y situaciones empresariales comprensibles." },
      { title: "Aplicación posterior", text: "Proponemos prácticas para llevar lo aprendido a reuniones, presupuestos o controles internos." },
    ],
    sections: [
      {
        title: "De la cifra aislada a la conversación empresarial",
        paragraphs: [
          "Una cifra adquiere sentido cuando se compara con una referencia y se comprende su origen. Saber que el margen bajó no basta: el equipo debe preguntar si cambió el precio, la mezcla de productos, el costo de compra, el descuento o el volumen. Esta forma de razonar evita respuestas apresuradas.",
          "La educación financiera también mejora la coordinación. Ventas puede entender por qué importa el plazo de cobro; compras, por qué el inventario excesivo consume caja; y administración, por qué una clasificación consistente facilita el seguimiento. El aprendizaje se vuelve útil cuando modifica la calidad de esas conversaciones.",
        ],
      },
      {
        title: "Hábitos financieros que pueden sostenerse",
        paragraphs: [
          "Una capacitación aislada tiene poco efecto si no se acompaña de prácticas sencillas. Revisar un flujo de caja, comparar presupuesto y ejecución, documentar supuestos o analizar una desviación son rutinas que ayudan a mantener los conceptos activos.",
          "Cada empresa debe elegir una frecuencia y un nivel de detalle realistas. Un modelo demasiado complejo puede abandonarse; uno demasiado simple puede ocultar problemas. La formación ayuda a reconocer ese equilibrio y a construir una base que pueda mejorar con el tiempo.",
        ],
        bullets: ["Revisión periódica de caja", "Comparación contra presupuesto", "Preguntas sobre margen", "Seguimiento de cobros", "Registro de supuestos", "Responsables definidos"],
      },
    ],
    scopeNote: "Este servicio es educativo y empresarial. No constituye asesoramiento de inversión personal, recomendación de productos financieros ni garantía de resultados económicos.",
    whatsappMessage: "Hola, quiero información sobre educación financiera para empresarios y equipos.",
    related: [
      { href: "/asesoria-financiera", title: "Asesoría financiera", description: "Acompañamiento aplicado a decisiones y seguimiento de la empresa." },
      { href: "/analisis-financiero", title: "Análisis financiero", description: "Evaluación estructurada de información, indicadores y tendencias." },
      { href: "/planificacion-financiera", title: "Planificación financiera", description: "Presupuestos y escenarios para orientar la gestión futura." },
    ],
    faq: [
      { question: "¿La educación financiera está dirigida a personas o a empresas?", answer: "El servicio está orientado a empresarios y equipos de micro y medianas empresas. Los ejemplos y ejercicios se concentran en decisiones del negocio, no en inversiones o finanzas personales." },
      { question: "¿Qué temas puede incluir una capacitación?", answer: "Puede abordar flujo de caja, presupuesto, costos, márgenes, deuda, capital de trabajo, lectura de reportes y criterios para decisiones empresariales." },
      { question: "¿Se necesita conocimiento contable previo?", answer: "No necesariamente. El nivel se adapta a los participantes y se explican los conceptos con lenguaje claro, sin eliminar la precisión necesaria." },
      { question: "¿La formación puede adaptarse a diferentes áreas?", answer: "Sí. Los contenidos pueden relacionarse con ventas, compras, inventario, administración o gerencia, según las decisiones financieras en las que participe cada equipo." },
      { question: "¿Se utilizan datos reales de la empresa?", answer: "Solo cuando existe acuerdo sobre alcance, confidencialidad y preparación de la información. También pueden utilizarse casos y ejercicios referenciales." },
      { question: "¿La capacitación reemplaza una asesoría financiera?", answer: "No. La capacitación desarrolla comprensión y criterios; la asesoría acompaña una situación o decisión específica de la empresa." },
    ],
    professionalReview: true,
  },
  {
    slug: "consultoria-empresarial",
    shortName: "Consultoría empresarial",
    title: "Consultoría empresarial para mejorar procesos y decisiones",
    metaTitle: "Consultoría Empresarial para MYPE",
    metaDescription: "Consultoría empresarial para MYPE: diagnóstico, procesos, organización, productividad, costos, indicadores y digitalización con objetivos definidos.",
    keywords: ["consultoría empresarial", "consultoría para empresas", "asesoría empresarial", "consultoría para MYPE", "mejora de procesos empresariales"],
    badge: "Gestión y estrategia",
    description: "Analiza problemas de gestión, procesos e información para convertirlos en prioridades, responsables y mejoras que la empresa pueda implementar.",
    introTitle: "Mejorar una empresa requiere comprender el problema antes de elegir la solución",
    intro: [
      "Los síntomas de gestión suelen aparecer en varias áreas: retrasos, reprocesos, costos difíciles de explicar, responsabilidades difusas o reportes que llegan tarde. La consultoría empresarial organiza esa complejidad y ayuda a identificar qué causa debe atenderse primero.",
      "BREICORP trabaja con micro y medianas empresas para diagnosticar procesos, clarificar objetivos, revisar información y estructurar acciones de mejora. La consultoría no es equivalente a instalar software. Una herramienta puede apoyar la implementación, pero solo después de comprender el flujo, las decisiones y las personas involucradas.",
      "El alcance se construye con la empresa. Puede concentrarse en un proceso crítico, en la coordinación entre áreas o en una necesidad de gestión más amplia. Cada recomendación debe indicar qué problema responde, qué recursos requiere y cómo se observará el avance.",
    ],
    problems: [
      "Los mismos datos se registran varias veces en áreas diferentes.",
      "Las responsabilidades dependen de acuerdos informales y cambian ante cada excepción.",
      "La gerencia dedica tiempo a resolver urgencias sin identificar causas recurrentes.",
      "Los indicadores miden actividad, pero no calidad, tiempo, costo o resultado.",
      "La empresa considera digitalizar sin haber definido el proceso que desea mejorar.",
      "El crecimiento agregó tareas y controles que ya no responden al objetivo original.",
    ],
    includesTitle: "Áreas que puede abordar una consultoría empresarial",
    includesIntro: "La intervención se delimita para evitar diagnósticos genéricos. Según la necesidad, pueden combinarse análisis de gestión, procesos, costos, información e implementación.",
    includes: [
      { title: "Diagnóstico", text: "Definición del problema, objetivos, actores, restricciones y evidencia disponible." },
      { title: "Procesos", text: "Mapeo de actividades, decisiones, transferencias, excepciones y puntos de reproceso." },
      { title: "Organización", text: "Clarificación de funciones, responsables, acuerdos y necesidades de coordinación." },
      { title: "Productividad", text: "Identificación de esperas, duplicaciones y tareas que consumen recursos sin aportar al resultado." },
      { title: "Indicadores", text: "Selección de medidas comprensibles que conecten tiempo, calidad, costo, servicio o control." },
      { title: "Digitalización", text: "Evaluación de herramientas cuando apoyan un proceso ya comprendido y una mejora definida." },
    ],
    audienceTitle: "Para empresas que necesitan ordenar antes de crecer o digitalizar",
    audience: [
      "MYPE que aumentaron volumen, personal o locales y mantienen procesos diseñados para una operación más pequeña.",
      "Empresas con problemas que atraviesan ventas, administración, almacén, finanzas o servicio.",
      "Gerencias que necesitan priorizar iniciativas y establecer responsables e indicadores.",
      "Organizaciones que consideran implementar software y desean evitar automatizar tareas innecesarias.",
    ],
    methodTitle: "Del diagnóstico a una mejora verificable",
    methodIntro: "Una consultoría útil traduce un problema amplio en un alcance trabajable. La empresa participa en el diagnóstico, valida la realidad operativa y conserva la responsabilidad sobre las decisiones y la ejecución.",
    process: [
      { title: "Diagnóstico", text: "Recogemos contexto, síntomas, evidencia y perspectivas de quienes participan en el proceso." },
      { title: "Análisis", text: "Identificamos causas, dependencias, riesgos y oportunidades de simplificación." },
      { title: "Propuesta", text: "Priorizamos acciones, responsables, recursos y criterios para observar resultados." },
      { title: "Acompañamiento", text: "Apoyamos la implementación y revisamos ajustes conforme aparece nueva información." },
    ],
    sections: [
      {
        title: "Procesos, decisiones y responsabilidades",
        paragraphs: [
          "Un proceso no es solo una secuencia de tareas. Incluye criterios para decidir, datos que deben estar disponibles, responsables de cada resultado y reglas para gestionar excepciones. Si estos elementos no están claros, documentar únicamente pasos puede formalizar la confusión existente.",
          "La consultoría busca que el proceso sea comprensible para quienes lo ejecutan y para quienes lo supervisan. Esto permite distinguir problemas de capacidad, información, coordinación, diseño o herramienta, y evita atribuir todas las dificultades a la conducta individual.",
        ],
      },
      {
        title: "Tecnología como medio de implementación",
        paragraphs: [
          "Cuando una mejora requiere información compartida, controles consistentes o menos digitación, el software puede ser una herramienta relevante. La decisión debe partir del flujo que se desea sostener, de los roles y de los datos necesarios, no de una lista de funciones.",
          "BREICORP también desarrolla software empresarial y automatización de procesos. Esa capacidad permite conectar diagnóstico e implementación tecnológica cuando corresponda, manteniendo una diferencia clara entre la recomendación de gestión y el producto utilizado para apoyarla.",
        ],
        bullets: ["Objetivo antes que herramienta", "Datos con responsables", "Pruebas con casos reales", "Capacitación por función", "Indicadores de adopción", "Ajustes posteriores"],
      },
    ],
    scopeNote: "Las recomendaciones dependen del alcance, la evidencia disponible y la participación de la empresa. La consultoría no garantiza resultados comerciales ni sustituye responsabilidades de dirección.",
    whatsappMessage: "Hola, quiero información sobre consultoría empresarial para mi empresa.",
    related: [
      { href: "/automatizacion-procesos-empresariales", title: "Automatización de procesos", description: "Metodología para simplificar y medir procesos antes de automatizarlos." },
      { href: "/software-empresarial", title: "Software empresarial", description: "Herramienta tecnológica para conectar ventas, inventario, caja y logística." },
      { href: "/analisis-financiero", title: "Análisis financiero", description: "Lectura estructurada de información, indicadores y escenarios." },
    ],
    faq: [
      { question: "¿Qué puede resolver una consultoría empresarial?", answer: "Puede ayudar a comprender problemas de procesos, coordinación, información, costos, productividad o gestión, y a estructurar acciones. El alcance se define según la situación concreta de la empresa." },
      { question: "¿La consultoría incluye implementar software?", answer: "No necesariamente. El software puede formar parte de una implementación cuando responde a una necesidad validada, pero la consultoría y la herramienta son servicios distintos." },
      { question: "¿Cómo se elige el proceso que debe revisarse primero?", answer: "Se consideran impacto, recurrencia, riesgo, dependencia con otras áreas, disponibilidad de información y capacidad de la empresa para ejecutar cambios." },
      { question: "¿Participan los colaboradores en el diagnóstico?", answer: "Cuando el alcance lo requiere, sí. Quienes ejecutan el proceso suelen aportar información esencial sobre excepciones, esperas y controles que no aparecen en un procedimiento formal." },
      { question: "¿Qué resultados entrega una consultoría?", answer: "Según el alcance, puede entregar diagnóstico, mapa de proceso, prioridades, propuesta de mejora, responsables, indicadores y acompañamiento. Los entregables se acuerdan antes de iniciar." },
      { question: "¿La consultoría garantiza crecimiento o ahorro?", answer: "No. Ayuda a estructurar decisiones y mejoras, pero los resultados dependen de la ejecución, el contexto y factores que la consultoría no controla." },
    ],
  },
  {
    slug: "planificacion-financiera",
    shortName: "Planificación financiera",
    title: "Planificación financiera para micro y medianas empresas",
    metaTitle: "Planificación Financiera Empresarial",
    metaDescription: "Planificación financiera para MYPE con presupuestos, flujo de caja proyectado, escenarios, metas, necesidades de capital y seguimiento empresarial.",
    keywords: ["planificación financiera empresarial", "plan financiero para empresas", "planificación financiera MYPE", "presupuesto empresarial", "proyección financiera"],
    badge: "Presupuesto y escenarios",
    description: "Construye presupuestos y escenarios con supuestos visibles para anticipar necesidades, coordinar decisiones y revisar el avance de tu empresa.",
    introTitle: "Planificar no es adivinar: es preparar decisiones antes de que sean urgentes",
    intro: [
      "Una planificación financiera transforma objetivos empresariales en supuestos, periodos, necesidades de recursos y criterios de seguimiento. Permite discutir con anticipación qué ocurriría si cambian las ventas, los costos, los plazos de cobro, las compras o el ritmo de inversión.",
      "BREICORP ayuda a micro y medianas empresas a construir referencias financieras coherentes con su operación. El trabajo puede integrar presupuesto, flujo de caja proyectado, metas, escenarios y necesidades de capital. Cada cifra debe poder relacionarse con una fuente o supuesto comprendido por la empresa.",
      "Una proyección no es una promesa. Su valor está en hacer visibles las condiciones que sostienen un escenario y en definir señales para actualizarlo. La planificación se vuelve útil cuando forma parte de una rutina de decisión y no queda como un archivo preparado una vez al año.",
    ],
    problems: [
      "Las decisiones se toman con el saldo disponible y no con una mirada de los próximos meses.",
      "El presupuesto repite cifras históricas sin explicar cambios de volumen, precio o capacidad.",
      "Las inversiones se programan sin relacionarlas con cobros, pagos y capital de trabajo.",
      "Las metas comerciales no se conectan con costos, gastos ni recursos necesarios.",
      "La empresa construye un único escenario y no evalúa sensibilidad ante cambios relevantes.",
      "No existe una frecuencia acordada para comparar lo proyectado con lo ejecutado.",
    ],
    includesTitle: "Elementos de una planificación financiera empresarial",
    includesIntro: "El modelo se ajusta al horizonte y a las decisiones que la empresa necesita preparar. Puede comenzar de manera sencilla y aumentar detalle conforme mejora la información.",
    includes: [
      { title: "Presupuesto", text: "Organización de ingresos, costos y gastos esperados con criterios y responsables identificables." },
      { title: "Flujo proyectado", text: "Distribución temporal de cobros y pagos para observar posibles brechas de efectivo." },
      { title: "Escenarios", text: "Comparación de alternativas mediante supuestos sobre volumen, precios, costos, plazos u otras variables." },
      { title: "Metas", text: "Traducción de objetivos generales en referencias financieras y operativas que puedan revisarse." },
      { title: "Capital e inversión", text: "Estimación de recursos requeridos, momentos de desembolso y efectos esperados bajo supuestos explícitos." },
      { title: "Seguimiento", text: "Comparación periódica entre plan y ejecución para explicar desviaciones y actualizar decisiones." },
    ],
    audienceTitle: "Para empresas que necesitan anticipar y coordinar recursos",
    audience: [
      "MYPE que desean pasar de decisiones reactivas a una revisión financiera periódica.",
      "Empresas que preparan crecimiento, compras relevantes, contratación o apertura de operaciones.",
      "Gerencias que necesitan conectar metas comerciales con capacidad, costos y caja.",
      "Equipos que ya tienen presupuesto, pero requieren mejorar supuestos, seguimiento y responsabilidad." ,
    ],
    methodTitle: "Un plan que se revisa y aprende de la ejecución",
    methodIntro: "La planificación combina datos históricos, decisiones conocidas y supuestos sobre el futuro. Cada elemento se documenta para que la empresa pueda entender por qué cambia el resultado y actualizarlo cuando cambie el contexto.",
    process: [
      { title: "Horizonte y objetivos", text: "Definimos qué periodo y decisiones debe cubrir la planificación." },
      { title: "Base y supuestos", text: "Organizamos información histórica, compromisos y variables que explican el escenario." },
      { title: "Modelo y escenarios", text: "Construimos presupuesto, caja proyectada y alternativas relevantes." },
      { title: "Revisión periódica", text: "Comparamos ejecución, explicamos desviaciones y actualizamos supuestos cuando corresponde." },
    ],
    sections: [
      {
        title: "Presupuesto y flujo de caja proyectado cumplen funciones diferentes",
        paragraphs: [
          "El presupuesto organiza ingresos, costos y gastos bajo criterios definidos. El flujo de caja proyectado considera cuándo se espera cobrar y pagar. Una venta presupuestada puede no convertirse en efectivo durante el mismo periodo, y una compra puede pagarse antes de que el inventario genere ingresos.",
          "Relacionar ambas herramientas ayuda a detectar momentos de presión que no serían visibles al observar solo resultados. También permite discutir políticas de crédito, negociación con proveedores, ritmo de compras y reservas necesarias con una referencia común.",
        ],
      },
      {
        title: "Escenarios para preparar respuestas, no para asegurar resultados",
        paragraphs: [
          "Un escenario base puede complementarse con alternativas que cambien variables relevantes: volumen, precio, costo, plazo de cobro, tipo de compra o fecha de inversión. El objetivo es observar sensibilidad y preparar decisiones, no elegir la cifra más optimista.",
          "La empresa debe acordar qué señales obligan a revisar el plan. Una desviación persistente, un cambio de mercado o una decisión operativa importante pueden volver obsoletos los supuestos iniciales. Planificar también implica reconocer cuándo actualizar.",
        ],
        bullets: ["Supuestos de ventas", "Calendario de cobros", "Costos y gastos", "Pagos comprometidos", "Inversiones previstas", "Necesidad de capital"],
      },
    ],
    scopeNote: "Toda proyección es una estimación sujeta a supuestos, calidad de información y cambios de contexto. No representa un resultado garantizado ni una promesa de rentabilidad.",
    whatsappMessage: "Hola, quiero información sobre planificación financiera para mi empresa.",
    related: [
      { href: "/asesoria-financiera", title: "Asesoría financiera", description: "Acompañamiento para aplicar criterios financieros a decisiones concretas." },
      { href: "/analisis-financiero", title: "Análisis financiero", description: "Base histórica e indicadores para comprender la situación actual." },
      { href: "/consultoria-empresarial", title: "Consultoría empresarial", description: "Conecta la planificación con procesos, capacidad y responsabilidades." },
    ],
    faq: [
      { question: "¿Qué incluye una planificación financiera empresarial?", answer: "Puede incluir presupuesto, flujo de caja proyectado, metas, escenarios, necesidades de capital y una rutina de seguimiento. El alcance depende del horizonte y de las decisiones que se desean preparar." },
      { question: "¿Una proyección financiera predice lo que ocurrirá?", answer: "No. Una proyección expresa qué podría ocurrir bajo determinados supuestos. Su utilidad está en comparar alternativas y preparar respuestas, no en asegurar un resultado." },
      { question: "¿Con qué frecuencia debe revisarse el plan?", answer: "Depende de la velocidad del negocio y de sus decisiones. La frecuencia debe ser suficiente para detectar desviaciones a tiempo y realista para mantener la información actualizada." },
      { question: "¿Se puede planificar si la información histórica está desordenada?", answer: "Sí, pero primero debe identificarse qué datos son utilizables y qué limitaciones existen. Puede ser necesario empezar con un modelo más simple y mejorar progresivamente." },
      { question: "¿La planificación incluye decisiones de inversión?", answer: "Puede ordenar desembolsos, necesidades de capital, supuestos y efectos esperados. No garantiza el resultado de una inversión ni sustituye evaluaciones especializadas cuando correspondan." },
      { question: "¿Qué ocurre si cambian los supuestos?", answer: "El plan debe actualizarse. Registrar el cambio y su efecto permite aprender de la ejecución y conservar una referencia útil para nuevas decisiones." },
    ],
    professionalReview: true,
  },
  {
    slug: "asesoria-legal-empresas",
    shortName: "Asesoría legal",
    title: "Asesoría legal para micro y medianas empresas",
    metaTitle: "Asesoría Legal para Empresas",
    metaDescription: "Orientación legal empresarial para MYPE sobre contratos, documentación, obligaciones, estructura, formalización y prevención de contingencias según cada caso.",
    keywords: ["asesoría legal para empresas", "asesoría legal empresarial", "asesoría legal para MYPE", "consultoría legal empresarial"],
    badge: "Orientación empresarial",
    description: "Organiza consultas, documentación y decisiones empresariales que requieren evaluación legal según la naturaleza del caso y la normativa aplicable.",
    introTitle: "La prevención legal comienza por identificar obligaciones y documentar decisiones",
    intro: [
      "Las actividades de una empresa generan relaciones con socios, clientes, proveedores, colaboradores y entidades. Cuando los acuerdos quedan incompletos o la documentación no refleja la operación real, aumentan la incertidumbre y el costo de corregir una situación más adelante.",
      "BREICORP ofrece orientación y acompañamiento legal empresarial dentro del alcance que se acuerde para cada caso. El servicio puede ayudar a ordenar antecedentes, identificar documentos, comprender obligaciones generales y coordinar los siguientes pasos. No atribuye a la empresa especialidades, representaciones ni habilitaciones profesionales que no hayan sido confirmadas.",
      "La atención y alcance de cada servicio se determinan según la naturaleza del caso y la normativa aplicable. Cuando una actuación exige abogado colegiado, representación u otra habilitación específica, esa necesidad debe identificarse y confirmarse antes de asumir la prestación correspondiente.",
    ],
    problems: [
      "La empresa utiliza acuerdos verbales o formatos que no responden a la relación real.",
      "Los documentos están dispersos y no existe una versión o responsable claramente definido.",
      "Las decisiones societarias o contractuales se ejecutan sin revisar sus implicancias.",
      "La formalización de una actividad avanza sin una lista clara de asuntos por validar.",
      "Las obligaciones se atienden de forma reactiva cuando surge un requerimiento o conflicto.",
      "No está claro si una consulta requiere orientación general o intervención profesional especializada.",
    ],
    includesTitle: "Ámbitos generales de orientación legal empresarial",
    includesIntro: "Cada solicitud se revisa antes de definir el servicio. Los siguientes ámbitos describen necesidades empresariales generales y no presuponen representación, defensa ni una especialidad concreta.",
    includes: [
      { title: "Contratos", text: "Organización de antecedentes y revisión del propósito, partes, obligaciones y documentos relacionados con un acuerdo empresarial." },
      { title: "Documentación", text: "Identificación y orden de documentos que respaldan decisiones, relaciones y procesos internos." },
      { title: "Obligaciones", text: "Orientación general para reconocer asuntos que requieren atención o validación según la actividad y el caso." },
      { title: "Estructura empresarial", text: "Revisión de necesidades relacionadas con organización, responsabilidades y documentación de la empresa." },
      { title: "Formalización", text: "Acompañamiento para ordenar decisiones y documentos de una actividad empresarial en proceso de formalización." },
      { title: "Prevención", text: "Identificación temprana de vacíos documentales o decisiones que requieren una revisión específica." },
    ],
    audienceTitle: "Para empresas que necesitan ordenar una situación antes de actuar",
    audience: [
      "Micro y medianas empresas con consultas sobre acuerdos, documentación u obligaciones empresariales.",
      "Emprendimientos que avanzan hacia la formalización y necesitan identificar decisiones pendientes.",
      "Gerencias que desean prevenir contingencias mediante criterios y documentos más claros.",
      "Equipos que requieren determinar si un asunto necesita atención profesional especializada." ,
    ],
    methodTitle: "Evaluación prudente del caso y de su alcance",
    methodIntro: "Los asuntos legales requieren contexto. Antes de proponer acciones se revisan la pregunta, los antecedentes disponibles, las partes involucradas, la urgencia y el tipo de intervención que podría corresponder.",
    process: [
      { title: "Consulta inicial", text: "Delimitamos la situación, el objetivo y los documentos disponibles sin anticipar conclusiones." },
      { title: "Revisión de alcance", text: "Identificamos asuntos generales, vacíos de información y necesidades de habilitación específica." },
      { title: "Orientación", text: "Explicamos alternativas y próximos pasos dentro del alcance confirmado para el servicio." },
      { title: "Acompañamiento", text: "Coordinamos documentos o acciones acordadas y señalamos cuándo se requiere otra especialidad." },
    ],
    sections: [
      {
        title: "Contratos y documentación como herramientas de claridad",
        paragraphs: [
          "Un documento empresarial debe corresponder con la relación que pretende ordenar. Copiar un formato sin revisar obligaciones, plazos, responsabilidades, condiciones de cambio y evidencia disponible puede crear una sensación falsa de protección. La revisión comienza por comprender la operación y las expectativas de las partes.",
          "La gestión documental también importa después de firmar. Versiones, anexos, comunicaciones, aprobaciones y responsables deben conservarse de manera que la empresa pueda reconstruir la decisión. Ese orden facilita consultas posteriores y reduce dependencia de la memoria individual.",
        ],
      },
      {
        title: "Prevención de contingencias y derivación responsable",
        paragraphs: [
          "Prevenir no significa asegurar que nunca existirá un conflicto o sanción. Significa reconocer asuntos que requieren atención, mantener documentación coherente y solicitar revisión antes de ejecutar decisiones difíciles de revertir.",
          "Algunos casos requieren representación, defensa, firma profesional, conocimiento sectorial u otra habilitación específica. Una atención responsable debe reconocer esos límites y coordinar la intervención adecuada, sin presentar una orientación general como solución universal.",
        ],
        bullets: ["Antecedentes completos", "Partes identificadas", "Documentos vigentes", "Obligaciones comprensibles", "Responsables internos", "Derivación cuando corresponda"],
      },
    ],
    scopeNote: "La información de esta página es general y no constituye una opinión legal individualizada. La atención y alcance se determinan según el caso, la normativa aplicable y las habilitaciones profesionales que correspondan.",
    whatsappMessage: "Hola, quiero información sobre orientación legal para mi empresa.",
    related: [
      { href: "/creacion-de-empresas", title: "Creación de empresas", description: "Acompañamiento general para ordenar constitución y formalización." },
      { href: "/contabilidad-empresas", title: "Contabilidad para empresas", description: "Organización contable, documentación y reportes para la gestión." },
      { href: "/consultoria-empresarial", title: "Consultoría empresarial", description: "Diagnóstico de procesos, responsabilidades y decisiones de gestión." },
    ],
    faq: [
      { question: "¿Qué tipo de empresas pueden solicitar orientación legal?", answer: "Micro y medianas empresas, emprendimientos y organizaciones que necesiten ordenar una consulta empresarial. La viabilidad y el alcance se revisan según la naturaleza del caso." },
      { question: "¿La asesoría incluye representación o defensa legal?", answer: "No se presume. Cualquier actuación que requiera representación, abogado colegiado u otra habilitación debe evaluarse y confirmarse expresamente antes de contratar el servicio." },
      { question: "¿Pueden revisar contratos empresariales?", answer: "Puede evaluarse la necesidad, los antecedentes y el tipo de revisión requerido. El alcance depende de la relación, el documento y la intervención profesional que corresponda." },
      { question: "¿BREICORP garantiza evitar multas o conflictos?", answer: "No. Una orientación preventiva puede ayudar a identificar asuntos y ordenar documentación, pero no elimina todos los riesgos ni garantiza el resultado de una actuación." },
      { question: "¿Qué documentos debo enviar para una primera revisión?", answer: "Depende de la consulta. En el contacto inicial se identifica qué antecedentes son pertinentes y cómo compartirlos de forma adecuada, evitando enviar información sensible sin coordinación." },
      { question: "¿La información de esta página reemplaza una consulta legal?", answer: "No. Es información general. Una conclusión responsable requiere conocer los hechos, documentos, normativa aplicable y alcance profesional del caso." },
    ],
    professionalReview: true,
  },
  {
    slug: "contabilidad-empresas",
    shortName: "Contabilidad para empresas",
    title: "Contabilidad para micro y medianas empresas",
    metaTitle: "Contabilidad para Empresas",
    metaDescription: "Servicio contable para MYPE: organización de registros y documentos, cierres, coordinación tributaria, reportes, control e información para decisiones.",
    keywords: ["contabilidad para empresas", "servicio contable para empresas", "contabilidad para MYPE", "asesoría contable", "contabilidad empresarial"],
    badge: "Organización contable",
    description: "Organiza registros, documentos, cierres y reportes para que la información contable apoye obligaciones y decisiones de la empresa.",
    introTitle: "La contabilidad debe ser consistente, oportuna y comprensible para la empresa",
    intro: [
      "La información contable no comienza al cierre del periodo. Se construye con documentos, criterios, responsables y controles que operan durante el mes. Cuando esos elementos llegan tarde o incompletos, aumentan las correcciones y disminuye la utilidad de los reportes para la gestión.",
      "BREICORP presta servicios de organización y acompañamiento contable para micro y medianas empresas de acuerdo con el alcance confirmado. El trabajo puede incluir registros, documentación, cierres, coordinación tributaria, reportes y controles, sin prometer ausencia de observaciones o resultados frente a una autoridad.",
      "El servicio contable es distinto del software de facturación. Una plataforma puede generar y organizar información operativa, pero los criterios contables, revisiones, obligaciones y responsabilidades profesionales requieren su propio tratamiento.",
    ],
    problems: [
      "Los comprobantes y sustentos llegan fuera de fecha o sin una clasificación consistente.",
      "Ventas, bancos, compras e inventario presentan diferencias que se revisan al final.",
      "El cierre depende de aclaraciones repetitivas y de información concentrada en una persona.",
      "Los reportes contables se reciben sin una explicación útil para la gerencia.",
      "La coordinación de obligaciones se realiza sin calendario, responsables o evidencia de atención.",
      "Se confunde la emisión electrónica con la prestación integral de un servicio contable.",
    ],
    includesTitle: "Componentes que puede considerar el servicio contable",
    includesIntro: "La prestación se define según actividad, volumen, organización existente, obligaciones y disponibilidad documental. No todos los componentes aplican de la misma forma a cada empresa.",
    includes: [
      { title: "Organización documental", text: "Criterios, canales y responsables para reunir comprobantes, sustentos y antecedentes del periodo." },
      { title: "Registros", text: "Procesamiento y revisión de información dentro del alcance contable acordado." },
      { title: "Cierres", text: "Rutina para completar, conciliar y revisar información antes de emitir reportes o atender obligaciones." },
      { title: "Coordinación tributaria", text: "Calendario y comunicación de asuntos tributarios que correspondan al servicio confirmado." },
      { title: "Reportes", text: "Preparación y explicación de información para responsables de la empresa, con límites y criterios visibles." },
      { title: "Control", text: "Seguimiento de pendientes, diferencias documentales y responsabilidades que afectan la calidad del cierre." },
    ],
    audienceTitle: "Para empresas que necesitan una rutina contable más ordenada",
    audience: [
      "MYPE que están formalizando registros y responsabilidades administrativas.",
      "Empresas que necesitan mejorar la oportunidad y consistencia de su documentación.",
      "Gerencias que desean comprender la información contable y relacionarla con la gestión.",
      "Negocios que requieren coordinar operación, facturación y contabilidad sin confundir sus funciones." ,
    ],
    methodTitle: "Un servicio definido por alcance, calendario y responsabilidades",
    methodIntro: "La organización contable mejora cuando la empresa sabe qué entregar, cuándo hacerlo, quién revisa cada asunto y qué información recibirá. El diagnóstico inicial permite acordar esa rutina.",
    process: [
      { title: "Levantamiento", text: "Revisamos actividad, volumen, fuentes de información, obligaciones y forma actual de trabajo." },
      { title: "Organización", text: "Acordamos documentos, canales, criterios, responsables y fechas del ciclo contable." },
      { title: "Procesamiento y revisión", text: "Atendemos registros, conciliaciones y controles dentro del alcance confirmado." },
      { title: "Cierre y comunicación", text: "Presentamos pendientes, resultados y asuntos que requieren decisión o seguimiento." },
    ],
    sections: [
      {
        title: "Documentación y cierre: una responsabilidad compartida",
        paragraphs: [
          "La calidad del cierre depende de que los documentos representen las operaciones y se entreguen con oportunidad. El servicio contable puede organizar y revisar información, pero la empresa conserva responsabilidades sobre la veracidad, integridad y comunicación de sus actividades.",
          "Definir canales y fechas reduce búsquedas y correcciones. También permite identificar temprano comprobantes faltantes, diferencias bancarias, operaciones pendientes de explicar u otros asuntos que no deberían descubrirse al final del periodo.",
        ],
      },
      {
        title: "Información contable para la gestión empresarial",
        paragraphs: [
          "Los reportes pueden apoyar decisiones cuando la gerencia comprende sus criterios y limitaciones. Comparar periodos, revisar composición de gastos o relacionar resultados con la caja requiere una conversación que conecte la contabilidad con la operación.",
          "La tecnología puede facilitar la captura y trazabilidad de ventas, compras, inventario o facturación electrónica. Sin embargo, automatizar registros no reemplaza la revisión profesional ni convierte un módulo de software en un servicio contable completo.",
        ],
        bullets: ["Documentos oportunos", "Criterios consistentes", "Conciliaciones", "Pendientes visibles", "Reportes explicados", "Coordinación con la empresa"],
      },
    ],
    scopeNote: "El alcance contable y tributario debe confirmarse según la actividad, información y obligaciones de cada empresa. No se garantiza ausencia de observaciones, multas o contingencias.",
    whatsappMessage: "Hola, quiero información sobre contabilidad para mi empresa.",
    related: [
      { href: "/facturacion-electronica", title: "Facturación electrónica", description: "Conoce la herramienta para emitir y organizar comprobantes dentro del flujo comercial." },
      { href: "/analisis-financiero", title: "Análisis financiero", description: "Interpreta información, tendencias e indicadores para decisiones de gestión." },
      { href: "/creacion-de-empresas", title: "Creación de empresas", description: "Acompañamiento general para constitución y formalización empresarial." },
    ],
    faq: [
      { question: "¿Una MYPE necesita servicio contable?", answer: "Las necesidades dependen de su actividad, forma de organización y obligaciones. Una evaluación inicial permite definir qué apoyo, controles y responsabilidades corresponden." },
      { question: "¿El servicio contable es lo mismo que un software de facturación?", answer: "No. El software apoya el registro y emisión de operaciones. El servicio contable comprende criterios, revisión, organización, cierres, coordinación y responsabilidades profesionales según el alcance." },
      { question: "¿Qué documentos debe entregar la empresa?", answer: "Se define según la actividad y el servicio. Pueden incluir comprobantes, sustentos, movimientos, contratos, reportes y explicaciones de operaciones relevantes." },
      { question: "¿BREICORP garantiza que no habrá multas?", answer: "No. Ningún servicio responsable debe prometer ausencia total de observaciones o sanciones. El orden y seguimiento ayudan a gestionar obligaciones, pero existen responsabilidades y factores propios de cada caso." },
      { question: "¿Los reportes contables pueden ayudar a decidir?", answer: "Sí, cuando son oportunos, consistentes y explicados junto con su contexto. Pueden complementarse con análisis financiero según la pregunta de gestión." },
      { question: "¿Puede coordinarse la información del software con contabilidad?", answer: "Puede evaluarse un flujo de intercambio y control. La integración tecnológica no elimina la necesidad de revisar criterios, documentos y responsabilidades." },
    ],
    professionalReview: true,
  },
  {
    slug: "creacion-de-empresas",
    shortName: "Creación de empresas",
    title: "Creación y formalización de empresas para emprendedores y MYPE",
    metaTitle: "Creación de Empresas en Perú",
    metaDescription: "Acompañamiento para creación y formalización de empresas en Perú: decisiones iniciales, estructura, documentación, constitución y organización para operar.",
    keywords: ["creación de empresas", "crear empresa en Perú", "constitución de empresas", "formalización de empresas", "cómo crear una empresa"],
    badge: "Constitución y formalización",
    description: "Ordena las decisiones, documentos y coordinaciones necesarias para convertir una iniciativa de negocio en una empresa formalmente organizada.",
    introTitle: "Crear una empresa implica más que completar un trámite",
    intro: [
      "La formalización conecta decisiones sobre actividad, participantes, responsabilidades, estructura, documentación y forma de operar. Avanzar sin definir estos elementos puede generar cambios posteriores, costos no previstos o documentos que no representan adecuadamente el proyecto.",
      "BREICORP acompaña a emprendedores y MYPE en la organización general del proceso de creación de empresa. El servicio ayuda a identificar decisiones, preparar información, coordinar etapas y ordenar el inicio administrativo. Los requisitos, costos y plazos específicos deben verificarse con fuentes oficiales y profesionales habilitados según el caso.",
      "El acompañamiento no impone una estructura universal. La elección depende de la actividad, los participantes, los objetivos, las responsabilidades y otras condiciones que deben evaluarse antes de ejecutar trámites.",
    ],
    problems: [
      "Los participantes desean iniciar trámites sin acordar funciones, aportes o decisiones básicas.",
      "Se elige una estructura por costumbre sin relacionarla con la forma prevista de operar.",
      "La información requerida está dispersa o cambia durante la preparación documental.",
      "La constitución se confunde con todo el proceso de formalización y puesta en marcha.",
      "No se ha definido quién coordinará registros, documentos y tareas posteriores.",
      "Se toman como vigentes costos, plazos o requisitos publicados sin verificar su fuente y fecha.",
    ],
    includesTitle: "Etapas generales que puede ordenar el acompañamiento",
    includesIntro: "El detalle se confirma según el proyecto y la normativa vigente. La página describe ámbitos generales y no publica tasas, plazos ni requisitos específicos sin una verificación actualizada.",
    includes: [
      { title: "Definición del negocio", text: "Clarificación de actividad, participantes, objetivos y forma prevista de operación." },
      { title: "Evaluación de estructura", text: "Organización de criterios y preguntas para evaluar una forma empresarial adecuada al caso." },
      { title: "Preparación de información", text: "Reunión y validación de datos y decisiones necesarias para coordinar documentos." },
      { title: "Constitución", text: "Acompañamiento general de las etapas y coordinaciones que correspondan al proceso confirmado." },
      { title: "Formalización", text: "Identificación de registros y asuntos posteriores que deban validarse para iniciar actividades." },
      { title: "Organización inicial", text: "Definición de responsables, documentos, controles y herramientas básicas para comenzar a operar." },
    ],
    audienceTitle: "Para iniciativas que necesitan convertir una idea en una organización operable",
    audience: [
      "Emprendedores que han definido una actividad y necesitan ordenar la formalización.",
      "Socios que requieren documentar decisiones y responsabilidades antes de constituir.",
      "Negocios en marcha que evalúan adoptar una estructura empresarial formal.",
      "MYPE recién constituidas que necesitan organizar responsabilidades administrativas iniciales." ,
    ],
    methodTitle: "Decisiones primero, trámites después",
    methodIntro: "El acompañamiento separa decisiones empresariales, preparación documental, coordinaciones formales y organización posterior. Esto permite identificar dependencias y confirmar qué profesional o entidad interviene en cada etapa.",
    process: [
      { title: "Entender el proyecto", text: "Revisamos actividad, participantes, objetivos y situación actual." },
      { title: "Ordenar decisiones", text: "Identificamos asuntos de estructura, responsabilidades e información que deben definirse." },
      { title: "Coordinar etapas", text: "Acompañamos documentos y gestiones dentro del alcance y con verificaciones vigentes." },
      { title: "Preparar la operación", text: "Organizamos pendientes, responsables y controles básicos posteriores a la formalización." },
    ],
    sections: [
      {
        title: "Constitución, formalización e inicio de operaciones",
        paragraphs: [
          "La constitución es una parte del proceso. Una empresa también debe organizar registros, documentación, obligaciones, relaciones contractuales y controles necesarios para su actividad. El orden de estas tareas puede variar según la estructura y el sector.",
          "Distinguir etapas ayuda a no asumir que obtener un documento resuelve automáticamente todas las condiciones para operar. El acompañamiento mantiene una lista de decisiones y pendientes, y señala qué puntos necesitan validación oficial o profesional específica.",
        ],
      },
      {
        title: "Información vigente y coordinación responsable",
        paragraphs: [
          "Los requisitos, tasas, costos notariales, costos registrales y plazos pueden cambiar. Por esa razón no deben tomarse decisiones a partir de una guía desactualizada. Antes de cada gestión se verifica la información aplicable en fuentes oficiales y con los intervinientes correspondientes.",
          "Una vez creada la empresa, conviene definir desde el inicio cómo se organizarán documentos, ventas, caja, contabilidad y responsabilidades. La tecnología puede apoyar estos procesos, pero debe elegirse según la operación real y no como sustituto de decisiones legales o contables.",
        ],
        bullets: ["Actividad definida", "Participantes y roles", "Estructura evaluada", "Información verificada", "Pendientes posteriores", "Responsables de operación"],
      },
    ],
    scopeNote: "Los requisitos, costos, tasas y plazos deben verificarse con fuentes oficiales vigentes y profesionales habilitados antes de ejecutar cada etapa. El acompañamiento no garantiza aprobaciones ni tiempos de trámite.",
    whatsappMessage: "Hola, quiero información sobre creación y formalización de una empresa.",
    related: [
      { href: "/asesoria-legal-empresas", title: "Asesoría legal para empresas", description: "Orientación prudente sobre estructura, documentación y obligaciones empresariales." },
      { href: "/contabilidad-empresas", title: "Contabilidad para empresas", description: "Organización contable y documental para el inicio y continuidad de operaciones." },
      { href: "/consultoria-empresarial", title: "Consultoría empresarial", description: "Procesos, responsabilidades e indicadores para organizar la gestión." },
    ],
    faq: [
      { question: "¿Qué apoyo ofrece BREICORP al crear una empresa?", answer: "Ayuda a ordenar decisiones, información, documentos, coordinaciones y pendientes generales de constitución y formalización. El alcance específico se define después de revisar el proyecto." },
      { question: "¿Qué tipo de empresa debo elegir?", answer: "La elección depende de actividad, participantes, responsabilidades y objetivos. Debe evaluarse el caso y verificarse la normativa vigente; esta página no recomienda una forma universal." },
      { question: "¿Cuánto cuesta y cuánto demora crear una empresa?", answer: "Los costos, tasas y plazos dependen del caso, los intervinientes y la información vigente. Se verifican antes de ejecutar, por lo que no se publican aquí cifras que podrían quedar desactualizadas." },
      { question: "¿La constitución significa que ya puedo operar?", answer: "No necesariamente. Pueden existir registros, obligaciones, permisos u otras condiciones posteriores según la actividad. Deben identificarse y validarse para cada empresa." },
      { question: "¿Pueden ayudar a organizar la empresa después de crearla?", answer: "Sí, puede evaluarse apoyo en contabilidad, planificación, procesos o software empresarial como servicios separados y según las necesidades reales de la operación." },
      { question: "¿BREICORP garantiza la aprobación de los trámites?", answer: "No. El acompañamiento ayuda a ordenar y coordinar, pero las decisiones y plazos de entidades o terceros no pueden garantizarse." },
    ],
    professionalReview: true,
  },
];

export function getBusinessService(slug: string) {
  return businessServices.find((service) => service.slug === slug);
}
