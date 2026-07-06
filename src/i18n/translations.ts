import type { Lang } from './utils';

// Type-safe translations structure
interface Translations {
  [key: string]: Record<Lang, string> | Translations;
}

export const translations: Translations = {
  nav: {
    overview: { zh: '概览', en: 'Overview', es: 'Visión', pt: 'Visão' },
    highlights: { zh: '亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' },
    guide: { zh: '游览指南', en: 'Guide', es: 'Guía', pt: 'Guia' },
    transport: { zh: '交通', en: 'Transport', es: 'Transporte', pt: 'Transporte' },
    reviews: { zh: '评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' },
    encyclopedia: { zh: '百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' },
    gallery: { zh: '图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' },
    faq: 'FAQ',
  },

  hero: {
    title: {
      zh: '伊瓜苏瀑布<br/><span class="italic text-[color:var(--color-sun)]">震撼观景</span>步道',
      en: 'Where the forest<br/><span class="italic text-[color:var(--color-sun)]">meets the roar</span>.',
      es: 'Donde la selva<br/><span class="italic text-[color:var(--color-sun)]">encuentra el rugido</span>.',
      pt: 'Onde a mata<br/><span class="italic text-[color:var(--color-sun)]">encontra o rugido</span>.',
    },
    subtitle: {
      zh: 'Trilha das Cataratas · 巴西侧步道 —— 1.2 公里全景栈道，一路走进"魔鬼之喉"的水雾之中。',
      en: 'Trilha das Cataratas · The 1.2 km panoramic boardwalk that carries you straight into the mist of the Devil\'s Throat.',
      es: 'Trilha das Cataratas · Un sendero panorámico de 1,2 km que te lleva directo a la niebla de la Garganta del Diablo.',
      pt: 'Trilha das Cataratas · 1,2 km de passarela panorâmica levando você direto à névoa da Garganta do Diabo.',
    },
    statReviews: { zh: '评价', en: 'reviews', es: 'reseñas', pt: 'avaliações' },
    statLength: { zh: '步道长度', en: 'Trail length', es: 'Longitud', pt: 'Extensão' },
    statFalls: { zh: '瀑布数量', en: 'Waterfalls', es: 'Cascadas', pt: 'Quedas' },
    statFlow: { zh: '平均流量', en: 'Avg. flow', es: 'Caudal medio', pt: 'Vazão média' },
  },

  overview: {
    sectionNum: { zh: '概览', en: 'Overview', es: 'Introducción', pt: 'Introdução' },
    heading: {
      zh: '阿根廷看瀑布<br/><em class="text-[color:var(--color-emerald)]">巴西赏全景</em>',
      en: 'Argentina for the drop.<br/><em class="text-[color:var(--color-emerald)]">Brazil for the panorama.</em>',
      es: 'Argentina para la caída.<br/><em class="text-[color:var(--color-emerald)]">Brasil para el panorama.</em>',
      pt: 'Argentina pela queda.<br/><em class="text-[color:var(--color-emerald)]">Brasil pelo panorama.</em>',
    },
    p1: {
      zh: '俗话说 <strong>"阿根廷人看瀑布，巴西人赏全景"</strong>。Trilha das Cataratas 全长约 1.2 公里，沿伊瓜苏河峡谷边缘蜿蜒而建，为您提供观赏世界上最宽瀑布群的最佳全景视角。',
      en: '<strong>"Argentina to see the falls, Brazil to see the panorama."</strong> The 1.2 km trail hugs the Iguaçu canyon rim, offering the definitive wide-angle view of the world\'s largest waterfall system.',
      es: '<strong>"Argentina para ver las cataratas, Brasil para el panorama."</strong> El sendero de 1,2 km bordea el cañón del río Iguazú, ofreciendo la vista panorámica definitiva del sistema de cascadas más ancho del mundo.',
      pt: '<strong>"Argentina para ver as quedas, Brasil para ver o panorama."</strong> A trilha de 1,2 km acompanha a borda do cânion do rio Iguaçu, oferecendo a vista panorâmica definitiva do maior sistema de cachoeiras do mundo.',
    },
    p2: {
      zh: '步道隐匿于茂密的大西洋原始雨林（<em>Mata Atlântica</em>）中。您能听到震耳欲聋的水声，也能偶遇色彩斑斓的巨嘴鸟、蝴蝶群，以及随处可见的南美浣熊（<em>Quati</em>）。',
      en: 'The path threads through primary Atlantic rainforest (<em>Mata Atlântica</em>). Expect thunderous water, flashes of toucans and butterflies, and the ever-curious coati (<em>Quati</em>) darting across your feet.',
      es: 'El camino atraviesa la selva atlántica primaria (<em>Mata Atlântica</em>). Se oye el estruendo del agua, se ven tucanes y mariposas, y los curiosos coatíes (<em>Quati</em>) cruzando el sendero.',
      pt: 'O caminho corta a Mata Atlântica primária. Você ouve o estrondo da água, avista tucanos e borboletas, e encontra os curiosos quatis atravessando a trilha.',
    },
    p3: {
      zh: '步道的最高潮在尽头的水上栈道 —— 一直延伸至 <strong>"魔鬼之喉" (Garganta do Diabo)</strong> 的下方。漫天水雾与阳光交织，几乎每天都能看到绚丽的双彩虹。',
      en: 'The climax is the water-level catwalk at the trail\'s end, reaching directly beneath the <strong>Devil\'s Throat (Garganta do Diabo)</strong>. Mist and sunlight collide into a near-daily double rainbow.',
      es: 'El clímax es la pasarela al nivel del agua al final del sendero, que llega justo debajo de la <strong>Garganta del Diablo</strong>. La niebla y el sol se cruzan casi a diario en un doble arcoíris.',
      pt: 'O clímax é a passarela ao nível da água no fim da trilha, chegando bem abaixo da <strong>Garganta do Diabo</strong>. Névoa e sol se encontram quase diariamente em um arco-íris duplo.',
    },
    chip1: { zh: '世界自然遗产', en: 'World Heritage', es: 'Patrimonio Mundial', pt: 'Patrimônio Mundial' },
    chip2: { zh: '跨国大瀑布', en: 'Transnational Falls', es: 'Cataratas binacionales', pt: 'Cataratas binacionais' },
    chip3: { zh: '雨林生态', en: 'Rainforest Ecology', es: 'Selva atlántica', pt: 'Mata Atlântica' },
    chip4: { zh: '震撼全景', en: 'Panoramic Views', es: 'Panorama total', pt: 'Panorama total' },
  },

  highlights: {
    sectionNum: { zh: '游览亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' },
    heading: {
      zh: '三重感官<em class="text-[color:var(--color-sun)]">洗礼</em>',
      en: 'Three sensory<em class="text-[color:var(--color-sun)]"> baptisms</em>',
      es: 'Tres bautismos<em class="text-[color:var(--color-sun)]"> sensoriales</em>',
      pt: 'Três batismos<em class="text-[color:var(--color-sun)]"> sensoriais</em>',
    },
    items: [
      {
        icon: '🚶‍♂️',
        num: '01',
        title: { zh: '峡谷悬崖漫步', en: 'Canyon-rim walk', es: 'Paseo por el cañón', pt: 'Caminhada no cânion' },
        desc: {
          zh: '平整石板 + 木栈道，坡度平缓，老人小孩都能轻松走完。沿途多个突出观景台是绝佳摄影点。',
          en: 'Smooth stone and wooden boardwalks with gentle grades — easy for elders and kids. Multiple cantilevered decks along the way for photos.',
          es: 'Piedra lisa y pasarelas de madera con pendientes suaves — accesible para todos. Múltiples miradores para fotos.',
          pt: 'Pedras planas e passarelas de madeira com inclinação suave — acessível a todos. Vários mirantes para fotos.',
        },
        img: '/gallery/trilha-das-cataratas-brasil (1).jpg',
      },
      {
        icon: '💦',
        num: '02',
        title: { zh: '水上栈道洗礼', en: 'The mist catwalk', es: 'Pasarela de niebla', pt: 'Passarela na névoa' },
        desc: {
          zh: '靠近魔鬼之喉的水上栈道，瀑布激起的水雾像下雨一样把人淋透，是最原始的大自然礼赞。',
          en: 'Near the Devil\'s Throat, spray from the falls soaks you like a downpour — a raw, elemental encounter with the falls.',
          es: 'Cerca de la Garganta del Diablo, el rocío te empapa como un aguacero — un encuentro puro con la fuerza del agua.',
          pt: 'Perto da Garganta do Diabo, a névoa encharca você como uma chuva — um encontro cru com a força da água.',
        },
        img: '/gallery/trilha-das-cataratas-brasil (2).jpg',
      },
      {
        icon: '🛗',
        num: '03',
        title: { zh: '全景电梯', en: 'Panoramic elevator', es: 'Ascensor panorámico', pt: 'Elevador panorâmico' },
        desc: {
          zh: '步道终点连接下层水面栈道与上层 Porto Canoas 休息区。上升过程俯瞰整个瀑布群壮阔宏图。',
          en: 'Links the lower catwalk to Porto Canoas. Watch the entire falls system unfurl beneath you as it rises.',
          es: 'Conecta la pasarela inferior con Porto Canoas. Ve el sistema completo desplegarse mientras subes.',
          pt: 'Liga a passarela inferior a Porto Canoas. Todo o conjunto se abre abaixo enquanto sobe.',
        },
        img: '/gallery/trilha-das-cataratas-brasil (3).jpg',
      },
    ],
  },

  practical: {
    sectionNum: { zh: '实用游览指南', en: 'Practical Guide', es: 'Guía práctica', pt: 'Guia prático' },
    heading: {
      zh: '出发前<em class="text-[color:var(--color-emerald)]">必读</em>',
      en: 'Read this<em class="text-[color:var(--color-emerald)]"> before you go</em>.',
      es: 'Léelo<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.',
      pt: 'Leia<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.',
    },
    cards: [
      {
        icon: '🕒',
        label: { zh: '开放时间', en: 'Hours', es: 'Horario', pt: 'Horário' },
        value: '09:00 — 16:00',
        desc: {
          zh: '每日开放，随季节微调，建议提前查阅。',
          en: 'Daily; seasonal shifts — check ahead.',
          es: 'Diario; ajustes estacionales — consulte antes.',
          pt: 'Diário; ajustes sazonais — confira antes.',
        },
      },
      {
        icon: '🎟️',
        label: { zh: '门票与入口', en: 'Ticket & entry', es: 'Entrada', pt: 'Ingresso' },
        value: 'Centro de Visitantes',
        desc: {
          zh: '购票后统一乘园区环保双层巴士到步道起点。',
          en: 'Buy tickets, then board the park\'s eco double-decker bus to the trailhead.',
          es: 'Compre entrada y tome el autobús ecológico hasta la trilha.',
          pt: 'Compre o ingresso e pegue o ônibus ecológico até a trilha.',
        },
      },
      {
        icon: '⏱️',
        label: { zh: '游览时长', en: 'Duration', es: 'Duración', pt: 'Duração' },
        value: '3 — 4 h',
        desc: {
          zh: '步行 1.5-2 小时 + 巴士与拍照，建议预留 3-4 小时。',
          en: '1.5–2 h walking + bus + photos. Block 3–4 h total.',
          es: '1,5–2 h caminando + bus + fotos. Reserve 3–4 h.',
          pt: '1,5–2 h caminhando + ônibus + fotos. Reserve 3–4 h.',
        },
      },
      {
        icon: '⚠️',
        label: { zh: '重要贴士', en: 'Key tips', es: 'Consejos', pt: 'Dicas' },
        value: '',
        desc: '',
        tips: [
          { zh: '务必带雨衣 + 手机防水袋', en: 'Poncho + phone drybag are mandatory', es: 'Poncho y bolsa impermeable obligatorios', pt: 'Capa de chuva + saco à prova d\'água' },
          { zh: '严禁喂食浣熊 (Quati)', en: 'Never feed the coatis (Quati)', es: 'No alimente a los coatíes', pt: 'Não alimente os quatis' },
          { zh: '全程无障碍友好', en: 'Fully wheelchair accessible', es: 'Accesible en silla de ruedas', pt: 'Acessível em cadeira de rodas' },
        ],
      },
    ],
  },

  transport: {
    sectionNum: { zh: '交通指南', en: 'Transport', es: 'Transporte', pt: 'Transporte' },
    heading: {
      zh: '三种方式<br/><em class="text-[color:var(--color-emerald)]">到达园区</em>',
      en: 'Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>',
      es: 'Tres formas<br/><em class="text-[color:var(--color-emerald)]">de llegar</em>',
      pt: 'Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>',
    },
    subtitle: {
      zh: '距离机场仅 3 公里，市中心约 30 分钟车程。',
      en: 'Just 3 km from the airport, ~30 minutes from downtown Foz.',
      es: 'A solo 3 km del aeropuerto, ~30 min del centro de Foz.',
      pt: 'A apenas 3 km do aeroporto, ~30 min do centro de Foz.',
    },
    items: [
      {
        icon: '✈️',
        title: { zh: '从福斯-杜伊瓜苏机场 (IGU)', en: 'From Foz do Iguaçu Airport (IGU)', es: 'Desde el aeropuerto (IGU)', pt: 'Do Aeroporto (IGU)' },
        meta: '3 km · 5-10 min',
        details: [
          {
            icon: '🚌',
            text: {
              zh: '<strong>Linha 120 — Parque Nacional</strong> · 最经济，约 R$5，机场即可上车',
              en: '<strong>Linha 120 — Parque Nacional</strong> · Cheapest, ~R$5, boards right outside terminal',
              es: '<strong>Linha 120 — Parque Nacional</strong> · Más económico, ~R$5, sale del terminal',
              pt: '<strong>Linha 120 — Parque Nacional</strong> · Mais barato, ~R$5, saída do terminal',
            },
          },
          {
            icon: '🚕',
            text: { zh: '出租车 / Uber · 5 分钟, 便于携带行李', en: 'Taxi / Uber · 5 min, easy with luggage', es: 'Taxi / Uber · 5 min, ideal con equipaje', pt: 'Táxi / Uber · 5 min, ideal com bagagem' },
          },
        ],
      },
      {
        icon: '🏙️',
        title: { zh: '从市中心 (Centro)', en: 'From Downtown (Centro)', es: 'Desde el Centro', pt: 'Do Centro' },
        meta: '~20 km · 30-40 min',
        details: [
          {
            icon: '🚌',
            text: {
              zh: '<strong>Linha 120</strong> · 贯穿市中心-机场-国家公园，约 40 分钟',
              en: '<strong>Linha 120</strong> · Loops through downtown → airport → park, ~40 min',
              es: '<strong>Linha 120</strong> · Recorre centro → aeropuerto → parque, ~40 min',
              pt: '<strong>Linha 120</strong> · Passa centro → aeroporto → parque, ~40 min',
            },
          },
          {
            icon: '📱',
            text: { zh: 'Uber / 99 · R$30 — R$50, ~30 min', en: 'Uber / 99 · R$30 — R$50, ~30 min', es: 'Uber / 99 · R$30 — R$50, ~30 min', pt: 'Uber / 99 · R$30 — R$50, ~30 min' },
          },
        ],
      },
      {
        icon: '🚗',
        title: { zh: '自驾与停车', en: 'Self-drive & Parking', es: 'En coche y estacionamiento', pt: 'Carro próprio' },
        meta: 'Centro de Visitantes',
        details: [
          {
            icon: '',
            text: {
              zh: '游客中心外设大型付费停车场；停车后换乘园区免费环保巴士进入景区。',
              en: 'Large paid lot at the visitor center; transfer to the free eco-shuttle inside.',
              es: 'Gran estacionamiento pago junto al centro de visitantes; luego autobús ecológico gratuito.',
              pt: 'Estacionamento pago no centro de visitantes; depois ônibus ecológico gratuito.',
            },
          },
        ],
      },
    ],
  },

  encyclopedia: {
    sectionNum: { zh: '深度百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' },
    heading: {
      zh: '1.3 亿年<em class="text-[color:var(--color-emerald)]"> · 一条河 · 一个传说</em>',
      en: '130 million years.<em class="text-[color:var(--color-emerald)]"> One river. One legend.</em>',
      es: '130 millones de años.<em class="text-[color:var(--color-emerald)]"> Un río. Una leyenda.</em>',
      pt: '130 milhões de anos.<em class="text-[color:var(--color-emerald)]"> Um rio. Uma lenda.</em>',
    },
    items: [
      {
        icon: '🌋',
        title: { zh: '地质起源：玄武岩阶地', en: 'Geological Origin: Basalt Terraces', es: 'Origen geológico: terrazas de basalto', pt: 'Origem geológica: terraços de basalto' },
        desc: {
          zh: '追溯至 1.3 亿年前白垩纪，火山喷发的岩浆冷却成坚硬玄武岩。断层运动令伊瓜苏河床产生巨大落差，流水历经百万年切割雕琢出阶梯状峡谷。',
          en: 'Cretaceous volcanic flows (~130 Mya) cooled into basalt. Faulting created the massive drop; the river spent millions of years carving today\'s tiered canyon.',
          es: 'Flujos volcánicos del Cretácico (~130 Ma) enfriaron en basalto. La falla creó la caída; el río tardó millones de años en tallar el cañón.',
          pt: 'Fluxos vulcânicos do Cretáceo (~130 Ma) esfriaram em basalto. A falha criou o desnível; o rio esculpiu o cânion por milhões de anos.',
        },
      },
      {
        icon: '🐍',
        title: { zh: '瓜拉尼人的传说', en: 'The Guarani Legend', es: 'La leyenda guaraní', pt: 'A lenda guarani' },
        desc: {
          zh: '少女 Naipi 本要被献祭给蛇神 M\'Boi。她与爱人 Tarobá 乘独木舟私奔，激怒蛇神。M\'Boi 将河截断形成瀑布，将两人永远困在深渊与悬崖之间。',
          en: 'The maiden Naipi was to be sacrificed to the serpent-god M\'Boi. She fled by canoe with her lover Tarobá; enraged, M\'Boi split the river to form the falls, trapping the pair forever between abyss and cliff.',
          es: 'La joven Naipi iba a ser sacrificada al dios serpiente M\'Boi. Huyó en canoa con Tarobá; furioso, M\'Boi partió el río creando las cataratas, atrapándolos entre abismo y risco.',
          pt: 'A jovem Naipi seria sacrificada à serpente M\'Boi. Fugiu de canoa com Tarobá; furioso, M\'Boi partiu o rio criando as quedas, prendendo o casal entre abismo e penhasco.',
        },
      },
      {
        icon: '💧',
        title: { zh: '水文数据：极限流量', en: 'Hydrology: Extreme Flow', es: 'Hidrología: caudal extremo', pt: 'Hidrologia: vazão extrema' },
        desc: {
          zh: '平均流量约 1,500 m³/s。2014 年历史洪峰达到 46,300 m³/s —— 是平时的 30 多倍，几乎淹没所有观景栈道。',
          en: 'Average flow ~1,500 m³/s. The 2014 flood peaked at 46,300 m³/s — over 30× normal, nearly submerging every catwalk.',
          es: 'Caudal medio ~1.500 m³/s. En 2014 llegó a 46.300 m³/s — más de 30× lo normal, casi sumergiendo todas las pasarelas.',
          pt: 'Vazão média ~1.500 m³/s. Em 2014 atingiu 46.300 m³/s — mais de 30× o normal, quase submergindo todas as passarelas.',
        },
      },
      {
        icon: '🗺️',
        title: { zh: '1541：欧洲人的首次发现', en: '1541: European Discovery', es: '1541: descubrimiento europeo', pt: '1541: descoberta europeia' },
        desc: {
          zh: '1541 年，西班牙探险家 Álvar Núñez Cabeza de Vaca 在寻找通往亚松森的内陆路线时听到震耳水声，成为首位记录伊瓜苏瀑布的欧洲人。',
          en: 'In 1541, Spanish explorer Álvar Núñez Cabeza de Vaca — searching for a route to Asunción — followed the thunder and became the first European to record the falls.',
          es: 'En 1541, el explorador español Álvar Núñez Cabeza de Vaca, buscando ruta a Asunción, siguió el estruendo y fue el primer europeo en registrar las cataratas.',
          pt: 'Em 1541, o explorador espanhol Álvar Núñez Cabeza de Vaca, buscando rota a Assunção, seguiu o estrondo e foi o primeiro europeu a registrar as cataratas.',
        },
      },
    ],
  },

  gallery: {
    sectionNum: { zh: '视觉图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' },
    heading: {
      zh: '水、光、雾、彩虹',
      en: 'Water. Light. Mist. Rainbow.',
      es: 'Agua. Luz. Niebla. Arcoíris.',
      pt: 'Água. Luz. Névoa. Arco-íris.',
    },
  },

  reviews: {
    sectionNum: { zh: '游客评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' },
    heading: {
      zh: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 8,954 位旅行者',
      en: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · from 8,954 travelers',
      es: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 8,954 viajeros',
      pt: '4.9<span class="text-[color:var(--color-emerald)]">/5</span> · de 8.954 viajantes',
    },
    items: [
      {
        stars: '★★★★★',
        date: '2025-05',
        title: { zh: '"大自然的终极震撼"', en: '"Nature at its most humbling"', es: '"La naturaleza en su forma más humilde"', pt: '"A natureza em sua forma mais humilde"' },
        desc: {
          zh: '相比阿根廷侧，巴西这边的步道能让你看清伊瓜苏的全貌。走到魔鬼之喉栈道的时候，那种水汽和轰鸣声让人终生难忘。记得带雨衣！',
          en: 'Compared to the Argentine side, the Brazilian trail shows you the whole picture. The Devil\'s Throat catwalk — the mist and roar — is unforgettable. Bring a poncho!',
          es: 'Comparado con Argentina, el lado brasileño te muestra todo. La pasarela de la Garganta del Diablo, con la niebla y el rugido, es inolvidable. ¡Lleva poncho!',
          pt: 'Comparado ao lado argentino, o lado brasileiro mostra o todo. A passarela da Garganta do Diabo, com névoa e estrondo, é inesquecível. Leve capa!',
        },
        author: 'Maria S. · 🇧🇷',
      },
      {
        stars: '★★★★★',
        date: '2025-04',
        title: { zh: '"组织有序，设施完善"', en: '"Perfectly organized park"', es: '"Perfectamente organizado"', pt: '"Perfeitamente organizado"' },
        desc: { zh: '公园巴士系统高效无比，步道维护得非常好——我 70 岁的父亲都能轻松走完。全景电梯的景致无法用言语形容。', en: 'The park\'s shuttle bus system is incredibly efficient, and the trail itself is beautifully maintained — even my 70-year-old father made it through easily. The panoramic elevator at the end offers a view that words simply can\'t do justice to.', es: 'El sistema de autobuses del parque es increíblemente eficiente, y el sendero está magníficamente mantenido — incluso mi padre de 70 años lo hizo fácilmente. El ascensor panorámico al final ofrece una vista que las palabras no pueden describir.', pt: 'O sistema de ônibus é incrivelmente eficiente, e a trilha é lindamente mantida — até meu pai de 70 anos a fez facilmente. O elevador panorâmico oferece uma vista que as palavras não descrevem.' },
        author: 'James W. · 🇺🇸',
      },
      {
        stars: '★★★★<span class="text-black/20">★</span>',
        date: '2025-03',
        title: { zh: '"彩虹很美，浣熊调皮"', en: '"Beautiful rainbows, cheeky coatis"', es: '"Arcoíris hermosos, coatíes traviesos"', pt: '"Arco-íris lindos, quatis levados"' },
        desc: {
          zh: '风景绝对是满分，水汽形成的彩虹太美了。扣掉一星是因为有游客不遵守规定喂浣熊，导致动物有点攻击性。大家一定要保护好自己的零食！',
          en: 'Scenery is a perfect 10, the mist-rainbows are stunning. Lost a star because some tourists fed the coatis, making them a bit aggressive. Guard your snacks!',
          es: 'Paisaje 10/10, arcoíris increíbles. Le quito una estrella porque algunos turistas alimentan a los coatíes y se ponen agresivos. ¡Cuida tus snacks!',
          pt: 'Paisagem 10/10, arco-íris incríveis. Tiro uma estrela porque alguns turistas alimentam os quatis, que ficam agressivos. Cuide dos seus lanches!',
        },
        author: 'Lin Y. · 🇨🇳',
      },
      {
        stars: '★★★★★',
        date: '2025-06',
        title: { zh: '"改变人生的体验"', en: '"Una experiencia que cambia la vida"', es: '"Una experiencia que cambia la vida"', pt: '"Uma experiência que muda a vida"' },
        desc: { zh: '我已经看过阿根廷侧，但巴西侧的全景视角完全是另一个维度。魔鬼之喉上的双彩虹让我感动落泪。100% 推荐两侧都去。', en: 'Ya había visto el lado argentino, pero la vista panorámica desde Brasil es simplemente otra dimensión. El arco iris doble sobre la Garganta del Diablo me hizo llorar. 100% recomendado hacer ambos lados.', es: 'Ya había visto el lado argentino, pero la vista panorámica desde Brasil es simplemente otra dimensión. El arco iris doble sobre la Garganta del Diablo me hizo llorar. 100% recomendado hacer ambos lados.', pt: 'Já tinha visto o lado argentino, mas a vista panorâmica do Brasil é outra dimensão. O arco-íris duplo sobre a Garganta do Diabo me fez chorar. 100% recomendado.' },
        author: 'Sofía R. · 🇦🇷',
      },
      {
        stars: '★★★★★',
        date: '2025-02',
        title: { zh: '"门票每一分钱都值得"', en: '"Vale cada centavo do ingresso"', es: '"Vale cada centavo de entrada"', pt: '"Vale cada centavo do ingresso"' },
        desc: { zh: '我是巴西人，已经去了三次。每次都有全新的感受——雨季水量惊人，旱季则能更清晰地看清岩层。步道无可挑剔。', en: 'Sou brasileiro e já visitei três vezes. Cada visita é uma emoção nova — na estação chuvosa o volume de água é assustador, na seca dá pra ver as formações rochosas com mais clareza. A trilha é impecável.', es: 'Soy brasileño y ya la visité tres veces. Cada visita es una emoción nueva — en época de lluvias el volumen de agua es aterrador, en seca se ven mejor las formaciones rocosas. La trilha es impecable.', pt: 'Sou brasileiro e já visitei três vezes. Cada visita é uma emoção nova — na estação chuvosa o volume de água é assustador, na seca dá pra ver as formações rochosas com mais clareza. A trilha é impecável.' },
        author: 'Rafael M. · 🇧🇷',
      },
      {
        stars: '★★★★★',
        date: '2024-11',
        title: { zh: '"蜜月最美好的一天"', en: '"Best day of our honeymoon"', es: '"El mejor día de nuestra luna de miel"', pt: '"O melhor dia da nossa lua de mel"' },
        desc: { zh: '我们预约了早上 9 点入场以避开人潮，这是最明智的决定。悠闲地走完步道，看到了巨嘴鸟和浣熊，最后在 Porto Canoas 俯瞰河流享用午餐。绝对是神奇的蜜月回忆。', en: 'We booked the 9AM entry to avoid crowds and it was the best decision. Walked the trail slowly, saw toucans, coatis, and finished with lunch at Porto Canoas overlooking the river. Absolutely magical honeymoon memory.', es: 'Reservamos la entrada de las 9AM para evitar multitudes y fue la mejor decisión. Caminamos despacio, vimos tucanes, coatíes y terminamos con almuerzo en Porto Canoas. Recuerdo de luna de miel absolutamente mágico.', pt: 'Reservamos a entrada das 9h para evitar multidões e foi a melhor decisão. Caminhamos devagar, vimos tucanos, quatis e terminamos com almoço no Porto Canoas. Memória de lua de mel absolutamente mágica.' },
        author: 'Emily & Tom H. · 🇬🇧',
      },
      {
        stars: '★★★★★',
        date: '2025-01',
        title: { zh: '"雨季的水量令人震撼"', en: '"Staggering wet-season volume"', es: '"Volumen de agua impresionante"', pt: '"Volume de água impressionante"' },
        desc: { zh: '一月份雨季水量超级大。观景台雨伞完全没用，雨衣是必须的。相机请放入防水袋。但彩虹出现率极高，强力推荐。', en: 'January is the rainy season and water volume was staggering. Umbrellas are useless at the viewpoint — raincoat mandatory. Put cameras in waterproof bags. But rainbow probability is overwhelmingly high — highly recommended.', es: 'Enero es temporada de lluvias y el volumen de agua fue alucinante. Paraguas inútil en el mirador — impermeable obligatorio. Cámara en bolsa estanca. Pero probabilidad de arcoíris es altísima.', pt: 'Janeiro é estação chuvosa e o volume de água estava absurdo. Guarda-chuva não serve no mirante — capa de chuva obrigatória. Câmera em bolsa à prova d\'água. Mas probabilidade de arco-íris é altíssima.' },
        author: 'Kenji T. · 🇯🇵',
      },
      {
        stars: '★★★★<span class="text-black/20">★</span>',
        date: '2024-12',
        title: { zh: '"壮观但人流较大"', en: '"Spectacular but crowded"', es: '"Espectacular pero lleno"', pt: '"Espetacular mas lotado"' },
        desc: {
          zh: '景色没得说，绝对是世界级的震撼。唯一的问题是下午两点后人非常多，观景台栈道要排队走，拍照很难避开人群。强烈建议 9 点开门就进园。',
          en: 'Scenery is world-class. Only issue: after 2 PM it\'s packed, you queue on the catwalks and photos are crowded. Strongly recommend arriving at 9 AM opening.',
          es: 'Paisaje de nivel mundial. Único problema: después de las 14 h está llenísimo. Recomiendo llegar a las 9 h.',
          pt: 'Paisagem de nível mundial. Único problema: depois das 14 h fica muito cheio. Recomendo chegar às 9 h.',
        },
        author: 'Wang H. · 🇨🇳',
      },
      {
        stars: '★★★★★',
        date: '2025-05',
        title: { zh: '"工程奇迹与纯粹自然的完美结合"', en: '"Sensational engineering meets pure nature"', es: '"Ingeniería sensacional y naturaleza pura"', pt: '"Engenharia sensacional encontra natureza pura"' },
        desc: { zh: '这里的无障碍设施是世界级的——我母亲坐轮椅，几乎体验了整条步道，包括魔鬼之喉栈道。通往 Porto Canoas 的电梯让一切无缝衔接。太棒了，巴西。', en: 'Wheelchair accessibility here is world-class — my mother uses a wheelchair and she was able to experience nearly the entire trail including the Devil\'s Throat walkway. The elevator to Porto Canoas made everything seamless. Bravo, Brazil.', es: 'La accesibilidad en silla de ruedas aquí es de clase mundial — mi madre pudo experimentar casi todo el sendero. El ascensor a Porto Canoas hizo todo perfecto. Bravo, Brasil.', pt: 'A acessibilidade aqui é de classe mundial — minha mãe, cadeirante, pôde experimentar quase toda a trilha. O elevador para Porto Canoas fez tudo perfeito. Bravo, Brasil.' },
        author: 'Anna K. · 🇩🇪',
      },
    ],
  },

  surrounding: {
    sectionNum: { zh: '周边联动', en: 'Nearby', es: 'Alrededores', pt: 'Arredores' },
    heading: {
      zh: '还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>',
      en: 'Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>',
      es: 'Extiende tu viaje<em class="text-[color:var(--color-emerald)]"> aún más</em>',
      pt: 'Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>',
    },
    items: [
      {
        img: '/gallery/trilha-das-cataratas-brasil (17).jpg',
        title: '🦜 Parque das Aves',
        desc: {
          zh: '距国家公园入口仅 300 米。南美最大的鸟类保护区，1,300+ 只热带鸟类，可零距离接触巨嘴鸟与金刚鹦鹉。',
          en: '300 m from the park entrance. South America\'s largest bird sanctuary; 1,300+ tropical birds you can meet up-close.',
          es: 'A 300 m del parque. El santuario de aves más grande de Sudamérica; 1.300+ aves tropicales.',
          pt: 'A 300 m do parque. O maior santuário de aves da América do Sul; 1.300+ aves tropicais.',
        },
      },
      {
        img: '/gallery/trilha-das-cataratas-brasil (18).jpg',
        title: '🚤 Macuco Safari',
        desc: {
          zh: '园内探险项目。敞篷吉普穿越雨林，快艇逆流冲入瀑布下方，体验瀑布威力最刺激的方式。',
          en: 'Inside the park. Open jeeps through the jungle, then speedboats charge upstream directly under the falls.',
          es: 'Dentro del parque. Jeeps abiertos por la selva, luego lanchas hasta debajo de las cascadas.',
          pt: 'Dentro do parque. Jipes abertos pela mata e lanchas até debaixo das quedas.',
        },
      },
      {
        img: '/gallery/trilha-das-cataratas-brasil (19).jpg',
        title: '⚡ Itaipu Binacional',
        desc: {
          zh: '世界上发电量最大的水电站之一。宏伟混凝土大坝是现代工程奇迹，提供常规观光与深入机房专业路线。',
          en: 'One of the world\'s largest hydroelectric plants. A modern engineering wonder with both standard tours and deep technical routes.',
          es: 'Una de las mayores hidroeléctricas del mundo. Ofrece visitas turísticas y rutas técnicas profundas.',
          pt: 'Uma das maiores hidrelétricas do mundo. Visitas turísticas e rotas técnicas profundas.',
        },
      },
    ],
  },

  faq: {
    sectionNum: 'FAQ',
    heading: { zh: '常见问题', en: 'Common questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes' },
    items: [
      {
        q: { zh: '走这条步道需要很高的体力吗？', en: 'Is the trail physically demanding?', es: '¿Requiere buena condición física?', pt: 'A trilha exige preparo físico?' },
        a: {
          zh: '不需要。全程仅 1.2 公里，路面平整、坡度很小，适合所有年龄段。行动不便的游客可跳过步行直接乘大巴到终点，通过无障碍电梯直达主观景台。',
          en: 'Not at all. Just 1.2 km on paved, gently graded paths — friendly to all ages. Guests with limited mobility can skip the walk, take the bus to the endpoint, and use the accessible elevator.',
          es: 'Para nada. Solo 1,2 km en camino plano y con pendiente suave — apto para todas las edades. Personas con movilidad reducida pueden ir directo al ascensor.',
          pt: 'De jeito nenhum. Apenas 1,2 km em piso plano e com inclinação suave — para todas as idades. Pessoas com mobilidade reduzida podem ir direto ao elevador.',
        },
      },
      {
        q: { zh: '巴西侧和阿根廷侧的瀑布有什么区别？', en: 'Brazil side vs Argentina side?', es: '¿Lado brasileño vs argentino?', pt: 'Lado brasileiro vs argentino?' },
        a: {
          zh: '强推两侧都看。巴西侧（Trilha das Cataratas）以"上帝视角"的全景取胜，适合摄影与欣赏整体；阿根廷侧步道更长，以深入瀑布内部的沉浸式体验为主。',
          en: 'See both. Brazil delivers the panoramic "god view" — best for photos and grasping the whole system. Argentina has longer trails that put you inside the falls for an immersive experience.',
          es: 'Ambos. Brasil ofrece la vista panorámica; Argentina te sumerge dentro de las cataratas.',
          pt: 'Os dois. Brasil oferece a vista panorâmica; Argentina te mergulha dentro das quedas.',
        },
      },
      {
        q: { zh: '什么时候是游览的最佳时间？', en: 'What\'s the best time to visit?', es: '¿Cuál es el mejor horario?', pt: 'Qual é o melhor horário?' },
        a: {
          zh: '早上 9:00 公园刚开门是避开人潮的最佳时段；下午 14:00-16:00 阳光角度最好，是拍摄瀑布彩虹的黄金时间。',
          en: '9 AM opening beats the crowds. 2–4 PM has the best sun angle — the golden window for rainbow photos.',
          es: 'Las 9 h evitan multitudes. 14–16 h ofrece el mejor ángulo solar para arcoíris.',
          pt: 'Às 9 h evita as multidões. 14–16 h tem o melhor ângulo do sol para arco-íris.',
        },
      },
      {
        q: { zh: '从巴西去阿根廷侧需要签证吗？', en: 'Do I need a visa to cross to Argentina?', es: '¿Necesito visa para cruzar a Argentina?', pt: 'Preciso de visto para a Argentina?' },
        a: {
          zh: '取决于国籍。中国护照持有者若有有效美国 / 加拿大 / 申根签证，可通过阿根廷 AVE 电子旅行授权免签入境。跨境时请在友谊桥 (Tancredo Neves) 备齐文件。',
          en: 'Depends on your passport. Chinese passport holders with valid US / Canada / Schengen visas can enter via Argentina\'s AVE electronic authorization. Have documents ready at the Tancredo Neves bridge.',
          es: 'Depende del pasaporte. Los titulares chinos con visa USA / Canadá / Schengen pueden usar AVE. Documentos listos en el puente Tancredo Neves.',
          pt: 'Depende do passaporte. Chineses com visto EUA / Canadá / Schengen podem usar o AVE. Documentos prontos na ponte Tancredo Neves.',
        },
      },
    ],
  },

  footer: {
    cta: {
      zh: '今天，走进<br/><em class="text-[color:var(--color-sun)]">水雾深处</em>。',
      en: 'Today, step<br/><em class="text-[color:var(--color-sun)]">into the mist</em>.',
      es: 'Hoy, entra<br/><em class="text-[color:var(--color-sun)]">en la niebla</em>.',
      pt: 'Hoje, entre<br/><em class="text-[color:var(--color-sun)]">na névoa</em>.',
    },
    address: {
      zh: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil',
      en: 'Trilha das Cataratas · Iguaçu National Park · Foz do Iguaçu, PR, Brazil',
      es: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil',
      pt: 'Trilha das Cataratas · Parque Nacional do Iguaçu · Foz do Iguaçu, PR, Brasil',
    },
    copyright: '© 2026 · Astro + Tailwind · Static · Cloudflare Pages Ready',
  },

  meta: {
    title: {
      zh: 'Trilha das Cataratas Brasil · 伊瓜苏瀑布震撼观景步道',
      en: 'Trilha das Cataratas Brasil · Iguaçu Falls Scenic Trail',
      es: 'Trilha das Cataratas Brasil · Sendero panorámico de Iguazú',
      pt: 'Trilha das Cataratas Brasil · Trilha panorâmica das Cataratas do Iguaçu',
    },
    description: {
      zh: '伊瓜苏瀑布巴西侧步道 (Trilha das Cataratas) 官方级别游览指南：全景视角、魔鬼之喉、雨林生态、交通与门票、9 条真实评价、常见问题。',
      en: 'The complete guide to the Brazilian side of Iguaçu Falls (Trilha das Cataratas): panoramic trail, Devil\'s Throat, rainforest ecology, transport & tickets, 9 real reviews, FAQ.',
      es: 'Guía completa del lado brasileño de las Cataratas del Iguazú (Trilha das Cataratas): sendero panorámico, Garganta del Diablo, ecología selvática.',
      pt: 'Guia completo do lado brasileiro das Cataratas do Iguaçu (Trilha das Cataratas): trilha panorâmica, Garganta do Diabo, ecologia da mata atlântica.',
    },
  },
};
