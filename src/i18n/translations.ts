import type { Lang } from './utils';

import { visitGuides } from './visit-guides';

type T = Record<Lang, string>;

export const t = (s: T | string, lang: Lang): string =>
  typeof s === 'string' ? s : s[lang];

// ── Nav ──
export const nav = {
  overview: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo', ko: '머리말' } satisfies T,
  highlights: { zh: '亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques', ko: '하이라이트' } satisfies T,
  guide: { zh: '游览指南', en: 'Guide', es: 'Guía', pt: 'Guia', ko: '방문 가이드' } satisfies T,
  transport: { zh: '交通', en: 'Transport', es: 'Transporte', pt: 'Transporte', ko: '교통' } satisfies T,
  reviews: { zh: '评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações', ko: '방문 후기' } satisfies T,
  encyclopedia: { zh: '百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia', ko: '백과' } satisfies T,
  ecology: { zh: '生态', en: 'Ecology', es: 'Ecología', pt: 'Ecologia', ko: '생태' } satisfies T,
  gallery: { zh: '图集', en: 'Gallery', es: 'Galería', pt: 'Galeria', ko: '갤러리' } satisfies T,
  faq: { zh: '指南', en: 'Guide', es: 'Guía', pt: 'Guia', ko: '가이드' } satisfies T,
};

// ── Hero ──
export const hero = {
  title: {
    zh: '伊瓜苏瀑布<br/><span class="italic text-[color:var(--color-sun)]">震撼观景</span>步道',
    en: 'Where the forest<br/><span class="italic text-[color:var(--color-sun)]">meets the roar</span>.',
es: 'Donde la selva<br/><span class="italic text-[color:var(--color-sun)]">encuentra el rugido</span>.',
    pt: 'Onde a mata<br/><span class="italic text-[color:var(--color-sun)]">encontra o rugido</span>.',
    ko: '숲이<br/><span class="italic text-[color:var(--color-sun)]">포효와 맞닿는</span> 곳.',
  } satisfies T,
  subtitle: {
    zh: '欢迎来到 <strong>Mirante da Garganta do Diabo</strong>，即闻名遐迩的核心 <strong>Cataratas Brasil</strong>。位于 <strong>Foz do Iguaçu</strong>、<strong>Paraná</strong>、<strong>Brasil</strong> 的心脏地带——约 1.5 公里全景栈道，一路走进魔鬼之喉的水雾之中。',
    en: 'Welcome to <strong>Mirante da Garganta do Diabo</strong>, widely recognized as the central <strong>Cataratas Brasil</strong>. Located in the heart of <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brazil</strong> — the ~1.5 km panoramic boardwalk that carries you straight into the mist of the Devil\'s Throat.',
    es: 'Bienvenido al <strong>Mirante da Garganta del Diablo</strong>, ampliamente reconocido como el <strong>Cataratas Brasil</strong> central. Ubicado en el corazón de <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brasil</strong> — el sendero panorámico de 1,5 km que te lleva directo a la niebla de la Garganta del Diablo.',
    pt: 'Bem-vindo ao <strong>Mirante da Garganta do Diabo</strong>, amplamente reconhecido como o coração da <strong>Cataratas Brasil</strong>. Localizado no coração de <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brasil</strong> — 1,5 km de passarela panorâmica levando você direto à névoa da Garganta do Diabo.',
    ko: '<strong>Mirante da Garganta do Diabo(악마의 목구멍 전망대)</strong>는 브라질 <strong>Cataratas Brasil(이구아수 폭포)</strong>의 심장입니다. <strong>Foz do Iguaçu(포스두이구아수)</strong>, <strong>Paraná(파라나)</strong>, <strong>Brasil(브라질)</strong> 한가운데에서 약 1.5km의 전망 산책로가 당신을 악마의 목구멍 물안개 속으로 안내합니다.',
  } satisfies T,
  statReviews: { zh: '评价', en: 'reviews', es: 'reseñas', pt: 'avaliações', ko: '리뷰' } satisfies T,
  statLength: { zh: '步道长度', en: 'Trail length', es: 'Longitud', pt: 'Extensão', ko: '산책로 길이' } satisfies T,
  statFalls: { zh: '瀑布数量', en: 'Waterfalls', es: 'Cascadas', pt: 'Quedas', ko: '폭포 수' } satisfies T,
  statFlow: { zh: '平均流量', en: 'Avg. flow', es: 'Caudal medio', pt: 'Vazão média', ko: '평균 유량' } satisfies T,
};

