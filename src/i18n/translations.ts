import type { Lang } from './utils';

type T = Record<Lang, string>;

export const t = (s: Record<string, string> | string, lang: Lang): string =>
  typeof s === 'string' ? s : (s[lang] || s.pt || '');

// ── Nav ──
export const nav = {
  overview: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo' } as T,
  highlights: { zh: '亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' } as T,
  guide: { zh: '游览指南', en: 'Guide', es: 'Guía', pt: 'Guia' } as T,
  transport: { zh: '交通', en: 'Transport', es: 'Transporte', pt: 'Transporte' } as T,
  reviews: { zh: '评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' } as T,
  encyclopedia: { zh: '百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' } as T,
  ecology: { zh: '生态', en: 'Ecology', es: 'Ecología', pt: 'Ecologia' } as T,
  gallery: { zh: '图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' } as T,
  faq: { zh: '指南', en: 'Guide', es: 'Guía', pt: 'Guia' } as T,
};

// ── Hero ──
export const hero = {
  title: {
    zh: '伊瓜苏瀑布<br/><span class="italic text-[color:var(--color-sun)]">震撼观景</span>步道',
    en: 'Where the forest<br/><span class="italic text-[color:var(--color-sun)]">meets the roar</span>.',
    es: 'Donde la selva<br/><span class="italic text-[color:var(--color-sun)]">encuentra el rugido</span>.',
    pt: 'Onde a mata<br/><span class="italic text-[color:var(--color-sun)]">encontra o rugido</span>.',
  } as T,
  subtitle: {
    zh: 'Trilha das Cataratas · 巴西侧步道 —— 1.2 公里全景栈道，一路走进"魔鬼之喉"的水雾之中。',
    en: 'Trilha das Cataratas · The 1.2 km panoramic boardwalk that carries you straight into the mist of the Devil\'s Throat.',
    es: 'Trilha das Cataratas · Un sendero panorámico de 1,2 km que te lleva directo a la niebla de la Garganta del Diablo.',
    pt: 'Trilha das Cataratas · 1,2 km de passarela panorâmica levando você direto à névoa da Garganta do Diabo.',
  } as T,
  statReviews: { zh: '评价', en: 'reviews', es: 'reseñas', pt: 'avaliações' } as T,
  statLength: { zh: '步道长度', en: 'Trail length', es: 'Longitud', pt: 'Extensão' } as T,
  statFalls: { zh: '瀑布数量', en: 'Waterfalls', es: 'Cascadas', pt: 'Quedas' } as T,
  statFlow: { zh: '平均流量', en: 'Avg. flow', es: 'Caudal medio', pt: 'Vazão média' } as T,
};

