import { nearbySlugs } from './nearby';
import type { Lang } from './utils';

export const trailSlug = 'trilha-das-cataratas';
export const viewpointSlug = 'mirante-da-garganta-do-diabo';
export const guideSlugs = [trailSlug, viewpointSlug, ...nearbySlugs] as const;

export const visitSources = {
  visit: 'https://cataratasdoiguacu.com.br/ajuda-e-cuidados/informacoes-gerais/',
  access: 'https://cataratasdoiguacu.com.br/ajuda-e-cuidados/acessibilidade/',
  authority: 'https://www.icmbio.gov.br/parnaiguacu',
};

export const viewpointMap = 'https://maps.app.goo.gl/kbFrrWhUT49eiEjk6';
export const trailMap = 'https://www.google.com/maps/search/?api=1&query=Trilha+das+Cataratas+Parque+Nacional+do+Igua%C3%A7u';

interface GuideCopy {
  heading: string;
  trail: string;
  viewpoint: string;
  trailIntro: string;
  viewpointIntro: string;
  about: string;
  access: string;
  start: string;
  walk: string;
  finish: string;
  alternative: string;
  timing: string;
  ticket: string;
  photo: string;
  map: string;
  home: string;
  sources: string;
}

export const visitGuides: Record<Lang, GuideCopy> = {
  pt: {
    heading: 'Planeje sua visita às Cataratas do Iguaçu',
    trail: 'Trilha das Cataratas do Iguaçu no lado brasileiro',
    viewpoint: 'Mirante da Garganta do Diabo no Brasil',
    trailIntro: 'Onde descer do ônibus, como percorrer a Trilha das Cataratas e onde embarcar na volta. Reserve cerca de duas horas para o passeio tradicional, incluindo o transporte interno.',
    viewpointIntro: 'Veja a Garganta do Diabo pela margem brasileira em Foz do Iguaçu. Compare o percurso a pé com o acesso à passarela pelo elevador panorâmico de Porto Canoas.',
    about: 'O mirante e a trilha integram o Polo Cataratas do Parque Nacional do Iguaçu, unidade federal administrada pelo ICMBio. Os serviços de visitação são prestados sob concessão.',
    access: 'Como chegar e seguir até a passarela',
    start: 'Entre pelo Centro de Visitantes, BR-469, km 18, Foz do Iguaçu, PR. Embarque no ônibus interno e desça na parada em frente ao hotel para iniciar a trilha.',
    walk: 'Siga por cerca de 1 km de trilha a pé, com escadas e mirantes voltados para as quedas. Pare nos primeiros mirantes para ver o conjunto das cataratas antes de chegar ao trecho de névoa.',
    finish: 'No final, siga a sinalização para a passarela da Garganta do Diabo. Para retornar, suba à área de Porto Canoas e embarque no ônibus interno.',
    alternative: 'Para evitar as escadas da trilha, permaneça no ônibus até Porto Canoas. Consulte a operação do elevador panorâmico e as condições da passarela antes de sair.',
    timing: 'Confira a faixa de entrada e eventuais alterações no site das Cataratas antes de viajar.',
    ticket: 'O ingresso tradicional inclui o ônibus interno de ida e volta, a trilha, os mirantes, a passarela e os elevadores. Consulte as tarifas no site de visitação.',
    photo: 'Para um plano aberto, fotografe em um dos mirantes da trilha. Na passarela, guarde o telefone em uma bolsa impermeável entre as fotos e mantenha a passagem livre.',
    map: 'Ver no Google Maps',
    home: 'Guia das Cataratas do Iguaçu',
    sources: 'Informações oficiais de visitação',
  },
  en: {
    heading: 'Plan your visit to Iguazu Falls',
    trail: 'Iguazu Falls Trail on the Brazilian Side',
    viewpoint: 'Devil’s Throat Viewpoint on the Brazilian Side',
    trailIntro: 'Find the right shuttle stop, follow the Brazilian Falls Trail and return from Porto Canoas. Allow around two hours for the standard visit, including the park shuttle.',
    viewpointIntro: 'See Devil’s Throat from Foz do Iguaçu, Brazil. Choose the walk past the falls or take the panoramic lift from Porto Canoas to the boardwalk.',
    about: 'The trail and viewpoint are part of the Falls Sector of Iguaçu National Park, a federal protected area managed by ICMBio. Visitor services operate under a concession.',
    access: 'Getting to the boardwalk',
    start: 'Enter at the Visitor Centre on BR-469, km 18, Foz do Iguaçu, Paraná. Take the park shuttle to the stop opposite the hotel for the start of the trail.',
    walk: 'Follow roughly 1 km of walking trail with stairs and viewpoints. The first overlooks give you a wide view of the waterfalls before the path reaches the spray.',
    finish: 'At the end of the trail, follow the signs for the Devil’s Throat boardwalk. Head up to Porto Canoas for the return shuttle.',
    alternative: 'To skip the trail stairs, stay on the shuttle to Porto Canoas. Check lift service and boardwalk conditions before you go.',
    timing: 'Check entry slots and changes to opening times on the park’s visitor website before travelling.',
    ticket: 'The standard ticket includes the round-trip shuttle, walking trail, viewpoints, boardwalk and lifts. Check current prices on the visitor website.',
    photo: 'Use the trail overlooks for wide shots. On the boardwalk, keep your phone in a waterproof pouch between photos and leave room for others to pass.',
    map: 'Open in Google Maps',
    home: 'Iguazu Falls visitor guide',
    sources: 'Official visitor information',
  },
  es: {
    heading: 'Planifica tu visita a las cataratas del Iguazú',
    trail: 'Sendero de las cataratas del Iguazú en el lado brasileño',
    viewpoint: 'Mirador de la Garganta del Diablo en Brasil',
    trailIntro: 'Descubre dónde bajar del autobús, cómo recorrer el sendero brasileño y dónde tomar el transporte de regreso. Calcula unas dos horas para la visita, incluido el traslado interno.',
    viewpointIntro: 'Observa la Garganta del Diablo desde Foz do Iguaçu, en Brasil. Puedes acercarte por el sendero panorámico o por el ascensor de Porto Canoas.',
    about: 'El sendero y el mirador forman parte del sector de las cataratas del Parque Nacional do Iguaçu, área federal gestionada por el ICMBio. Los servicios de visita se prestan en régimen de concesión.',
    access: 'Cómo llegar a la pasarela',
    start: 'Entra por el Centro de Visitantes, BR-469, km 18, Foz do Iguaçu, Paraná. Toma el autobús interno hasta la parada frente al hotel para iniciar el sendero.',
    walk: 'Recorre alrededor de 1 km de sendero peatonal con escaleras y miradores. Desde los primeros miradores se aprecia el conjunto de saltos antes de llegar a la zona de rocío.',
    finish: 'Al final, sigue las señales hacia la pasarela de la Garganta del Diablo. Sube a Porto Canoas para tomar el autobús de regreso.',
    alternative: 'Para evitar las escaleras del sendero, sigue en el autobús hasta Porto Canoas. Consulta el funcionamiento del ascensor panorámico y el estado de la pasarela.',
    timing: 'Antes de salir, consulta las horas de entrada y los cambios de horario en la web de visita.',
    ticket: 'La entrada tradicional incluye autobús de ida y vuelta, sendero, miradores, pasarela y ascensores. Consulta las tarifas vigentes en la web de visita.',
    photo: 'Usa los miradores del sendero para las panorámicas. En la pasarela, guarda el teléfono en una funda impermeable entre fotos y deja sitio para pasar.',
    map: 'Abrir en Google Maps',
    home: 'Guía de las cataratas del Iguazú',
    sources: 'Información oficial para visitantes',
  },
  zh: {
    heading: '规划巴西侧伊瓜苏瀑布行程',
    trail: '巴西侧伊瓜苏瀑布步道',
    viewpoint: '巴西侧魔鬼之喉观景台',
    trailIntro: '查看园内巴士下车点、瀑布步道和返程乘车点。经典游览路线含园内交通，约需两小时。',
    viewpointIntro: '从巴西伊瓜苏市一侧观赏魔鬼之喉。可以沿瀑布步道步行，也可以到 Porto Canoas 搭观景电梯前往栈道。',
    about: '步道和观景台位于巴西伊瓜苏国家公园瀑布游览区。公园由巴西联邦机构 ICMBio 管理，游客服务由特许经营方提供。',
    access: '从游客中心到观景栈道',
    start: '从巴拉那州伊瓜苏市 BR-469 公路 18 公里处的游客中心入园。搭园内巴士，在酒店对面站下车，从那里开始步行。',
    walk: '瀑布步道的步行段约 1 公里，途中有台阶。前段观景台适合看瀑布群全景，再往前才会进入水雾较浓的区域。',
    finish: '到步道末端后按指示前往魔鬼之喉栈道。结束后到 Porto Canoas 搭园内巴士返回游客中心。',
    alternative: '想避开步道台阶，可搭巴士直达 Porto Canoas。出发前查阅官方无障碍说明，确认观景电梯和栈道开放情况。',
    timing: '入园有预约时段，出发前请查阅官方游览网站的最新安排。',
    ticket: '经典游览门票含园内往返巴士、步道、观景台、栈道和电梯。票价以官方游览网站为准。',
    photo: '在步道前段观景台拍全景。走上栈道后，拍摄间隙把手机收进防水袋，并给其他游客留出通行空间。',
    map: '在 Google 地图查看',
    home: '伊瓜苏瀑布旅游指南',
    sources: '官方游览资料',
  },
  ko: {
    heading: '이과수 폭포 방문 계획',
    trail: '브라질 쪽 이과수 폭포 산책로',
    viewpoint: '브라질 쪽 악마의 목구멍 전망대',
    trailIntro: '공원 셔틀 하차 지점과 폭포 산책로, 돌아오는 버스 정류장을 확인하세요. 셔틀을 포함한 일반 관람에는 약 두 시간이 걸립니다.',
    viewpointIntro: '브라질 포스두이과수에서 악마의 목구멍을 바라볼 수 있습니다. 폭포 산책로를 걷거나 포르투 카노아스에서 전망 엘리베이터를 타고 데크로 내려갈 수 있습니다.',
    about: '산책로와 전망대는 이과수 국립공원 폭포 관람 구역에 있습니다. 브라질 연방 기관 ICMBio가 공원을 관리하며 관람 서비스는 위탁 운영됩니다.',
    access: '입구에서 전망 데크까지',
    start: '파라나주 포스두이과수 BR-469 도로 18km 지점의 방문자 센터에서 입장하세요. 셔틀을 타고 호텔 맞은편 정류장에 내리면 산책로가 시작됩니다.',
    walk: '계단과 전망대가 있는 약 1km의 산책로를 따라가세요. 초반 전망대에서는 물보라가 짙은 구간에 들어가기 전 폭포의 전경을 볼 수 있습니다.',
    finish: '산책로 끝에서 악마의 목구멍 전망 데크 표지판을 따라가세요. 관람을 마치면 포르투 카노아스에서 돌아가는 셔틀을 탑니다.',
    alternative: '산책로의 계단을 피하려면 셔틀을 타고 포르투 카노아스까지 가세요. 방문 전에 전망 엘리베이터 운행과 데크 개방 여부를 확인하세요.',
    timing: '출발 전에 공식 관람 웹사이트에서 입장 가능 시간과 변경 사항을 확인하세요.',
    ticket: '일반 입장권에는 왕복 셔틀, 산책로, 전망대, 데크 및 엘리베이터가 포함됩니다. 최신 요금은 공식 관람 웹사이트를 확인하세요.',
    photo: '산책로 전망대에서 폭포 전경을 찍기 좋습니다. 데크에서는 촬영 사이에 휴대전화를 방수 주머니에 넣고 통로를 비워 주세요.',
    map: 'Google 지도에서 보기',
    home: '이과수 폭포 여행 안내',
    sources: '공식 관람 정보',
  },
};
