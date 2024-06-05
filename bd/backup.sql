--
-- Table structure for table `concepto_finanza`
--

USE `db_glowup`;

DROP TABLE IF EXISTS `concepto_finanza`;

CREATE TABLE `concepto_finanza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `what_is_it` text DEFAULT NULL,
  `how_to_apply` text DEFAULT NULL,
  `good_things` text DEFAULT NULL,
  `seen` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `concepto_finanza`
--

LOCK TABLES `concepto_finanza` WRITE;
INSERT INTO `concepto_finanza` VALUES
(1,'Oferta y demanda','La oferta y la demanda describen la relación entre la cantidad de un bien o servicio que se ofrece y la cantidad que los consumidores desean comprar. Cuando la oferta es mayor que la demanda, los precios tienden a bajar, mientras que cuando la demanda es mayor que la oferta, los precios tienden a subir.','Puedes aplicar este concepto al observar cómo los cambios en la oferta y la demanda afectan los precios de los productos que compras regularmente. Por ejemplo, si ves que el precio de un artículo que te gusta ha aumentado, podrías considerar buscar alternativas o esperar a que el precio vuelva a bajar.','[\"Comprender la oferta y la demanda te ayuda a tomar decisiones de compra más informadas.\", \"Te permite anticipar cambios en los precios y ajustar tu presupuesto en consecuencia.\", \"Facilita la comprensión de los cambios en la economía local y global.\"]',0),
(2,'Tipos de mercados','Los tipos de mercados incluyen la competencia perfecta, el monopolio, el oligopolio y la competencia monopolística. Cada tipo tiene características únicas que afectan la competencia, los precios y la disponibilidad de bienes y servicios.','Puedes aplicar este concepto al comprender cómo funcionan diferentes mercados y cómo afectan tus decisiones de compra. Por ejemplo, si estás buscando comprar un producto y encuentras que está en un mercado de monopolio, es posible que desees explorar opciones alternativas o buscar regulaciones gubernamentales que puedan afectar el mercado.','[\"Conocer los diferentes tipos de mercados te ayuda a comprender mejor la dinámica de los precios y la competencia.\", \"Te permite evaluar la eficiencia y equidad de diferentes estructuras de mercado.\", \"Puede ayudarte a identificar oportunidades de inversión en sectores con mercados más competitivos.\"]',0),
(3,'Inflación','La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios en una economía durante un período de tiempo. Las causas pueden incluir el crecimiento económico, el aumento de la demanda, los costos de producción y la política monetaria expansiva.','Puedes aplicar este concepto al entender cómo la inflación afecta tu capacidad adquisitiva y tus decisiones financieras. Por ejemplo, al planificar un presupuesto, debes tener en cuenta la inflación y ajustar tus expectativas de precios futuros.','[\"Comprender la inflación te ayuda a proteger tus ahorros y tu inversión contra la pérdida de valor.\", \"Te permite tomar decisiones financieras más informadas al considerar el impacto de la inflación en tus ingresos y gastos.\", \"Facilita la comprensión de las políticas económicas y monetarias del gobierno.\"]',0),
(4,'Política monetaria y fiscal','La política monetaria se refiere al control de la oferta de dinero y las tasas de interés por parte de los bancos centrales para influir en la economía. La política fiscal se refiere al gasto público y los impuestos utilizados por el gobierno para influir en la actividad económica.','Puedes aplicar este concepto al entender cómo las decisiones de política monetaria y fiscal pueden afectar tu situación financiera. Por ejemplo, cambios en las tasas de interés pueden afectar tus préstamos y ahorros, mientras que cambios en los impuestos pueden afectar tus ingresos disponibles.','[\"Comprender la política monetaria y fiscal te ayuda a anticipar cómo pueden cambiar las condiciones económicas en el futuro.\", \"Te permite tomar decisiones financieras más informadas al considerar cómo las políticas gubernamentales pueden afectar tu situación financiera personal.\", \"Facilita la comprensión de cómo se formulan y ejecutan las políticas económicas a nivel nacional e internacional.\"]',0),
(5,'Producto Interno Bruto (PIB)','El Producto Interno Bruto (PIB) es la medida del valor total de todos los bienes y servicios producidos en un país durante un período de tiempo específico. Es utilizado como indicador del nivel de actividad económica de un país.','Puedes aplicar este concepto al entender cómo se utiliza el PIB para evaluar la salud económica de un país y cómo puede afectar tu vida. Por ejemplo, un PIB en crecimiento puede indicar oportunidades laborales y de inversión, mientras que un PIB en declive puede señalar tiempos económicos difíciles.','[\"Comprender el PIB te ayuda a evaluar la salud económica y el potencial de crecimiento de un país.\", \"Te permite comparar el desempeño económico entre diferentes países y regiones.\", \"Facilita la comprensión de las tendencias económicas a largo plazo y la planificación estratégica.\"]',0),
(6,'Ciclos económicos','Los ciclos económicos describen las fluctuaciones periódicas en la actividad económica que se producen a lo largo del tiempo. Las fases típicas incluyen expansión, recesión, depresión y recuperación, y son influenciadas por factores como la demanda, la inversión y la política económica.','Puedes aplicar este concepto al entender cómo los ciclos económicos pueden afectar tus decisiones financieras y laborales. Por ejemplo, durante una recesión, es posible que desees ser más conservador con tus gastos y buscar oportunidades de inversión contracíclicas.','[\"Comprender los ciclos económicos te ayuda a anticipar y prepararte para los cambios en la actividad económica.\", \"Te permite tomar decisiones financieras más informadas al considerar cómo pueden cambiar las condiciones económicas en el futuro.\", \"Facilita la identificación de oportunidades de inversión contracíclicas que pueden surgir durante períodos de recesión.\"]',0),
(7,'Tasas de interés','Las tasas de interés son el costo del dinero prestado o la recompensa por ahorrar. Pueden ser nominales (la tasa declarada) o reales (ajustadas por inflación) y tienen un impacto significativo en el comportamiento de ahorro, inversión, préstamo y gasto.','Puedes aplicar este concepto al entender cómo las tasas de interés afectan tus decisiones financieras. Por ejemplo, si las tasas de interés están bajas, es posible que desees considerar refinanciar tu hipoteca o buscar oportunidades de inversión con mayores rendimientos.','[\"Comprender las tasas de interés te ayuda a tomar decisiones financieras más informadas al considerar el costo del dinero prestado o la recompensa por ahorrar.\", \"Te permite evaluar cómo las condiciones económicas y políticas pueden afectar las tasas de interés y, en consecuencia, tus finanzas personales.\", \"Facilita la planificación financiera a largo plazo al considerar cómo pueden cambiar las tasas de interés en el futuro.\"]',0),
(8,'Mercado laboral','El mercado laboral se refiere a la oferta y demanda de trabajo en una economía. Incluye factores como la tasa de empleo, la tasa de desempleo, la participación laboral y las condiciones salariales, y puede ser influenciado por cambios en la economía y la política laboral.','Puedes aplicar este concepto al entender cómo funcionan los mercados laborales y cómo afectan tus decisiones profesionales y financieras. Por ejemplo, si estás buscando empleo, es importante tener en cuenta la demanda de trabajadores en tu campo y las tendencias salariales.','[\"Comprender el mercado laboral te ayuda a tomar decisiones profesionales más informadas al considerar las oportunidades de empleo y las tendencias salariales en tu campo.\", \"Te permite evaluar cómo los cambios en la economía y la política laboral pueden afectar tus perspectivas de empleo y tu seguridad laboral.\", \"Facilita la planificación de carrera a largo plazo al considerar las tendencias en la demanda de habilidades y ocupaciones.\"]',0),
(9,'Inversión y ahorro','La inversión implica la colocación de dinero en activos con la expectativa de obtener ganancias en el futuro, mientras que el ahorro implica reservar una parte de los ingresos actuales para usarlos en el futuro. Ambos son importantes para acumular riqueza y alcanzar objetivos financieros a largo plazo.','Puedes aplicar este concepto al establecer metas de ahorro e inversión y desarrollar un plan financiero para alcanzarlas. Por ejemplo, puedes establecer un objetivo de ahorro mensual y buscar oportunidades de inversión que te ayuden a alcanzar tus objetivos financieros a largo plazo.','[\"Comprender la inversión y el ahorro te ayuda a desarrollar hábitos financieros saludables y a alcanzar tus objetivos financieros a largo plazo.\", \"Te permite evaluar diferentes opciones de inversión y seleccionar aquellas que mejor se adapten a tus objetivos y tolerancia al riesgo.\", \"Facilita la planificación financiera a largo plazo al considerar cómo puedes hacer crecer tu patrimonio con el tiempo.\"]',0),
(10,'Riesgo y retorno','El riesgo se refiere a la posibilidad de pérdida o variabilidad en el rendimiento de una inversión, mientras que el retorno es la ganancia o pérdida resultante de una inversión. Existe una relación directa entre riesgo y retorno, donde mayores niveles de riesgo suelen estar asociados con mayores posibilidades de retorno.','Puedes aplicar este concepto al evaluar diferentes opciones de inversión y seleccionar aquellas que mejor se adapten a tu perfil de riesgo y objetivos financieros. Por ejemplo, si tienes un horizonte temporal a largo plazo y una alta tolerancia al riesgo, es posible que desees considerar inversiones más volátiles con el potencial de mayores rendimientos.','[\"Comprender la relación entre riesgo y retorno te ayuda a tomar decisiones financieras más informadas al evaluar diferentes opciones de inversión.\", \"Te permite gestionar mejor tu cartera de inversiones al equilibrar el riesgo y el rendimiento en función de tus objetivos financieros y tolerancia al riesgo.\", \"Facilita la comprensión de cómo los factores económicos y financieros pueden afectar el riesgo y el retorno de tus inversiones.\"]',0),
(11,'Presupuesto personal','Un presupuesto personal es un plan financiero que detalla tus ingresos y gastos previstos durante un período de tiempo específico. Es una herramienta importante para administrar tus finanzas, controlar tus gastos y alcanzar tus objetivos financieros.','Puedes aplicar este concepto al crear y seguir un presupuesto que refleje tus metas financieras y estilo de vida. Por ejemplo, puedes asignar una parte de tus ingresos a gastos fijos como vivienda y servicios públicos, una parte a ahorros y otra a gastos discrecionales como entretenimiento.','[\"Elaborar un presupuesto personal te ayuda a tomar el control de tus finanzas y a identificar áreas donde puedes reducir gastos y aumentar tus ahorros.\", \"Te permite establecer metas financieras realistas y desarrollar un plan para alcanzarlas.\", \"Facilita la toma de decisiones financieras informadas al proporcionarte una visión clara de tus ingresos y gastos.\"]',0),
(12,'Seguros y protección financiera','El seguro es una forma de protección financiera que te ayuda a cubrir los costos de los riesgos financieros, como enfermedades, accidentes y pérdida de empleo. Puede proporcionar tranquilidad al saber que estás protegido contra eventos imprevistos que podrían afectar tu estabilidad financiera.','Puedes aplicar este concepto al evaluar tus necesidades de seguro y adquirir la cobertura adecuada para proteger tus activos y tu salud. Por ejemplo, puedes contratar un seguro de salud para cubrir los gastos médicos inesperados o un seguro de vida para proporcionar seguridad financiera a tus seres queridos en caso de tu fallecimiento.','[\"Tener seguro te proporciona tranquilidad al saber que estás protegido contra eventos imprevistos que podrían afectar tu estabilidad financiera y la de tus seres queridos.\", \"Te protege contra pérdidas financieras significativas debido a eventos como enfermedades graves, accidentes automovilísticos o desastres naturales.\", \"Facilita la planificación financiera a largo plazo al proporcionar una red de seguridad financiera en caso de emergencia.\"]',0),
(13,'Conceptos básicos de impuestos','Los conceptos básicos de impuestos incluyen entender los diferentes tipos de impuestos (ingresos, ventas, propiedad) y cómo afectan tus finanzas personales y empresariales. Los impuestos son una parte importante de la vida económica y financiera, y comprenderlos puede ayudarte a planificar mejor tus finanzas y cumplir con tus obligaciones fiscales.','Puedes aplicar este concepto al familiarizarte con las leyes fiscales y aprovechar las oportunidades para minimizar tu carga impositiva de manera legal. Por ejemplo, puedes aprovechar las deducciones fiscales disponibles, como las relacionadas con la educación, la vivienda y las donaciones caritativas, para reducir tu responsabilidad fiscal.','[\"Comprender los impuestos te permite planificar mejor tus finanzas personales y empresariales al anticipar tus obligaciones fiscales y tomar medidas para minimizarlas legalmente.\", \"Te ayuda a aprovechar al máximo las oportunidades de ahorro fiscal, como las deducciones y créditos fiscales disponibles.\", \"Facilita el cumplimiento de tus obligaciones fiscales al asegurarte de cumplir con las leyes fiscales aplicables.\"]',0);

UNLOCK TABLES;
--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
INSERT INTO `type` VALUES
(1,'Funcional'),
(2,'Maquinaria'),
(3,'Peso Libre');
UNLOCK TABLES;

--
-- Table structure for table `rutina`
--

DROP TABLE IF EXISTS `rutina`;

CREATE TABLE `rutina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_type` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_type` (`id_type`),
  FOREIGN KEY (`id_type`) REFERENCES `type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `ejercicio`
--

DROP TABLE IF EXISTS `ejercicio`;

CREATE TABLE `ejercicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sets` int(11) DEFAULT NULL,
  `reps` varchar(100) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `id_rutina` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rutina` (`id_rutina`),
  FOREIGN KEY (`id_rutina`) REFERENCES `rutina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



--
-- Dumping data for table `rutina`
--

LOCK TABLES `rutina` WRITE;
INSERT INTO `rutina` VALUES
(1,1,'Pectoral 1'),
(2,1,'Pectoral 2'),
(3,1,'Espalda 1'),
(4,1,'Espalda 2'),
(5,1,'Pierna 1'),
(6,1,'Pierna 2'),
(7,1,'Fullbody'),
(15,2,'Pectoral Maquina 1'),
(16,2,'Pectoral Maquina 2'),
(17,2,'Espalda Maquina 1'),
(18,2,'Espalda Maquina 2'),
(19,2,'Pierna Maquina 1'),
(20,2,'Pierna Maquina 2'),
(21,2,'Fullbody Maquina'),
(22,3,'Pectoral Peso Libre 1'),
(23,3,'Pectoral Peso Libre 2'),
(24,3,'Espalda Peso Libre 1'),
(25,3,'Espalda Peso Libre 2'),
(26,3,'Pierna Peso Libre 1'),
(27,3,'Pierna Peso Libre 2'),
(28,3,'Fullbody Peso Libre');

UNLOCK TABLES;
--
-- Dumping data for table `ejercicio`
--

LOCK TABLES `ejercicio` WRITE;
INSERT INTO `ejercicio` VALUES
(1,'Flexiones de brazos (push-ups)',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexiones.mp4',1),
(2,'Flexiones diamante',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexionesDiamante.mp4',1),
(3,'Flexiones con manos elevadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexionesInclinadas.mp4',1),
(4,'Fondos de tríceps en silla',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/fondosTriceps.mp4',1),
(5,'Flexiones con agarre cerrado',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexionesCerrado.mp4',1),
(6,'Plancha con extensiones de brazos',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/planchaExtBrazo.mp4',1),
(7,'Flexiones de brazos con apoyo en una sola mano',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral2/flexionesApoyoMano.mp4',2),
(8,'Flexiones con toque de hombro',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral2/flexionesApoyoMano.mp4',2),
(9,'Flexiones declinadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral2/flexionesDeclinadas.mp4',2),
(10,'Fondos de tríceps en banco o silla',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral2/fondosBanco.mp4',2),
(11,'Flexiones con apoyo en sillas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexionesInclinadas.mp4',2),
(12,'Flexiones diamante con apoyo en silla',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral2/flexionesInclinadasCerradas.mp4',2),
(13,'Dominadas',3,'8','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/dominadas.mp4',3),
(14,'Remo invertido en barra baja',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/remoInvertido.mp4',3),
(15,'Superman',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/superman.mp4',3),
(16,'Dominadas con agarre neutro',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/dominadaAgarreNeutro.mp4',3),
(17,'Curl de bíceps con flexión de codo (peso = silla)',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/curlBiceps.mp4',3),
(18,'Curl de bíceps isométrico (contracción estática)(peso = silla)',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/curlBiceps.mp4',3),
(19,'Superman con Brazos y Piernas Extendidos',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/superman.mp4',4),
(20,'Remo Invertido en Barra Horizontal (usando una mesa resistente o barra baja)',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/remoInvertido.mp4',4),
(21,'Dominada (con agarre supino)',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda2/dominadaSupino.mp4',4),
(22,'Puente de Glúteos con una Pierna Elevada',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda2/puenteGluteo.mp4',4),
(23,'Curl de bíceps (con objeto pesado)',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/curlBiceps.mp4',4),
(24,'Curl de bíceps con agarre martillo (con objeto pesado)',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda2/curlBicepsMartillo.mp4',4),
(25,'Sentadillas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/sentadilla.mp4',5),
(26,'Zancadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/zancada.jpg',5),
(27,'Puente de glúteos',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda2/puenteGluteo.mp4',5),
(28,'Flexiones pike',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/flexionesPike.mp4',5),
(29,'Elevaciones de hombros con botellas de agua',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionesLaterales.mp4',5),
(30,'Pájaros con botellas de agua',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/pajaros.mp4',5),
(31,'Elevaciones de talones (calf raises)',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionTalones.mp4',6),
(32,'Sentadillas sumo con peso (mochila)',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/sentadillaSumo.mp4',6),
(33,'Elevación de talones con una pierna',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionTalones.mp4',6),
(34,'Sentadillas bulgara',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/bulgara.mp4',6),
(35,'Flexiones pike',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/flexionesPike.mp4',6),
(36,'Elevaciones laterales con botellas de agua',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionesLaterales.mp4',6),
(37,'Sentadillas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/sentadilla.mp4',7),
(38,'Flexiones de brazos',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/flexiones.mp4',7),
(39,'Dominadas',3,'8','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/dominadas.mp4',7),
(40,'Elevaciones laterales con botellas de agua',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionesLaterales.mp4',7),
(41,'Plancha',3,'30','https://glowupbucket.s3.amazonaws.com/videos/funcionales/plancha.mp4',7),
(42,'Curl de bíceps (objeto pesado)',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/espalda1/curlBiceps.mp4',7),
(43,'Fondos de tríceps en silla',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pectoral1/fondosTriceps.mp4',7),
(44,'Zancadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/zancada.jpg',7),
(45,'Elevaciones de talones (calf raises)',3,'15','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna2/elevacionTalones.mp4',7),
(46,'Polea al Pecho',3,'8 - 10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/pullDown.mp4',17),
(47,'Remo en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/remoSentado.webp',17),
(48,'Pull Down en Máquina',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/pullDownMachine.mp4',17),
(49,'Curl Martillo Mancuerna',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlBicepsPolea.mp4',17),
(50,'Curl Spider',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlSpider.mp4',17),
(51,'Pull Up en Máquina de Asistencia',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda2/pullUpAsistance.mp4',18),
(52,'Remo Neutro en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda2/rowNeutro.mp4',18),
(53,'Pull Over en Polea',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda2/pullOver.mp4',18),
(54,'Curl de Bíceps Martillo',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda2/curlMartillo.webp',18),
(55,'Curl Spider',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlSpider.mp4',18),
(56,'Prensa Inclinada',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressInclinado.mp4',19),
(57,'Prensa Horizontal',3,'10 (cada pierna)','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressHorizontal.mp4',19),
(58,'Extensión de cuadriceps',3,'15','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/extensionCuadriceps.mp4',19),
(59,'Prenss Militar',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressMilitar.mp4',19),
(60,'Elevación Lateral',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/elevacionLateral.mp4',19),
(61,'Pájaros en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/funcionales/pierna1/pajaros.mp4',19),
(62,'Curl de Piernas en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna2/curlFemoral.mp4',20),
(63,'Extensión de Cuádriceps en Máquina',3,'10 (cada pierna)','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/extensionCuadriceps.mp4',20),
(64,'Abductores',3,'15','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna2/abduccion.mp4',20),
(65,'Adductores',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna2/adduction.mp4',20),
(66,'Elevaciones laterales',3,'8','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/elevacionLateral.mp4',20),
(67,'Press Militar en Máquina de Smith',3,'8-10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressMilitar.mp4',20),
(68,'Press de Pecho en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/benchPressMachine.mp4',21),
(69,'Remo en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/remoSentado.webp',21),
(70,'Prensa de Piernas en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressInclinado.mp4',21),
(71,'Prensa Militar',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressMilitar.mp4',21),
(72,'Flexiones con Agarre Neutro',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/fullbody/flexionesCerrado.mp4',21),
(73,'Curl de Bíceps',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlBicepsPolea.mp4',21),
(74,'Extensiones de Tríceps',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4',21),
(75,'Extensión de cuadriceps',3,'15','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/extensionCuadriceps.mp4',21),
(76,'Abducción',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna2/abduccion.mp4',21),
(77,'Press de Pecho en Máquina',3,'15','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/benchPressMachine.mp4',15),
(78,'Aperturas Pectoral',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/aperturas.mp4',15),
(79,'Press de Inclinado en Máquina',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/pressInclinado.mp4',15),
(80,'Extensiones de Tríceps en Polea Alta',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4',15),
(81,'Tríceps con barra en Polea',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/tricepsBarraPolea.mp4',15),
(82,'Press Francés en polea',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/pressFrances.mp4',15),
(83,'Press de Pecho Declinado en Máquina',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral2/pechoDeclinado.mp4',16),
(84,'Press de Pecho en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/benchPressMachine.mp4',16),
(85,'Press de Pecho con Poleas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral2/pressDeclinadoPolea.mp4',16),
(86,'Extensiones de Tríceps en Polea',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4',16),
(87,'Fondos de Tríceps en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral2/fondosMaquina.mp4',16),
(88,'Press de Pecho con Agarre Cerrado',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral2/pressCerrado.mp4',16),
(89,'Press de Banca',3,'8','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/benchPress.mp4',22),
(90,'Flexiones en el Suelo',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/flexiones.mp4',22),
(91,'Press de Banca Inclinado',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/pressInclinado.mp4',22),
(92,'Fondos en Paralelas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/fondos.mp4',22),
(93,'Press de Banca Declinado',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/pressDeclinado.mp4',22),
(94,'Press Francés',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/pressFrances.mp4',22),
(95,'Aperturas con Mancuernas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral2/aperturas.mp4',23),
(96,'Flexiones con Salto',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral2/burpees.mp4',23),
(97,'Press Inclinado en MPW',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/pressInclinado.mp4',23),
(98,'Press Banca con agarre cerrado',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral2/pressCerrado.mp4',23),
(99,'Fondos agarre cerrado',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral2/fondosCerrado.mp4',23),
(100,'Patada de triceps con mancuerna (unilateral)',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral2/patadaTriceps.mp4',23),
(101,'Peso Muerto',3,'8','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/pesoMuerto.mp4',24),
(102,'Dominadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/dominadas.mp4',24),
(103,'Remo con Barra',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/remoBarra.mp4',24),
(104,'Remo con Mancuerna',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/remoMancuerna.mp4',24),
(105,'Curl Biceps en banco a 60º',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/curlBicep60.mp4',24),
(106,'Curl Biceps Martillo',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/hummerCurl.mp4',24),
(107,'Dominadas con Agarre Neutro',3,'8','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda2/dominadasNeutro.mp4',25),
(108,'Pulldowns',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda2/pullDown.mp4',25),
(109,'Remo Agarre Neutro',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda2/remoNeutro.mp4',25),
(110,'Pull-Overs en Banco',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda2/pullOver.mp4',25),
(111,'Encogimientos de Hombros',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda2/encogimientoHombros.mp4',25),
(112,'Flexiones con Agarre Inverso',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlSpider.mp4',25),
(113,'Sentadillas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/sentadilla.mp4',26),
(114,'Peso Muerto Rumano',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/pesoMuertoRumano.mp4',26),
(115,'Prensa de Piernas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/prensa.mp4',26),
(116,'Sentadillas Bulgaras',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/bulgaras.mp4',26),
(117,'Elevaciones de Gemelos',3,'15','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/elevacionGemelos.mp4',26),
(118,'Press Militar con Mancuernas',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressMilitar.mp4',26),
(119,'Prensa Hack',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna2/hacka.mp4',27),
(120,'Sentadillas Sumo',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna2/sentadillaSumo.mp4',27),
(121,'Extension de cuadriceps',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/extensionCuadriceps.mp4',27),
(122,'Curl de Femoral en Máquina',3,'12','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna2/femoral.mp4',27),
(123,'Abducciones',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna2/abduccion.mp4',27),
(124,'Elevaciones Laterales',3,'15','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/elevacionLateral.mp4',27),
(125,'Sentadillas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/sentadilla.mp4',28),
(126,'Press de Banca',3,'8','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pectoral1/benchPress.mp4',28),
(127,'Dominadas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/dominadas.mp4',28),
(128,'Press de Militar con Mancuernas',3,'10','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pierna1/pressMilitar.mp4',28),
(129,'Peso Muerto',3,'8','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/espalda1/pesoMuerto.mp4',28),
(130,'Curl de Bíceps',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/espalda1/curlBicepsPolea.mp4',28),
(131,'Extensiones de Tríceps',3,'12','https://glowupbucket.s3.amazonaws.com/videos/maquinaria/pectoral1/tricepsPoleaAlta.mp4',28),
(132,'Elevaciones de Gemelos',3,'15','https://glowupbucket.s3.amazonaws.com/videos/pesoLibre/pierna1/elevacionGemelos.mp4',28);
UNLOCK TABLES;

--
-- Table structure for table `filosofo`
--

DROP TABLE IF EXISTS `filosofo`;
CREATE TABLE `filosofo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `oringen` varchar(255) DEFAULT NULL,
  `filosophy` text DEFAULT NULL,
  `citas` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `filosofo`