// ── Manifesto (网站前言) ──
export const manifesto = {
  sectionNum: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo' } as T,
  heading: {
    zh: '敬畏自然<br/><em class="text-[color:var(--color-emerald)]">守护永恒</em>',
    en: 'Reverence for nature.<br/><em class="text-[color:var(--color-emerald)]">A vow for eternity.</em>',
    es: 'Reverencia a la naturaleza.<br/><em class="text-[color:var(--color-emerald)]">Un voto por la eternidad.</em>',
    pt: 'Reverência à natureza.<br/><em class="text-[color:var(--color-emerald)]">Um voto pela eternidade.</em>',
  } as T,
  subheading: {
    zh: '致每一位自然观察者',
    en: 'To every observer of the natural world',
    es: 'A cada observador del mundo natural',
    pt: 'A cada observador do mundo natural',
  } as T,
  p1: {
    zh: '欢迎来到伊瓜苏。在这里，水不仅仅是流动的物质，而是雕刻地球的刻刀，是孕育生命的血脉。伊瓜苏瀑布（Cataratas do Iguaçu）是世界上最宽阔的瀑布群。当我们站在 Trilha das Cataratas 的栈道上，感受每秒 1,500 立方米的水流坠入"魔鬼之喉"的轰鸣时，人类的渺小与大自然的伟大瞬间完成交汇。',
    en: 'Welcome to Iguaçu. Here, water is not merely matter in motion — it is the chisel that sculpts the Earth, the bloodstream that nourishes life. The Iguaçu Falls (Cataratas do Iguaçu) form the widest waterfall system on the planet. When you stand on the Trilha das Cataratas boardwalk and feel 1,500 cubic metres of water per second plunge into the Devil\'s Throat, human smallness and nature\'s grandeur collide in a single, humbling instant.',
    es: 'Bienvenido a Iguazú. Aquí, el agua no es solo materia en movimiento: es el cincel que esculpe la Tierra, el torrente sanguíneo que nutre la vida. Las Cataratas del Iguazú constituyen el sistema de cascadas más ancho del planeta. Cuando te paras en la pasarela de la Trilha das Cataratas y sientes 1.500 metros cúbicos de agua por segundo precipitarse en la Garganta del Diablo, la pequeñez humana y la grandeza de la naturaleza colisionan en un solo instante de humildad.',
    pt: 'Bem-vindo ao Iguaçu. Aqui, a água não é apenas matéria em movimento — é o cinzel que esculpe a Terra, a corrente sanguínea que nutre a vida. As Cataratas do Iguaçu formam o sistema de quedas d\'água mais largo do planeta. Quando você está na passarela da Trilha das Cataratas e sente 1.500 metros cúbicos de água por segundo despencarem na Garganta do Diabo, a pequenez humana e a grandeza da natureza colidem em um único instante de humildade.',
  } as T,
  p2: {
    zh: '然而，在这令人窒息的壮丽背后，隐藏着一种极度的脆弱。拥抱这片瀑布的大西洋原始雨林（Mata Atlântica），曾覆盖巴西东海岸超过 130 万平方公里的土地，而如今，未经破坏的原始林区仅存不到 <strong>12%</strong>。伊瓜苏国家公园，正是这片古老雨林在内陆最后的生态堡垒之一。',
    en: 'Yet behind this breathtaking majesty lies a profound fragility. The Atlantic Rainforest (Mata Atlântica) that embraces these falls once covered over 1.3 million square kilometres of Brazil\'s eastern coast. Today, less than <strong>12%</strong> of the original undisturbed forest remains. Iguaçu National Park stands as one of the last inland ecological strongholds of this ancient biome.',
    es: 'Pero detrás de esta majestuosidad impresionante yace una fragilidad profunda. La Selva Atlántica (Mata Atlântica) que abraza estas cataratas cubrió una vez más de 1,3 millones de kilómetros cuadrados de la costa este de Brasil. Hoy, menos del <strong>12%</strong> del bosque original intacto permanece. El Parque Nacional do Iguaçu es uno de los últimos bastiones ecológicos del interior de este antiguo bioma.',
    pt: 'Mas por trás dessa majestade de tirar o fôlego está uma fragilidade profunda. A Mata Atlântica que abraça essas cataratas já cobriu mais de 1,3 milhão de quilômetros quadrados da costa leste do Brasil. Hoje, menos de <strong>12%</strong> da floresta original intacta permanece. O Parque Nacional do Iguaçu é um dos últimos bastiões ecológicos do interior deste bioma ancestral.',
  } as T,
  p3: {
    zh: '作为一家非盈利科普机构，我们建立本网站，不仅为了向您展示如何抵达这里，更为了邀请您成为这片土地的<strong>"守护者"</strong>。当您踏上这条 1.2 公里的步道时，您不仅是一名游客，更是 1.3 亿年地质史的见证人，是无数濒危巨嘴鸟与美洲豹的隐形客。',
    en: 'As a non-profit educational initiative, we built this website not merely to show you how to get here, but to invite you to become a <strong>guardian</strong> of this land. When you step onto this 1.2-kilometre trail, you are not just a visitor — you are a witness to 130 million years of geological history, an invisible guest of countless endangered toucans and jaguars.',
    es: 'Como iniciativa educativa sin fines de lucro, construimos este sitio web no solo para mostrarle cómo llegar, sino para invitarle a convertirse en un <strong>guardián</strong> de esta tierra. Cuando pise este sendero de 1,2 kilómetros, no será solo un visitante: será testigo de 130 millones de años de historia geológica, un huésped invisible de innumerables tucanes y jaguares amenazados.',
    pt: 'Como iniciativa educacional sem fins lucrativos, construímos este site não apenas para mostrar como chegar, mas para convidá-lo a se tornar um <strong>guardião</strong> desta terra. Quando você pisar nesta trilha de 1,2 quilômetro, não será apenas um visitante — será testemunha de 130 milhões de anos de história geológica, um hóspede invisível de inúmeros tucanos e onças-pintadas ameaçados.',
  } as T,
  closing: {
    zh: '带走知识与震撼，留下纯净与尊重。<br/>让这片"大水"（I-Guazú）的轰鸣，能在未来的千百年里，继续在人类文明的边缘回荡。',
    en: 'Take away knowledge and awe. Leave behind purity and respect.<br/>Let the roar of this "great water" — I-Guazú — echo at the edge of human civilisation for millennia to come.',
    es: 'Llévese conocimiento y asombro. Deje pureza y respeto.<br/>Que el rugido de esta "agua grande" — I-Guazú — siga resonando al borde de la civilización humana por milenios más.',
    pt: 'Leve conhecimento e assombro. Deixe pureza e respeito.<br/>Que o rugido desta "água grande" — I-Guazú — continue ecoando à margem da civilização humana por milênios.',
  } as T,
  chip1: { zh: '世界自然遗产', en: 'World Heritage', es: 'Patrimonio Mundial', pt: 'Patrimônio Mundial' } as T,
  chip2: { zh: '跨国大瀑布', en: 'Transnational Falls', es: 'Cataratas binacionales', pt: 'Cataratas binacionais' } as T,
  chip3: { zh: '仅存 12% 原始雨林', en: 'Only 12% forest remains', es: 'Solo 12% de selva queda', pt: 'Apenas 12% da mata resta' } as T,
  chip4: { zh: '非盈利科普', en: 'Non-profit educational', es: 'Educativo sin fines de lucro', pt: 'Educacional sem fins lucrativos' } as T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: '游览亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' } as T,
  heading: {
    zh: '三重感官<em class="text-[color:var(--color-sun)]">洗礼</em>',
    en: 'Three sensory<em class="text-[color:var(--color-sun)]"> baptisms</em>',
    es: 'Tres bautismos<em class="text-[color:var(--color-sun)]"> sensoriales</em>',
    pt: 'Três batismos<em class="text-[color:var(--color-sun)]"> sensoriais</em>',
  } as T,
  items: [
    {
      icon: '🚶‍♂️', num: '01',
      title: { zh: '峡谷悬崖漫步', en: 'Canyon-rim walk', es: 'Paseo por el cañón', pt: 'Caminhada no cânion' } as T,
      desc: { zh: '平整石板 + 木栈道，坡度平缓，老人小孩都能轻松走完。沿途多个突出观景台是绝佳摄影点。', en: 'Smooth stone and wooden boardwalks with gentle grades — easy for elders and kids. Multiple cantilevered decks along the way for photos.', es: 'Piedra lisa y pasarelas de madera con pendientes suaves — accesible para todos. Múltiples miradores para fotos.', pt: 'Pedras planas e passarelas de madeira com inclinação suave — acessível a todos. Vários mirantes para fotos.' } as T,
      img: '/gallery/trilha-das-cataratas-brasil (1).jpg',
    },
    {
      icon: '💦', num: '02',
      title: { zh: '水上栈道洗礼', en: 'The mist catwalk', es: 'Pasarela de niebla', pt: 'Passarela na névoa' } as T,
      desc: { zh: '靠近魔鬼之喉的水上栈道，瀑布激起的水雾像下雨一样把人淋透，是最原始的大自然礼赞。', en: 'Near the Devil\'s Throat, spray from the falls soaks you like a downpour — a raw, elemental encounter with the falls.', es: 'Cerca de la Garganta del Diablo, el rocío te empapa como un aguacero — un encuentro puro con la fuerza del agua.', pt: 'Perto da Garganta do Diabo, a névoa encharca você como uma chuva — um encontro cru com a força da água.' } as T,
      img: '/gallery/trilha-das-cataratas-brasil (2).jpg',
    },
    {
      icon: '🛗', num: '03',
      title: { zh: '全景电梯', en: 'Panoramic elevator', es: 'Ascensor panorámico', pt: 'Elevador panorâmico' } as T,
      desc: { zh: '步道终点连接下层水面栈道与上层 Porto Canoas 休息区。上升过程俯瞰整个瀑布群壮阔宏图。', en: 'Links the lower catwalk to Porto Canoas. Watch the entire falls system unfurl beneath you as it rises.', es: 'Conecta la pasarela inferior con Porto Canoas. Ve el sistema completo desplegarse mientras subes.', pt: 'Liga a passarela inferior a Porto Canoas. Todo o conjunto se abre abaixo enquanto sobe.' } as T,
      img: '/gallery/trilha-das-cataratas-brasil (3).jpg',
    },
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: '实用游览指南', en: 'Practical Guide', es: 'Guía práctica', pt: 'Guia prático' } as T,
  heading: { zh: '出发前<em class="text-[color:var(--color-emerald)]">必读</em>', en: 'Read this<em class="text-[color:var(--color-emerald)]"> before you go</em>.', es: 'Léelo<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.', pt: 'Leia<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.' } as T,
  cards: [
    { icon: '🕒', label: { zh: '开放时间', en: 'Hours', es: 'Horario', pt: 'Horário' } as T, value: '09:00 — 16:00', desc: { zh: '每日开放，随季节微调，建议提前查阅。', en: 'Daily; seasonal shifts — check ahead.', es: 'Diario; ajustes estacionales — consulte antes.', pt: 'Diário; ajustes sazonais — confira antes.' } as T },
    { icon: '🎟️', label: { zh: '门票与入口', en: 'Ticket & entry', es: 'Entrada', pt: 'Ingresso' } as T, value: 'Centro de Visitantes', desc: { zh: '购票后统一乘园区环保双层巴士到步道起点。', en: 'Buy tickets, then board the park\'s eco double-decker bus to the trailhead.', es: 'Compre entrada y tome el autobús ecológico hasta la trilha.', pt: 'Compre o ingresso e pegue o ônibus ecológico até a trilha.' } as T },
    { icon: '⏱️', label: { zh: '游览时长', en: 'Duration', es: 'Duración', pt: 'Duração' } as T, value: '3 — 4 h', desc: { zh: '步行 1.5-2 小时 + 巴士与拍照，建议预留 3-4 小时。', en: '1.5–2 h walking + bus + photos. Block 3–4 h total.', es: '1,5–2 h caminando + bus + fotos. Reserve 3–4 h.', pt: '1,5–2 h caminhando + ônibus + fotos. Reserve 3–4 h.' } as T },
    { icon: '⚠️', label: { zh: '重要贴士', en: 'Key tips', es: 'Consejos', pt: 'Dicas' } as T, value: '', desc: '', tips: [{ zh: '务必带雨衣 + 手机防水袋', en: 'Poncho + phone drybag are mandatory', es: 'Poncho y bolsa impermeable obligatorios', pt: 'Capa de chuva + saco à prova d\'água' } as T, { zh: '严禁喂食浣熊 (Quati)', en: 'Never feed the coatis (Quati)', es: 'No alimente a los coatíes', pt: 'Não alimente os quatis' } as T, { zh: '全程无障碍友好', en: 'Fully wheelchair accessible', es: 'Accesible en silla de ruedas', pt: 'Acessível em cadeira de rodas' } as T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: '交通指南', en: 'Transport', es: 'Transporte', pt: 'Transporte' } as T,
  heading: { zh: '三种方式<br/><em class="text-[color:var(--color-emerald)]">到达园区</em>', en: 'Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>', es: 'Tres formas<br/><em class="text-[color:var(--color-emerald)]">de llegar</em>', pt: 'Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>' } as T,
  subtitle: { zh: '距离机场仅 3 公里，市中心约 30 分钟车程。', en: 'Just 3 km from the airport, ~30 minutes from downtown Foz.', es: 'A solo 3 km del aeropuerto, ~30 min del centro de Foz.', pt: 'A apenas 3 km do aeroporto, ~30 min do centro de Foz.' } as T,
  items: [
    { icon: '✈️', title: { zh: '从福斯-杜伊瓜苏机场 (IGU)', en: 'From Foz do Iguaçu Airport (IGU)', es: 'Desde el aeropuerto (IGU)', pt: 'Do Aeroporto (IGU)' } as T, meta: '3 km · 5-10 min', details: [{ icon: '🚌', text: { zh: '<strong>Linha 120 — Parque Nacional</strong> · 最经济，约 R$5，机场即可上车', en: '<strong>Linha 120 — Parque Nacional</strong> · Cheapest, ~R$5, boards right outside terminal', es: '<strong>Linha 120 — Parque Nacional</strong> · Más económico, ~R$5, sale del terminal', pt: '<strong>Linha 120 — Parque Nacional</strong> · Mais barato, ~R$5, saída do terminal' } as T }, { icon: '🚕', text: { zh: '出租车 / Uber · 5 分钟, 便于携带行李', en: 'Taxi / Uber · 5 min, easy with luggage', es: 'Taxi / Uber · 5 min, ideal con equipaje', pt: 'Táxi / Uber · 5 min, ideal com bagagem' } as T }] },
    { icon: '🏙️', title: { zh: '从市中心 (Centro)', en: 'From Downtown (Centro)', es: 'Desde el Centro', pt: 'Do Centro' } as T, meta: '~20 km · 30-40 min', details: [{ icon: '🚌', text: { zh: '<strong>Linha 120</strong> · 贯穿市中心-机场-国家公园，约 40 分钟', en: '<strong>Linha 120</strong> · Loops through downtown → airport → park, ~40 min', es: '<strong>Linha 120</strong> · Recorre centro → aeropuerto → parque, ~40 min', pt: '<strong>Linha 120</strong> · Passa centro → aeroporto → parque, ~40 min' } as T }, { icon: '📱', text: { zh: 'Uber / 99 · R$30 — R$50, ~30 min', en: 'Uber / 99 · R$30 — R$50, ~30 min', es: 'Uber / 99 · R$30 — R$50, ~30 min', pt: 'Uber / 99 · R$30 — R$50, ~30 min' } as T }] },
    { icon: '🚗', title: { zh: '自驾与停车', en: 'Self-drive & Parking', es: 'En coche y estacionamiento', pt: 'Carro próprio' } as T, meta: 'Centro de Visitantes', details: [{ icon: '', text: { zh: '游客中心外设大型付费停车场；停车后换乘园区免费环保巴士进入景区。', en: 'Large paid lot at the visitor center; transfer to the free eco-shuttle inside.', es: 'Gran estacionamiento pago junto al centro de visitantes; luego autobús ecológico gratuito.', pt: 'Estacionamento pago no centro de visitantes; depois ônibus ecológico gratuito.' } as T }] },
  ],
};

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: '深度百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' } as T,
  heading: { zh: '时间、神话与<em class="text-[color:var(--color-emerald)]">不朽的自然界</em>', en: 'Time, myth, and the<em class="text-[color:var(--color-emerald)]"> immortal natural world</em>', es: 'Tiempo, mito y el<em class="text-[color:var(--color-emerald)]"> mundo natural inmortal</em>', pt: 'Tempo, mito e o<em class="text-[color:var(--color-emerald)]"> mundo natural imortal</em>' } as T,
  subtitle: {
    zh: '在这座横跨巴阿两国的瀑布群背后，交织着 1.3 亿年的地球脉动、古老原住民的凄美神话，以及一段鲜为人知的保护史。',
    en: 'Behind this cascade that straddles Brazil and Argentina lie 130 million years of planetary rhythms, an ancient indigenous legend of tragic beauty, and a little-known chapter of conservation history.',
    es: 'Detrás de esta cascada que se extiende entre Brasil y Argentina se entrelazan 130 millones de años de pulsaciones planetarias, una antigua leyenda indígena de trágica belleza y un capítulo poco conocido de la historia de la conservación.',
    pt: 'Por trás desta cascata que se estende entre Brasil e Argentina estão 130 milhões de anos de pulsação planetária, uma antiga lenda indígena de beleza trágica e um capítulo pouco conhecido da história da conservação.',
  } as T,
  items: [
    {
      icon: '🌋',
      title: { zh: '1.3 亿年的地球脉动：玄武岩上的时间切片', en: '130 Million Years: A Slice of Time on Basalt', es: '130 millones de años: una rebanada de tiempo sobre basalto', pt: '130 milhões de anos: uma fatia do tempo sobre basalto' } as T,
      body: {
        zh: '<p>今天我们所见到的断崖陡壁，其实是地球内部剧烈运动的遗产。</p><p><strong>塞拉杰拉尔组（Serra Geral Formation）：</strong> 追溯至 1.3 亿年前的中生代白垩纪，超大陆开始分裂。猛烈的火山喷发让熔岩漫溢，冷却后形成了坚不可摧的玄武岩阶地。</p><p><strong>溯源侵蚀（Headward Erosion）：</strong> 伊瓜苏瀑布是一个"活着的"地质奇观。伊瓜苏河在流向巴拉那河的途中遇到了巨大的断层。数百万年来，奔腾的河水如同电锯般切割着玄武岩，导致瀑布正以每年几毫米到几厘米的速度不断向河流上游"后退"。你今天站立的观景台，在数万年前，曾是瀑布奔腾而下坠入深渊的中心。</p>',
        en: '<p>The sheer cliffs we see today are the legacy of violent movements deep within the Earth.</p><p><strong>The Serra Geral Formation:</strong> Dating back 130 million years to the Mesozoic Cretaceous, the supercontinent began to fracture. Fierce volcanic eruptions flooded the landscape with lava, which cooled into the indestructible basalt terraces that underpin the falls.</p><p><strong>Headward Erosion:</strong> Iguaçu Falls is a "living" geological wonder. The Iguaçu River, on its journey to the Paraná, encountered a massive fault line. Over millions of years, the rushing water has been cutting into the basalt like a chainsaw, causing the waterfall to "retreat" upstream at a rate of a few millimetres to centimetres per year. The viewing platform where you stand today was, tens of thousands of years ago, the very centre of the cascade plunging into the abyss.</p>',
        es: '<p>Los acantilados que vemos hoy son el legado de movimientos violentos en las profundidades de la Tierra.</p><p><strong>La Formación Serra Geral:</strong> Hace 130 millones de años, en el Cretácico Mesozoico, el supercontinente comenzó a fracturarse. Erupciones volcánicas feroces inundaron el paisaje con lava, que se enfrió formando las indestructibles terrazas de basalto que sostienen las cataratas.</p><p><strong>Erosión remontante:</strong> Las Cataratas del Iguazú son una maravilla geológica "viva". El río Iguazú, en su camino hacia el Paraná, encontró una enorme falla. Durante millones de años, el agua ha estado cortando el basalto como una sierra, haciendo que la catarata "retroceda" río arriba unos milímetros a centímetros por año. La plataforma donde estás hoy era, hace decenas de miles de años, el centro mismo de la cascada.</p>',
        pt: '<p>As falésias que vemos hoje são o legado de movimentos violentos nas profundezas da Terra.</p><p><strong>A Formação Serra Geral:</strong> Há 130 milhões de anos, no Cretáceo Mesozoico, o supercontinente começou a se fraturar. Erupções vulcânicas ferozes inundaram a paisagem com lava, que esfriou formando os indestrutíveis terraços de basalto que sustentam as cataratas.</p><p><strong>Erosão remontante:</strong> As Cataratas do Iguaçu são uma maravilha geológica "viva". O rio Iguaçu, em seu caminho para o Paraná, encontrou uma enorme falha. Por milhões de anos, a água corrente vem cortando o basalto como uma serra elétrica, fazendo a cachoeira "recuar" rio acima a alguns milímetros a centímetros por ano. O mirante onde você está hoje era, há dezenas de milhares de anos, o centro exato da cascata despencando no abismo.</p>',
      } as T,
      img: '/gallery/trilha-das-cataratas-brasil (5).jpg',
    },
    {
      icon: '🐍',
      title: { zh: '瓜拉尼人的悲歌：魔鬼之喉的诞生', en: 'The Guarani Lament: Birth of the Devil\'s Throat', es: 'El lamento guaraní: nacimiento de la Garganta del Diablo', pt: 'O lamento guarani: nascimento da Garganta do Diabo' } as T,
      body: {
        zh: '<p>在地理学家用尺子测量这里之前，这片土地的最初主人——瓜拉尼（Guarani）原住民，早就用神话解释了这股令人生畏的力量。在瓜拉尼语中，"I" 意为水，"Guazú" 意为大，这便是伊瓜苏（Iguazu）的由来。</p><p><strong>深渊中的羁绊：</strong> 传说中，美丽的部落少女 Naipi 被选作祭品献给外形如巨蛇的森林之神 M\'Boi。为了拯救爱人，青年勇士 Tarobá 带着 Naipi 乘独木舟顺流私奔。暴怒的蛇神猛烈撕裂了大地，河床瞬间崩塌，形成了今天深不见底的"魔鬼之喉"（Garganta do Diabo）。</p><p>Naipi 被化作了悬崖边缘的一块岩石，永远经受瀑布的冲刷；而 Tarobá 则被变成了一棵棕榈树，在悬崖对岸绝望地注视着爱人。在阳光下横跨峡谷的彩虹，据说是他们之间连接彼此的叹息。</p>',
        en: '<p>Long before geologists measured this place with their instruments, the original inhabitants of this land — the Guarani people — had already explained its fearsome power through myth. In the Guarani tongue, "I" means water and "Guazú" means great — hence Iguazu.</p><p><strong>Bond across the abyss:</strong> Legend tells of Naipi, a beautiful maiden chosen as a sacrifice to M\'Boi, the serpent-like forest god. To save his beloved, the young warrior Tarobá fled with Naipi downstream in a canoe. Enraged, the serpent god tore the earth apart; the riverbed collapsed in an instant, forming the bottomless chasm we call the Devil\'s Throat (Garganta do Diabo).</p><p>Naipi was turned into a rock at the cliff\'s edge, forever battered by the waterfall; Tarobá was transformed into a palm tree on the opposite bank, gazing at his beloved in eternal despair. The rainbow that arcs across the gorge in sunlight is said to be the sigh that still connects them.</p>',
        es: '<p>Mucho antes de que los geólogos midieran este lugar con sus instrumentos, los habitantes originales — el pueblo guaraní — ya habían explicado su poder temible a través del mito. En la lengua guaraní, "I" significa agua y "Guazú" significa grande: de ahí Iguazú.</p><p><strong>Vínculo sobre el abismo:</strong> Cuenta la leyenda que Naipi, una hermosa doncella, fue elegida como sacrificio para M\'Boi, el dios serpiente del bosque. Para salvar a su amada, el joven guerrero Tarobá huyó con Naipi río abajo en una canoa. Furioso, el dios serpiente desgarró la tierra; el lecho del río se desplomó en un instante, formando el abismo sin fondo que llamamos la Garganta del Diablo.</p><p>Naipi fue convertida en una roca al borde del acantilado, golpeada eternamente por la cascada; Tarobá fue transformado en una palmera en la orilla opuesta, contemplando a su amada en eterna desesperación. El arcoíris que cruza la garganta bajo el sol es, según dicen, el suspiro que aún los conecta.</p>',
        pt: '<p>Muito antes de os geólogos medirem este lugar com seus instrumentos, os habitantes originais — o povo guarani — já haviam explicado seu poder temível através do mito. Na língua guarani, "I" significa água e "Guazú" significa grande — daí Iguaçu.</p><p><strong>Laço sobre o abismo:</strong> Conta a lenda que Naipi, uma bela donzela, foi escolhida como sacrifício para M\'Boi, o deus-serpente da floresta. Para salvar sua amada, o jovem guerreiro Tarobá fugiu com Naipi rio abaixo em uma canoa. Furioso, o deus-serpente rasgou a terra; o leito do rio desabou em um instante, formando o abismo sem fundo que chamamos de Garganta do Diabo.</p><p>Naipi foi transformada em uma rocha na beira do penhasco, eternamente açoitada pela cachoeira; Tarobá foi transformado em uma palmeira na margem oposta, contemplando sua amada em eterno desespero. O arco-íris que cruza a garganta sob o sol é, dizem, o suspiro que ainda os conecta.</p>',
      } as T,
      img: '/gallery/trilha-das-cataratas-brasil (12).jpg',
    },
    {
      icon: '💧',
      title: { zh: '水文密码：气候变化的真实镜像', en: 'Hydrological Code: A Mirror of Climate Change', es: 'Código hidrológico: un espejo del cambio climático', pt: 'Código hidrológico: um espelho da mudança climática' } as T,
      body: {
        zh: '<p>伊瓜苏不仅是风景，更是南美洲内陆水文与全球气候系统的巨大"温度计"。</p><p><strong>极端的脉搏：</strong> 瀑布的常规流量约为 1,500 m³/s（每秒 150 万升）。然而，在厄尔尼诺现象（El Niño）活跃的年份，气候系统会发生剧烈波动。2014 年 6 月，暴雨导致伊瓜苏河水暴涨，洪峰流量达到了骇人听闻的 <strong>46,300 m³/s</strong> —— 是平时的 30 倍以上。怒吼的泥浆水完全吞噬了我们今天行走的观景栈道。</p><p>相反，在极端干旱的年份，瀑布也曾数次断流，露出 1.3 亿年前的完整岩床。这里的每一滴水，都在诉说着地球气候的脆弱平衡。</p>',
        en: '<p>Iguaçu is not just scenery — it is a giant "thermometer" for South America\'s inland hydrology and the global climate system.</p><p><strong>Extreme pulse:</strong> The falls\' regular flow hovers around 1,500 m³/s (1.5 million litres per second). But during active El Niño years, the climate system swings violently. In June 2014, torrential rains swelled the Iguaçu River to a staggering peak of <strong>46,300 m³/s</strong> — more than 30 times the normal rate. The roaring, mud-choked water completely swallowed the very catwalks we walk today.</p><p>Conversely, during extreme drought years, the falls have fallen silent several times, exposing the 130-million-year-old basalt bed in its entirety. Every drop of water here tells the story of our planet\'s fragile climatic equilibrium.</p>',
        es: '<p>Iguazú no es solo paisaje: es un "termómetro" gigante para la hidrología interior de Sudamérica y el sistema climático global.</p><p><strong>Pulso extremo:</strong> El caudal habitual ronda los 1.500 m³/s (1,5 millones de litros por segundo). Pero durante los años de El Niño activo, el sistema climático oscila violentamente. En junio de 2014, lluvias torrenciales elevaron el río Iguazú a un pico asombroso de <strong>46.300 m³/s</strong> — más de 30 veces lo normal. El agua rugiente y cargada de barro se tragó por completo las pasarelas que hoy caminamos.</p><p>Por el contrario, durante años de sequía extrema, las cataratas se han silenciado varias veces, dejando al descubierto el lecho de basalto de 130 millones de años en su totalidad. Cada gota de agua aquí cuenta la historia del frágil equilibrio climático de nuestro planeta.</p>',
        pt: '<p>Iguaçu não é apenas paisagem — é um "termômetro" gigante para a hidrologia interior da América do Sul e o sistema climático global.</p><p><strong>Pulso extremo:</strong> A vazão regular gira em torno de 1.500 m³/s (1,5 milhão de litros por segundo). Mas durante anos de El Niño ativo, o sistema climático oscila violentamente. Em junho de 2014, chuvas torrenciais elevaram o rio Iguaçu a um pico assombroso de <strong>46.300 m³/s</strong> — mais de 30 vezes o normal. A água barrenta e rugidora engoliu completamente as mesmas passarelas que caminhamos hoje.</p><p>Por outro lado, durante anos de seca extrema, as cataratas se silenciaram várias vezes, expondo o leito de basalto de 130 milhões de anos em sua totalidade. Cada gota d\'água aqui conta a história do frágil equilíbrio climático do nosso planeta.</p>',
      } as T,
      img: '/gallery/trilha-das-cataratas-brasil (14).jpg',
    },
    {
      icon: '✈️',
      title: { zh: '从私人领地到人类遗产：航空之父的"骑士精神"', en: 'From Private Estate to Human Heritage: The Aviator\'s Chivalry', es: 'De finca privada a patrimonio humano: la caballerosidad del aviador', pt: 'De propriedade privada a patrimônio humano: a cavalheirismo do aviador' } as T,
      body: {
        zh: '<p>1541 年，西班牙探险家 Álvar Núñez Cabeza de Vaca 在丛林中迷路时听到雷鸣般的水声，成为了首位记录瀑布的欧洲人。但这并不是它近代史上最重要的一段往事。你可能不知道，这片属于全人类的世界自然遗产，在一百多年前，曾是私人的后花园。</p><p><strong>300 公里的骑行求救：</strong> 1916 年，巴西著名的"航空之父"、发明家 <strong>阿尔贝托·桑托斯-杜蒙特（Alberto Santos-Dumont）</strong> 参观了伊瓜苏。当这位见多识广的飞行先驱被大自然的鬼斧神工震撼时，却惊讶地得知这片土地竟然属于一位名叫 Jesus Val 的乌拉圭私人地主。</p><p>为了不让这片自然奇迹沦为私人牟利的工具，桑托斯-杜蒙特立刻行动。他骑着马穿越了近 300 公里的原始丛林，日夜兼程赶到巴拉那州首府库里蒂巴（Curitiba）。他用自己的声望极力游说州长："这样壮丽的自然奇观，必须属于公共财产，属于全人类！"</p><p>在他的极力推动下，仅仅几个月后，当地政府便下令将瀑布区域收归公有。这直接促成了 1939 年伊瓜苏国家公园的正式建立。今天，当您在步道终点附近看到那尊桑托斯-杜蒙特的青铜雕像时，请别忘了向这位为自然奔走的先驱致敬。</p>',
        en: '<p>In 1541, the Spanish explorer Álvar Núñez Cabeza de Vaca, lost in the jungle, heard a thunderous roar and became the first European to record the falls. But that is not the most important chapter in its modern history. You may not know that this UNESCO World Heritage site — the patrimony of all humanity — was, just over a century ago, a private backyard.</p><p><strong>The 300-kilometre ride:</strong> In 1916, Brazil\'s celebrated "Father of Aviation", the inventor <strong>Alberto Santos-Dumont</strong>, visited Iguaçu. The widely-travelled aviation pioneer was awestruck by nature\'s masterpiece — but was horrified to learn that this land belonged to a private Uruguayan landowner named Jesus Val.</p><p>Determined that this natural wonder should never become an instrument of private profit, Santos-Dumont sprang into action. He rode on horseback nearly 300 kilometres through pristine jungle, travelling day and night to reach Curitiba, the capital of Paraná state. There, wielding his immense prestige, he implored the governor: "A natural wonder of this magnitude must belong to the public domain — to all of humanity!"</p><p>Driven by his advocacy, within just a few months the state government expropriated the falls area. This directly led to the official establishment of Iguaçu National Park in 1939. Today, when you see the bronze statue of Santos-Dumont near the trail\'s endpoint, pause for a moment and pay tribute to the pioneer who rode 300 kilometres to save this wonder for the world.</p>',
        es: '<p>En 1541, el explorador español Álvar Núñez Cabeza de Vaca, perdido en la selva, escuchó un rugido atronador y se convirtió en el primer europeo en registrar las cataratas. Pero ese no es el capítulo más importante de su historia moderna. Quizás no sepas que este Patrimonio de la Humanidad fue, hace poco más de un siglo, un jardín privado.</p><p><strong>La cabalgata de 300 kilómetros:</strong> En 1916, el célebre "Padre de la Aviación" brasileña, el inventor <strong>Alberto Santos-Dumont</strong>, visitó Iguazú. El pionero, que tanto mundo había visto, quedó maravillado — y horrorizado al enterarse de que esta tierra pertenecía a un terrateniente uruguayo llamado Jesus Val.</p><p>Decidido a que esta maravilla jamás fuera instrumento de lucro privado, Santos-Dumont montó a caballo y recorrió casi 300 kilómetros de selva virgen, día y noche, hasta Curitiba. Allí, con todo su prestigio, suplicó al gobernador: "¡Una maravilla natural de esta magnitud debe ser del dominio público, de toda la humanidad!"</p><p>Gracias a su incansable defensa, en pocos meses el gobierno estatal expropió el área de las cataratas. Esto condujo directamente a la creación del Parque Nacional do Iguaçu en 1939. Hoy, cuando veas la estatua de bronce de Santos-Dumont cerca del final del sendero, detente un momento y rinde homenaje al pionero que cabalgó 300 kilómetros para salvar esta maravilla para el mundo.</p>',
        pt: '<p>Em 1541, o explorador espanhol Álvar Núñez Cabeza de Vaca, perdido na selva, ouviu um rugido atroador e tornou-se o primeiro europeu a registrar as cataratas. Mas esse não é o capítulo mais importante de sua história moderna. Talvez você não saiba que este Patrimônio Mundial da Humanidade foi, há pouco mais de um século, um quintal privado.</p><p><strong>A cavalgada de 300 quilômetros:</strong> Em 1916, o célebre "Pai da Aviação" brasileira, o inventor <strong>Alberto Santos-Dumont</strong>, visitou Iguaçu. O pioneiro, que já tinha visto o mundo, ficou maravilhado — e horrorizado ao descobrir que esta terra pertencia a um proprietário privado uruguaio chamado Jesus Val.</p><p>Decidido a que esta maravilha jamais fosse instrumento de lucro privado, Santos-Dumont montou a cavalo e percorreu quase 300 quilômetros de mata virgem, dia e noite, até Curitiba. Lá, com todo o seu prestígio, implorou ao governador: "Uma maravilha natural desta magnitude deve pertencer ao domínio público — a toda a humanidade!"</p><p>Impulsionada por sua defesa incansável, em poucos meses o governo estadual desapropriou a área das cataratas. Isso levou diretamente à criação do Parque Nacional do Iguaçu em 1939. Hoje, quando você vir a estátua de bronze de Santos-Dumont perto do final da trilha, faça uma pausa e preste homenagem ao pioneiro que cavalgou 300 quilômetros para salvar esta maravilha para o mundo.</p>',
      } as T,
      img: '/gallery/trilha-das-cataratas-brasil (25).jpg',
    },
  ],
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: '视觉图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' } as T,
  heading: { zh: '水、光、雾、彩虹', en: 'Water. Light. Mist. Rainbow.', es: 'Agua. Luz. Niebla. Arcoíris.', pt: 'Água. Luz. Névoa. Arco-íris.' } as T,
  viewMorePhotos: { zh: '在 Google 地图上查看更多照片', en: 'View more photos on Google Maps', es: 'Ver más fotos en Google Maps', pt: 'Ver mais fotos no Google Maps' } as T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: '游客评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' } as T,
  heading: { zh: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 8,954 位旅行者', en: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · from 8,954 travelers', es: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 8,954 viajeros', pt: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 8.954 viajantes' } as T,
  viewMoreReviews: { zh: '在 Google 地图上查看更多评价', en: 'View more reviews on Google Maps', es: 'Ver más reseñas en Google Maps', pt: 'Ver mais avaliações no Google Maps' } as T,
  items: [
    { stars: '★★★★★', date: '2025-05', title: { zh: '"大自然的终极震撼"', en: '"Nature at its most humbling"', es: '"La naturaleza en su forma más humilde"', pt: '"A natureza em sua forma mais humilde"' } as T, desc: { zh: '相比阿根廷侧，巴西这边的步道能让你看清伊瓜苏的全貌。走到魔鬼之喉栈道的时候，那种水汽和轰鸣声让人终生难忘。记得带雨衣！', en: 'Compared to the Argentine side, the Brazilian trail shows you the whole picture. The Devil\'s Throat catwalk — the mist and roar — is unforgettable. Bring a poncho!', es: 'Comparado con Argentina, el lado brasileño te muestra todo. La pasarela de la Garganta del Diablo, con la niebla y el rugido, es inolvidable. ¡Lleva poncho!', pt: 'Comparado ao lado argentino, o lado brasileiro mostra o todo. A passarela da Garganta do Diabo, com névoa e estrondo, é inesquecível. Leve capa!' } as T, author: 'Maria S. · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: '"组织有序，设施完善"', en: '"Perfectly organized park"', es: '"Perfectamente organizado"', pt: '"Perfeitamente organizado"' } as T, desc: { zh: '公园巴士系统高效无比，步道维护得非常好——我 70 岁的父亲都能轻松走完。全景电梯的景致无法用言语形容。', en: 'The park\'s shuttle bus system is incredibly efficient, and the trail itself is beautifully maintained — even my 70-year-old father made it through easily. The panoramic elevator at the end offers a view that words simply can\'t do justice to.', es: 'El sistema de autobuses del parque es increíblemente eficiente, y el sendero está magníficamente mantenido — incluso mi padre de 70 años lo hizo fácilmente. El ascensor panorámico al final ofrece una vista que las palabras no pueden describir.', pt: 'O sistema de ônibus é incrivelmente eficiente, e a trilha é lindamente mantida — até meu pai de 70 anos a fez facilmente. O elevador panorâmico oferece uma vista que as palavras não descrevem.' } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: '"彩虹很美，浣熊调皮"', en: '"Beautiful rainbows, cheeky coatis"', es: '"Arcoíris hermosos, coatíes traviesos"', pt: '"Arco-íris lindos, quatis levados"' } as T, desc: { zh: '风景绝对是满分，水汽形成的彩虹太美了。扣掉一星是因为有游客不遵守规定喂浣熊，导致动物有点攻击性。大家一定要保护好自己的零食！', en: 'Scenery is a perfect 10, the mist-rainbows are stunning. Lost a star because some tourists fed the coatis, making them a bit aggressive. Guard your snacks!', es: 'Paisaje 10/10, arcoíris increíbles. Le quito una estrella porque algunos turistas alimentan a los coatíes y se ponen agresivos. ¡Cuida tus snacks!', pt: 'Paisagem 10/10, arco-íris incríveis. Tiro uma estrela porque alguns turistas alimentam os quatis, que ficam agressivos. Cuide dos seus lanches!' } as T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: '"改变人生的体验"', en: '"Una experiencia que cambia la vida"', es: '"Una experiencia que cambia la vida"', pt: '"Uma experiência que muda a vida"' } as T, desc: { zh: '我已经看过阿根廷侧，但巴西侧的全景视角完全是另一个维度。魔鬼之喉上的双彩虹让我感动落泪。100% 推荐两侧都去。', en: 'Ya había visto el lado argentino, pero la vista panorámica desde Brasil es simplemente otra dimensión. El arco iris doble sobre la Garganta del Diablo me hizo llorar. 100% recomendado hacer ambos lados.', es: 'Ya había visto el lado argentino, pero la vista panorámica desde Brasil es simplemente otra dimensión. El arco iris doble sobre la Garganta del Diablo me hizo llorar. 100% recomendado hacer ambos lados.', pt: 'Já tinha visto o lado argentino, mas a vista panorâmica do Brasil é outra dimensão. O arco-íris duplo sobre a Garganta do Diabo me fez chorar. 100% recomendado.' } as T, author: 'Sofía R. · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: '"门票每一分钱都值得"', en: '"Vale cada centavo do ingresso"', es: '"Vale cada centavo de entrada"', pt: '"Vale cada centavo do ingresso"' } as T, desc: { zh: '我是巴西人，已经去了三次。每次都有全新的感受——雨季水量惊人，旱季则能更清晰地看清岩层。步道无可挑剔。', en: 'Sou brasileiro e já visitei três vezes. Cada visita é uma emoção nova — na estação chuvosa o volume de água é assustador, na seca dá pra ver as formações rochosas com mais clareza. A trilha é impecável.', es: 'Soy brasileño y ya la visité tres veces. Cada visita es una emoción nueva — en época de lluvias el volumen de agua es aterrador, en seca se ven mejor las formaciones rocosas. La trilha es impecable.', pt: 'Sou brasileiro e já visitei três vezes. Cada visita é uma emoção nova — na estação chuvosa o volume de água é assustador, na seca dá pra ver as formações rochosas com mais clareza. A trilha é impecável.' } as T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★★', date: '2024-11', title: { zh: '"蜜月最美好的一天"', en: '"Best day of our honeymoon"', es: '"El mejor día de nuestra luna de miel"', pt: '"O melhor dia da nossa lua de mel"' } as T, desc: { zh: '我们预约了早上 9 点入场以避开人潮，这是最明智的决定。悠闲地走完步道，看到了巨嘴鸟和浣熊，最后在 Porto Canoas 俯瞰河流享用午餐。绝对是神奇的蜜月回忆。', en: 'We booked the 9AM entry to avoid crowds and it was the best decision. Walked the trail slowly, saw toucans, coatis, and finished with lunch at Porto Canoas overlooking the river. Absolutely magical honeymoon memory.', es: 'Reservamos la entrada de las 9AM para evitar multitudes y fue la mejor decisión. Caminamos despacio, vimos tucanes, coatíes y terminamos con almuerzo en Porto Canoas. Recuerdo de luna de miel absolutamente mágico.', pt: 'Reservamos a entrada das 9h para evitar multidões e foi a melhor decisão. Caminhamos devagar, vimos tucanos, quatis e terminamos com almoço no Porto Canoas. Memória de lua de mel absolutamente mágica.' } as T, author: 'Emily & Tom H. · 🇬🇧' },
    { stars: '★★★★★', date: '2025-01', title: { zh: '"雨季的水量令人震撼"', en: '"Staggering wet-season volume"', es: '"Volumen de agua impresionante"', pt: '"Volume de água impressionante"' } as T, desc: { zh: '一月份雨季水量超级大。观景台雨伞完全没用，雨衣是必须的。相机请放入防水袋。但彩虹出现率极高，强力推荐。', en: 'January is the rainy season and water volume was staggering. Umbrellas are useless at the viewpoint — raincoat mandatory. Put cameras in waterproof bags. But rainbow probability is overwhelmingly high — highly recommended.', es: 'Enero es temporada de lluvias y el volumen de agua fue alucinante. Paraguas inútil en el mirador — impermeable obligatorio. Cámara en bolsa estanca. Pero probabilidad de arcoíris es altísima.', pt: 'Janeiro é estação chuvosa e o volume de água estava absurdo. Guarda-chuva não serve no mirante — capa de chuva obrigatória. Câmera em bolsa à prova d\'água. Mas probabilidade de arco-íris é altíssima.' } as T, author: 'Kenji T. · 🇯🇵' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-12', title: { zh: '"壮观但人流较大"', en: '"Spectacular but crowded"', es: '"Espectacular pero lleno"', pt: '"Espetacular mas lotado"' } as T, desc: { zh: '景色没得说，绝对是世界级的震撼。唯一的问题是下午两点后人非常多，观景台栈道要排队走，拍照很难避开人群。强烈建议 9 点开门就进园。', en: 'Scenery is world-class. Only issue: after 2 PM it\'s packed, you queue on the catwalks and photos are crowded. Strongly recommend arriving at 9 AM opening.', es: 'Paisaje de nivel mundial. Único problema: después de las 14 h está llenísimo. Recomiendo llegar a las 9 h.', pt: 'Paisagem de nível mundial. Único problema: depois das 14 h fica muito cheio. Recomendo chegar às 9 h.' } as T, author: 'Wang H. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-05', title: { zh: '"工程奇迹与纯粹自然的完美结合"', en: '"Sensational engineering meets pure nature"', es: '"Ingeniería sensacional y naturaleza pura"', pt: '"Engenharia sensacional encontra natureza pura"' } as T, desc: { zh: '这里的无障碍设施是世界级的——我母亲坐轮椅，几乎体验了整条步道，包括魔鬼之喉栈道。通往 Porto Canoas 的电梯让一切无缝衔接。太棒了，巴西。', en: 'Wheelchair accessibility here is world-class — my mother uses a wheelchair and she was able to experience nearly the entire trail including the Devil\'s Throat walkway. The elevator to Porto Canoas made everything seamless. Bravo, Brazil.', es: 'La accesibilidad en silla de ruedas aquí es de clase mundial — mi madre pudo experimentar casi todo el sendero. El ascensor a Porto Canoas hizo todo perfecto. Bravo, Brasil.', pt: 'A acessibilidade aqui é de classe mundial — minha mãe, cadeirante, pôde experimentar quase toda a trilha. O elevador para Porto Canoas fez tudo perfeito. Bravo, Brasil.' } as T, author: 'Anna K. · 🇩🇪' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: '周边联动', en: 'Nearby', es: 'Alrededores', pt: 'Arredores' } as T,
  heading: { zh: '还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>', en: 'Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>', es: 'Extiende tu viaje<em class="text-[color:var(--color-emerald)]"> aún más</em>', pt: 'Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>' } as T,
  items: [
    { img: '/gallery/trilha-das-cataratas-brasil (17).jpg', title: '🦜 Parque das Aves', desc: { zh: '距国家公园入口仅 300 米。南美最大的鸟类保护区，1,300+ 只热带鸟类，可零距离接触巨嘴鸟与金刚鹦鹉。', en: '300 m from the park entrance. South America\'s largest bird sanctuary; 1,300+ tropical birds you can meet up-close.', es: 'A 300 m del parque. El santuario de aves más grande de Sudamérica; 1.300+ aves tropicales.', pt: 'A 300 m do parque. O maior santuário de aves da América do Sul; 1.300+ aves tropicais.' } as T },
    { img: '/gallery/trilha-das-cataratas-brasil (21).jpg', title: '🚤 Macuco Safari', desc: { zh: '园内探险项目。敞篷吉普穿越雨林，快艇逆流冲入瀑布下方，体验瀑布威力最刺激的方式。', en: 'Inside the park. Open jeeps through the jungle, then speedboats charge upstream directly under the falls.', es: 'Dentro del parque. Jeeps abiertos por la selva, luego lanchas hasta debajo de las cascadas.', pt: 'Dentro do parque. Jipes abertos pela mata e lanchas até debaixo das quedas.' } as T },
    { img: '/gallery/trilha-das-cataratas-brasil (19).jpg', title: '⚡ Itaipu Binacional', desc: { zh: '世界上发电量最大的水电站之一。宏伟混凝土大坝是现代工程奇迹，提供常规观光与深入机房专业路线。', en: 'One of the world\'s largest hydroelectric plants. A modern engineering wonder with both standard tours and deep technical routes.', es: 'Una de las mayores hidroeléctricas del mundo. Ofrece visitas turísticas y rutas técnicas profundas.', pt: 'Uma das maiores hidrelétricas do mundo. Visitas turísticas e rotas técnicas profundas.' } as T },
  ],
};