// ── Manifesto (网站前言) ──
export const manifesto = {
  sectionNum: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo', ko: '머리말' } satisfies T,
  heading: {
    zh: '敬畏自然<br/><em class="text-[color:var(--color-emerald)]">守护永恒</em>',
    en: 'Reverence for nature.<br/><em class="text-[color:var(--color-emerald)]">A vow for eternity.</em>',
    es: 'Reverencia a la naturaleza.<br/><em class="text-[color:var(--color-emerald)]">Un voto por la eternidad.</em>',
    pt: 'Reverência à natureza.<br/><em class="text-[color:var(--color-emerald)]">Um voto pela eternidade.</em>',
    ko: '자연에 대한 경외<br/><em class="text-[color:var(--color-emerald)]">영원을 위한 서약</em>',
  } satisfies T,
  subheading: {
    zh: '致每一位自然观察者',
    en: 'To every observer of the natural world',
    es: 'A cada observador del mundo natural',
    pt: 'A cada observador do mundo natural',
    ko: '자연을 관찰하는 모든 이에게',
  } satisfies T,
  p1: {
    zh: '欢迎来到 <strong>Mirante da Garganta do Diabo</strong>，即闻名遐迩的核心 <strong>Cataratas Brasil</strong>。位于 <strong>Foz do Iguaçu</strong>（福斯-杜伊瓜苏）、<strong>Paraná</strong>（巴拉那州）、<strong>Brasil</strong>（巴西）的心脏地带，本目的地是到访该区域旅行者的首要门户。Mirante da Garganta do Diabo → Foz do Iguaçu → Paraná → Brasil。在这里，水不仅仅是流动的物质，而是雕刻地球的刻刀，是孕育生命的血脉。伊瓜苏瀑布（Cataratas do Iguaçu）是世界上最宽阔的瀑布群。当我们站在 Trilha das Cataratas 的栈道上，感受每秒 1,500 立方米的水流坠入"魔鬼之喉"的轰鸣时，人类的渺小与大自然的伟大瞬间完成交汇。',
    en: 'Welcome to <strong>Mirante da Garganta do Diabo</strong>, widely recognized as the central <strong>Cataratas Brasil</strong>. Located in the heart of <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brazil</strong>, this destination serves as a primary hub for travelers visiting the region. Mirante da Garganta do Diabo → Foz do Iguaçu → Paraná → Brazil. Here, water is not merely matter in motion — it is the chisel that sculpts the Earth, the bloodstream that nourishes life. The Iguaçu Falls (Cataratas do Iguaçu) form the widest waterfall system on the planet. When you stand on the Trilha das Cataratas boardwalk and feel 1,500 cubic metres of water per second plunge into the Devil\'s Throat, human smallness and nature\'s grandeur collide in a single, humbling instant.',
    es: 'Bienvenido al <strong>Mirante da Garganta del Diablo</strong>, ampliamente reconocido como el <strong>Cataratas Brasil</strong> central. Ubicado en el corazón de <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brasil</strong>, este destino sirve como eje principal para los viajeros que visitan la región. Mirante da Garganta del Diablo → Foz do Iguaçu → Paraná → Brasil. Aquí, el agua no es solo materia en movimiento: es el cincel que esculpe la Tierra, el torrente sanguíneo que nutre la vida. Las Cataratas del Iguazú constituyen el sistema de cascadas más ancho del planeta. Cuando te paras en la pasarela de la Trilha das Cataratas y sientes 1.500 metros cúbicos de agua por segundo precipitarse en la Garganta del Diablo, la pequeñez humana y la grandeza de la naturaleza colisionan en un solo instante de humildad.',
    pt: 'Bem-vindo ao <strong>Mirante da Garganta do Diabo</strong>, amplamente reconhecido como o coração da <strong>Cataratas Brasil</strong>. Localizado no coração de <strong>Foz do Iguaçu</strong>, <strong>Paraná</strong>, <strong>Brasil</strong>, este destino serve como o principal ponto de chegada para os viajantes que visitam a região. Mirante da Garganta do Diabo → Foz do Iguaçu → Paraná → Brasil. Aqui, a água não é apenas matéria em movimento — é o cinzel que esculpe a Terra, a corrente sanguínea que nutre a vida. As Cataratas do Iguaçu formam o sistema de quedas d\'água mais largo do planeta. Quando você está na passarela da Trilha das Cataratas e sente 1.500 metros cúbicos de água por segundo despencarem na Garganta do Diabo, a pequenez humana e a grandeza da natureza colidem em um único instante de humildade.',
    ko: '이곳은 널리 <strong>Mirante da Garganta do Diabo(악마의 목구멍 전망대)</strong>로 알려진 <strong>Cataratas Brasil(이구아수 폭포)</strong>의 중심입니다. <strong>Foz do Iguaçu(포스두이구아수)</strong>, <strong>Paraná(파라나)</strong>, <strong>Brasil(브라질)</strong> 한가운데에 자리한 이곳은 이 지역을 찾는 여행자의 주요 관문입니다. 여기서 물은 단순히 흐르는 물질이 아니라 지구를 조각하는 조각도요, 생명을 키우는 혈관입니다. 이구아수 폭포(Cataratas do Iguaçu)는 지구상에서 가장 넓은 폭포 시스템입니다. 트릴랴 다스 카타라타스(Trilha das Cataratas) 데크에 서서 초당 1,500세제곱미터의 물이 악마의 목구멍으로 쏟아지는 포효를 느낄 때, 인간의 나약함과 자연의 위대함이 하나로 부딪힙니다.',
  } satisfies T,
  p2: {
    zh: '然而，在这令人窒息的壮丽背后，隐藏着一种极度的脆弱。拥抱这片瀑布的大西洋原始雨林（Mata Atlântica），曾覆盖巴西东海岸超过 130 万平方公里的土地，而如今，未经破坏的原始林区仅存不到 <strong>12%</strong>。伊瓜苏国家公园，正是这片古老雨林在内陆最后的生态堡垒之一。',
    en: 'Yet behind this breathtaking majesty lies a profound fragility. The Atlantic Rainforest (Mata Atlântica) that embraces these falls once covered over 1.3 million square kilometres of Brazil\'s eastern coast. Today, less than <strong>12%</strong> of the original undisturbed forest remains. Iguaçu National Park stands as one of the last inland ecological strongholds of this ancient biome.',
    es: 'Pero detrás de esta majestuosidad impresionante yace una fragilidad profunda. La Selva Atlántica (Mata Atlântica) que abraza estas cataratas cubrió una vez más de 1,3 millones de kilómetros cuadrados de la costa este de Brasil. Hoy, menos del <strong>12%</strong> del bosque original intacto permanece. El Parque Nacional do Iguaçu es uno de los últimos bastiones ecológicos del interior de este antiguo bioma.',
    pt: 'Mas por trás dessa majestade de tirar o fôlego está uma fragilidade profunda. A Mata Atlântica que abraça essas cataratas já cobriu mais de 1,3 milhão de quilômetros quadrados da costa leste do Brasil. Hoje, menos de <strong>12%</strong> da floresta original intacta permanece. O Parque Nacional do Iguaçu é um dos últimos bastiões ecológicos do interior deste bioma ancestral.',
    ko: '하지만 이 숨 막히는 장엄함 뒤에는 깊은 취약성이 숨어 있습니다. 이 폭포를 감싸안은 대서양림(Mata Atlântica)은 한때 브라질 동부 해안 130만 제곱킬로미터 이상을 덮었으나, 오늘날 원래의 온전한 숲은 12% 미만만 남았습니다. 이구아수 국립공원은 이 고대 생태계가 내륙에 남긴 마지막 보루 중 하나입니다.',
  } satisfies T,
  p3: {
    zh: '作为一家非盈利科普机构，我们建立本网站，不仅为了向您展示如何抵达这里，更为了邀请您成为这片土地的<strong>"守护者"</strong>。当您踏上这条约 1.5 公里的步道时，您不仅是一名游客，更是 1.3 亿年地质史的见证人，是无数濒危巨嘴鸟与美洲豹的隐形客。',
    en: 'As a non-profit educational initiative, we built this website not merely to show you how to get here, but to invite you to become a <strong>guardian</strong> of this land. When you step onto this ~1.5-kilometre trail, you are not just a visitor — you are a witness to 130 million years of geological history, an invisible guest of countless endangered toucans and jaguars.',
    es: 'Como iniciativa educativa sin fines de lucro, construimos este sitio web no solo para mostrarle cómo llegar, sino para invitarle a convertirse en un <strong>guardián</strong> de esta tierra. Cuando pise este sendero de 1,5 kilómetros, no será solo un visitante: será testigo de 130 millones de años de historia geológica, un huésped invisible de innumerables tucanes y jaguares amenazados.',
    pt: 'Como iniciativa educacional sem fins lucrativos, construímos este site não apenas para mostrar como chegar, mas para convidá-lo a se tornar um <strong>guardião</strong> desta terra. Quando você pisar nesta trilha de 1,5 quilômetro, não será apenas um visitante — será testemunha de 130 milhões de anos de história geológica, um hóspede invisível de inúmeros tucanos e onças-pintadas ameaçados.',
    ko: '비영리 교육 기관으로서 우리는 이 사이트를 단순히 오는 법을 알리기 위해 만든 것이 아니라, 당신이 이 땅의 <strong>수호자</strong>가 되기를 초대하기 위해 만들었습니다. 약 1.5km의 산책로를 걸을 때 당신은 관광객 그 이상이며, 1억 3천만 년 지질사의 증인이자 수많은 멸종위기 큰부리새와 재규어의 보이지 않는 손님입니다.',
  } satisfies T,
  closing: {
    zh: '带走知识与震撼，留下纯净与尊重。<br/>让这片"大水"（I-Guazú）的轰鸣，能在未来的千百年里，继续在人类文明的边缘回荡。',
    en: 'Take away knowledge and awe. Leave behind purity and respect.<br/>Let the roar of this "great water" — I-Guazú — echo at the edge of human civilisation for millennia to come.',
    es: 'Llévese conocimiento y asombro. Deje pureza y respeto.<br/>Que el rugido de esta "agua grande" — I-Guazú — siga resonando al borde de la civilización humana por milenios más.',
    pt: 'Leve conhecimento e assombro. Deixe pureza e respeito.<br/>Que o rugido desta "água grande" — I-Guazú — continue ecoando à margem da civilização humana por milênios.',
    ko: '지식과 경이로움을 가지고 떠나고, 순수함과 존중을 남기세요.<br/>이 "큰 물"(I-Guazú)의 포효가 수천 년 동안 인류 문명의 가장자리에서 울려 퍼지길 바랍니다.',
  } satisfies T,
  chip1: { zh: '世界自然遗产', en: 'World Heritage', es: 'Patrimonio Mundial', pt: 'Patrimônio Mundial', ko: '세계 자연유산' } satisfies T,
  chip2: { zh: '跨国大瀑布', en: 'Transnational Falls', es: 'Cataratas binacionales', pt: 'Cataratas binacionais', ko: '국경을 넘는 폭포' } satisfies T,
  chip3: { zh: '仅存 12% 原始雨林', en: 'Only 12% forest remains', es: 'Solo 12% de selva queda', pt: 'Apenas 12% da mata resta', ko: '원시림 12%만 잔존' } satisfies T,
  chip4: { zh: '非盈利科普', en: 'Non-profit educational', es: 'Educativo sin fines de lucro', pt: 'Educacional sem fins lucrativos', ko: '비영리 교육' } satisfies T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: '游览亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques', ko: '하이라이트' } satisfies T,
  heading: {
    zh: '三重感官<em class="text-[color:var(--color-sun)]">洗礼</em>',
    en: 'Three sensory<em class="text-[color:var(--color-sun)]"> baptisms</em>',
    es: 'Tres bautismos<em class="text-[color:var(--color-sun)]"> sensoriales</em>',
    pt: 'Três batismos<em class="text-[color:var(--color-sun)]"> sensoriais</em>',
    ko: '세 가지 감각의<em class="text-[color:var(--color-sun)]"> 세례</em>',
  } satisfies T,
  items: [
    {
      icon: '🚶‍♂️', num: '01',
      title: { zh: '峡谷悬崖漫步', en: 'Canyon-rim walk', es: 'Paseo por el cañón', pt: 'Caminhada no cânion', ko: '협곡 가장자리 산책' } satisfies T,
      desc: { zh: '平整石板 + 木栈道，坡度平缓，老人小孩都能轻松走完。沿途多个突出观景台是绝佳摄影点。', en: 'Smooth stone and wooden boardwalks with gentle grades — easy for elders and kids. Multiple cantilevered decks along the way for photos.', es: 'Piedra lisa y pasarelas de madera con pendientes suaves — accesible para todos. Múltiples miradores para fotos.', pt: 'Pedras planas e passarelas de madeira com inclinação suave — acessível a todos. Vários mirantes para fotos.', ko: '평평한 돌길과 목재 데크로 경사가 완만해 노약자와 아이도 편하게 걸을 수 있습니다. 곳곳에 튀어나온 전망대는 사진 명소입니다.' } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (1).jpg',
    },
    {
      icon: '💦', num: '02',
      title: { zh: '水上栈道洗礼', en: 'The mist catwalk', es: 'Pasarela de niebla', pt: 'Passarela na névoa', ko: "물안개가 피어오르는 전망 데크" } satisfies T,
      desc: { zh: '靠近魔鬼之喉的水上栈道，瀑布激起的水雾像下雨一样把人淋透，是最原始的大自然礼赞。', en: 'Near the Devil\'s Throat, spray from the falls soaks you like a downpour — a raw, elemental encounter with the falls.', es: 'Cerca de la Garganta del Diablo, el rocío te empapa como un aguacero — un encuentro puro con la fuerza del agua.', pt: 'Perto da Garganta do Diabo, a névoa encharca você como uma chuva — um encontro cru com a força da água.', ko: '악마의 목구멍 가까이에서 폭포가 만들어내는 물안개가 소나기처럼 몸을 적십니다. 자연 그 자체와 마주하는 원초적인 경험입니다.' } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (2).jpg',
    },
    {
      icon: '🛗', num: '03',
      title: { zh: '全景电梯', en: 'Panoramic elevator', es: 'Ascensor panorámico', pt: 'Elevador panorâmico', ko: '파노라마 엘리베이터' } satisfies T,
      desc: { zh: '步道终点连接下层水面栈道与上层 Porto Canoas 休息区。上升过程俯瞰整个瀑布群壮阔宏图。', en: 'Links the lower catwalk to Porto Canoas. Watch the entire falls system unfurl beneath you as it rises.', es: 'Conecta la pasarela inferior con Porto Canoas. Ve el sistema completo desplegarse mientras subes.', pt: 'Liga a passarela inferior a Porto Canoas. Todo o conjunto se abre abaixo enquanto sobe.', ko: '하층 데크와 상층의 포르투 카노아스 휴게区을 연결합니다. 올라가며 폭포 전체가 펼쳐지는 모습을 내려다볼 수 있습니다.' } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (3).jpg',
    },
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: '实用游览指南', en: 'Practical Guide', es: 'Guía práctica', pt: 'Guia prático', ko: '실용 가이드' } satisfies T,
  heading: { zh: '出发前<em class="text-[color:var(--color-emerald)]">必读</em>', en: 'Read this<em class="text-[color:var(--color-emerald)]"> before you go</em>.', es: 'Léelo<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.', pt: 'Leia<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.', ko: '방문 전<em class="text-[color:var(--color-emerald)]"> 꼭 읽기</em>' } satisfies T,
  cards: [
    { icon: '🕒', label: { zh: '开放时间', en: 'Hours', es: 'Horario', pt: 'Horário', ko: '개장 시간' } satisfies T, value: '09:00 — 16:00', desc: { zh: '周一至周五 09:00–16:00；周六、周日 08:30–16:00（全年开放，建议提前核实）。', en: 'Mon–Fri 09:00–16:00; Sat–Sun 08:30–16:00 (open year-round — verify ahead).', es: 'Lun–vie 09:00–16:00; sáb–dom 08:30–16:00 (abierto todo el año).', pt: 'Seg–sex 09:00–16:00; sáb–dom 08:30–16:00 (aberto o ano todo — confira antes).', ko: '월~금 09:00–16:00, 토~일 08:30–16:00 (연중 개방 — 방문 전 확인 권장).' } satisfies T },
    { icon: '🎟️', label: { zh: '门票与入口', en: 'Ticket & entry', es: 'Entrada', pt: 'Ingresso', ko: '입장권 및 입구' } satisfies T, value: { zh: '游客中心', en: 'Visitor Centre', es: 'Centro de Visitantes', pt: 'Centro de Visitantes', ko: '방문자 센터' } satisfies T, desc: { zh: '购票后统一乘园区环保双层巴士到步道起点。', en: 'Buy tickets, then board the park\'s eco double-decker bus to the trailhead.', es: 'Compre entrada y tome el autobús ecológico hasta el sendero.', pt: 'Compre o ingresso e pegue o ônibus ecológico até a trilha.', ko: '입장권을 구매한 뒤 공원의 친환경 2층 버스를 타고 산책로 시작점으로 이동합니다.' } satisfies T },
    { icon: '⏱️', label: { zh: '游览时长', en: 'Duration', es: 'Duración', pt: 'Duração', ko: '관람 시간' } satisfies T, value: '3 — 4 h', desc: { zh: '步行 1.5-2 小时 + 巴士与拍照，建议预留 3-4 小时。', en: '1.5–2 h walking + bus + photos. Block 3–4 h total.', es: '1,5–2 h caminando + bus + fotos. Reserve 3–4 h.', pt: '1,5–2 h caminhando + ônibus + fotos. Reserve 3–4 h.', ko: '도보 1.5~2시간에 버스와 사진 촬영까지, 총 3~4시간을 잡으세요.' } satisfies T },
    { icon: '⚠️', label: { zh: '重要贴士', en: 'Key tips', es: 'Consejos', pt: 'Dicas', ko: '핵심 팁' } satisfies T, value: '', desc: '', tips: [{ zh: '务必带雨衣 + 手机防水袋', en: 'Poncho + phone drybag are mandatory', es: 'Poncho y bolsa impermeable obligatorios', pt: 'Capa de chuva + saco à prova d\'água', ko: '우비와 휴대폰 방수팩은 필수' } satisfies T, { zh: '严禁喂食浣熊 (Quati)', en: 'Never feed the coatis (Quati)', es: 'No alimente a los coatíes', pt: 'Não alimente os quatis', ko: '아메리카너구리(Quati)에게 먹이를 주지 마세요' } satisfies T, { zh: '避开台阶可经 Porto Canoas 电梯', en: 'Lift access via Porto Canoas', es: 'Acceso por ascensor en Porto Canoas', pt: 'Acesso por elevador em Porto Canoas', ko: '포르투 카노아스 엘리베이터 이용 가능' } satisfies T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: '交通指南', en: 'Transport', es: 'Transporte', pt: 'Transporte', ko: '교통 안내' } satisfies T,
  heading: { zh: '三种方式<br/><em class="text-[color:var(--color-emerald)]">到达园区</em>', en: 'Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>', es: 'Tres formas<br/><em class="text-[color:var(--color-emerald)]">de llegar</em>', pt: 'Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>', ko: '세 가지 방법<br/><em class="text-[color:var(--color-emerald)]">도착하기</em>' } satisfies T,
  subtitle: { zh: '距离机场仅 3 公里，市中心约 30 分钟车程。', en: 'Just 3 km from the airport, ~30 minutes from downtown Foz.', es: 'A solo 3 km del aeropuerto, ~30 min del centro de Foz.', pt: 'A apenas 3 km do aeroporto, ~30 min do centro de Foz.', ko: '공항에서 3km, 시내에서 차로 약 30분 거리입니다.' } satisfies T,
  items: [
    { icon: '✈️', title: { zh: '从福斯-杜伊瓜苏机场 (IGU)', en: 'From Foz do Iguaçu Airport (IGU)', es: 'Desde el aeropuerto (IGU)', pt: 'Do Aeroporto (IGU)', ko: '포스두이구아수 공항(IGU)에서' } satisfies T, meta: { zh: '3 公里 · 5–10 分钟', en: '3 km · 5–10 min', es: '3 km · 5–10 min', pt: '3 km · 5–10 min', ko: '3km · 5~10분' } satisfies T, details: [{ icon: '🚌', text: { zh: '<strong>120 路公交 — 国家公园方向</strong> · 最经济，约 R$5，机场即可上车', en: '<strong>Bus 120 — National Park</strong> · Cheapest, ~R$5, boards right outside terminal', es: '<strong>Línea 120 — Parque Nacional</strong> · Más económico, ~R$5, sale del terminal', pt: '<strong>Linha 120 — Parque Nacional</strong> · Mais barato, ~R$5, saída do terminal', ko: '<strong>120번 버스 — 국립공원 방향</strong> · 가장 저렴, 약 R$5, 터미널 밖에서 바로 탑승' } satisfies T }, { icon: '🚕', text: { zh: '出租车 / Uber · 5 分钟, 便于携带行李', en: 'Taxi / Uber · 5 min, easy with luggage', es: 'Taxi / Uber · 5 min, ideal con equipaje', pt: 'Táxi / Uber · 5 min, ideal com bagagem', ko: '택시 / Uber · 5분, 짐 운반에 편리' } satisfies T }] },
    { icon: '🏙️', title: { zh: '从市中心 (Centro)', en: 'From Downtown (Centro)', es: 'Desde el Centro', pt: 'Do Centro', ko: '시내(Centro)에서' } satisfies T, meta: { zh: '约 20 公里 · 30–40 分钟', en: '~20 km · 30–40 min', es: 'Unos 20 km · 30–40 min', pt: 'Cerca de 20 km · 30–40 min', ko: '약 20km · 30~40분' } satisfies T, details: [{ icon: '🚌', text: { zh: '<strong>120 路公交</strong> · 贯穿市中心-机场-国家公园，约 40 分钟', en: '<strong>Bus 120</strong> · Loops through downtown → airport → park, ~40 min', es: '<strong>Línea 120</strong> · Recorre centro → aeropuerto → parque, ~40 min', pt: '<strong>Linha 120</strong> · Passa centro → aeroporto → parque, ~40 min', ko: '<strong>120번 버스</strong> · 시내→공항→국립공원 경유, 약 40분' } satisfies T }, { icon: '📱', text: { zh: 'Uber / 99 · 约 30–50 雷亚尔，车程约 30 分钟', en: 'Uber / 99 · R$30 — R$50, ~30 min', es: 'Uber / 99 · R$30 — R$50, ~30 min', pt: 'Uber / 99 · R$30 — R$50, ~30 min', ko: 'Uber / 99 · R$30 — R$50, 약 30분' } satisfies T }] },
    { icon: '🚗', title: { zh: '自驾与停车', en: 'Self-drive & Parking', es: 'En coche y estacionamiento', pt: 'Carro próprio', ko: '자가운전 및 주차' } satisfies T, meta: { zh: '游客中心', en: 'Visitor Centre', es: 'Centro de Visitantes', pt: 'Centro de Visitantes', ko: '방문자 센터' } satisfies T, details: [{ icon: '', text: { zh: '游客中心外设大型付费停车场；停车后换乘园区免费环保巴士进入景区。', en: 'Large paid lot at the visitor center; transfer to the free eco-shuttle inside.', es: 'Gran estacionamiento pago junto al centro de visitantes; luego autobús ecológico gratuito.', pt: 'Estacionamento pago no centro de visitantes; depois ônibus ecológico gratuito.', ko: '방문자 센터 외부에 대형 유료 주차장이 있으며, 주차 후 공원 무료 친환경 셔틀을 이용해 입장합니다.' } satisfies T }] },
  ],
};

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: '深度百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia', ko: "백과" } satisfies T,
  heading: { zh: '时间、神话与<em class="text-[color:var(--color-emerald)]">不朽的自然界</em>', en: 'Time, myth, and the<em class="text-[color:var(--color-emerald)]"> immortal natural world</em>', es: 'Tiempo, mito y el<em class="text-[color:var(--color-emerald)]"> mundo natural inmortal</em>', pt: 'Tempo, mito e o<em class="text-[color:var(--color-emerald)]"> mundo natural imortal</em>', ko: "시간과 신화, <em class=\"text-[color:var(--color-emerald)]\">영원한 자연</em>" } satisfies T,
  subtitle: {
    zh: '在这座横跨巴阿两国的瀑布群背后，交织着 1.3 亿年的地球脉动、古老原住民的凄美神话，以及一段鲜为人知的保护史。',
    en: 'Behind this cascade that straddles Brazil and Argentina lie 130 million years of planetary rhythms, an ancient indigenous legend of tragic beauty, and a little-known chapter of conservation history.',
    es: 'Detrás de esta cascada que se extiende entre Brasil y Argentina se entrelazan 130 millones de años de pulsaciones planetarias, una antigua leyenda indígena de trágica belleza y un capítulo poco conocido de la historia de la conservación.',
    pt: 'Por trás desta cascata que se estende entre Brasil e Argentina estão 130 milhões de anos de pulsação planetária, uma antiga lenda indígena de beleza trágica e um capítulo pouco conhecido da história da conservação.', ko: "브라질과 아르헨티나에 걸친 이 폭포에는 1억 3천만 년의 지질 역사와 과라니 전설, 자연을 보전해 온 이야기가 깃들어 있습니다.",
  } satisfies T,
  items: [
    {
      icon: '🌋',
      title: { zh: '1.3 亿年的地球脉动：玄武岩上的时间切片', en: '130 Million Years: A Slice of Time on Basalt', es: '130 millones de años: una rebanada de tiempo sobre basalto', pt: '130 milhões de anos: uma fatia do tempo sobre basalto', ko: "1억 3천만 년을 간직한 현무암" } satisfies T,
      body: {
        zh: '<p>今天我们所见到的断崖陡壁，其实是地球内部剧烈运动的遗产。</p><p><strong>塞拉杰拉尔组（Serra Geral Formation）：</strong> 追溯至 1.3 亿年前的中生代白垩纪，超大陆开始分裂。猛烈的火山喷发让熔岩漫溢，冷却后形成了坚不可摧的玄武岩阶地。</p><p><strong>溯源侵蚀（Headward Erosion）：</strong> 伊瓜苏瀑布是一个"活着的"地质奇观。伊瓜苏河在流向巴拉那河的途中遇到了巨大的断层。数百万年来，奔腾的河水如同电锯般切割着玄武岩，导致瀑布正以每年几毫米到几厘米的速度不断向河流上游"后退"。你今天站立的观景台，在数万年前，曾是瀑布奔腾而下坠入深渊的中心。</p>',
        en: '<p>The sheer cliffs we see today are the legacy of violent movements deep within the Earth.</p><p><strong>The Serra Geral Formation:</strong> Dating back 130 million years to the Mesozoic Cretaceous, the supercontinent began to fracture. Fierce volcanic eruptions flooded the landscape with lava, which cooled into the indestructible basalt terraces that underpin the falls.</p><p><strong>Headward Erosion:</strong> Iguaçu Falls is a "living" geological wonder. The Iguaçu River, on its journey to the Paraná, encountered a massive fault line. Over millions of years, the rushing water has been cutting into the basalt like a chainsaw, causing the waterfall to "retreat" upstream at a rate of a few millimetres to centimetres per year. The viewing platform where you stand today was, tens of thousands of years ago, the very centre of the cascade plunging into the abyss.</p>',
        es: '<p>Los acantilados que vemos hoy son el legado de movimientos violentos en las profundidades de la Tierra.</p><p><strong>La Formación Serra Geral:</strong> Hace 130 millones de años, en el Cretácico Mesozoico, el supercontinente comenzó a fracturarse. Erupciones volcánicas feroces inundaron el paisaje con lava, que se enfrió formando las indestructibles terrazas de basalto que sostienen las cataratas.</p><p><strong>Erosión remontante:</strong> Las Cataratas del Iguazú son una maravilla geológica "viva". El río Iguazú, en su camino hacia el Paraná, encontró una enorme falla. Durante millones de años, el agua ha estado cortando el basalto como una sierra, haciendo que la catarata "retroceda" río arriba unos milímetros a centímetros por año. La plataforma donde estás hoy era, hace decenas de miles de años, el centro mismo de la cascada.</p>',
        pt: '<p>As falésias que vemos hoje são o legado de movimentos violentos nas profundezas da Terra.</p><p><strong>A Formação Serra Geral:</strong> Há 130 milhões de anos, no Cretáceo Mesozoico, o supercontinente começou a se fraturar. Erupções vulcânicas ferozes inundaram a paisagem com lava, que esfriou formando os indestrutíveis terraços de basalto que sustentam as cataratas.</p><p><strong>Erosão remontante:</strong> As Cataratas do Iguaçu são uma maravilha geológica "viva". O rio Iguaçu, em seu caminho para o Paraná, encontrou uma enorme falha. Por milhões de anos, a água corrente vem cortando o basalto como uma serra elétrica, fazendo a cachoeira "recuar" rio acima a alguns milímetros a centímetros por ano. O mirante onde você está hoje era, há dezenas de milhares de anos, o centro exato da cascata despencando no abismo.</p>', ko: "<p>오늘날 보이는 가파른 절벽은 지구 깊은 곳의 격렬한 움직임이 남긴 흔적입니다.</p><p><strong>세라 제랄 지층:</strong> 약 1억 3천만 년 전 백악기에 대륙이 갈라지기 시작했고, 분출한 용암이 식어 폭포 아래의 현무암층을 형성했습니다.</p><p><strong>두부 침식:</strong> 파라나강으로 향하는 이과수강이 지질 단층을 만나면서 흐르는 물이 현무암을 깎았습니다. 수백만 년 동안 폭포가 상류 쪽으로 후퇴했고, 오늘날 전망대가 있는 자리도 과거에는 물이 떨어지던 곳이었습니다.</p>",
      } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (5).jpg',
    },
    {
      icon: '🐍',
      title: { zh: '瓜拉尼人的悲歌：魔鬼之喉的诞生', en: 'The Guarani Lament: Birth of the Devil\'s Throat', es: 'El lamento guaraní: nacimiento de la Garganta del Diablo', pt: 'O lamento guarani: nascimento da Garganta do Diabo', ko: "과라니 전설 속 악마의 목구멍" } satisfies T,
      body: {
        zh: '<p>在地理学家用尺子测量这里之前，这片土地的最初主人——瓜拉尼（Guarani）原住民，早就用神话解释了这股令人生畏的力量。在瓜拉尼语中，"I" 意为水，"Guazú" 意为大，这便是伊瓜苏（Iguazu）的由来。</p><p><strong>深渊中的羁绊：</strong> 传说中，美丽的部落少女 Naipi 被选作祭品献给外形如巨蛇的森林之神 M\'Boi。为了拯救爱人，青年勇士 Tarobá 带着 Naipi 乘独木舟顺流私奔。暴怒的蛇神猛烈撕裂了大地，河床瞬间崩塌，形成了今天深不见底的"魔鬼之喉"（Garganta do Diabo）。</p><p>Naipi 被化作了悬崖边缘的一块岩石，永远经受瀑布的冲刷；而 Tarobá 则被变成了一棵棕榈树，在悬崖对岸绝望地注视着爱人。在阳光下横跨峡谷的彩虹，据说是他们之间连接彼此的叹息。</p>',
        en: '<p>Long before geologists measured this place with their instruments, the original inhabitants of this land — the Guarani people — had already explained its fearsome power through myth. In the Guarani tongue, "I" means water and "Guazú" means great — hence Iguazu.</p><p><strong>Bond across the abyss:</strong> Legend tells of Naipi, a beautiful maiden chosen as a sacrifice to M\'Boi, the serpent-like forest god. To save his beloved, the young warrior Tarobá fled with Naipi downstream in a canoe. Enraged, the serpent god tore the earth apart; the riverbed collapsed in an instant, forming the bottomless chasm we call the Devil\'s Throat (Garganta do Diabo).</p><p>Naipi was turned into a rock at the cliff\'s edge, forever battered by the waterfall; Tarobá was transformed into a palm tree on the opposite bank, gazing at his beloved in eternal despair. The rainbow that arcs across the gorge in sunlight is said to be the sigh that still connects them.</p>',
        es: '<p>Mucho antes de que los geólogos midieran este lugar con sus instrumentos, los habitantes originales — el pueblo guaraní — ya habían explicado su poder temible a través del mito. En la lengua guaraní, "I" significa agua y "Guazú" significa grande: de ahí Iguazú.</p><p><strong>Vínculo sobre el abismo:</strong> Cuenta la leyenda que Naipi, una hermosa doncella, fue elegida como sacrificio para M\'Boi, el dios serpiente del bosque. Para salvar a su amada, el joven guerrero Tarobá huyó con Naipi río abajo en una canoa. Furioso, el dios serpiente desgarró la tierra; el lecho del río se desplomó en un instante, formando el abismo sin fondo que llamamos la Garganta del Diablo.</p><p>Naipi fue convertida en una roca al borde del acantilado, golpeada eternamente por la cascada; Tarobá fue transformado en una palmera en la orilla opuesta, contemplando a su amada en eterna desesperación. El arcoíris que cruza la garganta bajo el sol es, según dicen, el suspiro que aún los conecta.</p>',
        pt: '<p>Muito antes de os geólogos medirem este lugar com seus instrumentos, os habitantes originais — o povo guarani — já haviam explicado seu poder temível através do mito. Na língua guarani, "I" significa água e "Guazú" significa grande — daí Iguaçu.</p><p><strong>Laço sobre o abismo:</strong> Conta a lenda que Naipi, uma bela donzela, foi escolhida como sacrifício para M\'Boi, o deus-serpente da floresta. Para salvar sua amada, o jovem guerreiro Tarobá fugiu com Naipi rio abaixo em uma canoa. Furioso, o deus-serpente rasgou a terra; o leito do rio desabou em um instante, formando o abismo sem fundo que chamamos de Garganta do Diabo.</p><p>Naipi foi transformada em uma rocha na beira do penhasco, eternamente açoitada pela cachoeira; Tarobá foi transformado em uma palmeira na margem oposta, contemplando sua amada em eterno desespero. O arco-íris que cruza a garganta sob o sol é, dizem, o suspiro que ainda os conecta.</p>', ko: "<p>과라니 사람들은 오래전부터 전설을 통해 폭포의 위력을 설명했습니다. 과라니어에서 이과수는 ‘큰 물’을 뜻합니다.</p><p><strong>협곡을 사이에 둔 두 연인:</strong> 전설에 따르면 숲의 뱀신 음보이에게 바쳐질 나이피를 구하기 위해 타로바가 그녀와 함께 카누를 타고 달아났습니다. 분노한 뱀신이 땅을 갈라 악마의 목구멍이라 불리는 협곡을 만들었습니다.</p><p>나이피는 물줄기를 맞는 바위가 되고 타로바는 맞은편의 야자수가 되었다고 합니다. 햇빛을 받은 물보라의 무지개는 두 사람을 이어 주는 숨결로 전해집니다.</p>",
      } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (12).jpg',
    },
    {
      icon: '💧',
      title: { zh: '水文密码：气候变化的真实镜像', en: 'Hydrological Code: A Mirror of Climate Change', es: 'Código hidrológico: un espejo del cambio climático', pt: 'Código hidrológico: um espelho da mudança climática', ko: "수량 변화로 읽는 이과수의 기후" } satisfies T,
      body: {
        zh: '<p>伊瓜苏不仅是风景，更是南美洲内陆水文与全球气候系统的巨大"温度计"。</p><p><strong>极端的脉搏：</strong> 瀑布的常规流量约为 1,500 m³/s（每秒 150 万升）。然而，在厄尔尼诺现象（El Niño）活跃的年份，气候系统会发生剧烈波动。2014 年 6 月，暴雨导致伊瓜苏河水暴涨，洪峰流量达到了骇人听闻的 <strong>46,300 m³/s</strong> —— 是平时的 30 倍以上。怒吼的泥浆水完全吞噬了我们今天行走的观景栈道。</p><p>相反，在极端干旱的年份，瀑布也曾数次断流，露出 1.3 亿年前的完整岩床。这里的每一滴水，都在诉说着地球气候的脆弱平衡。</p>',
        en: '<p>Iguaçu is not just scenery — it is a giant "thermometer" for South America\'s inland hydrology and the global climate system.</p><p><strong>Extreme pulse:</strong> The falls\' regular flow hovers around 1,500 m³/s (1.5 million litres per second). But during active El Niño years, the climate system swings violently. In June 2014, torrential rains swelled the Iguaçu River to a staggering peak of <strong>46,300 m³/s</strong> — more than 30 times the normal rate. The roaring, mud-choked water completely swallowed the very catwalks we walk today.</p><p>Conversely, during extreme drought years, the falls have fallen silent several times, exposing the 130-million-year-old basalt bed in its entirety. Every drop of water here tells the story of our planet\'s fragile climatic equilibrium.</p>',
        es: '<p>Iguazú no es solo paisaje: es un "termómetro" gigante para la hidrología interior de Sudamérica y el sistema climático global.</p><p><strong>Pulso extremo:</strong> El caudal habitual ronda los 1.500 m³/s (1,5 millones de litros por segundo). Pero durante los años de El Niño activo, el sistema climático oscila violentamente. En junio de 2014, lluvias torrenciales elevaron el río Iguazú a un pico asombroso de <strong>46.300 m³/s</strong> — más de 30 veces lo normal. El agua rugiente y cargada de barro se tragó por completo las pasarelas que hoy caminamos.</p><p>Por el contrario, durante años de sequía extrema, las cataratas se han silenciado varias veces, dejando al descubierto el lecho de basalto de 130 millones de años en su totalidad. Cada gota de agua aquí cuenta la historia del frágil equilibrio climático de nuestro planeta.</p>',
        pt: '<p>Iguaçu não é apenas paisagem — é um "termômetro" gigante para a hidrologia interior da América do Sul e o sistema climático global.</p><p><strong>Pulso extremo:</strong> A vazão regular gira em torno de 1.500 m³/s (1,5 milhão de litros por segundo). Mas durante anos de El Niño ativo, o sistema climático oscila violentamente. Em junho de 2014, chuvas torrenciais elevaram o rio Iguaçu a um pico assombroso de <strong>46.300 m³/s</strong> — mais de 30 vezes o normal. A água barrenta e rugidora engoliu completamente as mesmas passarelas que caminhamos hoje.</p><p>Por outro lado, durante anos de seca extrema, as cataratas se silenciaram várias vezes, expondo o leito de basalto de 130 milhões de anos em sua totalidade. Cada gota d\'água aqui conta a história do frágil equilíbrio climático do nosso planeta.</p>', ko: "<p>폭포의 수량은 남아메리카 내륙의 강수량과 기후 변화를 보여 줍니다.</p><p><strong>극단적인 수량 변화:</strong> 평소 유량은 초당 약 1,500세제곱미터입니다. 2014년 6월에는 폭우로 최고 초당 46,300세제곱미터에 달해 전망 데크까지 물이 차올랐습니다.</p><p>반대로 가뭄이 심할 때는 물줄기가 줄어 오래된 현무암 하상이 드러나기도 합니다.</p>",
      } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (14).jpg',
    },
    {
      icon: '✈️',
      title: { zh: '从私人领地到人类遗产：航空之父的"骑士精神"', en: 'From Private Estate to Human Heritage: The Aviator\'s Chivalry', es: 'De finca privada a patrimonio humano: la caballerosidad del aviador', pt: 'De propriedade privada a patrimônio humano: a cavalheirismo do aviador', ko: "사유지에서 세계유산으로" } satisfies T,
      body: {
        zh: '<p>1541 年，西班牙探险家 Álvar Núñez Cabeza de Vaca 在丛林中迷路时听到雷鸣般的水声，成为了首位记录瀑布的欧洲人。但这并不是它近代史上最重要的一段往事。你可能不知道，这片属于全人类的世界自然遗产，在一百多年前，曾是私人的后花园。</p><p><strong>300 公里的骑行求救：</strong> 1916 年，巴西著名的"航空之父"、发明家 <strong>阿尔贝托·桑托斯-杜蒙特（Alberto Santos-Dumont）</strong> 参观了伊瓜苏。当这位见多识广的飞行先驱被大自然的鬼斧神工震撼时，却惊讶地得知这片土地竟然属于一位名叫 Jesus Val 的乌拉圭私人地主。</p><p>为了不让这片自然奇迹沦为私人牟利的工具，桑托斯-杜蒙特立刻行动。他骑着马穿越了近 300 公里的原始丛林，日夜兼程赶到巴拉那州首府库里蒂巴（Curitiba）。他用自己的声望极力游说州长："这样壮丽的自然奇观，必须属于公共财产，属于全人类！"</p><p>在他的极力推动下，仅仅几个月后，当地政府便下令将瀑布区域收归公有。这直接促成了 1939 年伊瓜苏国家公园的正式建立。今天，当您在步道终点附近看到那尊桑托斯-杜蒙特的青铜雕像时，请别忘了向这位为自然奔走的先驱致敬。</p>',
        en: '<p>In 1541, the Spanish explorer Álvar Núñez Cabeza de Vaca, lost in the jungle, heard a thunderous roar and became the first European to record the falls. But that is not the most important chapter in its modern history. You may not know that this UNESCO World Heritage site — the patrimony of all humanity — was, just over a century ago, a private backyard.</p><p><strong>The 300-kilometre ride:</strong> In 1916, Brazil\'s celebrated "Father of Aviation", the inventor <strong>Alberto Santos-Dumont</strong>, visited Iguaçu. The widely-travelled aviation pioneer was awestruck by nature\'s masterpiece — but was horrified to learn that this land belonged to a private Uruguayan landowner named Jesus Val.</p><p>Determined that this natural wonder should never become an instrument of private profit, Santos-Dumont sprang into action. He rode on horseback nearly 300 kilometres through pristine jungle, travelling day and night to reach Curitiba, the capital of Paraná state. There, wielding his immense prestige, he implored the governor: "A natural wonder of this magnitude must belong to the public domain — to all of humanity!"</p><p>Driven by his advocacy, within just a few months the state government expropriated the falls area. This directly led to the official establishment of Iguaçu National Park in 1939. Today, when you see the bronze statue of Santos-Dumont near the trail\'s endpoint, pause for a moment and pay tribute to the pioneer who rode 300 kilometres to save this wonder for the world.</p>',
        es: '<p>En 1541, el explorador español Álvar Núñez Cabeza de Vaca, perdido en la selva, escuchó un rugido atronador y se convirtió en el primer europeo en registrar las cataratas. Pero ese no es el capítulo más importante de su historia moderna. Quizás no sepas que este Patrimonio de la Humanidad fue, hace poco más de un siglo, un jardín privado.</p><p><strong>La cabalgata de 300 kilómetros:</strong> En 1916, el célebre "Padre de la Aviación" brasileña, el inventor <strong>Alberto Santos-Dumont</strong>, visitó Iguazú. El pionero, que tanto mundo había visto, quedó maravillado — y horrorizado al enterarse de que esta tierra pertenecía a un terrateniente uruguayo llamado Jesus Val.</p><p>Decidido a que esta maravilla jamás fuera instrumento de lucro privado, Santos-Dumont montó a caballo y recorrió casi 300 kilómetros de selva virgen, día y noche, hasta Curitiba. Allí, con todo su prestigio, suplicó al gobernador: "¡Una maravilla natural de esta magnitud debe ser del dominio público, de toda la humanidad!"</p><p>Gracias a su incansable defensa, en pocos meses el gobierno estatal expropió el área de las cataratas. Esto condujo directamente a la creación del Parque Nacional do Iguaçu en 1939. Hoy, cuando veas la estatua de bronce de Santos-Dumont cerca del final del sendero, detente un momento y rinde homenaje al pionero que cabalgó 300 kilómetros para salvar esta maravilla para el mundo.</p>',
        pt: '<p>Em 1541, o explorador espanhol Álvar Núñez Cabeza de Vaca, perdido na selva, ouviu um rugido atroador e tornou-se o primeiro europeu a registrar as cataratas. Mas esse não é o capítulo mais importante de sua história moderna. Talvez você não saiba que este Patrimônio Mundial da Humanidade foi, há pouco mais de um século, um quintal privado.</p><p><strong>A cavalgada de 300 quilômetros:</strong> Em 1916, o célebre "Pai da Aviação" brasileira, o inventor <strong>Alberto Santos-Dumont</strong>, visitou Iguaçu. O pioneiro, que já tinha visto o mundo, ficou maravilhado — e horrorizado ao descobrir que esta terra pertencia a um proprietário privado uruguaio chamado Jesus Val.</p><p>Decidido a que esta maravilha jamais fosse instrumento de lucro privado, Santos-Dumont montou a cavalo e percorreu quase 300 quilômetros de mata virgem, dia e noite, até Curitiba. Lá, com todo o seu prestígio, implorou ao governador: "Uma maravilha natural desta magnitude deve pertencer ao domínio público — a toda a humanidade!"</p><p>Impulsionada por sua defesa incansável, em poucos meses o governo estadual desapropriou a área das cataratas. Isso levou diretamente à criação do Parque Nacional do Iguaçu em 1939. Hoje, quando você vir a estátua de bronze de Santos-Dumont perto do final da trilha, faça uma pausa e preste homenagem ao pioneiro que cavalgou 300 quilômetros para salvar esta maravilha para o mundo.</p>', ko: "<p>1541년 스페인 탐험가 알바르 누녜스 카베사 데 바카가 유럽인으로서 처음 폭포를 기록했습니다. 오늘날 세계유산인 이곳은 한때 사유지였습니다.</p><p><strong>산투스두몽의 방문:</strong> 1916년 브라질의 항공 개척자 알베르투 산투스두몽은 폭포를 보고 나서 이 일대를 공공의 자연유산으로 보호해 달라고 파라나주에 요청했습니다.</p><p>이후 주 정부가 폭포 일대의 토지를 수용했고, 1939년 이과수 국립공원이 지정되었습니다. 산책로 끝 부근에는 그를 기리는 청동상이 있습니다.</p>",
      } satisfies T,
      img: '/gallery/trilha-das-cataratas-brasil (25).jpg',
    },
  ],
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: '视觉图集', en: 'Gallery', es: 'Galería', pt: 'Galeria', ko: '갤러리' } satisfies T,
  heading: { zh: '水、光、雾、彩虹', en: 'Water. Light. Mist. Rainbow.', es: 'Agua. Luz. Niebla. Arcoíris.', pt: 'Água. Luz. Névoa. Arco-íris.', ko: '물 · 빛 · 안개 · 무지개' } satisfies T,
  viewMorePhotos: { zh: '在 Google 地图上查看更多照片', en: 'View more photos on Google Maps', es: 'Ver más fotos en Google Maps', pt: 'Ver mais fotos no Google Maps', ko: 'Google 지도에서 더 많은 사진 보기' } satisfies T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: '游客评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações', ko: '방문 후기' } satisfies T,
  heading: { zh: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 19,611 位旅行者', en: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · from 19,611 travelers', es: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 19.611 viajeros', pt: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 19.611 viajantes', ko: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · 여행자 19,611명' } satisfies T,
  viewMoreReviews: { zh: '在 Google 地图上查看更多评价', en: 'View more reviews on Google Maps', es: 'Ver más reseñas en Google Maps', pt: 'Ver mais avaliações no Google Maps', ko: 'Google 지도에서 더 많은 후기 보기' } satisfies T,
  mapsLink: { zh: 'https://maps.app.goo.gl/jvfSBtLQsZZ4uiaE7', en: 'https://maps.app.goo.gl/jvfSBtLQsZZ4uiaE7', es: 'https://maps.app.goo.gl/jvfSBtLQsZZ4uiaE7', pt: 'https://maps.app.goo.gl/jvfSBtLQsZZ4uiaE7', ko: 'https://maps.app.goo.gl/jvfSBtLQsZZ4uiaE7' } satisfies T,
  items: [
    { stars: '★★★★★', date: '2025-05', title: { zh: '"大自然的终极震撼"', en: '"Nature at its most humbling"', es: '"La naturaleza en su forma más humilde"', pt: '"A natureza em sua forma mais humilde"', ko: "자연 앞에서 겸손해지는 순간" } satisfies T, desc: { zh: '相比阿根廷侧，巴西这边的步道能让你看清伊瓜苏的全貌。走到魔鬼之喉栈道的时候，那种水汽和轰鸣声让人终生难忘。记得带雨衣！', en: 'Compared to the Argentine side, the Brazilian trail shows you the whole picture. The Devil\'s Throat catwalk — the mist and roar — is unforgettable. Bring a poncho!', es: 'Comparado con Argentina, el lado brasileño te muestra todo. La pasarela de la Garganta del Diablo, con la niebla y el rugido, es inolvidable. ¡Lleva poncho!', pt: 'Comparado ao lado argentino, o lado brasileiro mostra o todo. A passarela da Garganta do Diabo, com névoa e estrondo, é inesquecível. Leve capa!', ko: "아르헨티나 쪽과 비교해 브라질 산책로에서는 폭포 전체를 볼 수 있습니다. 악마의 목구멍 데크에서 느낀 물보라와 굉음은 잊을 수 없어요. 우비를 가져가세요." } satisfies T, author: 'Maria S. · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: '"组织有序，设施完善"', en: '"Perfectly organized park"', es: '"Perfectamente organizado"', pt: '"Perfeitamente organizado"', ko: "잘 정비된 공원" } satisfies T, desc: { zh: '公园巴士系统高效无比，步道维护得非常好——我 70 岁的父亲都能轻松走完。全景电梯的景致无法用言语形容。', en: 'The park\'s shuttle bus system is incredibly efficient, and the trail itself is beautifully maintained — even my 70-year-old father made it through easily. The panoramic elevator at the end offers a view that words simply can\'t do justice to.', es: 'El sistema de autobuses del parque es increíblemente eficiente, y el sendero está magníficamente mantenido — incluso mi padre de 70 años lo hizo fácilmente. El ascensor panorámico al final ofrece una vista que las palabras no pueden describir.', pt: 'O sistema de ônibus é incrivelmente eficiente, e a trilha é lindamente mantida — até meu pai de 70 anos a fez facilmente. O elevador panorâmico oferece uma vista que as palavras não descrevem.', ko: "공원 셔틀이 효율적이고 산책로가 잘 정비되어 있어 일흔 살 아버지도 무리 없이 걸었습니다. 마지막 전망 엘리베이터에서 보는 풍경은 말로 다 표현하기 어렵습니다." } satisfies T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: '"彩虹很美，浣熊调皮"', en: '"Beautiful rainbows, cheeky coatis"', es: '"Arcoíris hermosos, coatíes traviesos"', pt: '"Arco-íris lindos, quatis levados"', ko: "아름다운 무지개와 장난스러운 코아티" } satisfies T, desc: { zh: '风景绝对是满分，水汽形成的彩虹太美了。扣掉一星是因为有游客不遵守规定喂浣熊，导致动物有点攻击性。大家一定要保护好自己的零食！', en: 'Scenery is a perfect 10, the mist-rainbows are stunning. Lost a star because some tourists fed the coatis, making them a bit aggressive. Guard your snacks!', es: 'Paisaje 10/10, arcoíris increíbles. Le quito una estrella porque algunos turistas alimentan a los coatíes y se ponen agresivos. ¡Cuida tus snacks!', pt: 'Paisagem 10/10, arco-íris incríveis. Tiro uma estrela porque alguns turistas alimentam os quatis, que ficam agressivos. Cuide dos seus lanches!', ko: "물안개 속 무지개가 아름다웠습니다. 일부 관광객이 먹이를 줘서 코아티가 공격적으로 다가오는 점은 아쉬웠어요. 간식은 잘 챙겨 두세요." } satisfies T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: '"改变人生的体验"', en: '"A life-changing experience"', es: '"Una experiencia que cambia la vida"', pt: '"Uma experiência que muda a vida"', ko: "인생을 바꾼 경험" } satisfies T, desc: { zh: '我已经看过阿根廷侧，但巴西侧的全景视角完全是另一个维度。魔鬼之喉上的双彩虹让我感动落泪。100% 推荐两侧都去。', en: 'I had already visited the Argentine side, but the panorama from Brazil offers an entirely different perspective. The double rainbow over Devil’s Throat brought me to tears. I recommend visiting both sides.', es: 'Ya había visto el lado argentino, pero la vista panorámica desde Brasil es simplemente otra dimensión. El arco iris doble sobre la Garganta del Diablo me hizo llorar. 100% recomendado hacer ambos lados.', pt: 'Já tinha visto o lado argentino, mas a vista panorâmica do Brasil é outra dimensão. O arco-íris duplo sobre a Garganta do Diabo me fez chorar. 100% recomendado.', ko: "아르헨티나 쪽을 먼저 봤지만 브라질 쪽의 전경은 전혀 다른 경험이었습니다. 악마의 목구멍 위에 뜬 쌍무지개를 보고 눈물이 났어요. 두 쪽 모두 추천합니다." } satisfies T, author: 'Sofía R. · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: '"门票每一分钱都值得"', en: '"Worth every cent of admission"', es: '"Vale cada centavo de entrada"', pt: '"Vale cada centavo do ingresso"', ko: "입장료가 아깝지 않아요" } satisfies T, desc: { zh: '我是巴西人，已经去了三次。每次都有全新的感受——雨季水量惊人，旱季则能更清晰地看清岩层。步道无可挑剔。', en: 'I’m Brazilian and have visited three times. Each visit feels different: the water volume is astonishing in the rainy season, while the rock formations are clearer in the dry season. The trail is immaculate.', es: 'Soy brasileño y ya la visité tres veces. Cada visita es una emoción nueva — en época de lluvias el volumen de agua es aterrador, en seca se ven mejor las formaciones rocosas. La trilha es impecable.', pt: 'Sou brasileiro e já visitei três vezes. Cada visita é uma emoção nova — na estação chuvosa o volume de água é assustador, na seca dá pra ver as formações rochosas com mais clareza. A trilha é impecável.', ko: "브라질 사람으로서 세 번 방문했습니다. 우기에는 수량이 압도적이고 건기에는 암석 지형이 잘 보입니다. 산책로도 잘 관리되어 있습니다." } satisfies T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★★', date: '2024-11', title: { zh: '"蜜月最美好的一天"', en: '"Best day of our honeymoon"', es: '"El mejor día de nuestra luna de miel"', pt: '"O melhor dia da nossa lua de mel"', ko: "신혼여행 최고의 하루" } satisfies T, desc: { zh: '我们预约了早上 9 点入场以避开人潮，这是最明智的决定。悠闲地走完步道，看到了巨嘴鸟和浣熊，最后在 Porto Canoas 俯瞰河流享用午餐。绝对是神奇的蜜月回忆。', en: 'We booked the 9AM entry to avoid crowds and it was the best decision. Walked the trail slowly, saw toucans, coatis, and finished with lunch at Porto Canoas overlooking the river. Absolutely magical honeymoon memory.', es: 'Reservamos la entrada de las 9AM para evitar multitudes y fue la mejor decisión. Caminamos despacio, vimos tucanes, coatíes y terminamos con almuerzo en Porto Canoas. Recuerdo de luna de miel absolutamente mágico.', pt: 'Reservamos a entrada das 9h para evitar multidões e foi a melhor decisão. Caminhamos devagar, vimos tucanos, quatis e terminamos com almoço no Porto Canoas. Memória de lua de mel absolutamente mágica.', ko: "사람이 몰리기 전에 아홉 시에 입장했습니다. 천천히 걸으며 큰부리새와 코아티를 보고 포르투 카노아스에서 강을 바라보며 점심을 먹었습니다." } satisfies T, author: 'Emily & Tom H. · 🇬🇧' },
    { stars: '★★★★★', date: '2025-01', title: { zh: '"雨季的水量令人震撼"', en: '"Staggering wet-season volume"', es: '"Volumen de agua impresionante"', pt: '"Volume de água impressionante"', ko: "우기의 압도적인 수량" } satisfies T, desc: { zh: '一月份雨季水量超级大。观景台雨伞完全没用，雨衣是必须的。相机请放入防水袋。但彩虹出现率极高，强力推荐。', en: 'January is the rainy season and water volume was staggering. Umbrellas are useless at the viewpoint — raincoat mandatory. Put cameras in waterproof bags. But rainbow probability is overwhelmingly high — highly recommended.', es: 'Enero es temporada de lluvias y el volumen de agua fue alucinante. Paraguas inútil en el mirador — impermeable obligatorio. Cámara en bolsa estanca. Pero probabilidad de arcoíris es altísima.', pt: 'Janeiro é estação chuvosa e o volume de água estava absurdo. Guarda-chuva não serve no mirante — capa de chuva obrigatória. Câmera em bolsa à prova d\'água. Mas probabilidade de arco-íris é altíssima.', ko: "1월에 갔더니 수량이 대단했습니다. 전망대에서는 우산보다 우비가 편했고 카메라에는 방수 가방이 필요했습니다. 무지개도 인상적이었어요." } satisfies T, author: 'Kenji T. · 🇯🇵' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-12', title: { zh: '"壮观但人流较大"', en: '"Spectacular but crowded"', es: '"Espectacular pero lleno"', pt: '"Espetacular mas lotado"', ko: "장관이지만 붐벼요" } satisfies T, desc: { zh: '景色没得说，绝对是世界级的震撼。唯一的问题是下午两点后人非常多，观景台栈道要排队走，拍照很难避开人群。强烈建议 9 点开门就进园。', en: 'Scenery is world-class. Only issue: after 2 PM it\'s packed, you queue on the catwalks and photos are crowded. Strongly recommend arriving at 9 AM opening.', es: 'Paisaje de nivel mundial. Único problema: después de las 14 h está llenísimo. Recomiendo llegar a las 9 h.', pt: 'Paisagem de nível mundial. Único problema: depois das 14 h fica muito cheio. Recomendo chegar às 9 h.', ko: "풍경은 훌륭했지만 오후 두 시 이후에는 데크에 줄이 생겨 사진 찍기가 어려웠습니다. 이른 입장을 추천합니다." } satisfies T, author: 'Wang H. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-05', title: { zh: '"工程奇迹与纯粹自然的完美结合"', en: '"Sensational engineering meets pure nature"', es: '"Ingeniería sensacional y naturaleza pura"', pt: '"Engenharia sensacional encontra natureza pura"', ko: "자연과 공학이 만나는 곳" } satisfies T, desc: { zh: '这里的无障碍设施是世界级的——我母亲坐轮椅，几乎体验了整条步道，包括魔鬼之喉栈道。通往 Porto Canoas 的电梯让一切无缝衔接。太棒了，巴西。', en: 'Wheelchair accessibility here is world-class — my mother uses a wheelchair and she was able to experience nearly the entire trail including the Devil\'s Throat walkway. The elevator to Porto Canoas made everything seamless. Bravo, Brazil.', es: 'La accesibilidad en silla de ruedas aquí es de clase mundial — mi madre pudo experimentar casi todo el sendero. El ascensor a Porto Canoas hizo todo perfecto. Bravo, Brasil.', pt: 'A acessibilidade aqui é de classe mundial — minha mãe, cadeirante, pôde experimentar quase toda a trilha. O elevador para Porto Canoas fez tudo perfeito. Bravo, Brasil.', ko: "휠체어를 사용하는 어머니와 방문했습니다. 포르투 카노아스의 엘리베이터 덕분에 악마의 목구멍 전망 데크를 둘러볼 수 있었습니다." } satisfies T, author: 'Anna K. · 🇩🇪' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: '周边联动', en: 'Nearby', es: 'Alrededores', pt: 'Arredores', ko: '주변 명소' } satisfies T,
  heading: { zh: '还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>', en: 'Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>', es: 'Extiende tu viaje<em class="text-[color:var(--color-emerald)]"> aún más</em>', pt: 'Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>', ko: '함께 둘러보기<em class="text-[color:var(--color-emerald)]"> 더 멀리</em>' } satisfies T,
  items: [
    { img: '/gallery/trilha-das-cataratas-brasil (17).jpg', title: '🦜 Parque das Aves', desc: { zh: '距国家公园入口仅 300 米。南美最大的鸟类保护区，1,300+ 只热带鸟类，可零距离接触巨嘴鸟与金刚鹦鹉。', en: '300 m from the park entrance. South America\'s largest bird sanctuary; 1,300+ tropical birds you can meet up-close.', es: 'A 300 m del parque. El santuario de aves más grande de Sudamérica; 1.300+ aves tropicales.', pt: 'A 300 m do parque. O maior santuário de aves da América do Sul; 1.300+ aves tropicais.', ko: '국립공원 입구에서 300m. 남아메리카 최대 조류 보호구역으로 1,300마리 이상의 열대 조류를 가까이서 만날 수 있습니다.' } satisfies T },
    { img: '/gallery/trilha-das-cataratas-brasil (21).jpg', title: '🚤 Macuco Safari', desc: { zh: '园内探险项目。敞篷吉普穿越雨林，快艇逆流冲入瀑布下方，体验瀑布威力最刺激的方式。', en: 'Inside the park. Open jeeps through the jungle, then speedboats charge upstream directly under the falls.', es: 'Dentro del parque. Jeeps abiertos por la selva, luego lanchas hasta debajo de las cascadas.', pt: 'Dentro do parque. Jipes abertos pela mata e lanchas até debaixo das quedas.', ko: '공원 내 탐험 프로그램. 오픈 지프로 정글을 지나 급류 보트가 폭포 아래로 거슬러 올라갑니다.' } satisfies T },
    { img: '/gallery/trilha-das-cataratas-brasil (19).jpg', title: '⚡ Itaipu Binacional', desc: { zh: '世界上发电量最大的水电站之一。宏伟混凝土大坝是现代工程奇迹，提供常规观光与深入机房专业路线。', en: 'One of the world\'s largest hydroelectric plants. A modern engineering wonder with both standard tours and deep technical routes.', es: 'Una de las mayores hidroeléctricas del mundo. Ofrece visitas turísticas y rutas técnicas profundas.', pt: 'Uma das maiores hidrelétricas do mundo. Visitas turísticas e rotas técnicas profundas.', ko: '세계 최대 규모의 수력 발전소 중 하나. 웅장한 콘크리트 댐은 현대 공학의 경이로, 일반 투어와 심층 기술 코스 모두 제공합니다.' } satisfies T },
  ],
};

