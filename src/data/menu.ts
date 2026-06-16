import type {ImageSourcePropType} from 'react-native';

export type MenuCategory =
  | 'Warm Bites'
  | 'Light Plates'
  | 'Signature Bites'
  | 'Elegant Starters'
  | 'Warm Plates'
  | 'Signature Plates'
  | 'Premium Bites'
  | 'Lounge Plates'
  | 'Sharing'
  | 'Desserts'
  | 'Drinks';

export type MenuItem = {
  id: string;
  title: string;
  category: MenuCategory;
  price: number;
  featured?: boolean;
  description: string;
  ingredients: string;
  pairing: string;
  allergenNote: string;
  image: ImageSourcePropType;
};

export const MENU_CATEGORY_STYLES: Record<
  MenuCategory,
  {background: string; color: string}
> = {
  'Warm Bites': {background: '#221808', color: '#e8c864'},
  'Light Plates': {background: '#142418', color: '#60c070'},
  'Signature Bites': {background: '#1a2840', color: '#6090e0'},
  'Elegant Starters': {background: '#281e0c', color: '#d0a040'},
  'Warm Plates': {background: '#2a1810', color: '#e8a060'},
  'Signature Plates': {background: '#1a2038', color: '#7080e0'},
  'Premium Bites': {background: '#281a3a', color: '#a060e0'},
  'Lounge Plates': {background: '#1e1428', color: '#c090e0'},
  Sharing: {background: '#142818', color: '#70c080'},
  Desserts: {background: '#2a1018', color: '#e08090'},
  Drinks: {background: '#101828', color: '#60a0e0'},
};