// ── Ecology (大西洋雨林的脉搏：生态与物种名录) ──
export const ecology = {
  sectionNum: { zh: '生态名录', en: 'Ecology', es: 'Ecología', pt: 'Ecologia' } as T,
  heading: { zh: '大西洋雨林的<em class="text-[color:var(--color-emerald)]">脉搏</em>', en: 'The Pulse of the<em class="text-[color:var(--color-emerald)]"> Atlantic Rainforest</em>', es: 'El pulso de la<em class="text-[color:var(--color-emerald)]"> Selva Atlántica</em>', pt: 'O pulso da<em class="text-[color:var(--color-emerald)]"> Mata Atlântica</em>' } as T,
  intro: {
    zh: '伊瓜苏不仅是水的奇迹，更是生命的诺亚方舟。环绕大瀑布的大西洋雨林（Mata Atlântica）是全球生物多样性最丰富的热带雨林之一。由于数百年的过度开发，这片原本广袤的雨林如今已支离破碎，伊瓜苏国家公园不仅是其在巴西内陆最大的残存地，更是无数珍稀动植物的最后庇护所。在这里，您的每一次凝视，都可能是与这些地球古老居民的珍贵相遇。',
    en: 'Iguaçu is not just a miracle of water — it is a Noah\'s Ark for life itself. The Atlantic Rainforest (Mata Atlântica) that envelops the falls is one of the most biodiverse tropical forests on Earth. Centuries of exploitation have left this once-vast biome fragmented; Iguaçu National Park is not only its largest inland remnant in Brazil, but also the final refuge for countless rare species. Every glance you cast here may be a precious encounter with one of the planet\'s most ancient inhabitants.',
    es: 'Iguazú no es solo un milagro del agua — es un Arca de Noé para la vida. La Selva Atlántica (Mata Atlântica) que envuelve las cataratas es uno de los bosques tropicales con mayor biodiversidad del planeta. Siglos de explotación han dejado este bioma antaño vasto fragmentado; el Parque Nacional do Iguaçu no solo es su mayor remanente interior en Brasil, sino también el refugio final de innumerables especies raras. Cada mirada que usted dirija aquí puede ser un encuentro precioso con uno de los habitantes más antiguos de la Tierra.',
    pt: 'Iguaçu não é apenas um milagre da água — é uma Arca de Noé para a própria vida. A Mata Atlântica que envolve as cataratas é uma das florestas tropicais mais biodiversas do planeta. Séculos de exploração deixaram este bioma outrora vasto fragmentado; o Parque Nacional do Iguaçu não é apenas seu maior remanescente interior no Brasil, mas também o refúgio final de inúmeras espécies raras. Cada olhar que você lançar aqui pode ser um encontro precioso com um dos habitantes mais antigos da Terra.',
  } as T,
  // IUCN badge labels
  iucnVU: { zh: '易危 VU', en: 'Vulnerable VU', es: 'Vulnerable VU', pt: 'Vulnerável VU' } as T,
  iucnNT: { zh: '近危 NT', en: 'Near Threatened NT', es: 'Casi Amenazado NT', pt: 'Quase Ameaçado NT' } as T,
  iucnLC: { zh: '无危 LC', en: 'Least Concern LC', es: 'Preocupación Menor LC', pt: 'Pouco Preocupante LC' } as T,
  iucnEN: { zh: '极危 EN', en: 'Endangered EN', es: 'En Peligro EN', pt: 'Em Perigo EN' } as T,
  // Section labels
  secUmbrella: { zh: '旗舰与伞护物种', en: 'Flagship & Umbrella Species', es: 'Especies Bandera y Paraguas', pt: 'Espécies Bandeira e Guarda-chuva' } as T,
  secCommensal: { zh: '常见共生物种', en: 'Commensal & Observable Species', es: 'Especies Comensales y Observables', pt: 'Espécies Comensais e Observáveis' } as T,
  secFlora: { zh: '珍稀植物群', en: 'Endemic Flora', es: 'Flora Endémica', pt: 'Flora Endêmica' } as T,
  // Species
  species: [
    {
      name: { zh: '美洲豹', en: 'Jaguar', es: 'Jaguar', pt: 'Onça-pintada' } as T,
      latin: 'Panthera onca',
      niche: { zh: '顶级掠食者', en: 'Apex predator', es: 'Depredador ápice', pt: 'Predador de topo' } as T,
      desc: {
        zh: '作为大西洋雨林的"伞护种"，美洲豹的繁衍状况直接反映了整个生态系统的健康程度。公园内目前正开展严格的"伊瓜苏美洲豹项目"（Projeto Onças do Iguaçu）。虽然在常规步道上很难见到它们，但它们正隐秘地巡视着这片领地。',
        en: 'As an "umbrella species" of the Atlantic Rainforest, the jaguar\'s reproductive health directly reflects the health of the entire ecosystem. The park currently runs the rigorous "Iguaçu Jaguar Project" (Projeto Onças do Iguaçu). Though rarely seen on the main trail, they silently patrol this territory.',
        es: 'Como "especie paraguas" de la Selva Atlántica, la salud reproductiva del jaguar refleja directamente la salud de todo el ecosistema. El parque ejecuta el riguroso "Proyecto Jaguar de Iguazú" (Projeto Onças do Iguaçu). Aunque rara vez se ven en el sendero principal, patrullan silenciosamente este territorio.',
        pt: 'Como "espécie guarda-chuva" da Mata Atlântica, a saúde reprodutiva da onça-pintada reflete diretamente a saúde de todo o ecossistema. O parque executa o rigoroso "Projeto Onças do Iguaçu". Embora raramente vistas na trilha principal, elas patrulham silenciosamente este território.',
      } as T,
      iucn: 'NT',
      icon: '🐆',
    },
    {
      name: { zh: '南美貘', en: 'South American Tapir', es: 'Tapir Sudamericano', pt: 'Anta' } as T,
      latin: 'Tapirus terrestris',
      niche: { zh: '森林园丁（大型食草动物）', en: 'Forest gardener (large herbivore)', es: 'Jardinero del bosque (gran herbívoro)', pt: 'Jardineiro da floresta (grande herbívoro)' } as T,
      desc: {
        zh: '南美洲现存最大的陆生哺乳动物。它们每天在雨林中穿行觅食，排泄出的未消化种子成为了森林再生的关键，是维持雨林植物多样性的重要推手。',
        en: 'The largest extant land mammal in South America. As they roam the forest daily in search of food, the undigested seeds they excrete become the key to forest regeneration — making them vital drivers of rainforest plant diversity.',
        es: 'El mamífero terrestre más grande de Sudamérica. Mientras recorren el bosque a diario en busca de alimento, las semillas no digeridas que excretan se convierten en la clave de la regeneración del bosque, impulsando la diversidad vegetal de la selva.',
        pt: 'O maior mamífero terrestre existente na América do Sul. Enquanto percorrem a mata diariamente em busca de alimento, as sementes não digeridas que excretam tornam-se a chave para a regeneração da floresta, impulsionando a diversidade vegetal da mata.',
      } as T,
      iucn: 'VU',
      icon: '🐾',
    },
    {
      name: { zh: '南美浣熊', en: 'South American Coati', es: 'Coatí Sudamericano', pt: 'Quati' } as T,
      latin: 'Nasua nasua',
      niche: { zh: '杂食性机会主义者', en: 'Omnivorous opportunist', es: 'Oportunista omnívoro', pt: 'Oportunista onívoro' } as T,
      desc: {
        zh: '<strong>⚠ 特别警告：</strong>这是步道上最常见的动物，但请绝对不要喂食。人类食品中的糖分和盐分会导致它们患上糖尿病和高血压。喂食行为还会改变它们的觅食天性，导致它们过度聚集并产生攻击性。爱它，请保持距离。',
        en: '<strong>⚠ Important Warning:</strong> The most commonly seen animal on the trail — but please, never feed them. The sugar and salt in human food cause diabetes and hypertension in coatis. Feeding also alters their natural foraging behaviour, leading to overcrowding and aggression. If you love them, keep your distance.',
        es: '<strong>⚠ Advertencia importante:</strong> El animal más visto en el sendero — pero por favor, nunca los alimente. El azúcar y la sal de la comida humana les causan diabetes e hipertensión. Alimentarlos también altera su comportamiento natural de forrajeo, provocando hacinamiento y agresividad. Si los ama, mantenga la distancia.',
        pt: '<strong>⚠ Aviso importante:</strong> O animal mais visto na trilha — mas por favor, nunca os alimente. O açúcar e o sal da comida humana causam diabetes e hipertensão nos quatis. Alimentá-los também altera seu comportamento natural de forrageamento, provocando aglomeração e agressividade. Se você os ama, mantenha distância.',
      } as T,
      iucn: 'LC',
      icon: '🦝',
    },
    {
      name: { zh: '托哥巨嘴鸟', en: 'Toco Toucan', es: 'Tucán Toco', pt: 'Tucano-toco' } as T,
      latin: 'Ramphastos toco',
      niche: { zh: '种子传播者', en: 'Seed disperser', es: 'Dispersor de semillas', pt: 'Dispersor de sementes' } as T,
      desc: {
        zh: '拥有不成比例的巨大且色彩斑斓的喙。这不仅是求偶的标志，更是极其高效的散热器官。它们是雨林中多种大型坚果的唯一吞咽与传播者。',
        en: 'Possessing a disproportionately large and brilliantly coloured beak — not merely a courtship display, but also a highly efficient thermal radiator. They are the sole swallowers and dispersers of many large rainforest nuts.',
        es: 'Posee un pico desproporcionadamente grande y de colores brillantes — no solo es una exhibición de cortejo, sino también un radiador térmico altamente eficiente. Son los únicos tragadores y dispersores de muchas nueces grandes de la selva.',
        pt: 'Possui um bico desproporcionalmente grande e colorido — não apenas uma exibição de corte, mas também um radiador térmico altamente eficiente. São os únicos engolidores e dispersores de muitas castanhas grandes da mata.',
      } as T,
      iucn: 'LC',
      icon: '🦜',
    },
    {
      name: { zh: '伊瓜苏蓝闪蝶', en: 'Iguaçu Blue Morpho', es: 'Morfo Azul de Iguazú', pt: 'Borboleta Morpho Azul' } as T,
      latin: 'Morpho menelaus',
      niche: { zh: '授粉者', en: 'Pollinator', es: 'Polinizador', pt: 'Polinizador' } as T,
      desc: {
        zh: '步道水雾中常能见到它们闪烁着金属蓝光的身影。其美丽的蓝色并非色素，而是翅膀鳞片上微观结构对光线的折射（物理结构色）。',
        en: 'Often glimpsed shimmering with metallic blue through the trail mist. That mesmerising blue is not a pigment but the result of microscopic structures on their wing scales refracting light — a phenomenon known as structural colouration.',
        es: 'A menudo se vislumbran brillando con azul metálico entre la niebla del sendero. Ese azul hipnótico no es un pigmento, sino el resultado de estructuras microscópicas en las escamas de sus alas que refractan la luz — coloración estructural.',
        pt: 'Frequentemente avistadas brilhando com azul metálico através da névoa da trilha. Aquele azul hipnotizante não é um pigmento, mas o resultado de estruturas microscópicas nas escamas de suas asas que refratam a luz — coloração estrutural.',
      } as T,
      iucn: 'LC',
      icon: '🦋',
    },
    {
      name: { zh: '玫瑰树', en: 'Peroba-rosa', es: 'Peroba-rosa', pt: 'Peroba-rosa' } as T,
      latin: 'Aspidosperma polyneuron',
      niche: { zh: '树冠层巨木', en: 'Canopy giant', es: 'Gigante del dosel', pt: 'Gigante do dossel' } as T,
      desc: {
        zh: '大西洋雨林的标志性树种，可高达 40 米。因木材坚硬且呈玫瑰色，曾遭毁灭性砍伐。如今在伊瓜苏公园内，这些参天古木被作为自然遗产受到最高等级的保护。',
        en: 'An iconic tree of the Atlantic Rainforest, reaching heights of up to 40 metres. Its hard, rose-hued timber once made it a target of devastating logging. Today, within Iguaçu National Park, these towering ancient trees receive the highest level of protection as natural heritage.',
        es: 'Un árbol emblemático de la Selva Atlántica, que alcanza hasta 40 metros de altura. Su madera dura y de tono rosado lo convirtió en blanco de una tala devastadora. Hoy, dentro del Parque Nacional do Iguaçu, estos árboles antiguos e imponentes reciben el más alto nivel de protección como patrimonio natural.',
        pt: 'Uma árvore emblemática da Mata Atlântica, alcançando até 40 metros de altura. Sua madeira dura e de tom rosado a tornou alvo de desmatamento devastador. Hoje, dentro do Parque Nacional do Iguaçu, essas árvores antigas e imponentes recebem o mais alto nível de proteção como patrimônio natural.',
      } as T,
      iucn: 'EN',
      icon: '🌿',
    },
  ],
};