// ── Ecology (大西洋雨林的脉搏：生态与物种名录) ──
export const ecology = {
  sectionNum: { zh: '生态名录', en: 'Ecology', es: 'Ecología', pt: 'Ecologia', ko: "생태" } satisfies T,
  heading: { zh: '大西洋雨林的<em class="text-[color:var(--color-emerald)]">脉搏</em>', en: 'The Pulse of the<em class="text-[color:var(--color-emerald)]"> Atlantic Rainforest</em>', es: 'El pulso de la<em class="text-[color:var(--color-emerald)]"> Selva Atlántica</em>', pt: 'O pulso da<em class="text-[color:var(--color-emerald)]"> Mata Atlântica</em>', ko: "<em class=\"text-[color:var(--color-emerald)]\">대서양림</em>의 생명력" } satisfies T,
  intro: {
    zh: '伊瓜苏不仅是水的奇迹，更是生命的诺亚方舟。环绕大瀑布的大西洋雨林（Mata Atlântica）是全球生物多样性最丰富的热带雨林之一。由于数百年的过度开发，这片原本广袤的雨林如今已支离破碎，伊瓜苏国家公园不仅是其在巴西内陆最大的残存地，更是无数珍稀动植物的最后庇护所。在这里，您的每一次凝视，都可能是与这些地球古老居民的珍贵相遇。',
    en: 'Iguaçu is not just a miracle of water — it is a Noah\'s Ark for life itself. The Atlantic Rainforest (Mata Atlântica) that envelops the falls is one of the most biodiverse tropical forests on Earth. Centuries of exploitation have left this once-vast biome fragmented; Iguaçu National Park is not only its largest inland remnant in Brazil, but also the final refuge for countless rare species. Every glance you cast here may be a precious encounter with one of the planet\'s most ancient inhabitants.',
    es: 'Iguazú no es solo un milagro del agua — es un Arca de Noé para la vida. La Selva Atlántica (Mata Atlântica) que envuelve las cataratas es uno de los bosques tropicales con mayor biodiversidad del planeta. Siglos de explotación han dejado este bioma antaño vasto fragmentado; el Parque Nacional do Iguaçu no solo es su mayor remanente interior en Brasil, sino también el refugio final de innumerables especies raras. Cada mirada que usted dirija aquí puede ser un encuentro precioso con uno de los habitantes más antiguos de la Tierra.',
    pt: 'Iguaçu não é apenas um milagre da água — é uma Arca de Noé para a própria vida. A Mata Atlântica que envolve as cataratas é uma das florestas tropicais mais biodiversas do planeta. Séculos de exploração deixaram este bioma outrora vasto fragmentado; o Parque Nacional do Iguaçu não é apenas seu maior remanescente interior no Brasil, mas também o refúgio final de inúmeras espécies raras. Cada olhar que você lançar aqui pode ser um encontro precioso com um dos habitantes mais antigos da Terra.', ko: "폭포를 둘러싼 대서양림은 생물 다양성이 풍부한 열대림입니다. 오랜 개발로 숲이 여러 조각으로 나뉜 가운데 이과수 국립공원은 브라질 내륙에 남은 숲과 희귀 생물의 서식지를 보호합니다.",
  } satisfies T,
  // IUCN badge labels
  iucnVU: { zh: '易危 VU', en: 'Vulnerable VU', es: 'Vulnerable VU', pt: 'Vulnerável VU', ko: "취약 등급 VU" } satisfies T,
  iucnNT: { zh: '近危 NT', en: 'Near Threatened NT', es: 'Casi Amenazado NT', pt: 'Quase Ameaçado NT', ko: "준위협 등급 NT" } satisfies T,
  iucnLC: { zh: '无危 LC', en: 'Least Concern LC', es: 'Preocupación Menor LC', pt: 'Pouco Preocupante LC', ko: "관심대상 등급 LC" } satisfies T,
  iucnEN: { zh: '极危 EN', en: 'Endangered EN', es: 'En Peligro EN', pt: 'Em Perigo EN', ko: "위기 등급 EN" } satisfies T,
  // Section labels
  secUmbrella: { zh: '旗舰与伞护物种', en: 'Flagship & Umbrella Species', es: 'Especies Bandera y Paraguas', pt: 'Espécies Bandeira e Guarda-chuva', ko: "대표종과 우산종" } satisfies T,
  secCommensal: { zh: '常见共生物种', en: 'Commensal & Observable Species', es: 'Especies Comensales y Observables', pt: 'Espécies Comensais e Observáveis', ko: "관찰할 수 있는 동물" } satisfies T,
  secFlora: { zh: '珍稀植物群', en: 'Endemic Flora', es: 'Flora Endémica', pt: 'Flora Endêmica', ko: "지역의 식물" } satisfies T,
  // Species
  species: [
    {
      name: { zh: '美洲豹', en: 'Jaguar', es: 'Jaguar', pt: 'Onça-pintada', ko: "재규어" } satisfies T,
      latin: 'Panthera onca',
      niche: { zh: '顶级掠食者', en: 'Apex predator', es: 'Depredador ápice', pt: 'Predador de topo', ko: "최상위 포식자" } satisfies T,
      desc: {
        zh: '作为大西洋雨林的"伞护种"，美洲豹的繁衍状况直接反映了整个生态系统的健康程度。公园内目前正开展严格的"伊瓜苏美洲豹项目"（Projeto Onças do Iguaçu）。虽然在常规步道上很难见到它们，但它们正隐秘地巡视着这片领地。',
        en: 'As an "umbrella species" of the Atlantic Rainforest, the jaguar\'s reproductive health directly reflects the health of the entire ecosystem. The park currently runs the rigorous "Iguaçu Jaguar Project" (Projeto Onças do Iguaçu). Though rarely seen on the main trail, they silently patrol this territory.',
        es: 'Como "especie paraguas" de la Selva Atlántica, la salud reproductiva del jaguar refleja directamente la salud de todo el ecosistema. El parque ejecuta el riguroso "Proyecto Jaguar de Iguazú" (Projeto Onças do Iguaçu). Aunque rara vez se ven en el sendero principal, patrullan silenciosamente este territorio.',
        pt: 'Como "espécie guarda-chuva" da Mata Atlântica, a saúde reprodutiva da onça-pintada reflete diretamente a saúde de todo o ecossistema. O parque executa o rigoroso "Projeto Onças do Iguaçu". Embora raramente vistas na trilha principal, elas patrulham silenciosamente este território.', ko: "재규어가 안정적으로 번식하는지는 대서양림 생태계의 건강을 판단하는 단서입니다. 공원은 이과수 재규어 보호 사업을 운영합니다. 주요 산책로에서 직접 보기는 어렵습니다.",
      } satisfies T,
      iucn: 'NT',
      icon: '🐆',
    },
    {
      name: { zh: '南美貘', en: 'South American Tapir', es: 'Tapir Sudamericano', pt: 'Anta', ko: "남아메리카테이퍼" } satisfies T,
      latin: 'Tapirus terrestris',
      niche: { zh: '森林园丁（大型食草动物）', en: 'Forest gardener (large herbivore)', es: 'Jardinero del bosque (gran herbívoro)', pt: 'Jardineiro da floresta (grande herbívoro)', ko: "숲의 정원사인 대형 초식동물" } satisfies T,
      desc: {
        zh: '南美洲现存最大的陆生哺乳动物。它们每天在雨林中穿行觅食，排泄出的未消化种子成为了森林再生的关键，是维持雨林植物多样性的重要推手。',
        en: 'The largest extant land mammal in South America. As they roam the forest daily in search of food, the undigested seeds they excrete become the key to forest regeneration — making them vital drivers of rainforest plant diversity.',
        es: 'El mamífero terrestre más grande de Sudamérica. Mientras recorren el bosque a diario en busca de alimento, las semillas no digeridas que excretan se convierten en la clave de la regeneración del bosque, impulsando la diversidad vegetal de la selva.',
        pt: 'O maior mamífero terrestre existente na América do Sul. Enquanto percorrem a mata diariamente em busca de alimento, as sementes não digeridas que excretam tornam-se a chave para a regeneração da floresta, impulsionando a diversidade vegetal da mata.', ko: "남아메리카에서 현존하는 가장 큰 육상 포유류입니다. 먹이를 찾아 숲을 돌아다니며 배설물로 씨앗을 퍼뜨려 숲이 다시 자라도록 돕습니다.",
      } satisfies T,
      iucn: 'VU',
      icon: '🐾',
    },
    {
      name: { zh: '南美浣熊', en: 'South American Coati', es: 'Coatí Sudamericano', pt: 'Quati', ko: "남아메리카코아티" } satisfies T,
      latin: 'Nasua nasua',
      niche: { zh: '杂食性机会主义者', en: 'Omnivorous opportunist', es: 'Oportunista omnívoro', pt: 'Oportunista onívoro', ko: "먹이를 가리지 않는 잡식동물" } satisfies T,
      desc: {
        zh: '<strong>⚠ 特别警告：</strong>这是步道上最常见的动物，但请绝对不要喂食。人类食品中的糖分和盐分会导致它们患上糖尿病和高血压。喂食行为还会改变它们的觅食天性，导致它们过度聚集并产生攻击性。爱它，请保持距离。',
        en: '<strong>⚠ Important Warning:</strong> The most commonly seen animal on the trail — but please, never feed them. The sugar and salt in human food cause diabetes and hypertension in coatis. Feeding also alters their natural foraging behaviour, leading to overcrowding and aggression. If you love them, keep your distance.',
        es: '<strong>⚠ Advertencia importante:</strong> El animal más visto en el sendero — pero por favor, nunca los alimente. El azúcar y la sal de la comida humana les causan diabetes e hipertensión. Alimentarlos también altera su comportamiento natural de forrajeo, provocando hacinamiento y agresividad. Si los ama, mantenga la distancia.',
        pt: '<strong>⚠ Aviso importante:</strong> O animal mais visto na trilha — mas por favor, nunca os alimente. O açúcar e o sal da comida humana causam diabetes e hipertensão nos quatis. Alimentá-los também altera seu comportamento natural de forrageamento, provocando aglomeração e agressividade. Se você os ama, mantenha distância.', ko: "<strong>⚠ 먹이를 주지 마세요.</strong> 산책로에서 자주 마주치는 동물입니다. 사람의 음식은 건강을 해치고, 먹이를 주면 자연스러운 먹이 활동이 달라져 사람이 있는 곳에 모이거나 공격적으로 행동할 수 있습니다.",
      } satisfies T,
      iucn: 'LC',
      icon: '🦝',
    },
    {
      name: { zh: '托哥巨嘴鸟', en: 'Toco Toucan', es: 'Tucán Toco', pt: 'Tucano-toco', ko: "토코큰부리새" } satisfies T,
      latin: 'Ramphastos toco',
      niche: { zh: '种子传播者', en: 'Seed disperser', es: 'Dispersor de semillas', pt: 'Dispersor de sementes', ko: "씨앗을 퍼뜨리는 새" } satisfies T,
      desc: {
        zh: '拥有不成比例的巨大且色彩斑斓的喙。这不仅是求偶的标志，更是极其高效的散热器官。它们是雨林中多种大型坚果的唯一吞咽与传播者。',
        en: 'Possessing a disproportionately large and brilliantly coloured beak — not merely a courtship display, but also a highly efficient thermal radiator. They are the sole swallowers and dispersers of many large rainforest nuts.',
        es: 'Posee un pico desproporcionadamente grande y de colores brillantes — no solo es una exhibición de cortejo, sino también un radiador térmico altamente eficiente. Son los únicos tragadores y dispersores de muchas nueces grandes de la selva.',
        pt: 'Possui um bico desproporcionalmente grande e colorido — não apenas uma exibição de corte, mas também um radiador térmico altamente eficiente. São os únicos engolidores e dispersores de muitas castanhas grandes da mata.', ko: "크고 선명한 부리는 짝을 찾을 때뿐 아니라 체온을 조절하는 데도 쓰입니다. 열매를 삼키고 이동하면서 숲에 씨앗을 퍼뜨립니다.",
      } satisfies T,
      iucn: 'LC',
      icon: '🦜',
    },
    {
      name: { zh: '伊瓜苏蓝闪蝶', en: 'Iguaçu Blue Morpho', es: 'Morfo Azul de Iguazú', pt: 'Borboleta Morpho Azul', ko: "이과수 푸른모르포나비" } satisfies T,
      latin: 'Morpho menelaus',
      niche: { zh: '授粉者', en: 'Pollinator', es: 'Polinizador', pt: 'Polinizador', ko: "꽃가루 매개자" } satisfies T,
      desc: {
        zh: '步道水雾中常能见到它们闪烁着金属蓝光的身影。其美丽的蓝色并非色素，而是翅膀鳞片上微观结构对光线的折射（物理结构色）。',
        en: 'Often glimpsed shimmering with metallic blue through the trail mist. That mesmerising blue is not a pigment but the result of microscopic structures on their wing scales refracting light — a phenomenon known as structural colouration.',
        es: 'A menudo se vislumbran brillando con azul metálico entre la niebla del sendero. Ese azul hipnótico no es un pigmento, sino el resultado de estructuras microscópicas en las escamas de sus alas que refractan la luz — coloración estructural.',
        pt: 'Frequentemente avistadas brilhando com azul metálico através da névoa da trilha. Aquele azul hipnotizante não é um pigmento, mas o resultado de estruturas microscópicas nas escamas de suas asas que refratam a luz — coloração estrutural.', ko: "물안개 속에서 금속처럼 반짝이는 푸른빛이 보이기도 합니다. 이 색은 색소가 아니라 날개 비늘의 미세한 구조가 빛을 반사하는 구조색입니다.",
      } satisfies T,
      iucn: 'LC',
      icon: '🦋',
    },
    {
      name: { zh: '玫瑰树', en: 'Peroba-rosa', es: 'Peroba-rosa', pt: 'Peroba-rosa', ko: "페로바호자" } satisfies T,
      latin: 'Aspidosperma polyneuron',
      niche: { zh: '树冠层巨木', en: 'Canopy giant', es: 'Gigante del dosel', pt: 'Gigante do dossel', ko: "숲의 상층을 이루는 큰 나무" } satisfies T,
      desc: {
        zh: '大西洋雨林的标志性树种，可高达 40 米。因木材坚硬且呈玫瑰色，曾遭毁灭性砍伐。如今在伊瓜苏公园内，这些参天古木被作为自然遗产受到最高等级的保护。',
        en: 'An iconic tree of the Atlantic Rainforest, reaching heights of up to 40 metres. Its hard, rose-hued timber once made it a target of devastating logging. Today, within Iguaçu National Park, these towering ancient trees receive the highest level of protection as natural heritage.',
        es: 'Un árbol emblemático de la Selva Atlántica, que alcanza hasta 40 metros de altura. Su madera dura y de tono rosado lo convirtió en blanco de una tala devastadora. Hoy, dentro del Parque Nacional do Iguaçu, estos árboles antiguos e imponentes reciben el más alto nivel de protección como patrimonio natural.',
        pt: 'Uma árvore emblemática da Mata Atlântica, alcançando até 40 metros de altura. Sua madeira dura e de tom rosado a tornou alvo de desmatamento devastador. Hoje, dentro do Parque Nacional do Iguaçu, essas árvores antigas e imponentes recebem o mais alto nível de proteção como patrimônio natural.', ko: "대서양림의 대표 수종으로 높이가 40미터에 이를 수 있습니다. 단단한 분홍빛 목재 때문에 벌목이 집중되었지만 이과수 국립공원에서는 자연유산으로 보호합니다.",
      } satisfies T,
      iucn: 'EN',
      icon: '🌿',
    },
  ],
};

