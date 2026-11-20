import type { Lang } from './utils';

export const nearby = {
  'parque-das-aves': {
    name: 'Parque das Aves',
    address: 'Av. das Cataratas, 12450 · BR-469, km 17,1 · Foz do Iguaçu, PR',
    hours: '08:30–16:30',
    map: 'https://www.google.com/maps/search/?api=1&query=Parque+das+Aves+Avenida+das+Cataratas+12450+Foz+do+Iguacu',
    official: 'https://www.parquedasaves.com.br/planeje-sua-visita/como-chegar/',
    photo: 'https://commons.wikimedia.org/wiki/File:Parque_das_Aves,_Foz_do_Iguacu,_Brazil-12Feb2011.jpg',
    credit: 'Melissa Correa · Wikimedia Commons',
  },
  'macuco-safari': {
    name: 'Macuco Safari',
    address: 'BR-469, km 25 · Parque Nacional do Iguaçu · Foz do Iguaçu, PR',
    hours: '09:00–17:00 / 08:30–17:00',
    map: 'https://www.google.com/maps/search/?api=1&query=Macuco+Safari+BR-469+km+25+Parque+Nacional+do+Iguacu',
    official: 'https://macucosafari.com.br/macuco-safari/',
    photo: 'https://commons.wikimedia.org/wiki/File:Cataratas_do_Iguaçu_e_Macuco_Safari.jpg',
    credit: 'Jamiledsp · Wikimedia Commons',
  },
  'itaipu-panoramica': {
    name: 'Itaipu Panorâmica',
    address: 'Av. Tancredo Neves, 6702 · Centro de Recepção de Visitantes · Foz do Iguaçu, PR',
    hours: '',
    map: 'https://www.google.com/maps/search/?api=1&query=Centro+de+Recep%C3%A7%C3%A3o+de+Visitantes+Itaipu+Tancredo+Neves+6702+Foz+do+Igua%C3%A7u',
    official: 'https://turismoitaipu.com.br/ingressos-e-passeios/itaipu-panoramica/',
    photo: 'https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Itaipu_Dam.jpg',
    credit: 'Macaddct1984 · Wikimedia Commons',
  },
  'marco-das-tres-fronteiras': {
    name: 'Marco das Três Fronteiras',
    address: 'Rua Marco das Três Fronteiras, s/n · Foz do Iguaçu, PR · CEP 85855-616',
    hours: '',
    map: 'https://www.google.com/maps/search/?api=1&query=Marco+das+Tr%C3%AAs+Fronteiras+Foz+do+Igua%C3%A7u+Brasil+85855-616',
    official: 'https://marcodastresfronteiras.com.br/guia-do-visitante/',
    photo: 'https://commons.wikimedia.org/wiki/File:Marco_das_Tr%C3%AAs_Fronteiras_-_Foz_do_Igua%C3%A7u.jpg',
    credit: 'Claiton Luis Moraes · Wikimedia Commons',
  },
  'templo-budista-chen-tien': {
    name: 'Templo Budista Chen Tien',
    address: 'Rua Dr. Josivalter Vila Nova, 99 · Jardim Califórnia · Foz do Iguaçu, PR',
    hours: '',
    map: 'https://www.google.com/maps/search/?api=1&query=Templo+Budista+Chen+Tien+Rua+Josivalter+Vila+Nova+99+Foz+do+Igua%C3%A7u',
    official: 'https://www.destino.foz.br/atrativo/templo-budista/',
    photo: 'https://commons.wikimedia.org/wiki/File:Templo_Budista_de_Foz_do_Igua%C3%A7u.jpg',
    credit: 'Jonas de Carvalho · Wikimedia Commons',
  },
} as const;

export type NearbySlug = keyof typeof nearby;
export const nearbySlugs: NearbySlug[] = ['parque-das-aves', 'macuco-safari', 'itaipu-panoramica', 'marco-das-tres-fronteiras', 'templo-budista-chen-tien'];

