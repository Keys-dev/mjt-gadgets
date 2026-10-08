export interface CatalogItem {
  id: string;
  name: string;
  image: string; // URL to image
}

export interface CatalogCategory {
  id: string;
  label: string;
  items: CatalogItem[];
}

export const catalog: CatalogCategory[] = [
  {
    id: 'phones',
    label: 'Phones',
    items: [
      { id: 'iphone', name: 'iPhone', image: 'https://via.placeholder.com/300?text=iPhone' },
      { id: 'samsung', name: 'Samsung Galaxy phones', image: 'https://via.placeholder.com/300?text=Samsung' },
      { id: 'tecno', name: 'Tecno phones', image: 'https://via.placeholder.com/300?text=Tecno' },
      { id: 'infinix', name: 'Infinix phones', image: 'https://via.placeholder.com/300?text=Infinix' },
      { id: 'redmi', name: 'Redmi/Xiaomi phones', image: 'https://via.placeholder.com/300?text=Redmi' },
      { id: 'pixel', name: 'Google Pixel phones', image: 'https://via.placeholder.com/300?text=Pixel' },
      { id: 'android', name: 'Other Android phones', image: 'https://via.placeholder.com/300?text=Android' },
      { id: 'brand-new', name: 'Brand-new phones', image: 'https://via.placeholder.com/300?text=Brand+New' },
      { id: 'uk-used', name: 'UK-used / fairly used phones', image: 'https://via.placeholder.com/300?text=Used+Phone' },
    ],
  },
  {
    id: 'audio',
    label: 'Audio & Entertainment',
    items: [
      { id: 'airpods', name: 'AirPods', image: 'https://via.placeholder.com/300?text=AirPods' },
      { id: 'earbuds', name: 'Wireless earbuds', image: 'https://via.placeholder.com/300?text=Earbuds' },
      { id: 'headphones', name: 'Headphones', image: 'https://via.placeholder.com/300?text=Headphones' },
      { id: 'speakers', name: 'Bluetooth speakers', image: 'https://via.placeholder.com/300?text=Speakers' },
    ],
  },
  {
    id: 'smart-devices',
    label: 'Smart Devices',
    items: [
      { id: 'apple-watch', name: 'Apple Watch', image: 'https://via.placeholder.com/300?text=Apple+Watch' },
      { id: 'samsung-watch', name: 'Samsung Galaxy Watch', image: 'https://via.placeholder.com/300?text=Galaxy+Watch' },
      { id: 'smartwatch', name: 'Smartwatches', image: 'https://via.placeholder.com/300?text=Smartwatch' },
      { id: 'smartband', name: 'Smart bands', image: 'https://via.placeholder.com/300?text=Smart+Band' },
    ],
  },
  {
    id: 'accessories',
    label: 'Phone Accessories',
    items: [
      { id: 'chargers', name: 'Chargers', image: 'https://via.placeholder.com/300?text=Charger' },
      { id: 'fast-chargers', name: 'Fast chargers', image: 'https://via.placeholder.com/300?text=Fast+Charger' },
      { id: 'usb-cables', name: 'USB cables', image: 'https://via.placeholder.com/300?text=USB+Cable' },
      { id: 'type-c', name: 'Type-C cables', image: 'https://via.placeholder.com/300?text=Type-C+Cable' },
      { id: 'lightning', name: 'Lightning cables', image: 'https://via.placeholder.com/300?text=Lightning+Cable' },
      { id: 'power-banks', name: 'Power banks', image: 'https://via.placeholder.com/300?text=Power+Bank' },
      { id: 'cases', name: 'Phone cases', image: 'https://via.placeholder.com/300?text=Phone+Case' },
      { id: 'screen-protectors', name: 'Screen protectors', image: 'https://via.placeholder.com/300?text=Screen+Protector' },
      { id: 'camera-protectors', name: 'Camera protectors', image: 'https://via.placeholder.com/300?text=Camera+Protector' },
      { id: 'car-chargers', name: 'Car chargers', image: 'https://via.placeholder.com/300?text=Car+Charger' },
      { id: 'phone-holders', name: 'Phone holders', image: 'https://via.placeholder.com/300?text=Phone+Holder' },
    ],
  },
  {
    id: 'computers',
    label: 'Computers & Tablets',
    items: [
      { id: 'ipad', name: 'iPads', image: 'https://via.placeholder.com/300?text=iPad' },
      { id: 'tablets', name: 'Tablets', image: 'https://via.placeholder.com/300?text=Tablet' },
      { id: 'laptops', name: 'Laptops', image: 'https://via.placeholder.com/300?text=Laptop' },
    ],
  },
  {
    id: 'gaming',
    label: 'Gaming & Other Gadgets',
    items: [
      { id: 'gaming-accessories', name: 'Gaming accessories', image: 'https://via.placeholder.com/300?text=Gaming+Acc' },
      { id: 'other-gadgets', name: 'Other smart gadgets', image: 'https://via.placeholder.com/300?text=Other+Gadget' },
    ],
  },
];
