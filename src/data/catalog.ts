export interface CatalogItem {
  id: string;
  name: string;
  image: string; // URL to image in public folder
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
      { id: 'iphone', name: 'iPhone', image: '/images/iphones.jpg' },
      { id: 'samsung', name: 'Samsung Galaxy phones', image: '/images/samsung.jpg' },
      { id: 'tecno', name: 'Tecno phones', image: '/images/tecno.jpg' },
      { id: 'infinix', name: 'Infinix phones', image: '/images/infinix.png' },
      { id: 'redmi', name: 'Redmi/Xiaomi phones', image: '/images/redmi.png' },
      { id: 'pixel', name: 'Google Pixel phones', image: '/images/pixel.jpg' },
      { id: 'android', name: 'Other Android phones', image: '/images/otherandroidphones.jpg' },
      { id: 'brand-new', name: 'Brand-new phones', image: '/images/brandnewphones.jpg' },
      { id: 'uk-used', name: 'UK-used / fairly used phones', image: '/images/ukusedphones.jpg' },
    ],
  },
  {
    id: 'audio',
    label: 'Audio & Entertainment',
    items: [
      { id: 'airpods', name: 'AirPods', image: '/images/appleairpods.png' },
      { id: 'earbuds', name: 'Wireless earbuds', image: '/images/WirelessEarbuds.png' },
      { id: 'headphones', name: 'Headphones', image: '/images/headphones.png' },
      { id: 'speakers', name: 'Bluetooth speakers', image: '/images/wirelessspeaker.png' },
    ],
  },
  {
    id: 'smart-devices',
    label: 'Smart Devices',
    items: [
      { id: 'apple-watch', name: 'Apple Watch', image: '/images/applewatch.jpg' },
      { id: 'samsung-watch', name: 'Samsung Galaxy Watch', image: '/images/samsung%20watch.jpg' },
      { id: 'smartwatch', name: 'Smartwatches', image: '/images/smartwatch.jpg' },
      { id: 'smartband', name: 'Smart bands', image: '/images/smartband.jpg' },
    ],
  },
  {
    id: 'accessories',
    label: 'Phone Accessories',
    items: [
      { id: 'chargers', name: 'Chargers', image: '/images/phonecharger.jpg' },
      { id: 'fast-chargers', name: 'Fast chargers', image: '/images/fastcharger.jpg' },
      { id: 'usb-cables', name: 'USB cables', image: '/images/usbcable.png' },
      { id: 'type-c', name: 'Type-C cables', image: '/images/usbcable.png' },
      { id: 'lightning', name: 'Lightning cables', image: '/images/lighteningcable.jpg' },
      { id: 'power-banks', name: 'Power banks', image: '/images/powerbanks.jpg' },
      { id: 'cases', name: 'Phone cases', image: '/images/phonecase.jpg' },
      { id: 'screen-protectors', name: 'Screen protectors', image: '/images/screenprotectorpopup.jpg' },
      { id: 'camera-protectors', name: 'Camera protectors', image: '/images/cameraprotector.jpg' },
      { id: 'car-chargers', name: 'Car chargers', image: '/images/carcharger.png' },
      { id: 'phone-holders', name: 'Phone holders', image: '/images/phoneholder.jpg' },
    ],
  },
  {
    id: 'computers',
    label: 'Computers & Tablets',
    items: [
      { id: 'ipad', name: 'iPads', image: '/images/ipad.jpg' },
      { id: 'tablets', name: 'Tablets', image: '/images/tablets.jpg' },
      { id: 'laptops', name: 'Laptops', image: '/images/laptops.png' },
    ],
  },
  {
    id: 'gaming',
    label: 'Gaming & Other Gadgets',
    items: [
      { id: 'gaming-accessories', name: 'Gaming accessories', image: '/images/gamingaccessories.png' },
      { id: 'other-gadgets', name: 'Other smart gadgets', image: '/images/othersmartgadgets.jpg' },
    ],
  },
];