--

LOCK TABLES `filosofo` WRITE;
UNLOCK TABLES;



--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'usuario','prueba@gmail.com','12345','user'),
(34,'abel','asd@gmail.com','P@ssw0rd!123','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_concepto`
--

DROP TABLE IF EXISTS `user_concepto`;
CREATE TABLE `user_concepto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_concepto` int(11) DEFAULT NULL,
  `seen` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_concepto` (`id_concepto`),
  FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  FOREIGN KEY (`id_concepto`) REFERENCES `concepto_finanza` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=456 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data for table `user_concepto`
--

LOCK TABLES `user_concepto` WRITE;
INSERT INTO `user_concepto` VALUES
(1,34,1,0),
(2,34,2,0),
(3,34,3,0),
(4,34,4,0),
(5,34,5,0),
(6,34,6,0),
(7,34,7,0),
(8,34,8,0),
(9,34,9,0),
(10,34,10,0),
(11,34,11,0),
(12,34,12,0),
(13,34,13,0);
UNLOCK TABLES;

--
-- Table structure for table `user_filosofia`
--

DROP TABLE IF EXISTS `user_filosofia`;
CREATE TABLE `user_filosofia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cita` text NOT NULL,
  `how_to_apply` text DEFAULT NULL,
  `id_filosofo` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `seen` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_filosofo` (`id_filosofo`),
  KEY `id_user` (`id_user`),
  FOREIGN KEY (`id_filosofo`) REFERENCES `filosofo` (`id`),
  FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Dumping data for table `user_filosofia`
--

LOCK TABLES `user_filosofia` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `user_rutina`
--

DROP TABLE IF EXISTS `user_rutina`;
CREATE TABLE `user_rutina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_rutina` int(11) DEFAULT NULL,
  `hecha` tinyint(1) DEFAULT 0,
  `added` tinyint(1) DEFAULT 0,
  `day` int(11) DEFAULT NULL,
  `rutina_name` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_rutina` (`id_rutina`),
  FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  FOREIGN KEY (`id_rutina`) REFERENCES `rutina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_rutina`
--

LOCK TABLES `user_rutina` WRITE;
INSERT INTO `user_rutina` VALUES
(1,34,1,0,1,1,NULL),
(2,34,2,0,0,0,NULL),
(3,34,3,0,0,0,NULL),
(4,34,4,0,0,0,'dia 2 espalda'),
(5,34,5,0,0,0,'dia 1 pierna'),
(6,34,6,0,0,0,NULL),
(7,34,7,0,0,0,NULL),
(8,34,15,0,0,0,NULL),
(9,34,16,0,0,0,NULL),
(10,34,17,0,0,0,NULL),
(11,34,18,0,0,0,NULL),
(12,34,19,0,0,0,NULL),
(13,34,20,0,0,0,NULL),
(14,34,21,0,0,0,NULL),
(15,34,22,0,0,0,NULL),
(16,34,23,0,0,0,NULL),
(17,34,24,0,0,0,NULL),
(18,34,25,0,0,0,NULL),
(19,34,26,0,0,0,NULL),
(20,34,27,0,0,0,NULL),
(21,34,28,0,0,0,NULL);
UNLOCK TABLES;