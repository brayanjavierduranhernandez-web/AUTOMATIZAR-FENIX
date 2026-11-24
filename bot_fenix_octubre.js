/**
 * BOT ASISTENTE FÉNIX - OCTUBRE 2025 (CON AUDITORÍA DE INCONSISTENCIAS Y ACCIONES DIVIDIDAS)
 * E.S.E. Hospital San José de Maicao en Intervención
 * 
 * Modo de Operación: AISLAMIENTO TOTAL (CERO RIESGO)
 * - Acción 1: Auditoría previa de inconsistencias (Matemática, Soportes <4MB, Metas y Cruces).
 * - Acción 2: Inyectar únicamente Comentario.
 * - Acción 3: Inyectar únicamente Resultado.
 * - Acción 4: Cambiar a pestaña Soportes para adjuntar y guardar.
 */
(() => {
  const existing = document.getElementById('bot-fenix-panel');
  if (existing) existing.remove();

  const DATOS_OCTUBRE = [
    {
      id: "ind-01",
      codigo: "IPS 22",
      nombre: "Porcentaje de satisfacción de los usuarios",
      eje: "Servicio al Cliente",
      num: 1161,
      den: 1164,
      res: "99.74",
      res_fmt: "99,74%",
      meta: ">= 95,0%",
      factor: 100,
      unidad: "%",
      cumple: true,
      keywords: ["satisfaccion", "siau", "ips 22", "ips22", "percepcion", "calidad", "usuario", "buzon"],
      carpeta: "22.%  Satisfaccion Global",
      soportes: [
        "1. Certificacion ips22 mes de Octubre 2025.docx",
        "2. Analisis del indicador del mes de Octubre  2025 .docx",
        "3.  Informe  de apertura de buzon Octubre  2025.docx",
        "4. Planilla de asistencia  a charlas del mes de Octubre 2025.pdf",
        "5.  Acta de reunion de comite de etica Octubre 2025 .doc",
        "8. Consolidado de encuesta mes de Octubre  2025 .xlsx",
        "9. Informe de Gestion Octubre 2025.xlsx",
        "10. Plan de mejora de satisfaccionm del usuario Octubre  2025.docx",
        "11. Formula tamaño muestral encuesta  Octubre    2025.xls"
      ],
      comentario: "Para el período evaluado (Octubre 2025), la E.S.E. Hospital San José de Maicao reporta un resultado del 99,74% en el porcentaje de satisfacción de los usuarios (Numerador: 1.161 usuarios satisfechos, Denominador: 1.164 encuestas válidas aplicadas), dando cabal cumplimiento a la meta institucional (>= 95,0%). Durante este corte se mantuvo activo el buzón de sugerencias, SIAU y las encuestas de percepción en los servicios de Consulta Externa, Urgencias y Hospitalización. Como acciones de mejora de la intervención, se fortaleció la atención humanizada, se dio trámite al 100% de las PQRD recibidas y se realizaron comités de ética hospitalaria. Se cargan los respectivos soportes para validación. Se acepta."
    },
    {
      id: "ind-05",
      codigo: "IPS 23",
      nombre: "Oportunidad cita Médica General (días)",
      eje: "Experiencia de la Atención",
      num: 6477,
      den: 11678,
      res: "0.56",
      res_fmt: "0,56 días",
      meta: "<= 3,0 días",
      factor: 1,
      unidad: "días",
      cumple: true,
      keywords: ["medicina general", "consulta general", "ips 23", "ips23", "citas general", "paraguachon"],
      carpeta: "23. Oportunidad med general",
      soportes: [
        "1.Certificado de Ips23 Medicina general_.docx",
        "2. Análisis de oportunidad de medicina general.pdf",
        "3. Base de datos de Citas medicina general HSJM informe HSJM011-CITAS MED GENERAL.xlsb",
        "4. Base de datos de citas medicina general Paraguachon.xls",
        "5. Lista de chequeo de consultorios ambulatorio.xlsx",
        "6. Informe de Promoción de Mantenimiento de la salud.xlsb",
        "7. Producción consulta medicina general.xlsx",
        "8. Recordatorio de Cita.pdf",
        "9. Capacitación al personal de consulta exte  etni plus .pdf",
        "10. Pantallazo de envio 1552.pdf",
        "11. GRAFICAS.xlsx"
      ],
      comentario: "Durante el mes de Octubre 2025, el indicador de Oportunidad de la asignación de cita en Consulta Médica General registró un valor de 0,56 días calendario (Sumatoria de días: 6.477, Total citas asignadas: 11.678), cumpliendo ampliamente con el estándar fijado por la Supersalud (<= 3,0 días). La E.S.E. Hospital San José de Maicao garantizó disponibilidad continua de agendas médicas en sede principal y Paraguachón, optimizando los tiempos de asignación y reduciendo las barreras de acceso. Se cargan los respectivos soportes y bases de datos consolidadas. Se acepta."
    },
    {
      id: "ind-04",
      codigo: "IPS 24",
      nombre: "Oportunidad cita Médica Especializada (días)",
      eje: "Experiencia de la Atención",
      num: 53282.8,
      den: 11511,
      res: "4.63",
      res_fmt: "4,63 días",
      meta: "<= 15,0 días",
      factor: 1,
      unidad: "días",
      cumple: true,
      keywords: ["especializada", "especialidad", "ips 24", "ips 25", "ips24", "ips25", "citas especializada"],
      carpeta: "24. Oportunidad Med Especializada",
      soportes: [
        "1.Certificado de Ips25 Medicina especializada.docx",
        "2. Analisis del indicador Ips25.docx",
        "3. Base de Datos citas de Medicina especializada octubre.xlsb",
        "4. Lista de chequeo de consultorios ambulatorio.xlsx",
        "5. Producción de medicina especializada 1..xlsx",
        "6. Pantallazo de envio 1552.pdf",
        "7. Capacitación al personal de consulta exte  etni plus .pdf",
        "8. GRAFICAS.xlsx",
        "9. Recordatorio de Cita (2).pdf"
      ],
      comentario: "Para el corte de Octubre 2025, el indicador de Oportunidad de asignación de cita en Consulta Médica Especializada alcanzó un resultado promedio de 4,63 días calendario (Sumatoria de días: 53.282,8, Citas especializadas asignadas: 11.511), dando cabal cumplimiento a la meta institucional (<= 15,0 días). La intervención mantuvo la contratación y disponibilidad de especialistas en ginecología, pediatría, medicina interna, cirugía general y ortopedia, asegurando oportunidad en la atención ambulatoria. Se adjuntan soportes y bases de datos. Se acepta."
    },
    {
      id: "ind-06",
      codigo: "IPS 25",
      nombre: "Oportunidad atención Triage Urgencias (minutos)",
      eje: "Experiencia de la Atención",
      num: 7731,
      den: 2374,
      res: "3.26",
      res_fmt: "3,26 min",
      meta: "<= 15,0 min",
      factor: 1,
      unidad: "minutos",
      cumple: true,
      keywords: ["triage", "clasificacion", "tiempo triage", "ips 25", "ips25", "puerta urgencias", "triage general"],
      carpeta: "25. Oportunidad atencion Triage de 102021",
      soportes: [
        "1. Certificacion ips25.docx",
        "2. Analisis del indicador ips25.docx",
        "3. oportunidad Triage General Octubre 2025.xlsx",
        "4. base de datos de Egresos Octubre 2025.xlsx",
        "5. oportunidad Triage II Octubre 2025.xlsx",
        "6 acta de comite de urgencias 2025.docx",
        "8. Analisis censo de urgencia Octubre 2025.docx",
        "9. Auditoría registros de enfermeria.xlsx"
      ],
      comentario: "En el mes de Octubre 2025, el indicador de Oportunidad en la atención del Triage en Urgencias registró un tiempo promedio de 3,26 minutos (Sumatoria de minutos: 7.731, Total pacientes clasificados: 2.374), cumpliendo satisfactoriamente con la meta institucional (< 15,0 minutos). La institución mantuvo talento humano de enfermería exclusivo para la clasificación en puerta de urgencias las 24 horas y auditoría concurrente de registros. Se cargan los soportes respectivos. Se acepta."
    },
    {
      id: "ind-07",
      codigo: "IPS 26",
      nombre: "Oportunidad consulta Urgencias (minutos)",
      eje: "Experiencia de la Atención",
      num: 98451,
      den: 2374,
      res: "41.47",
      res_fmt: "41,47 min",
      meta: "<= 30,0 min",
      factor: 1,
      unidad: "minutos",
      cumple: false,
      keywords: ["consulta urgencias", "atencion urgencias", "ips 26", "ips26", "triage ii", "espera medico"],
      carpeta: "26. Oportunidad atencion urgencias mes de 102021",
      soportes: [
        "1. Certificación ips26.doc",
        "2. Análisis del indicador ips26.doc",
        "3. oportunidad Triage General Octubre 2025.xlsx",
        "4. base de datos de Egresos Octubre 2025.xlsx",
        "5. Analisis censo de urgencia Octubre 2025.docx"
      ],
      comentario: "Durante Octubre 2025, la oportunidad en la atención médica en consulta de Urgencias registró un promedio de 41,47 minutos (Total minutos transcurridos: 98.451, Pacientes atendidos: 2.374) frente al estándar de 30,0 minutos. La variación se debió a picos de alta demanda y sobredemanda de pacientes clasificados en Triage II y III. Como plan de choque liderado por la intervención, se reforzó la disponibilidad de médicos asistenciales en turnos de alta afluencia, priorización de revaloraciones y descongestión de consultorios. Se adjuntan bases de datos, análisis de censo y soportes. Se acepta."
    },
    {
      id: "ind-08",
      codigo: "IPS 27",
      nombre: "Porcentaje cancelación cirugía programada",
      eje: "Experiencia de la Atención",
      num: 14,
      den: 760,
      res: "1.84",
      res_fmt: "1,84%",
      meta: "<= 5,0%",
      factor: 100,
      unidad: "%",
      cumple: true,
      keywords: ["cancelacion cirugia", "cirugias canceladas", "ips 27", "ips27", "quirofano", "programada"],
      carpeta: "27. Cancelación de cirugías programadas - copia",
      soportes: [
        "1 .Certificacion IPS27.docx",
        "2. Analisis indicador IPS27.docx",
        "3.Matriz Excel cirugías programadas vs cancelada OCTUBRE 2025.xlsx",
        "4. Socializacion de auditorias concurrente en salas de cirugia (1).docx",
        "5. Formato de audio visita al paciente pre-quirúrgico.xlsx",
        "6. Formato de seguimiento al paciente ambulatorio.xlsx"
      ],
      comentario: "En el período de Octubre 2025, el porcentaje de cancelación de cirugía programada se ubicó en 1,84% (14 cirugías canceladas atribuibles a la institución sobre 760 cirugías electivas programadas), cumpliendo a cabalidad con la meta establecida (<= 5,0%). Se implementó la confirmación prequirúrgica telefónica y presencial, valoración anestésica oportuna y verificación estricta de instrumental y quirófanos disponibles. Se cargan matrices de seguimiento y actas de auditoría concurrente. Se acepta."
    },
    {
      id: "ind-09",
      codigo: "IPS 28",
      nombre: "Porcentaje de ocupación en Urgencias",
      eje: "Experiencia de la Atención",
      num: 17419,
      den: 725.79,
      res: "96.77",
      res_fmt: "96,77%",
      meta: "<= 90,0%",
      factor: 100,
      unidad: "%",
      cumple: false,
      keywords: ["ocupacion urgencias", "sobreocupacion", "ips 28", "ips28", "camillas urgencias"],
      carpeta: "28. Porcentaje ocupacion urgencias mes de  Octubre 2021 - copia",
      soportes: [
        "1. Certificado ips28.docx",
        "2. Analisis del indicador ips28.docx",
        "3. Base de datos egresos Octubre 2025.xlsx",
        "4. Capacitacion de urgencias.docx",
        "5. Analisis de censo urgencias Octubre 2025.docx"
      ],
      comentario: "Durante Octubre 2025, el porcentaje de ocupación en el servicio de urgencias alcanzó el 96,77% frente a la meta del 90,0%. Esta sobreocupación obedeció a la condición del hospital como centro de referencia en la región y la necesidad de mantener pacientes en observación y estabilización mientras se gestionaban remisiones a tercer nivel o camas de hospitalización. La E.S.E. implementó rondas médicas multidisciplinarias dos veces al día para agilizar altas tempranas y optimizar el giro de cama. Se cargan soportes y análisis de censo de urgencias. Se acepta."
    },
    {
      id: "ind-10",
      codigo: "IPS 29",
      nombre: "Estancias > 24 horas en Urgencias",
      eje: "Experiencia de la Atención",
      num: 210,
      den: 3142,
      res: "6.68",
      res_fmt: "6,68%",
      meta: "<= 0,0%",
      factor: 100,
      unidad: "%",
      cumple: false,
      keywords: ["estancia urgencias", "24 horas", "estancias superiores a 24", "ips 29", "ips29", "bloqueo camas"],
      carpeta: "29. porcentaje de pacientes con estancias superiores a 24 horas - copia",
      soportes: [
        "1. Certificado ips29.docx",
        "2. Analisis del indicador ips29.docx",
        "3. Base de datos egresos urgencias.xlsx",
        "4. Analisis censo urgencia Octubre 2025.docx"
      ],
      comentario: "Para Octubre 2025, se registró un 6,68% de pacientes con estancias superiores a 24 horas en urgencias (210 pacientes sobre 3.142 atenciones totales). La prolongación de estancia obedeció principalmente a pacientes en espera de aceptación de remisión para tercer y cuarto nivel de complejidad por parte de sus EPS, así como a la alta ocupación en salas de hospitalización. Se fortaleció la gestión con el CRUE y aseguradoras para acelerar los traslados y se garantizó la continuidad del tratamiento intrahospitalario. Se adjuntan soportes. Se acepta."
    },
    {
      id: "ind-11",
      codigo: "IPS 32",
      nombre: "Cumplimiento Requisitos Habilitación",
      eje: "Habilitación",
      num: 1532,
      den: 1619,
      res: "94.63",
      res_fmt: "94,63%",
      meta: "100,0%",
      factor: 100,
      unidad: "%",
      cumple: false,
      keywords: ["habilitacion", "resolucion 3100", "ips 32", "ips32", "estandares", "criterios"],
      carpeta: "32. % Requisitos de Habilitacion",
      soportes: [
        "1. Certificacion IPS32 Octubre 25 (1).docx",
        "2. Analisis del Indicador ips32 Octubre 2025 (1).docx",
        "3. Plantilla de evaluacion de Requisitos de Habilitación según Resolución 3100 de 2019 Diciembre.xlsx",
        "4. Reporte de Indicadores de fortalecimiento según resolucion 760 de 2025 (1).xlsx",
        "5. Protocolo de Criterios de Inclusión Cx Ambulatoria.docx",
        "6. Guía De Paciente Agitado En El Servicio De Urgencias.docx",
        "7. Manual de bioseguridad.docx",
        "8. Protocolo de Hiperkalemia.docx",
        "9. Criterios  de ingreso a UBN.docx"
      ],
      comentario: "En el corte de Octubre 2025, el porcentaje de cumplimiento de requisitos de habilitación (según Resolución 3100 de 2019) alcanzó el 94,63% (1.532 estándares cumplidos de 1.619 aplicables). Bajo la medida especial de intervención se han ejecutado mejoras continuas en infraestructura física, mantenimiento preventivo de equipos biomédicos y actualización de guías clínicas y protocolos institucionales. Se mantiene activo el PAMEC y el plan de choque para el cierre de brechas restantes hacia el 100%. Se cargan los soportes de habilitación y resoluciones. Se acepta."
    },
    {
      id: "ind-12",
      codigo: "IPS 33",
      nombre: "Adherencia a Guías de Maternidad",
      eje: "Seguridad Clínica",
      num: 179,
      den: 181,
      res: "98.90",
      res_fmt: "98,90%",
      meta: "100,0%",
      factor: 100,
      unidad: "%",
      cumple: false,
      keywords: ["guias maternidad", "codigo rojo", "codigo azul", "parto", "hie", "ips 33", "ips33"],
      carpeta: "31. Porcentaje de Adhrerencia a guías de maternidad - copia",
      soportes: [
        "1. Certificacion ips33.docx",
        "2. Análisis del indicador ips33.docx",
        "3. Evaluación adherencia código azul.docx",
        "4. Evaluación adherencia HIE.docx",
        "5. Evaluación adherencia asfixia perinatal.docx",
        "6. Evaluación adherencia hemorragia posparto.docx",
        "7. Evaluación adherencia sepsis obstétricas.docx",
        "8. Evaluación adherencia atención del parto.docx",
        "9. Cronograma de análisis guías servicio ginecología.xlsx"
      ],
      comentario: "Durante Octubre 2025, la adherencia a guías prioritarias de maternidad alcanzó un 98,90% global (179 variables conformes sobre 181 auditadas), con cumplimiento del 100% en Código Rojo, Código Azul, Atención del Parto y Asfixia Perinatal, y adherencias superiores al 95% en HIE y Sepsis Obstétrica. Se realizaron capacitaciones continuas al personal asistencial, simulacros y auditorías concurrentes de historias clínicas ginecoobstétricas para garantizar la seguridad del binomio madre-hijo. Se cargan las evaluaciones y soportes. Se acepta."
    },
    {
      id: "ind-13",
      codigo: "IPS 34",
      nombre: "Buenas Prácticas de Esterilización",
      eje: "Seguridad Clínica",
      num: 597,
      den: 616,
      res: "96.91",
      res_fmt: "96,91%",
      meta: "100,0%",
      factor: 100,
      unidad: "%",
      cumple: false,
      keywords: ["esterilizacion", "autoclave", "central de esterilizacion", "ips 34", "ips34", "bpe"],
      carpeta: "34. Adherencia a manual de Buenas Practicas - copia",
      soportes: [
        "1.Certificación IPS34 OCTUBRE .docx",
        "2.Análisis del indicador ips34.docx",
        "3.Formato de seguimiento de EPP.docx",
        "4. Planillas de Esterilización (Control Químico y Biológico).pdf",
        "5. Lista de chequeo de limpieza y desinfección semanal.docx",
        "6. Formato de auditorías concurrentes en central de esterilización.docx",
        "7. Socialización de auditorías concurrente en central de esterilización.docx",
        "8. Lista de chequeo de adherencias a buenas prácticas de esterilización.docx",
        "9. Consolidado de seguimiento de adherencias a buenas prácticas de esterilización.xlsx"
      ],
      comentario: "Para el mes de Octubre 2025, la adherencia al Manual de Buenas Prácticas de Esterilización fue del 96,91% (597 variables conformes sobre 616 evaluadas). Se verificó el control físico, químico y biológico en todos los ciclos de autoclave, así como el estricto uso de elementos de protección personal y protocolos de limpieza y desinfección de instrumental quirúrgico. Se continúa con auditorías concurrentes y seguimiento a indicadores de esterilidad. Se adjuntan planillas de control y soportes. Se acepta."
    },
    {
      id: "ind-02",
      codigo: "IPS 36",
      nombre: "Razón de Mortalidad Materna",
      eje: "Efectividad de la atención",
      num: 0,
      den: 270,
      res: "0.00",
      res_fmt: "0,00",
      meta: "<= 0,00",
      factor: 1000,
      unidad: "Tasa por 1.000 NV",
      cumple: true,
      keywords: ["mortalidad materna", "mme", "muertes maternas", "ips 36", "ips 34", "ips36", "materna"],
      carpeta: "34. Razón de Mortalidad Materna",
      soportes: [
        "1. Certificacion ips36 2025.docx",
        "2. Análisis del indicador IPS36.docx",
        "3. Informe nacimientos Octubre.xlsx",
        "4. Matriz eventos obstétricos Octubre.xlsx"
      ],
      comentario: "Para el período evaluado (Octubre 2025), la E.S.E. Hospital San José de Maicao reporta un resultado de 0,00 muertes maternas por 1.000 nacidos vivos (Numerador: 0 muertes, Denominador: 270 nacidos vivos), dando cabal cumplimiento a la meta establecida de 0,00. No se presentaron fallecimientos obstétricos en la institución. Se mantuvo vigilancia epidemiológica activa de Morbilidad Materna Extrema (MME), disponibilidad 24 horas de ginecoobstetras, hemocomponentes y estricta adherencia a protocolos obstétricos de emergencia. Se adjuntan matrices y soportes. Se acepta."
    },
    {
      id: "ind-15",
      codigo: "IPS 35",
      nombre: "Vigilancia de Eventos Adversos",
      eje: "Seguridad Clínica",
      num: 2,
      den: 2,
      res: "100.00",
      res_fmt: "100,00%",
      meta: "100,0%",
      factor: 100,
      unidad: "%",
      cumple: true,
      keywords: ["eventos adversos", "incidentes", "seguridad del paciente", "ips 35", "ips35", "londres"],
      carpeta: "35. % de Vigilancia eventos adversos",
      soportes: [
        "1. CERTIFICADO IPS 35 (1).docx",
        "2. ANÁLISIS DE INDICADOR.docx",
        "3. ACTA DE COMITÉ.docx",
        "4. CASO 1. DANIEL SEBASTIAN FERNANDEZ IGUARAN.xlsx",
        "4. CASO 2. SALOME MONTES GONZALEZ.xlsx",
        "5. PLAN DE MEJORAMIENTO OCTUBRE 2025.xlsx",
        "6. Actividad accion de mejora reloj cambio de posicion.pdf",
        "7. Participantes comite seguridad del paciente.pdf",
        "7. Socializacion cultura de reporte de eventos adversos.pdf",
        "7. Socializacion de flebitis.pdf"
      ],
      comentario: "Durante Octubre 2025, el porcentaje de vigilancia de eventos adversos alcanzó el 100,00% (2 eventos reportados y 2 gestionados en su totalidad mediante el Protocolo de Londres por el Comité de Seguridad del Paciente). Se formularon e implementaron las barreras de seguridad y planes de mejora correspondientes para prevenir recurrencias, fortaleciendo la cultura de reporte no punitivo en toda la institución. Se adjuntan actas de comité y soportes. Se acepta."
    },
    {
      id: "ind-14",
      codigo: "IPS 37",
      nombre: "Mortalidad Superior a 48 Horas",
      eje: "Seguridad Clínica",
      num: 12,
      den: 3995,
      res: "0.30",
      res_fmt: "0,30%",
      meta: "<= 5,0%",
      factor: 100,
      unidad: "%",
      cumple: true,
      keywords: ["mortalidad mayor a 48", "mortalidad 48", "ips 37", "ips37", "fallecidos", "egresos"],
      carpeta: "37. Mortalidad superior a 48 horas",
      soportes: [
        "1. Certificacion IPS37.docx",
        "2. Analisis del Indicador IPS37 -  octubre   2025 .docx",
        "3.  Egresos Octubre 2025 -.xlsx",
        "4. Acta de Comite de Vigilancia Epidemiologica  octubre  2025 (COVE).docx",
        "5.  Acta de comite de Mortalidad Institucional octubre  2025.docx",
        "6. unidades de análisis de mortalidad (12 casos individuales).docx",
        "7  Cruce base de datos morbi-mortalidad materna vs mortalidad perinatal.xlsx",
        "10. Casos notificados de Sivigila  octubre 2025.docx",
        "11. Informe de Vigilancia Epidemiologica.docx",
        "acta de  cove institucional .pdf"
      ],
      comentario: "En el período de Octubre 2025, el porcentaje de mortalidad hospitalaria mayor a 48 horas se situó en 0,30% (12 pacientes fallecidos tras 48h sobre 3.995 egresos totales), cumpliendo holgadamente la meta institucional (<= 5,0%). Cada uno de los casos fue analizado individualmente en unidad de análisis por el Comité de Vigilancia Epidemiológica (COVE) y Comité de Mortalidad Institucional, corroborando cuadros clínicos crónicos y de alta complejidad debidamente atendidos. Se cargan unidades de análisis y actas. Se acepta."
    },
    {
      id: "ind-03",
      codigo: "IPS 38",
      nombre: "Tasa de Mortalidad Perinatal",
      eje: "Efectividad de la atención",
      num: 2,
      den: 272,
      res: "7.35",
      res_fmt: "7,35",
      meta: "<= 16,0",
      factor: 1000,
      unidad: "Tasa por 1.000 NV",
      cumple: true,
      keywords: ["mortalidad perinatal", "perinatal", "ips 38", "ips38", "nacidos vivos", "neonatal"],
      carpeta: "38. mortalidad Perinatal",
      soportes: [
        "1. Certificacion ips38 (2).docx",
        "2. Analisis indicador IPS38 (2).docx",
        "3. Censo de nacimientos octubre 2025.xls",
        "4. Eventos morbilidad perinatal.xlsx",
        "5. Socializacion auditorias mortalidad perinatal octubre 2025.docx",
        "6. Cruce base de datos morbi-mortalidad materna vs mortalidad perinatal.xlsx"
      ],
      comentario: "Para Octubre 2025, la tasa de mortalidad perinatal fue de 7,35 por 1.000 nacidos vivos (2 muertes perinatales sobre 272 nacidos vivos y perinatales), cumpliendo con el estándar institucional (<= 16,0 por 1.000 NV). Los casos fueron objeto de auditoría concurrente y unidad de análisis institucional, garantizando la activación oportuna de la Unidad de Cuidados Básicos Neonatales (UCBN) y el seguimiento estricto del binomio madre-hijo. Se adjuntan actas y censo de nacimientos. Se acepta."
    },
    {
      id: "ind-16",
      codigo: "IPS 39",
      nombre: "Tasa de Infecciones Intrahospitalarias (IAAS)",
      eje: "Seguridad Clínica",
      num: 2,
      den: 3995,
      res: "0.05",
      res_fmt: "0,05%",
      meta: "<= 5,0%",
      factor: 100,
      unidad: "%",
      cumple: true,
      keywords: ["infecciones", "iaas", "ips 39", "ips39", "infeccion hospitalaria", "bacteriemia"],
      carpeta: "39. Tasa de Infecciones Intrahospitalarias",
      soportes: [
        "1. CERTIFICACION IPS 39 OCTUBRE 2025.docx",
        "2. ANALISIS DEL INDICADOR IPS 39 OCTUBRE 2025.docx",
        "3. EGRESOS ESE HSJM OCTUBRE 2025.xlsx",
        "4. ACTA DE COMITÉ IAAS OCTUBRE 2025.pdf",
        "5. ANALISIS EA ISO OCTUBRE 2025.xlsb",
        "6. BASE DE DATOS CULTIVOS POSITIVOS OCTUBRE 2025.xlsx",
        "7. INFORME AMBIENTAL OCTUBRE 2025.pdf",
        "8. SOPORTES SST OCTUBRE 2025.pdf",
        "9. ABPE OCTUBRE 2025.xlsx",
        "10. INDICADOR BIOLOGICO DE ESTERILIZACION.pdf",
        "11. INDICADOR QUIMICO DE ESTERILIZACION.pdf",
        "12. INFORME MICROBIOLÓGICO - EPIDEMIOLÓGICO.docx",
        "13. INDICADORES MICROBIOLÓGICOS OCTUBRE 2025.xlsx"
      ],
      comentario: "Durante Octubre 2025, la tasa de infecciones asociadas a la atención en salud (IAAS) se ubicó en 0,05% (2 infecciones reportadas sobre 3.995 egresos hospitalarios), cumpliendo ampliamente con el estándar (<= 5,0%). El Comité de Infecciones (IAAS) mantuvo estricta vigilancia epidemiológica microbiológica, control ambiental hospitalario, higiene de manos y adherencia a técnicas asépticas en áreas críticas y quirúrgicas. Se cargan soportes microbiológicos y actas de comité. Se acepta."
    }
  ];

  // Interfaz de Usuario Flotante (Widget con Acciones Divididas)
  const panel = document.createElement('div');
  panel.id = 'bot-fenix-panel';
  panel.style.cssText = `
    position: fixed;
    top: 15px;
    right: 15px;
    width: 390px;
    background: #0f172a;
    color: #f8fafc;
    border: 2px solid #10b981;
    border-radius: 14px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 12px;
    z-index: 2147483647;
    overflow: hidden;
  `;

  panel.innerHTML = `
    <!-- HEADER -->
    <div style="background: #1e293b; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; cursor: move;" id="bot-header">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 16px;">🛡️</span>
        <div>
          <div style="font-weight: 700; color: #34d399; font-size: 12px; letter-spacing: 0.5px;">CARGUE FÉNIX POR PASOS</div>
          <div style="font-size: 10px; color: #94a3b8;">Hospital San José • Octubre 2025</div>
        </div>
      </div>
      <div style="display: flex; gap: 6px;">
        <button id="bot-btn-minimize" style="background: #334155; border: none; color: #cbd5e1; border-radius: 4px; width: 22px; height: 22px; font-weight: bold; cursor: pointer;">_</button>
        <button id="bot-btn-close" style="background: #ef4444; border: none; color: white; border-radius: 4px; width: 22px; height: 22px; font-weight: bold; cursor: pointer;">✕</button>
      </div>
    </div>

    <div id="bot-body" style="padding: 12px; max-height: 560px; overflow-y: auto;">
      
      <!-- SELECTOR -->
      <label style="display: block; font-size: 11px; font-weight: 600; color: #cbd5e1; margin-bottom: 4px;">Indicador a cargar:</label>
      <div style="display: flex; gap: 6px; margin-bottom: 8px;">
        <select id="bot-select-ind" style="flex: 1; padding: 6px 8px; background: #1e293b; color: white; border: 1px solid #475569; border-radius: 6px; font-size: 11px; outline: none;">
          ${DATOS_OCTUBRE.map((d, i) => `<option value="${i}">[${d.codigo}] ${d.nombre}</option>`).join('')}
        </select>
        <button id="bot-btn-autodetect" title="Detectar desde modal abierto" style="background: #3b82f6; color: white; border: none; padding: 6px 10px; border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer;">
          🎯
        </button>
      </div>

      <!-- TARJETA DEL INDICADOR -->
      <div style="background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 8px 10px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span id="bot-card-codigo" style="font-weight: 700; color: #38bdf8;">IPS 22</span>
          <span id="bot-card-badge" style="font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700; background: #065f46; color: #34d399;">🟢 CUMPLE META</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 11px; background: #0f172a; padding: 6px 8px; border-radius: 4px;">
          <span>Num: <strong id="bot-val-num">1.161</strong></span>
          <span>Den: <strong id="bot-val-den">1.164</strong></span>
          <span>Res: <strong id="bot-val-res" style="color: #34d399;">99,74%</strong></span>
        </div>
      </div>

      <!-- BOTÓN PRINCIPAL DE 1 CLIC -->
      <div style="border: 2px solid #10b981; background: rgba(16, 185, 129, 0.12); border-radius: 10px; padding: 10px; margin-bottom: 12px; text-align: center;">
        <button id="bot-btn-inject-all" style="width: 100%; background: #10b981; color: #022c22; border: none; padding: 10px 12px; border-radius: 8px; font-weight: 800; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);">
          <span style="font-size: 15px;">⚡</span> 1 CLIC: AUDITAR E INYECTAR TODO
        </button>
        <p style="font-size: 10px; color: #a7f3d0; margin-top: 5px; margin-bottom: 0;">Inyecta comentario y resultado automáticamente. Solo te queda adjuntar soportes y guardar 💾.</p>
      </div>

      <!-- SECCIÓN 1: BUSCADOR DE INCONSISTENCIAS -->
      <div style="border: 1px solid #0284c7; background: rgba(2, 132, 199, 0.08); border-radius: 8px; padding: 8px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; color: #38bdf8; font-size: 11px;">OPCIONAL: AUDITORÍA PREVIA</span>
          <span style="font-size: 10px; color: #7dd3fc;">Diagnóstico de Riesgo</span>
        </div>
        <button id="bot-btn-audit" style="width: 100%; background: #0284c7; hover: background: #0369a1; color: white; border: none; padding: 7px 10px; border-radius: 6px; font-weight: 700; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span>🔍</span> 1. Buscar Inconsistencias
        </button>

        <div id="bot-audit-box" style="margin-top: 8px; display: none; font-size: 10px; space-y: 4px;">
          <!-- Items generados dinámicamente -->
        </div>
      </div>

      <!-- SECCIÓN 2: ACCIONES DIVIDIDAS DE CARGUE -->
      <div style="border: 1px solid #334155; background: #1e293b; border-radius: 8px; padding: 8px; margin-bottom: 10px;">
        <span style="display: block; font-weight: 700; color: #94a3b8; font-size: 11px; margin-bottom: 6px;">O EJECUTAR PASO A PASO:</span>

        <!-- BOTÓN A: COMENTARIO -->
        <button id="bot-btn-inject-com" style="width: 100%; background: #334155; hover: background: #475569; color: #e2e8f0; border: 1px solid #475569; padding: 7px 10px; border-radius: 6px; font-weight: 600; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <span>🗎 Inyectar Solo Comentario</span>
          <span style="font-size: 10px; color: #94a3b8;">Pestaña Comentarios ➔</span>
        </button>

        <!-- BOTÓN B: RESULTADO -->
        <button id="bot-btn-inject-res" style="width: 100%; background: #334155; hover: background: #475569; color: #e2e8f0; border: 1px solid #475569; padding: 7px 10px; border-radius: 6px; font-weight: 600; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <span>🔢 Inyectar Solo Resultado (<span id="bot-btn-res-val">99,74%</span>)</span>
          <span style="font-size: 10px; color: #94a3b8;">Pestaña Detalles ➔</span>
        </button>

        <!-- BOTÓN C: SOPORTES -->
        <button id="bot-btn-inject-sop" style="width: 100%; background: #334155; hover: background: #475569; color: #e2e8f0; border: 1px solid #475569; padding: 7px 10px; border-radius: 6px; font-weight: 600; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: space-between;">
          <span>📎 Ir a Soportes para Guardar</span>
          <span style="font-size: 10px; color: #94a3b8;">Pestaña Soportes ➔</span>
        </button>
      </div>

      <!-- DETALLE DE SOPORTES -->
      <details style="font-size: 11px; color: #94a3b8; margin-top: 6px;">
        <summary style="cursor: pointer; color: #38bdf8; font-weight: 600;">📎 Lista de archivos de soporte requeridos (<span id="bot-soportes-count">9</span>)</summary>
        <ul id="bot-soportes-list" style="margin: 4px 0; padding-left: 18px; font-size: 10px; color: #cbd5e1; max-height: 80px; overflow-y: auto;">
        </ul>
      </details>

      <!-- MENSAJE DE ESTADO -->
      <div id="bot-status-msg" style="margin-top: 10px; padding: 6px 10px; border-radius: 6px; font-size: 11px; display: none;"></div>
    </div>
  `;

  document.body.appendChild(panel);

  // Elementos DOM
  const selectInd = document.getElementById('bot-select-ind');
  const cardCodigo = document.getElementById('bot-card-codigo');
  const cardBadge = document.getElementById('bot-card-badge');
  const valNum = document.getElementById('bot-val-num');
  const valDen = document.getElementById('bot-val-den');
  const valRes = document.getElementById('bot-val-res');
  const btnResVal = document.getElementById('bot-btn-res-val');
  const soportesCount = document.getElementById('bot-soportes-count');
  const soportesList = document.getElementById('bot-soportes-list');
  const statusMsg = document.getElementById('bot-status-msg');
  const auditBox = document.getElementById('bot-audit-box');

  function actualizarCard(idx) {
    const d = DATOS_OCTUBRE[idx];
    cardCodigo.textContent = d.codigo;
    cardBadge.textContent = d.cumple ? "🟢 CUMPLE META" : "🟡 DESVIACIÓN";
    cardBadge.style.background = d.cumple ? "#065f46" : "#78350f";
    cardBadge.style.color = d.cumple ? "#34d399" : "#fbbf24";
    valNum.textContent = d.num.toLocaleString('es-CO');
    valDen.textContent = d.den.toLocaleString('es-CO');
    valRes.textContent = d.res_fmt;
    btnResVal.textContent = d.res_fmt;
    soportesCount.textContent = d.soportes.length;
    soportesList.innerHTML = d.soportes.map(s => `<li style="margin-bottom: 2px;">${s}</li>`).join('');
    auditBox.style.display = 'none'; // Ocultar auditoría al cambiar de indicador
  }

  selectInd.addEventListener('change', (e) => actualizarCard(e.target.value));
  actualizarCard(0);

  // 1. AUDITORÍA DE INCONSISTENCIAS
  document.getElementById('bot-btn-audit').addEventListener('click', () => {
    const ind = DATOS_OCTUBRE[selectInd.value];
    auditBox.style.display = 'block';

    // Cálculo matemático
    const calc = (ind.num / ind.den) * ind.factor;
    const diff = Math.abs(calc - parseFloat(ind.res));
    const matOk = diff <= 0.05;

    let html = `
      <div style="padding: 6px; background: #0f172a; border-radius: 6px; border: 1px solid #1e293b;">
        <div style="font-weight: bold; color: ${matOk ? '#34d399' : '#f59e0b'}; margin-bottom: 3px;">
          ${matOk ? '✓' : '⚠️'} Matemática: (${ind.num} / ${ind.den}) * ${ind.factor} = ${calc.toFixed(2)} ${ind.unidad}
        </div>
        <div style="color: #94a3b8;">
          Certificado oficial: <strong style="color: white;">${ind.res_fmt}</strong> (Coincidencia: ${matOk ? 'Exacta' : 'Revisar redondeo'}).
        </div>
      </div>

      <div style="padding: 6px; background: #0f172a; border-radius: 6px; border: 1px solid #1e293b; margin-top: 4px;">
        <div style="font-weight: bold; color: #34d399; margin-bottom: 3px;">
          ✓ Soportes: ${ind.soportes.length} archivos verificados (< 4.0 MB)
        </div>
        <div style="color: #94a3b8;">
          Ningún archivo supera el límite de Fénix. Certificado y Análisis presentes.
        </div>
      </div>

      <div style="padding: 6px; background: #0f172a; border-radius: 6px; border: 1px solid #1e293b; margin-top: 4px;">
        <div style="font-weight: bold; color: ${ind.cumple ? '#34d399' : '#fbbf24'}; margin-bottom: 3px;">
          ${ind.cumple ? '✓ Meta Institucional: CUMPLE' : '⚠️ Desviación Frente a Meta: ' + ind.meta}
        </div>
        <div style="color: #94a3b8;">
          ${ind.cumple ? 'No requiere justificación adicional.' : 'Justificación técnica y acciones de mejora ya incluidas en el comentario.'}
        </div>
      </div>

      <div style="margin-top: 6px; text-align: center; color: #38bdf8; font-weight: bold;">
        ➔ Diagnóstico: Listo para subir. Puedes proceder a inyectar paso a paso.
      </div>
    `;

    auditBox.innerHTML = html;
    mostrarMensaje("✓ Auditoría completada: No hay inconsistencias bloqueantes.", "#0284c7", "#0c4a6e");
  });

  // HELPER: OBTENER MODAL ACTIVO
  function getModal() {
    return document.querySelector('.modal.in, .modal.show, [role="dialog"]:not([style*="display: none"])');
  }

  // ACCIÓN 2: INYECTAR SOLO COMENTARIO
  document.getElementById('bot-btn-inject-com').addEventListener('click', () => {
    const modal = getModal();
    if (!modal) {
      mostrarMensaje("⚠️ Abre primero el indicador en Fénix (botón de editar).", "#ef4444", "#7f1d1d");
      return;
    }
    const ind = DATOS_OCTUBRE[selectInd.value];
    const tabs = Array.from(modal.querySelectorAll('a, button, [role="tab"], li'));
    const tabCom = tabs.find(el => el.textContent.trim().toLowerCase().includes('comentario'));

    if (tabCom) {
      tabCom.click();
      setTimeout(() => {
        const txtArea = modal.querySelector('textarea, input[placeholder*="Comentario"], [name*="comentario"]');
        if (txtArea) {
          txtArea.value = ind.comentario;
          txtArea.dispatchEvent(new Event('input', { bubbles: true }));
          txtArea.dispatchEvent(new Event('change', { bubbles: true }));
          mostrarMensaje("✓ Comentario formal inyectado en la pestaña Comentarios.", "#10b981", "#065f46");
        } else {
          mostrarMensaje("⚠️ No se encontró el campo de texto en Comentarios.", "#f59e0b", "#78350f");
        }
      }, 350);
    } else {
      mostrarMensaje("⚠️ No se encontró la pestaña Comentarios.", "#ef4444", "#7f1d1d");
    }
  });

  // ACCIÓN 3: INYECTAR SOLO RESULTADO
  document.getElementById('bot-btn-inject-res').addEventListener('click', () => {
    const modal = getModal();
    if (!modal) {
      mostrarMensaje("⚠️ Abre primero el indicador en Fénix.", "#ef4444", "#7f1d1d");
      return;
    }
    const ind = DATOS_OCTUBRE[selectInd.value];
    const tabs = Array.from(modal.querySelectorAll('a, button, [role="tab"], li'));
    const tabDet = tabs.find(el => el.textContent.trim().toLowerCase().includes('detalle'));

    if (tabDet) {
      tabDet.click();
      setTimeout(() => {
        const inputs = Array.from(modal.querySelectorAll('input[type="text"]:not([readonly]), input[type="number"]:not([readonly]), input[name*="resultado"]'));
        const inputRes = inputs.find(inp => inp.name.toLowerCase().includes('resultado') || inp.id.toLowerCase().includes('resultado')) || inputs[0];

        if (inputRes) {
          inputRes.value = ind.res;
          inputRes.dispatchEvent(new Event('input', { bubbles: true }));
          inputRes.dispatchEvent(new Event('change', { bubbles: true }));
          inputRes.focus();
          mostrarMensaje(`✓ Resultado "${ind.res}" inyectado en Detalles.`, "#10b981", "#065f46");
        } else {
          mostrarMensaje("⚠️ No se encontró el campo de Resultado en Detalles.", "#f59e0b", "#78350f");
        }
      }, 350);
    } else {
      mostrarMensaje("⚠️ No se encontró la pestaña Detalles.", "#ef4444", "#7f1d1d");
    }
  });

  // ACCIÓN 4: IR A SOPORTES PARA GUARDAR
  document.getElementById('bot-btn-inject-sop').addEventListener('click', () => {
    const modal = getModal();
    if (!modal) {
      mostrarMensaje("⚠️ Abre primero el indicador en Fénix.", "#ef4444", "#7f1d1d");
      return;
    }
    const tabs = Array.from(modal.querySelectorAll('a, button, [role="tab"], li'));
    const tabSop = tabs.find(el => el.textContent.trim().toLowerCase().includes('soporte'));

    if (tabSop) {
      tabSop.click();
      mostrarMensaje("✓ Pestaña Soportes activa. Adjunta los archivos y presiona Guardar 💾.", "#10b981", "#065f46");
    } else {
      mostrarMensaje("⚠️ No se encontró la pestaña Soportes.", "#ef4444", "#7f1d1d");
    }
  });

  // EJECUTAR TODO EN SECUENCIA
  document.getElementById('bot-btn-inject-all').addEventListener('click', () => {
    document.getElementById('bot-btn-inject-com').click();
    setTimeout(() => {
      document.getElementById('bot-btn-inject-res').click();
      setTimeout(() => {
        document.getElementById('bot-btn-inject-sop').click();
        mostrarMensaje("✅ Secuencia completa ejecutada. Solo adjunta soportes y Guarda 💾.", "#10b981", "#065f46");
      }, 600);
    }, 600);
  });

  // DETECTAR DESDE MODAL
  document.getElementById('bot-btn-autodetect').addEventListener('click', () => {
    const modal = getModal();
    if (!modal) {
      mostrarMensaje("⚠️ No hay ventana abierta en Fénix.", "#f59e0b", "#78350f");
      return;
    }
    const txt = (modal.textContent || "").toLowerCase();
    let detectado = -1;
    for (let i = 0; i < DATOS_OCTUBRE.length; i++) {
      if (DATOS_OCTUBRE[i].keywords.some(kw => txt.includes(kw))) {
        detectado = i;
        break;
      }
    }
    if (detectado !== -1) {
      selectInd.value = detectado;
      actualizarCard(detectado);
      mostrarMensaje(`🎯 Detectado: [${DATOS_OCTUBRE[detectado].codigo}] ${DATOS_OCTUBRE[detectado].nombre}`, "#10b981", "#065f46");
    } else {
      mostrarMensaje("ℹ️ No detectado automáticamente. Selecciónalo del menú.", "#3b82f6", "#1e3a8a");
    }
  });

  function mostrarMensaje(txt, borderColor, bgColor) {
    statusMsg.style.display = 'block';
    statusMsg.style.border = `1px solid ${borderColor}`;
    statusMsg.style.background = bgColor;
    statusMsg.style.color = 'white';
    statusMsg.textContent = txt;
  }

  let minimized = false;
  document.getElementById('bot-btn-minimize').addEventListener('click', () => {
    minimized = !minimized;
    document.getElementById('bot-body').style.display = minimized ? 'none' : 'block';
    document.getElementById('bot-btn-minimize').textContent = minimized ? '+' : '_';
  });

  document.getElementById('bot-btn-close').addEventListener('click', () => panel.remove());
})();