// ── FAQ (官方访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: '官方访客指南', en: 'Official Visitor Guide', es: 'Guía Oficial del Visitante', pt: 'Guia Oficial do Visitante' } as T,
  heading: { zh: '访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>', en: 'Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>', es: 'Guía del visitante &<em class="text-[color:var(--color-emerald)]"> preguntas frecuentes</em>', pt: 'Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>' } as T,
  disclaimer: {
    zh: '以下信息由 cataratasbrasil 非盈利科普团队根据公开资料整理，仅供访客参考。出行前请通过伊瓜苏国家公园官方网站核实最新政策。',
    en: 'The following information has been compiled by the cataratasbrasil non-profit educational team from publicly available sources and is provided for visitor reference only. Please verify the latest policies on the official Iguaçu National Park website before your visit.',
    es: 'La siguiente información ha sido recopilada por el equipo educativo sin fines de lucro de cataratasbrasil a partir de fuentes públicas y se proporciona solo como referencia. Por favor, verifique las políticas más recientes en el sitio web oficial del Parque Nacional do Iguaçu antes de su visita.',
    pt: 'As informações a seguir foram compiladas pela equipe educacional sem fins lucrativos do cataratasbrasil a partir de fontes públicas e são fornecidas apenas para referência. Por favor, verifique as políticas mais recentes no site oficial do Parque Nacional do Iguaçu antes de sua visita.',
  } as T,
  items: [
    {
      q: { zh: '园区无障碍设施与步道难度说明', en: 'Accessibility & Trail Difficulty', es: 'Accesibilidad y dificultad del sendero', pt: 'Acessibilidade e dificuldade da trilha' } as T,
      a: {
        zh: 'Trilha das Cataratas 步道全长 1.2 公里，整体坡度平缓，铺设防滑石板与木栈道。为保障所有访客的平等体验，园区已实现高标准的无障碍化。行动不便或使用轮椅的访客，可选择搭乘环保巴士直达步道终点，通过观光电梯无缝连接主观景台，近距离感受"魔鬼之喉"。',
        en: 'The Trilha das Cataratas trail spans 1.2 kilometres with a gentle overall grade, paved with non-slip stone slabs and wooden boardwalks. To ensure an equitable experience for all visitors, the park has implemented high-standard accessibility. Visitors with limited mobility or using wheelchairs may take the eco-bus directly to the trail endpoint and connect seamlessly via the panoramic elevator to the main viewpoint, experiencing the Devil\'s Throat up close.',
        es: 'El sendero Trilha das Cataratas tiene 1,2 km de longitud con una pendiente general suave, pavimentado con losas de piedra antideslizante y pasarelas de madera. Para garantizar una experiencia equitativa para todos los visitantes, el parque ha implementado accesibilidad de alto nivel. Los visitantes con movilidad reducida o en silla de ruedas pueden tomar el autobús ecológico directamente hasta el final del sendero y conectarse sin problemas a través del ascensor panorámico hasta el mirador principal.',
        pt: 'A trilha das Cataratas tem 1,2 km de extensão com inclinação geral suave, pavimentada com lajes de pedra antiderrapante e passarelas de madeira. Para garantir uma experiência equitativa a todos os visitantes, o parque implementou acessibilidade de alto padrão. Visitantes com mobilidade reduzida ou em cadeira de rodas podem pegar o ônibus ecológico diretamente até o final da trilha e conectar-se perfeitamente pelo elevador panorâmico até o mirante principal.',
      } as T,
    },
    {
      q: { zh: '地貌视角差异：巴西侧与阿根廷侧有何不同？', en: 'Geomorphological Perspective: Brazil Side vs Argentina Side', es: 'Perspectiva geomorfológica: lado brasileño vs lado argentino', pt: 'Perspectiva geomorfológica: lado brasileiro vs lado argentino' } as T,
      a: {
        zh: '两国境内的观测视角受断层地貌影响而截然不同。巴西侧拥有峡谷的完整"全景视角"，更适合宏观感受瀑布群的广度及地质构造；阿根廷侧步道则深入瀑布内部，提供沉浸式的微观体验。我们强烈建议自然观察者预留两天时间，从多维度完整认识这一世界自然遗产。',
        en: 'The observation perspectives in the two countries differ fundamentally due to fault geomorphology. The Brazilian side offers a complete "panoramic view" of the canyon, better suited for grasping the breadth of the falls system and its geological structure at a macro scale. The Argentine trails penetrate deep into the falls, providing an immersive micro-experience. We strongly recommend that nature observers reserve two days to fully appreciate this World Heritage site from multiple dimensions.',
        es: 'Las perspectivas de observación en ambos países difieren fundamentalmente debido a la geomorfología de falla. El lado brasileño ofrece una "vista panorámica" completa del cañón, más adecuada para comprender la amplitud del sistema de cataratas y su estructura geológica a escala macro. Los senderos argentinos penetran profundamente en las cataratas, proporcionando una microexperiencia inmersiva. Recomendamos encarecidamente a los observadores de la naturaleza reservar dos días para apreciar plenamente este Patrimonio Mundial.',
        pt: 'As perspectivas de observação nos dois países diferem fundamentalmente devido à geomorfologia de falha. O lado brasileiro oferece uma "visão panorâmica" completa do cânion, mais adequada para compreender a amplitude do sistema de cataratas e sua estrutura geológica em escala macro. As trilhas argentinas penetram profundamente nas cataratas, proporcionando uma microexperiência imersiva. Recomendamos fortemente que observadores da natureza reservem dois dias para apreciar plenamente este Patrimônio Mundial.',
      } as T,
    },
    {
      q: { zh: '水文与光影观测指南：何时是最佳到访时间？', en: 'Hydrology & Light Observation Guide: When Is the Best Time to Visit?', es: 'Guía de hidrología y luz: ¿cuál es el mejor momento para visitar?', pt: 'Guia de hidrologia e luz: qual é o melhor horário para visitar?' } as T,
      a: {
        zh: '<strong>光影观测：</strong>下午 14:00–16:00 期间，太阳光线从巴西侧照射瀑布，折射水雾产生彩虹的概率最高。<br/><br/><strong>避开人流：</strong>为获得最佳的自然观察体验，建议在早晨 09:00 开园时即刻入园，此时野生动物活动最为频繁，且能享受静谧的峡谷轰鸣。',
        en: '<strong>Light observation:</strong> Between 14:00 and 16:00, sunlight illuminates the falls from the Brazilian side, producing the highest probability of rainbows refracted through the mist.<br/><br/><strong>Avoiding crowds:</strong> For the optimal nature observation experience, we recommend entering at 09:00 when the park opens — wildlife is most active at this hour, and you can savour the canyon\'s roar in tranquillity.',
        es: '<strong>Observación de luz:</strong> Entre las 14:00 y las 16:00, la luz solar ilumina las cataratas desde el lado brasileño, produciendo la mayor probabilidad de arcoíris refractados a través de la niebla.<br/><br/><strong>Evitar multitudes:</strong> Para una experiencia óptima de observación de la naturaleza, recomendamos entrar a las 09:00 cuando abre el parque — la fauna es más activa a esta hora y se puede saborear el rugido del cañón en tranquilidad.',
        pt: '<strong>Observação de luz:</strong> Entre 14:00 e 16:00, a luz solar ilumina as cataratas do lado brasileiro, produzindo a maior probabilidade de arco-íris refratados através da névoa.<br/><br/><strong>Evitar multidões:</strong> Para a experiência ideal de observação da natureza, recomendamos entrar às 09:00 quando o parque abre — a fauna é mais ativa neste horário e você pode saborear o rugido do cânion em tranquilidade.',
      } as T,
    },
    {
      q: { zh: '跨境观测：前往阿根廷侧的签证政策及注意事项', en: 'Cross-Border Observation: Visa Policy for the Argentine Side', es: 'Observación transfronteriza: política de visas para el lado argentino', pt: 'Observação transfronteiriça: política de vistos para o lado argentino' } as T,
      a: {
        zh: '如需跨越国境前往阿根廷伊瓜苏国家公园，政策视您的护照签发国而定。若持有有效美国、加拿大或申根签证，通常可通过申请阿根廷 AVE 电子旅行授权免签入境。<br/><br/><strong>注：</strong>移民政策可能存在变动，跨境前请务必前往阿根廷国家移民局官网核实最新要求，并在 Tancredo Neves 友谊桥备齐实体文件。',
        en: 'If you wish to cross the border to visit Argentina\'s Iguazú National Park, the policy depends on your passport\'s country of issuance. Visitors holding a valid US, Canadian, or Schengen visa may generally enter visa-free by applying for Argentina\'s AVE electronic travel authorisation.<br/><br/><strong>Note:</strong> Immigration policies are subject to change. Before crossing, please verify the latest requirements on the official website of Argentina\'s National Immigration Directorate, and have physical documents ready at the Tancredo Neves Friendship Bridge.',
        es: 'Si desea cruzar la frontera para visitar el Parque Nacional Iguazú de Argentina, la política depende del país de emisión de su pasaporte. Los visitantes con visa válida de EE.UU., Canadá o Schengen generalmente pueden ingresar sin visa solicitando la autorización electrónica de viaje AVE de Argentina.<br/><br/><strong>Nota:</strong> Las políticas migratorias están sujetas a cambios. Antes de cruzar, verifique los requisitos más recientes en el sitio web oficial de la Dirección Nacional de Migraciones de Argentina, y tenga los documentos físicos listos en el Puente de la Amistad Tancredo Neves.',
        pt: 'Se desejar cruzar a fronteira para visitar o Parque Nacional Iguazú da Argentina, a política depende do país de emissão do seu passaporte. Visitantes com visto válido dos EUA, Canadá ou Schengen geralmente podem entrar sem visto solicitando a autorização eletrônica de viagem AVE da Argentina.<br/><br/><strong>Nota:</strong> As políticas de imigração estão sujeitas a alterações. Antes de cruzar, verifique os requisitos mais recentes no site oficial da Direção Nacional de Migrações da Argentina, e tenha os documentos físicos prontos na Ponte da Amizade Tancredo Neves.',
      } as T,
    },
  ],
};