// ── FAQ (官方访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: '官方访客指南', en: 'Official Visitor Guide', es: 'Guía Oficial del Visitante', pt: 'Guia Oficial do Visitante', ko: '공식 방문 가이드' } satisfies T,
  heading: { zh: '访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>', en: 'Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>', es: 'Guía del visitante &<em class="text-[color:var(--color-emerald)]"> preguntas frecuentes</em>', pt: 'Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>', ko: '방문 가이드 및<em class="text-[color:var(--color-emerald)]"> 자주 묻는 질문</em>' } satisfies T,
  disclaimer: {
    zh: '以下信息由 cataratasbrasil 非盈利科普团队根据公开资料整理，仅供访客参考。出行前请通过伊瓜苏国家公园官方网站核实最新政策。',
    en: 'The following information has been compiled by the cataratasbrasil non-profit educational team from publicly available sources and is provided for visitor reference only. Please verify the latest policies on the official Iguaçu National Park website before your visit.',
    es: 'La siguiente información ha sido recopilada por el equipo educativo sin fines de lucro de cataratasbrasil a partir de fuentes públicas y se proporciona solo como referencia. Por favor, verifique las políticas más recientes en el sitio web oficial del Parque Nacional do Iguaçu antes de su visita.',
    pt: 'As informações a seguir foram compiladas pela equipe educacional sem fins lucrativos do cataratasbrasil a partir de fontes públicas e são fornecidas apenas para referência. Por favor, verifique as políticas mais recentes no site oficial do Parque Nacional do Iguaçu antes de sua visita.',
    ko: '다음 정보는 cataratasbrasil 비영리 교육 팀이 공개 자료를 바탕으로 정리한 것으로, 방문 참고용입니다. 방문 전 이구아수 국립공원 공식 웹사이트에서 최신 정책을 반드시 확인하세요.',
  } satisfies T,
  items: [
    {
      q: { zh: '园区无障碍设施与步道难度说明', en: 'Accessibility & Trail Difficulty', es: 'Accesibilidad y dificultad del sendero', pt: 'Acessibilidade e dificuldade da trilha', ko: '무장애 관람과 산책로 난이도' } satisfies T,
      a: {
        zh: visitGuides.zh.alternative,
        en: visitGuides.en.alternative,
        es: visitGuides.es.alternative,
        pt: visitGuides.pt.alternative,
        ko: visitGuides.ko.alternative,
      },
    },
    {
      q: { zh: '地貌视角差异：巴西侧与阿根廷侧有何不同？', en: 'Geomorphological Perspective: Brazil Side vs Argentina Side', es: 'Perspectiva geomorfológica: lado brasileño vs lado argentino', pt: 'Perspectiva geomorfológica: lado brasileiro vs lado argentino', ko: '지형 관점 차이: 브라질 측과 아르헨티나 측' } satisfies T,
      a: {
        zh: '两国境内的观测视角受断层地貌影响而截然不同。巴西侧拥有峡谷的完整"全景视角"，更适合宏观感受瀑布群的广度及地质构造；阿根廷侧步道则深入瀑布内部，提供沉浸式的微观体验。我们强烈建议自然观察者预留两天时间，从多维度完整认识这一世界自然遗产。',
        en: 'The observation perspectives in the two countries differ fundamentally due to fault geomorphology. The Brazilian side offers a complete "panoramic view" of the canyon, better suited for grasping the breadth of the falls system and its geological structure at a macro scale. The Argentine trails penetrate deep into the falls, providing an immersive micro-experience. We strongly recommend that nature observers reserve two days to fully appreciate this World Heritage site from multiple dimensions.',
        es: 'Las perspectivas de observación en ambos países difieren fundamentalmente debido a la geomorfología de falla. El lado brasileño ofrece una "vista panorámica" completa del cañón, más adecuada para comprender la amplitud del sistema de cataratas y su estructura geológica a escala macro. Los senderos argentinos penetran profundamente en las cataratas, proporcionando una microexperiencia inmersiva. Recomendamos encarecidamente a los observadores de la naturaleza reservar dos días para apreciar plenamente este Patrimonio Mundial.',
        pt: 'As perspectivas de observação nos dois países diferem fundamentalmente devido à geomorfologia de falha. O lado brasileiro oferece uma "visão panorâmica" completa do cânion, mais adequada para compreender a amplitude do sistema de cataratas e sua estrutura geológica em escala macro. As trilhas argentinas penetram profundamente nas cataratas, proporcionando uma microexperiência imersiva. Recomendamos fortemente que observadores da natureza reservem dois dias para apreciar plenamente este Patrimônio Mundial.',
        ko: '두 나라의 관측 시점은 단층 지형의 영향으로 완전히 다릅니다. 브라질 측은 협곡의 완전한 "파노라마 전망"을 제공해 폭포 시스템 전체와 지질 구조를 거시적으로 느끼기에 적합합니다. 아르헨티나 측 산책로는 폭포 내부 깊숙이 들어가 몰입형 미시 경험을 제공합니다. 자연 관찰자라면 이 세계 자연유산을 다각도로 온전히 이해하기 위해 이틀을 잡을 것을 강력히 권장합니다.',
      } satisfies T,
    },
    {
      q: { zh: '水文与光影观测指南：何时是最佳到访时间？', en: 'Hydrology & Light Observation Guide: When Is the Best Time to Visit?', es: 'Guía de hidrología y luz: ¿cuál es el mejor momento para visitar?', pt: 'Guia de hidrologia e luz: qual é o melhor horário para visitar?', ko: '수문학과 빛 관측 가이드: 언제 방문하는 것이 가장 좋나요?' } satisfies T,
      a: {
        zh: '<strong>光影观测：</strong>下午 14:00–16:00 期间，太阳光线从巴西侧照射瀑布，折射水雾产生彩虹的概率最高。<br/><br/><strong>避开人流：</strong>为获得最佳的自然观察体验，建议在早晨 09:00 开园时即刻入园，此时野生动物活动最为频繁，且能享受静谧的峡谷轰鸣。',
        en: '<strong>Light observation:</strong> Between 14:00 and 16:00, sunlight illuminates the falls from the Brazilian side, producing the highest probability of rainbows refracted through the mist.<br/><br/><strong>Avoiding crowds:</strong> For the optimal nature observation experience, we recommend entering at 09:00 when the park opens — wildlife is most active at this hour, and you can savour the canyon\'s roar in tranquillity.',
        es: '<strong>Observación de luz:</strong> Entre las 14:00 y las 16:00, la luz solar ilumina las cataratas desde el lado brasileño, produciendo la mayor probabilidad de arcoíris refractados a través de la niebla.<br/><br/><strong>Evitar multitudes:</strong> Para una experiencia óptima de observación de la naturaleza, recomendamos entrar a las 09:00 cuando abre el parque — la fauna es más activa a esta hora y se puede saborear el rugido del cañón en tranquilidad.',
        pt: '<strong>Observação de luz:</strong> Entre 14:00 e 16:00, a luz solar ilumina as cataratas do lado brasileiro, produzindo a maior probabilidade de arco-íris refratados através da névoa.<br/><br/><strong>Evitar multidões:</strong> Para a experiência ideal de observação da natureza, recomendamos entrar às 09:00 quando o parque abre — a fauna é mais ativa neste horário e você pode saborear o rugido do cânion em tranquilidade.',
        ko: '<strong>빛 관측:</strong> 14:00~16:00 사이 브라질 측에서 태양빛이 폭포를 비추면 물안개에 굴절되어 무지개가 뜰 확률이 가장 높습니다.<br/><br/><strong>인파 피하기:</strong> 최적의 자연 관찰 경험을 위해 오전 09:00 개장과 동시에 입장할 것을 권장합니다. 이 시간 야생동물이 가장 활발하며 고요한 협곡의 포효를 만끽할 수 있습니다.',
      } satisfies T,
    },
    {
      q: { zh: '跨境观测：前往阿根廷侧的签证政策及注意事项', en: 'Cross-Border Observation: Visa Policy for the Argentine Side', es: 'Observación transfronteriza: política de visas para el lado argentino', pt: 'Observação transfronteiriça: política de vistos para o lado argentino', ko: '국경 너머 관측: 아르헨티나 측 비자 정책 및 주의사항' } satisfies T,
      a: {
        zh: '如需跨越国境前往阿根廷伊瓜苏国家公园，政策视您的护照签发国而定。若持有有效美国、加拿大或申根签证，通常可通过申请阿根廷 AVE 电子旅行授权免签入境。<br/><br/><strong>注：</strong>移民政策可能存在变动，跨境前请务必前往阿根廷国家移民局官网核实最新要求，并在 Tancredo Neves 友谊桥备齐实体文件。',
        en: 'If you wish to cross the border to visit Argentina\'s Iguazú National Park, the policy depends on your passport\'s country of issuance. Visitors holding a valid US, Canadian, or Schengen visa may generally enter visa-free by applying for Argentina\'s AVE electronic travel authorisation.<br/><br/><strong>Note:</strong> Immigration policies are subject to change. Before crossing, please verify the latest requirements on the official website of Argentina\'s National Immigration Directorate, and have physical documents ready at the Tancredo Neves Friendship Bridge.',
        es: 'Si desea cruzar la frontera para visitar el Parque Nacional Iguazú de Argentina, la política depende del país de emisión de su pasaporte. Los visitantes con visa válida de EE.UU., Canadá o Schengen generalmente pueden ingresar sin visa solicitando la autorización electrónica de viaje AVE de Argentina.<br/><br/><strong>Nota:</strong> Las políticas migratorias están sujetas a cambios. Antes de cruzar, verifique los requisitos más recientes en el sitio web oficial de la Dirección Nacional de Migraciones de Argentina, y tenga los documentos físicos listos en el Puente de la Amistad Tancredo Neves.',
        pt: 'Se desejar cruzar a fronteira para visitar o Parque Nacional Iguazú da Argentina, a política depende do país de emissão do seu passaporte. Visitantes com visto válido dos EUA, Canadá ou Schengen geralmente podem entrar sem visto solicitando a autorização eletrônica de viagem AVE da Argentina.<br/><br/><strong>Nota:</strong> As políticas de imigração estão sujeitas a alterações. Antes de cruzar, verifique os requisitos mais recentes no site oficial da Direção Nacional de Migrações da Argentina, e tenha os documentos físicos prontos na Ponte da Amizade Tancredo Neves.',
        ko: '아르헨티나 이구아수 국립공원으로 국경을 넘어가려면 정책은 여권 발급국에 따라 다릅니다. 유효한 미국·캐나다·송겐 비자가 있으면 보통 아르헨티나 AVE 전자여행허가를 신청해 무비자로 입국할 수 있습니다.<br/><br/><strong>참고:</strong> 이민 정책은 변동될 수 있으니 국경을 넘기 전 아르헨티나 국가이민청 공식 웹사이트에서 최신 요건을 확인하고, Tancredo Neves 우정의 다리에서 서류 원본을 준비하세요.',
      } satisfies T,
    },
  ],
};