export const OPENING_MENU: MenuItem[] = [
  {
    id: 'midnight-truffle-arancini',
    title: 'Midnight Truffle Arancini',
    category: 'Warm Bites',
    price: 19,
    description:
      'Crisp golden risotto spheres with a soft truffle center, served with parmesan dust and dark herb aioli.',
    ingredients:
      'Risotto rice, black truffle cream, parmesan, herbs, crisp coating, house aioli',
    pairing:
      'Pairs well with citrus tonic, sparkling mineral water, or dry white wine.',
    allergenNote: 'Contains dairy, gluten, eggs. May contain celery.',
    image: require('../assets/first_arrival_midnight_truffle_arancini.png'),
  },
  {
    id: 'velvet-beet-carpaccio',
    title: 'Velvet Beet Carpaccio',
    category: 'Light Plates',
    price: 16,
    description:
      'Thin ruby beet slices with whipped goat cheese, toasted seeds, microgreens, and a sharp berry glaze.',
    ingredients:
      'Roasted beetroot, goat cheese, pumpkin seeds, berry reduction, microgreens, olive oil',
    pairing:
      'Pairs well with elderflower spritz, herbal tea, or light sparkling wine.',
    allergenNote: 'Contains dairy. May contain nuts and sesame.',
    image: require('../assets/first_arrival_velvet_beet_carpaccio.png'),
  },
  {
    id: 'black-sesame-salmon-tartlet',
    title: 'Black Sesame Salmon Tartlet',
    category: 'Signature Bites',
    price: 22,
    featured: true,
    description:
      'A delicate crisp tartlet filled with chilled salmon, black sesame cream, cucumber pearls, and lemon zest.',
    ingredients: 'Salmon, tart shell, black sesame, cucumber, lemon, fresh herbs',
    pairing:
      'Pairs well with yuzu tonic, sparkling water, or champagne-style sparkling wine.',
    allergenNote: 'Contains fish, gluten, sesame, dairy.',
    image: require('../assets/first_arrival_black_sesame_salmon_tartlet.png'),
  },
  {
    id: 'charred-pear-burrata-plate',
    title: 'Charred Pear & Burrata Plate',
    category: 'Elegant Starters',
    price: 20,
    description:
      'Warm charred pear served with creamy burrata, honey pepper glaze, toasted crumbs, and basil oil.',
    ingredients:
      'Pear, burrata, honey glaze, basil oil, toasted crumbs, cracked pepper',
    pairing: 'Pairs well with pear mocktail, white grape juice, or prosecco.',
    allergenNote: 'Contains dairy and gluten. May contain nuts.',
    image: require('../assets/first_arrival_charred_pear_and_burrata_plate.png'),
  },
  {
    id: 'saffron-chicken-lantern-skewers',
    title: 'Saffron Chicken Lantern Skewers',
    category: 'Warm Plates',
    price: 24,
    description:
      'Tender saffron-marinated chicken skewers with roasted lemon, almond herb crumble, and smoked yogurt dip.',
    ingredients: 'Chicken, saffron, lemon, almond crumble, herbs, smoked yogurt',
    pairing: 'Pairs well with iced tea, citrus soda, or light lager.',
    allergenNote: 'Contains dairy and nuts. May contain mustard.',
    image: require('../assets/first_arrival_saffron_chicken_lantern_skewers.png'),
  },
  {
    id: 'crispy-sea-bass-lotus-taco',
    title: 'Crispy Sea Bass Lotus Taco',
    category: 'Signature Plates',
    price: 27,
    description:
      'A refined small taco with crispy sea bass, lotus root chips, lime cream, pickled onion, and fresh coriander.',
    ingredients:
      'Sea bass, soft taco, lotus root, lime cream, pickled onion, coriander',
    pairing:
      'Pairs well with cucumber mint cooler, sparkling water, or dry white wine.',
    allergenNote: 'Contains fish, gluten, dairy. May contain sulphites.',
    image: require('../assets/first_arrival_crispy_sea_bass_lotus_taco.png'),
  },
  {
    id: 'caviar-potato-clouds',
    title: 'Caviar Potato Clouds',
    category: 'Premium Bites',
    price: 32,
    featured: true,
    description:
      'Mini whipped potato clouds topped with crème fraîche, fine caviar, chive oil, and sea salt flakes.',
    ingredients: 'Potato mousse, crème fraîche, caviar, chives, sea salt, olive oil',
    pairing:
      'Pairs well with champagne-style sparkling wine, mineral water, or lemon tonic.',
    allergenNote: 'Contains fish and dairy.',
    image: require('../assets/first_arrival_caviar_potato_clouds.png'),
  },
  {
    id: 'espresso-cocoa-short-rib-slider',
    title: 'Espresso Cocoa Short Rib Slider',
    category: 'Lounge Plates',
    price: 26,
    description:
      'Slow-cooked short rib in an espresso cocoa glaze, served in a mini brioche bun with pickled shallot.',
    ingredients: 'Short rib, espresso glaze, cocoa notes, brioche, shallot, herb mayo',
    pairing: 'Pairs well with cola, dark berry mocktail, or red wine.',
    allergenNote: 'Contains gluten, eggs, dairy. May contain mustard.',
    image: require('../assets/first_arrival_espresso_cocoa_short_rib_slider.png'),
  },
  {
    id: 'golden-fig-halloumi-stack',
    title: 'Golden Fig Halloumi Stack',
    category: 'Sharing',
    price: 21,
    description:
      'Grilled halloumi layered with roasted figs, pistachio dust, warm honey, and fresh mint.',
    ingredients: 'Halloumi, figs, pistachio, honey, mint, olive oil',
    pairing: 'Pairs well with peach iced tea, sparkling water, or rosé wine.',
    allergenNote: 'Contains dairy and nuts.',
    image: require('../assets/first_arrival_golden_fig_halloumi_stack.png'),
  },
  {
    id: 'pearl-citrus-granita',
    title: 'Pearl Citrus Granita',
    category: 'Desserts',
    price: 11,
    description:
      'A chilled citrus granita with tiny fruit pearls, mint crystals, and a clean refreshing finish.',
    ingredients: 'Lemon, orange, lime, fruit pearls, mint, light syrup',
    pairing: 'Pairs well with espresso, green tea, or sparkling water.',
    allergenNote: 'May contain traces of sulphites.',
    image: require('../assets/first_arrival_pearl_citrus_granita.png'),
  },
  {
    id: 'black-cherry-basque-slice',
    title: 'Black Cherry Basque Slice',
    category: 'Desserts',
    price: 14,
    description:
      'A soft Basque-style cheesecake slice with black cherry glaze, vanilla cream, and toasted sugar edge.',
    ingredients: 'Cream cheese, vanilla, black cherry, caramelized top, biscuit crumb',
    pairing: 'Pairs well with coffee, cherry mocktail, or dessert wine.',
    allergenNote: 'Contains dairy, eggs, gluten.',
    image: require('../assets/first_arrival_black_cherry_basque_slice.png'),
  },
  {
    id: 'amber-yuzu-tonic',
    title: 'Amber Yuzu Tonic',
    category: 'Drinks',
    price: 10,
    description:
      'A bright non-alcoholic tonic with yuzu, amber citrus syrup, rosemary, and a sharp sparkling finish.',
    ingredients: 'Yuzu, citrus syrup, tonic water, rosemary, ice, orange peel',
    pairing: 'Pairs well with seafood bites, tartlets, and light starters.',
    allergenNote: 'May contain sulphites.',
    image: require('../assets/first_arrival_amber_yuzu_tonic.png'),
  },
  {
    id: 'blueberry-basil-night-fizz',
    title: 'Blueberry Basil Night Fizz',
    category: 'Drinks',
    price: 12,
    description:
      'A deep blueberry sparkling drink with basil aroma, lime mist, and a smooth evening-style finish.',
    ingredients: 'Blueberry, basil, lime, soda, light syrup, crushed ice',
    pairing: 'Pairs well with grilled cheese plates, desserts, and warm bites.',
    allergenNote: 'May contain traces of sulphites.',
    image: require('../assets/first_arrival_blueberry_basil_night_fizz.png'),
  },
  {
    id: 'smoked-pear-velvet-cooler',
    title: 'Smoked Pear Velvet Cooler',
    category: 'Drinks',
    price: 13,
    description:
      'A soft pear cooler with smoked vanilla notes, lemon, mineral sparkle, and a refined lounge aroma.',
    ingredients: 'Pear nectar, vanilla smoke aroma, lemon, sparkling mineral water, ice',
    pairing:
      'Pairs well with burrata, halloumi, chicken skewers, or cheesecake.',
    allergenNote: 'No major allergens declared. Ask staff for details.',
    image: require('../assets/first_arrival_smoked_pear_velvet_cooler.png'),
  },
];

export function getMenuItemById(itemId: string): MenuItem | undefined {
  return OPENING_MENU.find(item => item.id === itemId);
}

export function formatEuro(amount: number): string {
  return `€${amount}`;
}