export const nearbyCopy = {
  'parque-das-aves': {
    pt: ['Centro de conservação de aves da Mata Atlântica, ao lado da entrada das Cataratas. A visita passa por viveiros e áreas de observação em meio à vegetação.', 'O próprio Parque das Aves opera o espaço e mantém programas de resgate e conservação.', 'O ingresso é separado do Parque Nacional. Reserve cerca de duas horas e confira a tarifa vigente.', 'Da região central, use a linha 120 ou siga pela BR-469 até o km 17,1. O parque tem entrada e estacionamento próprios.'],
    en: ['An Atlantic Forest bird conservation centre beside the falls entrance. Walk through aviaries and forested observation areas.', 'Parque das Aves operates the visitor site and runs bird rescue and conservation programmes.', 'Admission is separate from the national park. Allow around two hours and check current prices.', 'From central Foz, take bus 120 or follow BR-469 to km 17.1. The bird park has its own entrance and parking.'],
    es: ['Centro de conservación de aves de la Mata Atlántica junto a la entrada de las cataratas. El recorrido pasa por aviarios y zonas de observación entre la vegetación.', 'El propio Parque das Aves gestiona el recinto y sus programas de rescate y conservación.', 'La entrada se compra por separado de la del parque nacional. Calcula unas dos horas y consulta la tarifa vigente.', 'Desde el centro, toma la línea 120 o sigue la BR-469 hasta el km 17,1. El parque de aves tiene su propio acceso y estacionamiento.'],
    zh: ['伊瓜苏鸟类公园位于巴西侧瀑布游客入口旁，沿林间步道可进入鸟舍和观察区，了解大西洋森林鸟类保护。', '鸟类公园自行运营园区，并开展鸟类救助和保育项目。', '门票与国家公园门票分开购买。建议预留约两小时，票价以官网为准。', '从伊瓜苏市中心搭 120 路巴士，或沿 BR-469 开到 17.1 公里处。鸟类公园有独立入口和停车场。'],
    ko: ['폭포 입구 옆에 있는 대서양림 조류 보호 센터입니다. 숲길을 따라 새장과 관찰 구역을 둘러볼 수 있습니다.', 'Parque das Aves가 시설을 운영하며 조류 구조 및 보호 사업을 진행합니다.', '국립공원 입장권과 별도로 구매합니다. 약 두 시간을 잡고 현재 요금을 확인하세요.', '도심에서 120번 버스를 타거나 BR-469 도로 17.1km 지점으로 이동하세요. 조류 공원에는 별도 입구와 주차장이 있습니다.'],
  },
  'macuco-safari': {
    pt: ['Passeio de barco pelo rio Iguaçu no lado brasileiro. O percurso começa na mata, segue até o embarque e passa por trechos com muita água e névoa.', 'O passeio é operado pelo Macuco Safari dentro do Parque Nacional do Iguaçu, administrado pelo ICMBio.', 'Compre o ingresso do passeio e o ingresso do parque separadamente. Confirme os horários e as condições de navegação com a operadora.', 'Entre pelo Centro de Visitantes no km 18 e peça orientação para descer na parada Macuco Safari, no km 25. Leve roupa extra e proteja a eletrônica da água.'],
    en: ['A boat trip on the Brazilian side of the Iguaçu River. The trip starts in the forest, continues to the dock and takes you into the spray near the falls.', 'Macuco Safari operates the trip inside Iguaçu National Park, which is managed by ICMBio.', 'Buy the boat trip and national park tickets separately. Check departure times and river conditions with the operator.', 'Enter at the Visitor Centre at km 18 and ask for the Macuco Safari shuttle stop at km 25. Bring a change of clothes and keep electronics dry.'],
    es: ['Paseo en barco por el río Iguazú del lado brasileño. El recorrido comienza en la selva, llega al embarcadero y se acerca a la zona de rocío.', 'Macuco Safari opera la excursión dentro del Parque Nacional do Iguaçu, gestionado por el ICMBio.', 'Compra por separado el paseo y la entrada al parque nacional. Consulta los horarios y las condiciones del río con el operador.', 'Entra por el Centro de Visitantes en el km 18 y pregunta por la parada Macuco Safari en el km 25. Lleva una muda y protege los aparatos del agua.'],
    zh: ['Macuco Safari 是巴西侧伊瓜苏河的乘船体验。从林地出发，经码头登船，靠近瀑布水雾区。', '项目由 Macuco Safari 运营，所在的伊瓜苏国家公园由 ICMBio 管理。', '船票与国家公园门票分开购买。出行前向运营方核实班次和当天通航情况。', '从 BR-469 公路 18 公里处的游客中心入园，询问前往 25 公里处 Macuco Safari 站的园内巴士。备一套换洗衣服，给电子设备做好防水。'],
    ko: ['브라질 쪽 이과수강 보트 체험입니다. 숲에서 출발해 선착장으로 이동한 뒤 폭포 물보라가 닿는 구간을 지나갑니다.', 'Macuco Safari가 체험을 운영하고, 국립공원은 ICMBio가 관리합니다.', '보트 이용권과 국립공원 입장권을 따로 구매하세요. 출발 시간과 운항 가능 여부는 운영사에 확인하세요.', '18km 지점 방문자 센터에서 입장한 뒤 25km 지점 Macuco Safari 셔틀 정류장을 문의하세요. 갈아입을 옷과 전자기기 방수 주머니를 챙기세요.'],
  },
  'itaipu-panoramica': {
    pt: ['Passeio externo pela usina binacional no rio Paraná, com interpretação da obra e dos seus principais componentes.', 'A usina é administrada pela Itaipu Binacional. A operação turística do lado brasileiro é delegada ao Itaipu Parquetec.', 'Compre o passeio panorâmico e confira a saída disponível. A visita interna tem ingresso próprio.', 'Vá ao Centro de Recepção de Visitantes na Av. Tancredo Neves, 6702, de ônibus urbano, carro ou táxi. O ônibus do passeio sai do complexo.'],
    en: ['An exterior tour of the binational power station on the Paraná River, with stops that explain the engineering behind the dam.', 'Itaipu Binacional manages the power station. Itaipu Parquetec operates visitor tours on the Brazilian side.', 'Book the panoramic tour and check the departure time. The interior tour has a separate ticket.', 'Take a city bus, taxi or car to the Visitor Reception Centre at Av. Tancredo Neves 6702. The tour coach departs from the visitor complex.'],
    es: ['Recorrido exterior por la central binacional del río Paraná que explica la ingeniería de la presa.', 'Itaipu Binacional administra la central; Itaipu Parquetec opera las visitas del lado brasileño.', 'Compra la visita panorámica y consulta la salida disponible. La visita interior tiene otra entrada.', 'Llega en autobús urbano, coche o taxi al Centro de Recepción de Visitantes, Av. Tancredo Neves 6702. Allí sale el autobús del recorrido.'],
    zh: ['乘车游览巴拉那河上的伊泰普水电站外部，了解大坝、水库与发电设施的关系。', '电站由 Itaipu Binacional 管理，巴西侧参观服务由 Itaipu Parquetec 运营。', '按班次购买全景游门票。参观电站内部需另选项目。', '乘市区公交、出租车或自驾到 Av. Tancredo Neves 6702 的游客接待中心，再换乘游览巴士。'],
    ko: ['파라나강의 양국 공동 수력발전소 외부를 둘러보며 댐의 주요 설비를 살펴보는 투어입니다.', '발전소는 Itaipu Binacional이 관리하며 브라질 쪽 관광은 Itaipu Parquetec이 운영합니다.', '파노라마 투어 출발 시간을 확인하고 예약하세요. 발전소 내부 투어는 별도 상품입니다.', '시내버스, 택시 또는 자동차로 Av. Tancredo Neves 6702 방문자 센터에 도착한 뒤 투어 버스를 타세요.'],
  },
  'marco-das-tres-fronteiras': {
    pt: ['Obelisco da margem brasileira na confluência dos rios Iguaçu e Paraná, com vistas para Argentina e Paraguai.', 'A visitação ao complexo é operada pelo Marco das 3 Fronteiras, que mantém a bilheteria e a programação cultural.', 'A visita é paga. Consulte o ingresso e as apresentações da data escolhida.', 'Siga de carro ou táxi até a entrada do Marco no Loteamento Parque das Três Fronteiras. Planeje a volta se ficar para o espetáculo.'],
    en: ['Brazil’s border obelisk overlooks the meeting of the Iguaçu and Paraná rivers, with views towards Argentina and Paraguay.', 'Marco das 3 Fronteiras operates the visitor complex, including ticketing and cultural events.', 'Admission is ticketed. Check dates and show times before booking.', 'Take a car or taxi to the Marco entrance in Parque das Três Fronteiras. Arrange your return if you stay for the evening show.'],
    es: ['El obelisco brasileño domina la confluencia de los ríos Iguazú y Paraná, con vistas hacia Argentina y Paraguay.', 'Marco das 3 Fronteiras opera el complejo de visitas, incluida la boletería y la programación cultural.', 'El acceso es de pago. Consulta las entradas y los espectáculos de tu fecha.', 'Llega en coche o taxi a la entrada de Parque das Três Fronteiras. Organiza el regreso si te quedas para el espectáculo.'],
    zh: ['巴西侧界碑位于伊瓜苏河与巴拉那河交汇处，可从观景区眺望阿根廷和巴拉圭两岸。', '游客区由 Marco das 3 Fronteiras 运营，负责售票与文化演出安排。', '游客区需购票，入场和演出时段以选定日期为准。', '自驾或搭出租车到 Parque das Três Fronteiras 的巴西侧入口；若留下看晚间演出，提前安排回程。'],
    ko: ['이과수강과 파라나강 합류점의 브라질 쪽 경계 기념비에서 아르헨티나와 파라과이 방향을 볼 수 있습니다.', 'Marco das 3 Fronteiras가 방문 시설과 매표소, 문화 행사를 운영합니다.', '유료 입장입니다. 방문일의 티켓 및 공연 일정을 확인하세요.', '자동차나 택시로 Parque das Três Fronteiras 입구에 도착하세요. 저녁 공연을 볼 경우 돌아가는 교통편을 미리 준비하세요.'],
  },
  'templo-budista-chen-tien': {
    pt: ['Templo budista na região do Jardim Califórnia, com jardins, pavilhões e esculturas que podem ser observados a partir dos caminhos liberados.', 'A comunidade religiosa do Templo Chen Tien cuida do espaço e estabelece as regras de visita.', 'A visita é gratuita. Consulte o calendário do templo antes de sair.', 'Siga de carro ou táxi até o nº 99 da Rua Dr. Josivalter Vila Nova. A secretaria de turismo informa que há estacionamento gratuito.'],
    en: ['A Buddhist temple in Jardim Califórnia with gardens, pavilions and sculpture viewed from designated public paths.', 'The Chen Tien temple community maintains the site and sets its visitor rules.', 'Admission is free. Check the temple calendar before making the trip.', 'Take a car or taxi to 99 Rua Dr. Josivalter Vila Nova. The municipal tourism office lists free parking.'],
    es: ['Templo budista en Jardim Califórnia con jardines, pabellones y esculturas que se pueden observar desde los senderos habilitados.', 'La comunidad religiosa del Templo Chen Tien cuida el recinto y establece sus normas de visita.', 'La entrada es gratuita. Consulta el calendario del templo antes de salir.', 'Llega en coche o taxi al número 99 de Rua Dr. Josivalter Vila Nova. La oficina municipal de turismo indica que hay estacionamiento gratuito.'],
    zh: ['陈天佛寺位于 Jardim Califórnia。沿开放步道可观赏庭园、殿宇和佛像。', '寺院由陈天佛寺的宗教团体维护，访客须遵守寺方开放范围和参观规定。', '参观免费，出发前核对寺方日程。', '自驾或搭出租车前往 Rua Dr. Josivalter Vila Nova 99 号。市旅游部门列有免费停车。'],
    ko: ['자르징 칼리포르니아의 불교 사찰로, 개방된 산책로에서 정원과 전각, 불상을 둘러볼 수 있습니다.', '첸톈 사찰 공동체가 경내를 관리하고 방문 규정을 정합니다.', '무료 입장입니다. 출발 전에 사찰의 개방 일정을 확인하세요.', '자동차나 택시로 Rua Dr. Josivalter Vila Nova 99번지로 가세요. 시 관광 안내에 따르면 무료 주차장이 있습니다.'],
  },
} satisfies Record<NearbySlug, Record<Lang, [string, string, string, string]>>;