// ── Leave No Trace (生态游览公约) ──
export const leaveNoTrace = {
  sectionNum: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante', ko: "방문 수칙" } satisfies T,
  heading: { zh: '生态游览<em class="text-[color:var(--color-emerald)]">公约</em>', en: 'Leave No Trace<em class="text-[color:var(--color-emerald)]"> Code</em>', es: 'Código de<em class="text-[color:var(--color-emerald)]"> No Deje Rastro</em>', pt: 'Código de<em class="text-[color:var(--color-emerald)]"> Não Deixe Rastros</em>', ko: "흔적을 남기지 않는 <em class=\"text-[color:var(--color-emerald)]\">방문 수칙</em>" } satisfies T,
  subtitle: {
    zh: '作为世界自然遗产的访客，我们每个人都有责任确保子孙后代也能感受到同样的震撼。请在游览前阅读并承诺遵守以下行为准则。',
    en: 'As a visitor to a World Heritage site, each of us bears the responsibility of ensuring that future generations may experience the same awe. Please read and commit to the following code of conduct before your visit.',
    es: 'Como visitante de un sitio del Patrimonio Mundial, cada uno de nosotros tiene la responsabilidad de garantizar que las generaciones futuras puedan experimentar el mismo asombro. Por favor, lea y comprométase con el siguiente código de conducta antes de su visita.',
    pt: 'Como visitante de um sítio do Patrimônio Mundial, cada um de nós tem a responsabilidade de garantir que as gerações futuras possam experimentar o mesmo assombro. Por favor, leia e comprometa-se com o seguinte código de conduta antes de sua visita.', ko: "세계유산의 풍경을 다음 세대도 만날 수 있도록 아래 수칙을 확인하고 지켜 주세요.",
  } satisfies T,
  rules: [
    {
      icon: '🚯',
      title: { zh: '不留垃圾', en: 'Pack It In, Pack It Out', es: 'Llévese su basura', pt: 'Leve seu lixo embora', ko: "쓰레기는 되가져가기" } satisfies T,
      desc: {
        zh: '园区内不设垃圾桶。所有个人废弃物（包括果皮、纸巾、烟蒂）必须自行携带出园。有机垃圾会改变野生动物的自然食谱。',
        en: 'There are no trash bins inside the park. All personal waste — including fruit peels, tissues, and cigarette butts — must be carried out with you. Organic waste alters the natural diet of wildlife.',
        es: 'No hay basureros dentro del parque. Todos los residuos personales —incluyendo cáscaras de fruta, pañuelos y colillas— deben ser retirados por usted. Los residuos orgánicos alteran la dieta natural de la fauna.',
        pt: 'Não há lixeiras dentro do parque. Todos os resíduos pessoais — incluindo cascas de frutas, lenços e bitucas de cigarro — devem ser levados com você. Resíduos orgânicos alteram a dieta natural da fauna.', ko: "과일 껍질, 휴지, 담배꽁초 등 개인 쓰레기는 공원 밖으로 가져가세요. 음식물 쓰레기도 야생동물의 먹이 활동을 바꿀 수 있습니다.",
      } satisfies T,
    },
    {
      icon: '👣',
      title: { zh: '不偏离既定步道', en: 'Stay on Designated Trails', es: 'Permanezca en los senderos', pt: 'Permaneça nas trilhas designadas', ko: "지정된 산책로 이용하기" } satisfies T,
      desc: {
        zh: '步道边缘之外是脆弱的雨林地表和野生动物栖息地。偏离步道不仅会压实土壤、破坏幼苗，还可能踩踏蛇类和地面筑巢鸟类的巢穴。',
        en: 'Beyond the trail edges lies fragile rainforest floor and wildlife habitat. Straying from the trail compacts soil, destroys seedlings, and may trample the nests of snakes and ground-nesting birds.',
        es: 'Más allá de los bordes del sendero se encuentra el frágil suelo de la selva y el hábitat de la fauna. Salirse del sendero compacta el suelo, destruye plántulas y puede pisar nidos de serpientes y aves que anidan en el suelo.',
        pt: 'Além das bordas da trilha está o frágil solo da mata e o habitat da fauna. Sair da trilha compacta o solo, destrói mudas e pode pisar em ninhos de cobras e aves que nidificam no solo.', ko: "산책로 바깥은 토양과 어린 식물, 야생동물의 서식지입니다. 길을 벗어나면 토양이 눌리고 지면에 둥지를 트는 동물에게 피해를 줄 수 있습니다.",
      } satisfies T,
    },
    {
      icon: '🚁',
      title: { zh: '禁止使用无人机', en: 'No Drones', es: 'Prohibidos los drones', pt: 'Proibido o uso de drones', ko: "드론을 띄우지 않기" } satisfies T,
      desc: {
        zh: '在国家公园范围内使用无人机属违法行为。无人机的噪音和视觉干扰会严重惊扰鸟类（尤其是猛禽和巨嘴鸟），干扰其筑巢、觅食和迁徙行为。',
        en: 'The use of drones within national park boundaries is illegal. The noise and visual disturbance from drones seriously disrupt birds — particularly raptors and toucans — interfering with nesting, foraging, and migratory behaviour.',
        es: 'El uso de drones dentro de los límites del parque nacional es ilegal. El ruido y la perturbación visual de los drones alteran gravemente a las aves —particularmente rapaces y tucanes— interfiriendo con la anidación, alimentación y comportamiento migratorio.',
        pt: 'O uso de drones dentro dos limites do parque nacional é ilegal. O ruído e a perturbação visual dos drones afetam gravemente as aves — particularmente rapinantes e tucanos — interferindo na nidificação, alimentação e comportamento migratório.', ko: "드론 소음과 움직임은 새의 번식과 먹이 활동을 방해합니다. 공원 내 드론 관련 규정을 지켜 주세요.",
      } satisfies T,
    },
    {
      icon: '📸',
      title: { zh: '禁止使用闪光灯拍摄野生动物', en: 'No Flash Photography of Wildlife', es: 'No usar flash al fotografiar fauna', pt: 'Não use flash ao fotografar fauna', ko: "야생동물 촬영 시 플래시 끄기" } satisfies T,
      desc: {
        zh: '闪光灯会对夜行性和晨昏性动物的视网膜造成不可逆损伤。请调高 ISO 或使用大光圈镜头进行自然光拍摄。真正的野生动物摄影，是记录而非干扰。',
        en: 'Flash photography causes irreversible damage to the retinas of nocturnal and crepuscular animals. Increase your ISO or use a wide-aperture lens for natural-light photography. True wildlife photography documents — it does not disturb.',
        es: 'La fotografía con flash causa daños irreversibles en las retinas de los animales nocturnos y crepusculares. Aumente el ISO o use un lente de gran apertura para fotografía con luz natural. La verdadera fotografía de fauna documenta, no perturba.',
        pt: 'A fotografia com flash causa danos irreversíveis às retinas dos animais noturnos e crepusculares. Aumente o ISO ou use uma lente de grande abertura para fotografar com luz natural. A verdadeira fotografia de fauna documenta — não perturba.', ko: "갑작스러운 빛은 야생동물을 놀라게 합니다. 자연광에 맞춰 감도나 조리개를 조절하세요.",
      } satisfies T,
    },
    {
      icon: '🤫',
      title: { zh: '保持安静，尊重自然声景', en: 'Keep Quiet — Respect the Natural Soundscape', es: 'Guarde silencio — respete el paisaje sonoro', pt: 'Mantenha silêncio — respeite a paisagem sonora', ko: "소리를 낮추고 자연에 귀 기울이기" } satisfies T,
      desc: {
        zh: '瀑布的轰鸣、鸟类的晨鸣、树叶的窸窣——这些构成了伊瓜苏独特的自然声景。请勿使用外放音响，将交谈音量降至最低，让自己成为这片古老峡谷的倾听者。',
        en: 'The roar of the falls, the morning chorus of birds, the rustle of leaves — these form Iguaçu\'s unique natural soundscape. Please refrain from using external speakers, keep conversation volume to a minimum, and become a listener in this ancient canyon.',
        es: 'El rugido de las cataratas, el coro matutino de las aves, el susurro de las hojas — estos forman el paisaje sonoro único de Iguazú. Absténgase de usar altavoces externos, mantenga el volumen de conversación al mínimo y conviértase en un oyente de este antiguo cañón.',
        pt: 'O rugido das cataratas, o coro matinal dos pássaros, o farfalhar das folhas — estes formam a paisagem sonora única do Iguaçu. Evite usar alto-falantes externos, mantenha o volume de conversa no mínimo e torne-se um ouvinte neste cânion ancestral.', ko: "폭포의 굉음과 새소리, 나뭇잎 소리가 공원의 풍경을 이룹니다. 스피커 사용을 삼가고 낮은 목소리로 대화하세요.",
      } satisfies T,
    },
    {
      icon: '🙅',
      title: { zh: '不喂食、不触摸、不带走', en: 'No Feeding, No Touching, No Taking', es: 'No alimentar, no tocar, no llevarse', pt: 'Não alimente, não toque, não leve', ko: "먹이를 주거나 만지거나 가져가지 않기" } satisfies T,
      desc: {
        zh: '请勿以任何形式与野生动物互动。不喂食（参考南美浣熊警示）、不触摸（许多两栖动物皮肤可吸收人体化学物质）、不带走任何自然物品（包括石头、花朵、羽毛——它们在生态系统中都有其位置）。',
        en: 'Do not interact with wildlife in any form. No feeding (see coati warning), no touching (many amphibians absorb human chemicals through their skin), and no taking of any natural objects — including stones, flowers, or feathers. Each has its place in the ecosystem.',
        es: 'No interactúe con la fauna de ninguna forma. No alimentar (ver advertencia del coatí), no tocar (muchos anfibios absorben químicos humanos a través de la piel) y no llevarse ningún objeto natural —incluyendo piedras, flores o plumas. Cada uno tiene su lugar en el ecosistema.',
        pt: 'Não interaja com a fauna de nenhuma forma. Não alimente (veja aviso do quati), não toque (muitos anfíbios absorvem químicos humanos pela pele) e não leve nenhum objeto natural — incluindo pedras, flores ou penas. Cada um tem seu lugar no ecossistema.', ko: "야생동물을 만지거나 먹이를 주지 마세요. 돌과 꽃, 깃털도 각자 생태계에서 역할이 있으므로 그대로 두세요.",
      } satisfies T,
    },
  ],
  closing: {
    zh: '带走知识与震撼，留下纯净与尊重。<br/>让这片"大水"的轰鸣，在未来的千百年里，继续在人类文明的边缘回荡。',
    en: 'Take away knowledge and awe. Leave behind purity and respect.<br/>Let the roar of this "great water" echo at the edge of human civilisation for millennia to come.',
    es: 'Llévese conocimiento y asombro. Deje pureza y respeto.<br/>Que el rugido de esta "agua grande" siga resonando al borde de la civilización humana por milenios más.',
    pt: 'Leve conhecimento e assombro. Deixe pureza e respeito.<br/>Que o rugido desta "água grande" continue ecoando à margem da civilização humana por milênios.', ko: "자연을 배운 기억을 가져가고 그 자리에는 존중을 남겨 주세요.<br/>큰 물의 울림이 오랫동안 이어지도록 함께 지켜 주세요.",
  } satisfies T,
};