// ── Leave No Trace (生态游览公约) ──
export const leaveNoTrace = {
  sectionNum: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante' } as T,
  heading: { zh: '生态游览<em class="text-[color:var(--color-emerald)]">公约</em>', en: 'Leave No Trace<em class="text-[color:var(--color-emerald)]"> Code</em>', es: 'Código de<em class="text-[color:var(--color-emerald)]"> No Deje Rastro</em>', pt: 'Código de<em class="text-[color:var(--color-emerald)]"> Não Deixe Rastros</em>' } as T,
  subtitle: {
    zh: '作为世界自然遗产的访客，我们每个人都有责任确保子孙后代也能感受到同样的震撼。请在游览前阅读并承诺遵守以下行为准则。',
    en: 'As a visitor to a World Heritage site, each of us bears the responsibility of ensuring that future generations may experience the same awe. Please read and commit to the following code of conduct before your visit.',
    es: 'Como visitante de un sitio del Patrimonio Mundial, cada uno de nosotros tiene la responsabilidad de garantizar que las generaciones futuras puedan experimentar el mismo asombro. Por favor, lea y comprométase con el siguiente código de conducta antes de su visita.',
    pt: 'Como visitante de um sítio do Patrimônio Mundial, cada um de nós tem a responsabilidade de garantir que as gerações futuras possam experimentar o mesmo assombro. Por favor, leia e comprometa-se com o seguinte código de conduta antes de sua visita.',
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: '不留垃圾', en: 'Pack It In, Pack It Out', es: 'Llévese su basura', pt: 'Leve seu lixo embora' } as T,
      desc: {
        zh: '园区内不设垃圾桶。所有个人废弃物（包括果皮、纸巾、烟蒂）必须自行携带出园。有机垃圾会改变野生动物的自然食谱。',
        en: 'There are no trash bins inside the park. All personal waste — including fruit peels, tissues, and cigarette butts — must be carried out with you. Organic waste alters the natural diet of wildlife.',
        es: 'No hay basureros dentro del parque. Todos los residuos personales —incluyendo cáscaras de fruta, pañuelos y colillas— deben ser retirados por usted. Los residuos orgánicos alteran la dieta natural de la fauna.',
        pt: 'Não há lixeiras dentro do parque. Todos os resíduos pessoais — incluindo cascas de frutas, lenços e bitucas de cigarro — devem ser levados com você. Resíduos orgânicos alteram a dieta natural da fauna.',
      } as T,
    },
    {
      icon: '👣',
      title: { zh: '不偏离既定步道', en: 'Stay on Designated Trails', es: 'Permanezca en los senderos', pt: 'Permaneça nas trilhas designadas' } as T,
      desc: {
        zh: '步道边缘之外是脆弱的雨林地表和野生动物栖息地。偏离步道不仅会压实土壤、破坏幼苗，还可能踩踏蛇类和地面筑巢鸟类的巢穴。',
        en: 'Beyond the trail edges lies fragile rainforest floor and wildlife habitat. Straying from the trail compacts soil, destroys seedlings, and may trample the nests of snakes and ground-nesting birds.',
        es: 'Más allá de los bordes del sendero se encuentra el frágil suelo de la selva y el hábitat de la fauna. Salirse del sendero compacta el suelo, destruye plántulas y puede pisar nidos de serpientes y aves que anidan en el suelo.',
        pt: 'Além das bordas da trilha está o frágil solo da mata e o habitat da fauna. Sair da trilha compacta o solo, destrói mudas e pode pisar em ninhos de cobras e aves que nidificam no solo.',
      } as T,
    },
    {
      icon: '🚁',
      title: { zh: '禁止使用无人机', en: 'No Drones', es: 'Prohibidos los drones', pt: 'Proibido o uso de drones' } as T,
      desc: {
        zh: '在国家公园范围内使用无人机属违法行为。无人机的噪音和视觉干扰会严重惊扰鸟类（尤其是猛禽和巨嘴鸟），干扰其筑巢、觅食和迁徙行为。',
        en: 'The use of drones within national park boundaries is illegal. The noise and visual disturbance from drones seriously disrupt birds — particularly raptors and toucans — interfering with nesting, foraging, and migratory behaviour.',
        es: 'El uso de drones dentro de los límites del parque nacional es ilegal. El ruido y la perturbación visual de los drones alteran gravemente a las aves —particularmente rapaces y tucanes— interfiriendo con la anidación, alimentación y comportamiento migratorio.',
        pt: 'O uso de drones dentro dos limites do parque nacional é ilegal. O ruído e a perturbação visual dos drones afetam gravemente as aves — particularmente rapinantes e tucanos — interferindo na nidificação, alimentação e comportamento migratório.',
      } as T,
    },
    {
      icon: '📸',
      title: { zh: '禁止使用闪光灯拍摄野生动物', en: 'No Flash Photography of Wildlife', es: 'No usar flash al fotografiar fauna', pt: 'Não use flash ao fotografar fauna' } as T,
      desc: {
        zh: '闪光灯会对夜行性和晨昏性动物的视网膜造成不可逆损伤。请调高 ISO 或使用大光圈镜头进行自然光拍摄。真正的野生动物摄影，是记录而非干扰。',
        en: 'Flash photography causes irreversible damage to the retinas of nocturnal and crepuscular animals. Increase your ISO or use a wide-aperture lens for natural-light photography. True wildlife photography documents — it does not disturb.',
        es: 'La fotografía con flash causa daños irreversibles en las retinas de los animales nocturnos y crepusculares. Aumente el ISO o use un lente de gran apertura para fotografía con luz natural. La verdadera fotografía de fauna documenta, no perturba.',
        pt: 'A fotografia com flash causa danos irreversíveis às retinas dos animais noturnos e crepusculares. Aumente o ISO ou use uma lente de grande abertura para fotografar com luz natural. A verdadeira fotografia de fauna documenta — não perturba.',
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: '保持安静，尊重自然声景', en: 'Keep Quiet — Respect the Natural Soundscape', es: 'Guarde silencio — respete el paisaje sonoro', pt: 'Mantenha silêncio — respeite a paisagem sonora' } as T,
      desc: {
        zh: '瀑布的轰鸣、鸟类的晨鸣、树叶的窸窣——这些构成了伊瓜苏独特的自然声景。请勿使用外放音响，将交谈音量降至最低，让自己成为这片古老峡谷的倾听者。',
        en: 'The roar of the falls, the morning chorus of birds, the rustle of leaves — these form Iguaçu\'s unique natural soundscape. Please refrain from using external speakers, keep conversation volume to a minimum, and become a listener in this ancient canyon.',
        es: 'El rugido de las cataratas, el coro matutino de las aves, el susurro de las hojas — estos forman el paisaje sonoro único de Iguazú. Absténgase de usar altavoces externos, mantenga el volumen de conversación al mínimo y conviértase en un oyente de este antiguo cañón.',
        pt: 'O rugido das cataratas, o coro matinal dos pássaros, o farfalhar das folhas — estes formam a paisagem sonora única do Iguaçu. Evite usar alto-falantes externos, mantenha o volume de conversa no mínimo e torne-se um ouvinte neste cânion ancestral.',
      } as T,
    },
    {
      icon: '🙅',
      title: { zh: '不喂食、不触摸、不带走', en: 'No Feeding, No Touching, No Taking', es: 'No alimentar, no tocar, no llevarse', pt: 'Não alimente, não toque, não leve' } as T,
      desc: {
        zh: '请勿以任何形式与野生动物互动。不喂食（参考南美浣熊警示）、不触摸（许多两栖动物皮肤可吸收人体化学物质）、不带走任何自然物品（包括石头、花朵、羽毛——它们在生态系统中都有其位置）。',
        en: 'Do not interact with wildlife in any form. No feeding (see coati warning), no touching (many amphibians absorb human chemicals through their skin), and no taking of any natural objects — including stones, flowers, or feathers. Each has its place in the ecosystem.',
        es: 'No interactúe con la fauna de ninguna forma. No alimentar (ver advertencia del coatí), no tocar (muchos anfibios absorben químicos humanos a través de la piel) y no llevarse ningún objeto natural —incluyendo piedras, flores o plumas. Cada uno tiene su lugar en el ecosistema.',
        pt: 'Não interaja com a fauna de nenhuma forma. Não alimente (veja aviso do quati), não toque (muitos anfíbios absorvem químicos humanos pela pele) e não leve nenhum objeto natural — incluindo pedras, flores ou penas. Cada um tem seu lugar no ecossistema.',
      } as T,
    },
  ],
  closing: {
    zh: '带走知识与震撼，留下纯净与尊重。<br/>让这片"大水"的轰鸣，在未来的千百年里，继续在人类文明的边缘回荡。',
    en: 'Take away knowledge and awe. Leave behind purity and respect.<br/>Let the roar of this "great water" echo at the edge of human civilisation for millennia to come.',
    es: 'Llévese conocimiento y asombro. Deje pureza y respeto.<br/>Que el rugido de esta "agua grande" siga resonando al borde de la civilización humana por milenios más.',
    pt: 'Leve conhecimento e assombro. Deixe pureza e respeito.<br/>Que o rugido desta "água grande" continue ecoando à margem da civilização humana por milênios.',
  } as T,
};

