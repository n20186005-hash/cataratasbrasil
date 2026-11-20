import type { Lang } from './utils';

const copy = {
  heritage: ['联合国教科文组织世界遗产', 'UNESCO World Heritage', 'Patrimonio Mundial de la UNESCO', 'Patrimônio Mundial da UNESCO', '유네스코 세계유산'],
  forest: ['大西洋森林', 'Atlantic Forest', 'Mata Atlántica', 'Mata Atlântica', '대서양림'],
  park: ['伊瓜苏国家公园', 'Iguaçu National Park', 'Parque Nacional do Iguaçu', 'Parque Nacional do Iguaçu', '이과수 국립공원'],
  country: ['巴西', 'Brazil', 'Brasil', 'Brasil', '브라질'],
  viewpoint: ['魔鬼之喉观景台', 'Devil’s Throat Viewpoint', 'Mirador de la Garganta del Diablo', 'Mirante da Garganta do Diabo', '악마의 목구멍 전망대'],
  trail: ['瀑布步道', 'Falls Trail', 'Sendero de las Cataratas', 'Trilha das Cataratas', '폭포 산책로'],
  visitors: ['游客中心', 'Visitor Centre', 'Centro de Visitantes', 'Centro de Visitantes', '방문자 센터'],
  city: ['伊瓜苏市', 'Foz do Iguaçu', 'Foz do Iguaçu', 'Foz do Iguaçu', '포스두이과수'],
  region: ['巴拉那州', 'Paraná', 'Paraná', 'Paraná', '파라나주'],
  location: ['位置', 'Location', 'Ubicación', 'Localização', '위치'],
  map: ['位置地图', 'Location map', 'Mapa de ubicación', 'Mapa de localização', '위치 지도'],
  plusCode: ['地图定位码', 'Plus Code', 'Código de ubicación', 'Código de localização', '위치 코드'],
  highlights: ['巴西侧瀑布步道与观景台亮点', 'Highlights of the Brazilian falls trail and viewpoints', 'Lo más destacado del sendero y los miradores del lado brasileño', 'Destaques da trilha e dos mirantes do lado brasileiro', '브라질 쪽 폭포 산책로와 전망대의 볼거리'],
  gallery: ['伊瓜苏市魔鬼之喉观景台实景图集', 'Photos of Devil’s Throat Viewpoint in Foz do Iguaçu', 'Fotografías del mirador de la Garganta del Diablo en Foz do Iguaçu', 'Fotos do Mirante da Garganta do Diabo em Foz do Iguaçu', '포스두이과수 악마의 목구멍 전망대 사진'],
  reviews: ['伊瓜苏市魔鬼之喉观景台游客评价', 'Visitor reviews for Devil’s Throat Viewpoint in Foz do Iguaçu', 'Opiniones sobre el mirador de la Garganta del Diablo en Foz do Iguaçu', 'Avaliações do Mirante da Garganta do Diabo em Foz do Iguaçu', '포스두이과수 악마의 목구멍 전망대 방문 후기'],
  falls: ['道瀑布', 'waterfalls', 'saltos de agua', 'quedas d’água', '개의 폭포'],
} as const;

const localeIndex: Record<Lang, number> = { zh: 0, en: 1, es: 2, pt: 3, ko: 4 };

export function ui(key: keyof typeof copy, lang: Lang): string {
  return copy[key][localeIndex[lang]];
}

const placeNames: Record<string, readonly [string, string, string, string, string]> = {
  'parque-das-aves': ['伊瓜苏鸟类公园', 'Bird Park', 'Parque de las Aves', 'Parque das Aves', '이과수 조류 공원'],
  'macuco-safari': ['马库科游船', 'Macuco Safari', 'Paseo Macuco Safari', 'Macuco Safari', '마쿠코 사파리'],
  'itaipu-panoramica': ['伊泰普全景游', 'Itaipu Panoramic Tour', 'Visita panorámica de Itaipú', 'Itaipu Panorâmica', '이타이푸 파노라마 투어'],
  'marco-das-tres-fronteiras': ['三国交界地标', 'Three Borders Landmark', 'Hito de las Tres Fronteras', 'Marco das Três Fronteiras', '삼국 국경 기념비'],
  'templo-budista-chen-tien': ['陈天佛寺', 'Chen Tien Buddhist Temple', 'Templo budista Chen Tien', 'Templo Budista Chen Tien', '첸톈 불교 사찰'],
};

export function placeName(slug: string, lang: Lang): string {
  return placeNames[slug][localeIndex[lang]];
}