// ── Partners (参考资源与保护伙伴) ──
export const partners = {
  heading: {
    zh: '参考资源与保护伙伴',
    en: 'Reference Resources & Conservation Partners',
    es: 'Recursos Oficiales y Conservación',
    pt: 'Recursos Oficiais e Conservação', ko: "참고 자료 및 자연 보전 기관",
  } satisfies T,
  items: [
    {
      name: { zh: '联合国教科文组织世界遗产中心', en: 'UNESCO World Heritage Centre', es: 'UNESCO Centro del Patrimonio Mundial', pt: 'UNESCO Centro do Patrimônio Mundial', ko: "유네스코 세계유산센터" } satisfies T,
      url: 'https://whc.unesco.org/en/list/355',
      abbr: 'UNESCO',
    },
    {
      name: { zh: '巴西奇科·门德斯生物多样性保护研究所', en: 'ICMBio — Chico Mendes Institute for Biodiversity Conservation', es: 'ICMBio — Instituto Chico Mendes de Conservación de la Biodiversidad', pt: 'ICMBio — Instituto Chico Mendes de Conservação da Biodiversidade', ko: "ICMBio · 치코 멘데스 생물다양성 보전 연구소" } satisfies T,
      url: 'https://www.gov.br/icmbio/pt-br',
      abbr: 'ICMBio',
    },
    {
      name: { zh: 'SOS大西洋雨林基金会', en: 'SOS Mata Atlântica Foundation', es: 'Fundación SOS Mata Atlântica', pt: 'Fundação SOS Mata Atlântica', ko: "대서양림 보전 재단" } satisfies T,
      url: 'https://www.sosma.org.br/',
      abbr: 'SOSMA',
    },
    {
      name: { zh: '世界自然基金会巴西分会', en: 'WWF-Brasil', es: 'WWF-Brasil', pt: 'WWF-Brasil', ko: "세계자연기금 브라질" } satisfies T,
      url: 'https://www.wwf.org.br/',
      abbr: 'WWF',
    },
    {
      name: { zh: '伊瓜苏鸟类保育公园', en: 'Parque das Aves', es: 'Parque das Aves', pt: 'Parque das Aves', ko: "이과수 조류 공원" } satisfies T,
      url: 'https://www.parquedasaves.com.br/',
      abbr: 'PDA',
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: '今天，走进<br/><em class="text-[color:var(--color-sun)]">水雾深处</em>。', en: 'Today, step<br/><em class="text-[color:var(--color-sun)]">into the mist</em>.', es: 'Hoy, entra<br/><em class="text-[color:var(--color-sun)]">en la niebla</em>.', pt: 'Hoje, entre<br/><em class="text-[color:var(--color-sun)]">na névoa</em>.', ko: '오늘, <br/><em class="text-[color:var(--color-sun)]">물안개 속으로</em> 걸어가세요.' } satisfies T,
  address: { zh: '瀑布步道 · 伊瓜苏国家公园 · 巴西巴拉那州伊瓜苏市', en: 'Trilha das Cataratas · Iguaçu National Park · Foz do Iguaçu, PR, Brazil', es: 'Sendero de las Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil', pt: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil', ko: 'Trilha das Cataratas · 이구아수 국립공원 · Foz do Iguaçu, PR, 브라질' } satisfies T,
  copyright: { zh: '© 2026 cataratasbrasil 保留所有权利。', en: '© 2026 cataratasbrasil. All rights reserved.', es: '© 2026 cataratasbrasil. Todos los derechos reservados.', pt: '© 2026 cataratasbrasil. Todos os direitos reservados.', ko: '© 2026 cataratasbrasil. 모든 권리 보유.' } satisfies T,
  disclaimer: { zh: '本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。', en: 'This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.', es: 'Este sitio web es un proyecto independiente de información turística de terceros. No estamos afiliados a ningún gobierno local ni entidad oficial.', pt: 'Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.', ko: '이 웹사이트는 독립적인 제3자 여행 정보 프로젝트입니다. 우리는 지방 정부나 공식 기관과 어떠한 관련도 없습니다.' } satisfies T,
  privacy: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade', ko: '개인정보 처리방침' } satisfies T,
  terms: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço', ko: '서비스 약관' } satisfies T,
  cookies: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies', ko: '쿠키 설정' } satisfies T,
  leaveNoTrace: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante', ko: '방문자 약속' } satisfies T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: '隐私政策 — cataratasbrasil', en: 'Privacy Policy — cataratasbrasil', es: 'Política de Privacidad — cataratasbrasil', pt: 'Política de Privacidade — cataratasbrasil', ko: "개인정보 처리방침 — cataratasbrasil" } satisfies T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026', ko: "최종 업데이트 · 2026년 7월" } satisfies T,
  h1: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade', ko: "개인정보 처리방침" } satisfies T,
  h2_collect: { zh: '我们收集的信息', en: 'Information We Collect', es: 'Información que recopilamos', pt: 'Informações que coletamos', ko: "수집하는 정보" } satisfies T,
  p_collect: {
    zh: '我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。',
    en: 'We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.',
    es: 'Recopilamos solo los datos mínimos necesarios para proporcionar nuestros servicios. Estos pueden incluir: datos de navegación (dirección IP, tipo de navegador, páginas visitadas), cookies y tecnologías similares, y cualquier información que usted proporcione voluntariamente a través de formularios de contacto o correo electrónico.',
    pt: 'Coletamos apenas os dados mínimos necessários para fornecer nossos serviços. Isso pode incluir: dados de navegação (endereço IP, tipo de navegador, páginas visitadas), cookies e tecnologias similares, e qualquer informação que você fornecer voluntariamente por meio de formulários de contato ou e-mail.', ko: "서비스 제공에 필요한 최소한의 정보만 수집합니다. 접속 기록에는 IP 주소, 브라우저 유형, 방문한 페이지가 포함될 수 있습니다. 쿠키와 유사 기술로 얻은 정보나 문의 양식 또는 이메일로 자발적으로 제공한 정보도 포함될 수 있습니다.",
  } satisfies T,
  h2_use: { zh: '我们如何使用您的信息', en: 'How We Use Your Information', es: 'Cómo utilizamos su información', pt: 'Como usamos suas informações', ko: "정보 이용 목적" } satisfies T,
  p_use: {
    zh: '我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。',
    en: 'We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.',
    es: 'Utilizamos la información recopilada para: mejorar el contenido del sitio web y la experiencia del usuario, analizar el tráfico y los patrones de uso, responder a solicitudes, y cumplir con nuestras obligaciones legales.',
    pt: 'Usamos as informações coletadas para: melhorar o conteúdo do site e a experiência do usuário, analisar o tráfego e padrões de uso, responder a solicitações, e cumprir nossas obrigações legais.', ko: "수집한 정보는 사이트 콘텐츠와 이용 경험 개선, 방문 통계와 이용 패턴 분석, 문의 응답 및 법적 의무 이행에 활용합니다.",
  } satisfies T,
  h2_third: { zh: '第三方服务', en: 'Third-Party Services', es: 'Servicios de terceros', pt: 'Serviços de terceiros', ko: "외부 서비스" } satisfies T,
  p_third: {
    zh: '我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。',
    en: 'Our website may use third-party services, such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis), and Unsplash (for images). These services have their own privacy policies.',
    es: 'Nuestro sitio web puede utilizar servicios de terceros, como Google Maps (para mapas integrados y datos de ubicación), Google Analytics (para análisis de tráfico) y Unsplash (para imágenes). Estos servicios tienen sus propias políticas de privacidad.',
    pt: 'Nosso site pode usar serviços de terceiros, como Google Maps (para mapas incorporados e dados de localização), Google Analytics (para análise de tráfego) e Unsplash (para imagens). Esses serviços têm suas próprias políticas de privacidade.', ko: "사이트는 지도와 위치 정보를 위한 Google 지도, 방문 통계를 위한 Google 애널리틱스, 이미지 제공을 위한 Unsplash 등의 외부 서비스를 이용할 수 있습니다. 각 서비스의 개인정보 처리방침이 별도로 적용됩니다.",
  } satisfies T,
  h2_rights: { zh: '您的权利', en: 'Your Rights', es: 'Sus derechos', pt: 'Seus direitos', ko: "이용자의 권리" } satisfies T,
  p_rights: {
    zh: '根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。',
    en: 'Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.',
    es: 'De acuerdo con el Reglamento General de Protección de Datos (GDPR) y las regulaciones relacionadas, usted tiene los siguientes derechos: acceder a sus datos personales, solicitar la corrección o eliminación, oponerse al procesamiento, y presentar una queja ante una autoridad de control.',
    pt: 'De acordo com o Regulamento Geral de Proteção de Dados (GDPR) e regulamentações relacionadas, você tem os seguintes direitos: acessar seus dados pessoais, solicitar correção ou exclusão, opor-se ao processamento, e apresentar uma reclamação a uma autoridade supervisora.', ko: "일반 개인정보 보호법과 관련 규정에 따라 개인정보를 열람하고 정정이나 삭제를 요청할 수 있습니다. 처리에 이의를 제기하거나 감독 기관에 민원을 제기할 권리도 있습니다.",
  } satisfies T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: '服务条款 — cataratasbrasil', en: 'Terms of Service — cataratasbrasil', es: 'Términos de Servicio — cataratasbrasil', pt: 'Termos de Serviço — cataratasbrasil', ko: "이용약관 — cataratasbrasil" } satisfies T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026', ko: "최종 업데이트 · 2026년 7월" } satisfies T,
  h1: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço', ko: "이용약관" } satisfies T,
  h2_acceptance: { zh: '接受条款', en: 'Acceptance of Terms', es: 'Aceptación de los términos', pt: 'Aceitação dos termos', ko: "약관에 대한 동의" } satisfies T,
  p_acceptance: {
    zh: '访问和使用 cataratasbrasil.com，即表示您同意受这些服务条款的约束。',
    en: 'By accessing and using cataratasbrasil.com, you agree to be bound by these Terms of Service.',
    es: 'Al acceder y utilizar cataratasbrasil.com, usted acepta estar sujeto a estos Términos de Servicio.',
    pt: 'Ao acessar e usar cataratasbrasil.com, você concorda em ficar vinculado a estes Termos de Serviço.', ko: "cataratasbrasil.com에 접속하여 이용하면 이 이용약관에 동의하는 것으로 봅니다.",
  } satisfies T,
  h2_content: { zh: '内容使用', en: 'Content Usage', es: 'Uso del contenido', pt: 'Uso do conteúdo', ko: "콘텐츠 이용" } satisfies T,
  p_content: {
    zh: '本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。',
    en: 'All content on this website is for informational purposes only. We are an independent third-party tourism information website and are not affiliated with any tourist attractions, government agencies, or commercial operators.',
    es: 'Todo el contenido de este sitio web es solo para fines informativos. Somos un sitio web independiente de información turística de terceros y no estamos afiliados a ninguna atracción turística, agencia gubernamental u operador comercial.',
    pt: 'Todo o conteúdo deste site é apenas para fins informativos. Somos um site independente de informações turísticas de terceiros e não temos vínculo com nenhuma atração turística, agência governamental ou operador comercial.', ko: "이 사이트의 모든 콘텐츠는 정보 제공을 위한 것입니다. 독립적인 여행 정보 사이트이며 관광지, 정부 기관이나 상업 운영사에 소속되어 있지 않습니다.",
  } satisfies T,
  h2_accuracy: { zh: '信息的准确性', en: 'Accuracy of Information', es: 'Exactitud de la información', pt: 'Precisão das informações', ko: "정보의 정확성" } satisfies T,
  p_accuracy: {
    zh: '我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。',
    en: 'We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.',
    es: 'Nos esforzamos por proporcionar información precisa y oportuna, pero no podemos garantizar la integridad o exactitud de la información. Los horarios, condiciones y servicios están sujetos a cambios sin previo aviso. Por favor, verifique siempre la información importante a través de los canales oficiales antes de viajar.',
    pt: 'Nos esforçamos para fornecer informações precisas e oportunas, mas não podemos garantir a integridade ou exatidão das informações. Horários, condições e serviços estão sujeitos a alterações sem aviso prévio. Sempre verifique informações importantes pelos canais oficiais antes de viajar.', ko: "정확하고 시의성 있는 정보를 제공하기 위해 노력하지만 완전성이나 정확성을 보장할 수 없습니다. 일정과 조건 및 서비스는 예고 없이 바뀔 수 있으니 여행 전에 중요한 정보를 공식 채널에서 확인하세요.",
  } satisfies T,
  h2_ip: { zh: '知识产权', en: 'Intellectual Property', es: 'Propiedad intelectual', pt: 'Propriedade intelectual', ko: "지식재산권" } satisfies T,
  p_ip: {
    zh: '本网站设计和原创内容受版权保护。图片来自 Unsplash，并已获得其许可。Google 地图数据的使用符合 Google 的服务条款。',
    en: 'The website design and original content are protected by copyright. Images are sourced from Unsplash under their license. Google Maps data is used in accordance with Google\'s Terms of Service.',
    es: 'El diseño del sitio web y el contenido original están protegidos por derechos de autor. Las imágenes provienen de Unsplash bajo su licencia. Los datos de Google Maps se utilizan de acuerdo con los Términos de Servicio de Google.',
    pt: 'O design do site e o conteúdo original são protegidos por direitos autorais. As imagens são provenientes do Unsplash sob sua licença. Os dados do Google Maps são usados de acordo com os Termos de Serviço do Google.', ko: "사이트 디자인과 자체 콘텐츠는 저작권의 보호를 받습니다. Unsplash 이미지는 해당 사용 조건을 따릅니다. Google 지도 데이터는 Google 서비스 약관에 따라 사용합니다.",
  } satisfies T,
  h2_liability: { zh: '责任限制', en: 'Limitation of Liability', es: 'Limitación de responsabilidad', pt: 'Limitação de responsabilidade', ko: "책임 제한" } satisfies T,
  p_liability: {
    zh: '本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。',
    en: 'This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.',
    es: 'Este sitio web se proporciona "tal cual" sin ninguna garantía. No somos responsables de ninguna pérdida resultante del uso de la información de este sitio web, incluidos, entre otros, las decisiones de viaje tomadas en base al contenido de este sitio web.',
    pt: 'Este site é fornecido "como está" sem qualquer garantia. Não nos responsabilizamos por quaisquer perdas resultantes do uso das informações deste site, incluindo, mas não se limitando a, decisões de viagem tomadas com base no conteúdo deste site.', ko: "사이트는 별도의 보증 없이 현재 상태로 제공됩니다. 이곳의 정보를 활용한 여행 결정을 포함하여 사이트 이용으로 발생하는 손실에 대해 책임을 지지 않습니다.",
  } satisfies T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início', ko: "← 홈으로 돌아가기" } satisfies T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: 'Cookie 设置 — cataratasbrasil', en: 'Cookie Settings — cataratasbrasil', es: 'Configuración de Cookies — cataratasbrasil', pt: 'Configurações de Cookies — cataratasbrasil', ko: "쿠키 설정 — cataratasbrasil" } satisfies T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026', ko: "최종 업데이트 · 2026년 7월" } satisfies T,
  h1: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies', ko: "쿠키 설정" } satisfies T,
  intro: {
    zh: '我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。',
    en: 'We use cookies to improve your browsing experience. You can manage your preferences below.',
    es: 'Utilizamos cookies para mejorar su experiencia de navegación. Puede gestionar sus preferencias a continuación.',
    pt: 'Usamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências abaixo.', ko: "쿠키를 사용하여 사이트 이용 경험을 개선합니다. 아래에서 기본 설정을 관리할 수 있습니다.",
  } satisfies T,

  // Necessary Cookies
  cat_necessary: { zh: '必要 Cookie', en: 'Necessary Cookies', es: 'Cookies necesarias', pt: 'Cookies necessários', ko: "필수 쿠키" } satisfies T,
  cat_necessary_desc: { zh: '这些 Cookie 对于网站正常运行至关重要，无法禁用。', en: 'These cookies are essential for the website to function properly and cannot be disabled.', es: 'Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.', pt: 'Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.', ko: "이 쿠키는 사이트가 정상적으로 작동하는 데 필요하며 끌 수 없습니다." } satisfies T,
  alwaysActive: { zh: '始终保持活跃', en: 'Always active', es: 'Siempre activo', pt: 'Sempre ativo', ko: "항상 활성화" } satisfies T,

  // Analytics Cookies
  cat_analytics: { zh: '分析型 Cookie', en: 'Analytics Cookies', es: 'Cookies analíticas', pt: 'Cookies analíticos', ko: "분석 쿠키" } satisfies T,
  cat_analytics_desc: { zh: '它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。', en: 'They help us understand how visitors interact with our website by collecting anonymous usage data.', es: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web mediante la recopilación de datos de uso anónimos.', pt: 'Eles nos ajudam a entender como os visitantes interagem com nosso site, coletando dados de uso anônimos.', ko: "익명 이용 데이터를 모아 방문자가 사이트를 어떻게 사용하는지 파악하는 데 도움이 됩니다." } satisfies T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: '它会收集访客如何使用我们网站的匿名信息。', en: 'Collects anonymous information about how visitors use our website.', es: 'Recopila información anónima sobre cómo los visitantes utilizan nuestro sitio web.', pt: 'Coleta informações anônimas sobre como os visitantes usam nosso site.', ko: "사이트 이용 방식에 대한 익명 정보를 수집합니다." } satisfies T,
  activated: { zh: '激活', en: 'Active', es: 'Activado', pt: 'Ativado', ko: "활성화" } satisfies T,

  // Preference Cookies
  cat_preference: { zh: '偏好 Cookie', en: 'Preference Cookies', es: 'Cookies de preferencia', pt: 'Cookies de preferência', ko: "환경설정 쿠키" } satisfies T,
  cat_preference_desc: { zh: '它们会记住您的设置，例如语言和主题偏好。', en: 'They remember your settings, such as language and theme preferences.', es: 'Recuerdan sus configuraciones, como las preferencias de idioma y tema.', pt: 'Eles lembram suas configurações, como preferências de idioma e tema.', ko: "언어와 테마 등 이용자가 선택한 설정을 기억합니다." } satisfies T,
  pref_label: { zh: '用户偏好', en: 'User Preferences', es: 'Preferencias de usuario', pt: 'Preferências do usuário', ko: "사용자 환경설정" } satisfies T,
  pref_desc: { zh: '保存您的语言偏好和网站设置。', en: 'Saves your language preferences and website settings.', es: 'Guarda sus preferencias de idioma y configuración del sitio web.', pt: 'Salva suas preferências de idioma e configurações do site.', ko: "선호 언어와 사이트 설정을 저장합니다." } satisfies T,

  // Marketing Cookies
  cat_marketing: { zh: '营销 Cookie', en: 'Marketing Cookies', es: 'Cookies de marketing', pt: 'Cookies de marketing', ko: "마케팅 쿠키" } satisfies T,
  cat_marketing_desc: { zh: '它们用于展示相关广告并衡量广告活动的有效性。', en: 'They are used to display relevant advertisements and measure the effectiveness of ad campaigns.', es: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.', pt: 'São usados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.', ko: "관련 광고를 표시하고 광고 캠페인의 효과를 측정하는 데 사용됩니다." } satisfies T,
  ads_label: { zh: '个性化广告', en: 'Personalized Ads', es: 'Anuncios personalizados', pt: 'Anúncios personalizados', ko: "맞춤형 광고" } satisfies T,
  ads_desc: { zh: '它可以根据你的兴趣为你展示相关的广告。', en: 'Shows you relevant ads based on your interests.', es: 'Le muestra anuncios relevantes según sus intereses.', pt: 'Mostra anúncios relevantes com base nos seus interesses.', ko: "관심사에 맞는 광고를 표시합니다." } satisfies T,
  deactivated: { zh: '停用', en: 'Inactive', es: 'Desactivado', pt: 'Desativado', ko: "비활성화" } satisfies T,

  // Consent Management
  consent_title: { zh: '同意管理', en: 'Consent Management', es: 'Gestión de consentimiento', pt: 'Gerenciamento de consentimento', ko: "동의 관리" } satisfies T,
  consent_desc: { zh: '您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。', en: 'You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website\'s functionality.', es: 'Puede cambiar su configuración de cookies en cualquier momento. Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio web.', pt: 'Você pode alterar suas configurações de cookies a qualquer momento. Observe que desativar certos cookies pode afetar a funcionalidade do site.', ko: "쿠키 설정은 언제든 바꿀 수 있습니다. 일부 쿠키를 끄면 사이트 기능에 영향이 있을 수 있습니다." } satisfies T,
  savePrefs: { zh: '保存偏好设置', en: 'Save Preferences', es: 'Guardar preferencias', pt: 'Salvar preferências', ko: "설정 저장" } satisfies T,
  rejectAll: { zh: '拒绝一切', en: 'Reject All', es: 'Rechazar todo', pt: 'Rejeitar tudo', ko: "모두 거부" } satisfies T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início', ko: "← 홈으로 돌아가기" } satisfies T,
};

// ── Meta ──
export const meta = {
  title: {
    zh: '伊瓜苏瀑布巴西侧游览指南｜门票、交通与路线',
    en: 'Iguazu Falls Brazilian Side | Tickets, Shuttle & Trail',
    es: 'Mirador Garganta del Diablo | Cataratas del Iguazú',
    pt: 'Cataratas do Iguaçu: ingressos, trilha e como chegar',
    ko: '브라질 이과수 폭포 여행 | 입장권·셔틀·산책로',
  } satisfies T,
  description: {
    zh: '巴西伊瓜苏国家公园核心观景台——魔鬼之喉（Garganta do Diabo）。查看开放时间、门票、Trilha das Cataratas 步道、如何到达福斯-杜伊瓜苏，以及无障碍与游玩建议。',
    en: 'Plan your visit to the Brazilian side of Iguazu Falls from Foz do Iguaçu. Find ticket information, park shuttle stops, the Falls Trail and access to Devil’s Throat.',
    es: 'El mirador central de las Cataratas del Iguazú en Foz do Iguaçu, Brasil — la Garganta del Diablo. Horarios, entradas, la Trilha das Cataratas, cómo llegar, accesibilidad y consejos.',
    pt: 'Planeje a visita ao lado brasileiro das Cataratas do Iguaçu, em Foz do Iguaçu. Confira ingressos, ônibus interno, Trilha das Cataratas e o Mirante da Garganta do Diabo.',
    ko: '브라질 이구아수 국립공원의 핵심 전망대, 악마의 목구멍(Mirante da Garganta do Diabo). 개장 시간, 입장권, 트릴랴 다스 카타라타스(Trilha das Cataratas) 산책로, 오시는 길, 무장애 편의시설과 방문 팁을 확인하세요.',
  } satisfies T,
};