// ── Partners (参考资源与保护伙伴) ──
export const partners = {
  heading: {
    zh: '参考资源与保护伙伴',
    en: 'Reference Resources & Conservation Partners',
    es: 'Recursos Oficiales y Conservación',
    pt: 'Recursos Oficiais e Conservação',
  } as T,
  items: [
    {
      name: { zh: '联合国教科文组织世界遗产中心', en: 'UNESCO World Heritage Centre', es: 'UNESCO Centro del Patrimonio Mundial', pt: 'UNESCO Centro do Patrimônio Mundial' } as T,
      url: 'https://whc.unesco.org/en/list/355',
      abbr: 'UNESCO',
    },
    {
      name: { zh: '巴西奇科·门德斯生物多样性保护研究所', en: 'ICMBio — Chico Mendes Institute for Biodiversity Conservation', es: 'ICMBio — Instituto Chico Mendes de Conservación de la Biodiversidad', pt: 'ICMBio — Instituto Chico Mendes de Conservação da Biodiversidade' } as T,
      url: 'https://www.gov.br/icmbio/pt-br',
      abbr: 'ICMBio',
    },
    {
      name: { zh: 'SOS大西洋雨林基金会', en: 'SOS Mata Atlântica Foundation', es: 'Fundación SOS Mata Atlântica', pt: 'Fundação SOS Mata Atlântica' } as T,
      url: 'https://www.sosma.org.br/',
      abbr: 'SOSMA',
    },
    {
      name: { zh: '世界自然基金会巴西分会', en: 'WWF-Brasil', es: 'WWF-Brasil', pt: 'WWF-Brasil' } as T,
      url: 'https://www.wwf.org.br/',
      abbr: 'WWF',
    },
    {
      name: { zh: '伊瓜苏鸟类保育公园', en: 'Parque das Aves', es: 'Parque das Aves', pt: 'Parque das Aves' } as T,
      url: 'https://www.parquedasaves.com.br/',
      abbr: 'PDA',
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: '今天，走进<br/><em class="text-[color:var(--color-sun)]">水雾深处</em>。', en: 'Today, step<br/><em class="text-[color:var(--color-sun)]">into the mist</em>.', es: 'Hoy, entra<br/><em class="text-[color:var(--color-sun)]">en la niebla</em>.', pt: 'Hoje, entre<br/><em class="text-[color:var(--color-sun)]">na névoa</em>.' } as T,
  address: { zh: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil', en: 'Trilha das Cataratas · Iguaçu National Park · Foz do Iguaçu, PR, Brazil', es: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil', pt: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil' } as T,
  copyright: { zh: '© 2026 cataratasbrasil 保留所有权利。', en: '© 2026 cataratasbrasil. All rights reserved.', es: '© 2026 cataratasbrasil. Todos los derechos reservados.', pt: '© 2026 cataratasbrasil. Todos os direitos reservados.' } as T,
  disclaimer: { zh: '本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。', en: 'This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.', es: 'Este sitio web es un proyecto independiente de información turística de terceros. No estamos afiliados a ningún gobierno local ni entidad oficial.', pt: 'Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.' } as T,
  privacy: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade' } as T,
  terms: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  cookies: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies' } as T,
  leaveNoTrace: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante' } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: '隐私政策 — cataratasbrasil', en: 'Privacy Policy — cataratasbrasil', es: 'Política de Privacidad — cataratasbrasil', pt: 'Política de Privacidade — cataratasbrasil' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade' } as T,
  h2_collect: { zh: '我们收集的信息', en: 'Information We Collect', es: 'Información que recopilamos', pt: 'Informações que coletamos' } as T,
  p_collect: {
    zh: '我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。',
    en: 'We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.',
    es: 'Recopilamos solo los datos mínimos necesarios para proporcionar nuestros servicios. Estos pueden incluir: datos de navegación (dirección IP, tipo de navegador, páginas visitadas), cookies y tecnologías similares, y cualquier información que usted proporcione voluntariamente a través de formularios de contacto o correo electrónico.',
    pt: 'Coletamos apenas os dados mínimos necessários para fornecer nossos serviços. Isso pode incluir: dados de navegação (endereço IP, tipo de navegador, páginas visitadas), cookies e tecnologias similares, e qualquer informação que você fornecer voluntariamente por meio de formulários de contato ou e-mail.',
  } as T,
  h2_use: { zh: '我们如何使用您的信息', en: 'How We Use Your Information', es: 'Cómo utilizamos su información', pt: 'Como usamos suas informações' } as T,
  p_use: {
    zh: '我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。',
    en: 'We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.',
    es: 'Utilizamos la información recopilada para: mejorar el contenido del sitio web y la experiencia del usuario, analizar el tráfico y los patrones de uso, responder a solicitudes, y cumplir con nuestras obligaciones legales.',
    pt: 'Usamos as informações coletadas para: melhorar o conteúdo do site e a experiência do usuário, analisar o tráfego e padrões de uso, responder a solicitações, e cumprir nossas obrigações legais.',
  } as T,
  h2_third: { zh: '第三方服务', en: 'Third-Party Services', es: 'Servicios de terceros', pt: 'Serviços de terceiros' } as T,
  p_third: {
    zh: '我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。',
    en: 'Our website may use third-party services, such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis), and Unsplash (for images). These services have their own privacy policies.',
    es: 'Nuestro sitio web puede utilizar servicios de terceros, como Google Maps (para mapas integrados y datos de ubicación), Google Analytics (para análisis de tráfico) y Unsplash (para imágenes). Estos servicios tienen sus propias políticas de privacidad.',
    pt: 'Nosso site pode usar serviços de terceiros, como Google Maps (para mapas incorporados e dados de localização), Google Analytics (para análise de tráfego) e Unsplash (para imagens). Esses serviços têm suas próprias políticas de privacidade.',
  } as T,
  h2_rights: { zh: '您的权利', en: 'Your Rights', es: 'Sus derechos', pt: 'Seus direitos' } as T,
  p_rights: {
    zh: '根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。',
    en: 'Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.',
    es: 'De acuerdo con el Reglamento General de Protección de Datos (GDPR) y las regulaciones relacionadas, usted tiene los siguientes derechos: acceder a sus datos personales, solicitar la corrección o eliminación, oponerse al procesamiento, y presentar una queja ante una autoridad de control.',
    pt: 'De acordo com o Regulamento Geral de Proteção de Dados (GDPR) e regulamentações relacionadas, você tem os seguintes direitos: acessar seus dados pessoais, solicitar correção ou exclusão, opor-se ao processamento, e apresentar uma reclamação a uma autoridade supervisora.',
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: '服务条款 — cataratasbrasil', en: 'Terms of Service — cataratasbrasil', es: 'Términos de Servicio — cataratasbrasil', pt: 'Termos de Serviço — cataratasbrasil' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  h2_acceptance: { zh: '接受条款', en: 'Acceptance of Terms', es: 'Aceptación de los términos', pt: 'Aceitação dos termos' } as T,
  p_acceptance: {
    zh: '访问和使用 cataratasbrasil.com，即表示您同意受这些服务条款的约束。',
    en: 'By accessing and using cataratasbrasil.com, you agree to be bound by these Terms of Service.',
    es: 'Al acceder y utilizar cataratasbrasil.com, usted acepta estar sujeto a estos Términos de Servicio.',
    pt: 'Ao acessar e usar cataratasbrasil.com, você concorda em ficar vinculado a estes Termos de Serviço.',
  } as T,
  h2_content: { zh: '内容使用', en: 'Content Usage', es: 'Uso del contenido', pt: 'Uso do conteúdo' } as T,
  p_content: {
    zh: '本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。',
    en: 'All content on this website is for informational purposes only. We are an independent third-party tourism information website and are not affiliated with any tourist attractions, government agencies, or commercial operators.',
    es: 'Todo el contenido de este sitio web es solo para fines informativos. Somos un sitio web independiente de información turística de terceros y no estamos afiliados a ninguna atracción turística, agencia gubernamental u operador comercial.',
    pt: 'Todo o conteúdo deste site é apenas para fins informativos. Somos um site independente de informações turísticas de terceiros e não temos vínculo com nenhuma atração turística, agência governamental ou operador comercial.',
  } as T,
  h2_accuracy: { zh: '信息的准确性', en: 'Accuracy of Information', es: 'Exactitud de la información', pt: 'Precisão das informações' } as T,
  p_accuracy: {
    zh: '我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。',
    en: 'We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.',
    es: 'Nos esforzamos por proporcionar información precisa y oportuna, pero no podemos garantizar la integridad o exactitud de la información. Los horarios, condiciones y servicios están sujetos a cambios sin previo aviso. Por favor, verifique siempre la información importante a través de los canales oficiales antes de viajar.',
    pt: 'Nos esforçamos para fornecer informações precisas e oportunas, mas não podemos garantir a integridade ou exatidão das informações. Horários, condições e serviços estão sujeitos a alterações sem aviso prévio. Sempre verifique informações importantes pelos canais oficiais antes de viajar.',
  } as T,
  h2_ip: { zh: '知识产权', en: 'Intellectual Property', es: 'Propiedad intelectual', pt: 'Propriedade intelectual' } as T,
  p_ip: {
    zh: '本网站设计和原创内容受版权保护。图片来自 Unsplash，并已获得其许可。Google 地图数据的使用符合 Google 的服务条款。',
    en: 'The website design and original content are protected by copyright. Images are sourced from Unsplash under their license. Google Maps data is used in accordance with Google\'s Terms of Service.',
    es: 'El diseño del sitio web y el contenido original están protegidos por derechos de autor. Las imágenes provienen de Unsplash bajo su licencia. Los datos de Google Maps se utilizan de acuerdo con los Términos de Servicio de Google.',
    pt: 'O design do site e o conteúdo original são protegidos por direitos autorais. As imagens são provenientes do Unsplash sob sua licença. Os dados do Google Maps são usados de acordo com os Termos de Serviço do Google.',
  } as T,
  h2_liability: { zh: '责任限制', en: 'Limitation of Liability', es: 'Limitación de responsabilidad', pt: 'Limitação de responsabilidade' } as T,
  p_liability: {
    zh: '本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。',
    en: 'This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.',
    es: 'Este sitio web se proporciona "tal cual" sin ninguna garantía. No somos responsables de ninguna pérdida resultante del uso de la información de este sitio web, incluidos, entre otros, las decisiones de viaje tomadas en base al contenido de este sitio web.',
    pt: 'Este site é fornecido "como está" sem qualquer garantia. Não nos responsabilizamos por quaisquer perdas resultantes do uso das informações deste site, incluindo, mas não se limitando a, decisões de viagem tomadas com base no conteúdo deste site.',
  } as T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início' } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: 'Cookie 设置 — cataratasbrasil', en: 'Cookie Settings — cataratasbrasil', es: 'Configuración de Cookies — cataratasbrasil', pt: 'Configurações de Cookies — cataratasbrasil' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies' } as T,
  intro: {
    zh: '我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。',
    en: 'We use cookies to improve your browsing experience. You can manage your preferences below.',
    es: 'Utilizamos cookies para mejorar su experiencia de navegación. Puede gestionar sus preferencias a continuación.',
    pt: 'Usamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências abaixo.',
  } as T,

  // Necessary Cookies
  cat_necessary: { zh: '必要 Cookie', en: 'Necessary Cookies', es: 'Cookies necesarias', pt: 'Cookies necessários' } as T,
  cat_necessary_desc: { zh: '这些 Cookie 对于网站正常运行至关重要，无法禁用。', en: 'These cookies are essential for the website to function properly and cannot be disabled.', es: 'Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.', pt: 'Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.' } as T,
  alwaysActive: { zh: '始终保持活跃', en: 'Always active', es: 'Siempre activo', pt: 'Sempre ativo' } as T,

  // Analytics Cookies
  cat_analytics: { zh: '分析型 Cookie', en: 'Analytics Cookies', es: 'Cookies analíticas', pt: 'Cookies analíticos' } as T,
  cat_analytics_desc: { zh: '它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。', en: 'They help us understand how visitors interact with our website by collecting anonymous usage data.', es: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web mediante la recopilación de datos de uso anónimos.', pt: 'Eles nos ajudam a entender como os visitantes interagem com nosso site, coletando dados de uso anônimos.' } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: '它会收集访客如何使用我们网站的匿名信息。', en: 'Collects anonymous information about how visitors use our website.', es: 'Recopila información anónima sobre cómo los visitantes utilizan nuestro sitio web.', pt: 'Coleta informações anônimas sobre como os visitantes usam nosso site.' } as T,
  activated: { zh: '激活', en: 'Active', es: 'Activado', pt: 'Ativado' } as T,

  // Preference Cookies
  cat_preference: { zh: '偏好 Cookie', en: 'Preference Cookies', es: 'Cookies de preferencia', pt: 'Cookies de preferência' } as T,
  cat_preference_desc: { zh: '它们会记住您的设置，例如语言和主题偏好。', en: 'They remember your settings, such as language and theme preferences.', es: 'Recuerdan sus configuraciones, como las preferencias de idioma y tema.', pt: 'Eles lembram suas configurações, como preferências de idioma e tema.' } as T,
  pref_label: { zh: '用户偏好', en: 'User Preferences', es: 'Preferencias de usuario', pt: 'Preferências do usuário' } as T,
  pref_desc: { zh: '保存您的语言偏好和网站设置。', en: 'Saves your language preferences and website settings.', es: 'Guarda sus preferencias de idioma y configuración del sitio web.', pt: 'Salva suas preferências de idioma e configurações do site.' } as T,

  // Marketing Cookies
  cat_marketing: { zh: '营销 Cookie', en: 'Marketing Cookies', es: 'Cookies de marketing', pt: 'Cookies de marketing' } as T,
  cat_marketing_desc: { zh: '它们用于展示相关广告并衡量广告活动的有效性。', en: 'They are used to display relevant advertisements and measure the effectiveness of ad campaigns.', es: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.', pt: 'São usados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.' } as T,
  ads_label: { zh: '个性化广告', en: 'Personalized Ads', es: 'Anuncios personalizados', pt: 'Anúncios personalizados' } as T,
  ads_desc: { zh: '它可以根据你的兴趣为你展示相关的广告。', en: 'Shows you relevant ads based on your interests.', es: 'Le muestra anuncios relevantes según sus intereses.', pt: 'Mostra anúncios relevantes com base nos seus interesses.' } as T,
  deactivated: { zh: '停用', en: 'Inactive', es: 'Desactivado', pt: 'Desativado' } as T,

  // Consent Management
  consent_title: { zh: '同意管理', en: 'Consent Management', es: 'Gestión de consentimiento', pt: 'Gerenciamento de consentimento' } as T,
  consent_desc: { zh: '您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。', en: 'You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website\'s functionality.', es: 'Puede cambiar su configuración de cookies en cualquier momento. Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio web.', pt: 'Você pode alterar suas configurações de cookies a qualquer momento. Observe que desativar certos cookies pode afetar a funcionalidade do site.' } as T,
  savePrefs: { zh: '保存偏好设置', en: 'Save Preferences', es: 'Guardar preferencias', pt: 'Salvar preferências' } as T,
  rejectAll: { zh: '拒绝一切', en: 'Reject All', es: 'Rechazar todo', pt: 'Rejeitar tudo' } as T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início' } as T,
};

// ── Meta ──
export const meta = {
  title: { zh: 'Trilha das Cataratas Brasil · 伊瓜苏瀑布震撼观景步道', en: 'Trilha das Cataratas Brasil · Iguaçu Falls Scenic Trail', es: 'Trilha das Cataratas Brasil · Sendero panorámico de Iguazú', pt: 'Trilha das Cataratas Brasil · Trilha panorâmica das Cataratas do Iguaçu' } as T,
  description: { zh: '伊瓜苏瀑布巴西侧步道 (Trilha das Cataratas) 官方级别游览指南：全景视角、魔鬼之喉、雨林生态、交通与门票、9 条真实评价、常见问题。', en: 'The complete guide to the Brazilian side of Iguaçu Falls (Trilha das Cataratas): panoramic trail, Devil\'s Throat, rainforest ecology, transport & tickets, 9 real reviews, FAQ.', es: 'Guía completa del lado brasileño de las Cataratas del Iguazú (Trilha das Cataratas): sendero panorámico, Garganta del Diablo, ecología selvática.', pt: 'Guia completo do lado brasileiro das Cataratas do Iguaçu (Trilha das Cataratas): trilha panorâmica, Garganta do Diabo, ecologia da mata atlântica.' } as T,
};