export const visitLabels = {
  pt: ['Gestão do atrativo', 'Informações básicas', 'Entrada', 'Horários', 'Ingressos', 'Avaliações de visitantes', 'Ver avaliações no Google Maps', 'Como chegar', 'Perto das Cataratas', 'Dados exibidos anteriormente no site'],
  en: ['Site management', 'Visitor information', 'Entrance', 'Hours', 'Tickets', 'Visitor reviews', 'See reviews on Google Maps', 'Getting there', 'Near the falls', 'Previously displayed on this site'],
  es: ['Gestión del atractivo', 'Información básica', 'Entrada', 'Horarios', 'Entradas', 'Opiniones de visitantes', 'Ver opiniones en Google Maps', 'Cómo llegar', 'Cerca de las cataratas', 'Datos publicados anteriormente en este sitio'],
  zh: ['管理主体', '基础信息', '游客入口', '开放时间', '门票', '游客评分与评价', '在 Google 地图查看游客评价', '交通方式', '瀑布周边景点', '本站既有评分记录'],
  ko: ['운영 및 관리', '기본 정보', '방문자 입구', '운영 시간', '입장권', '방문객 평점 및 후기', 'Google 지도에서 후기 보기', '오시는 길', '폭포 주변 명소', '이 사이트에 이전에 표시된 평점'],
} satisfies Record<Lang, string[]>;
