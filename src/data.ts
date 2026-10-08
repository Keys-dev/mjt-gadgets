export type CategoryId = 'phones' | 'laptops' | 'playstation' | 'accessories';

export interface Category {
  id: CategoryId;
  label: string;
  intro: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  brand: string;
  condition: 'Brand new' | 'UK used' | 'Open box';
  price: number; // NGN, sample data
  specs: string[];
}

export const categories: Category[] = [
  { id: 'phones', label: 'Phones', intro: 'iPhones and Android phones, new and UK used.' },
  { id: 'laptops', label: 'Laptops', intro: 'MacBooks and Windows laptops for work, school and creators.' },
  { id: 'playstation', label: 'PlayStation', intro: 'Consoles, controllers and games.' },
  { id: 'accessories', label: 'Accessories', intro: 'Chargers, earbuds, cases and the small things that matter.' },
];

// SAMPLE DATA. Replace names, conditions and prices with your real stock.
export const products: Product[] = [
  { id: 'iph-15-pro-256', name: 'iPhone 15 Pro 256GB', category: 'phones', brand: 'Apple', condition: 'Brand new', price: 1450000, specs: ['256GB', 'Titanium', 'A17 Pro'] },
  { id: 'iph-14-128', name: 'iPhone 14 128GB', category: 'phones', brand: 'Apple', condition: 'UK used', price: 780000, specs: ['128GB', 'Battery 90%+', 'Face ID'] },
  { id: 'iph-13-128', name: 'iPhone 13 128GB', category: 'phones', brand: 'Apple', condition: 'UK used', price: 560000, specs: ['128GB', 'Battery 85%+', 'Face ID'] },
  { id: 's24-ultra', name: 'Samsung Galaxy S24 Ultra', category: 'phones', brand: 'Samsung', condition: 'Brand new', price: 1380000, specs: ['256GB', '12GB RAM', 'S Pen'] },
  { id: 'pixel-8', name: 'Google Pixel 8', category: 'phones', brand: 'Google', condition: 'UK used', price: 520000, specs: ['128GB', '8GB RAM', 'Tensor G3'] },
  { id: 'mbp-m3', name: 'MacBook Pro 14 M3', category: 'laptops', brand: 'Apple', condition: 'Brand new', price: 2650000, specs: ['16GB RAM', '512GB SSD', 'M3 chip'] },
  { id: 'mba-m1', name: 'MacBook Air M1', category: 'laptops', brand: 'Apple', condition: 'UK used', price: 890000, specs: ['8GB RAM', '256GB SSD', 'M1 chip'] },
  { id: 'hp-elitebook', name: 'HP EliteBook 840 G8', category: 'laptops', brand: 'HP', condition: 'UK used', price: 520000, specs: ['16GB RAM', '512GB SSD', 'Core i7'] },
  { id: 'ps5-disc', name: 'PlayStation 5 Disc Edition', category: 'playstation', brand: 'Sony', condition: 'Brand new', price: 820000, specs: ['825GB', '1 controller', '4K output'] },
  { id: 'ps5-slim', name: 'PlayStation 5 Slim Digital', category: 'playstation', brand: 'Sony', condition: 'Open box', price: 700000, specs: ['1TB', '1 controller', 'Digital only'] },
  { id: 'ps4-pro', name: 'PlayStation 4 Pro 1TB', category: 'playstation', brand: 'Sony', condition: 'UK used', price: 290000, specs: ['1TB', '1 controller', '4K upscaling'] },
  { id: 'dualsense', name: 'DualSense Controller', category: 'playstation', brand: 'Sony', condition: 'Brand new', price: 75000, specs: ['Wireless', 'Haptic feedback'] },
  { id: 'airpods-pro-2', name: 'AirPods Pro (2nd gen)', category: 'accessories', brand: 'Apple', condition: 'Brand new', price: 230000, specs: ['USB-C', 'Noise cancelling'] },
  { id: 'anker-65w', name: 'Anker 65W GaN Charger', category: 'accessories', brand: 'Anker', condition: 'Brand new', price: 38000, specs: ['65W', '3 ports'] },
];

export type FieldType = 'text' | 'select';
export interface Field {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  cta: string;
  fields: Field[];
}

const conditions = ['Brand new', 'Like new', 'Good', 'Fair', 'Cracked or faulty'];

// Edit this list to match the services you really offer.
export const services: Service[] = [
  {
    id: 'buy',
    title: 'Buy a device',
    summary: 'Tell us what you want and your budget. We confirm stock and price.',
    cta: 'Ask about this device',
    fields: [
      { key: 'type', label: 'Device type', type: 'select', options: ['Phone', 'Laptop', 'PlayStation', 'Accessory', 'Other'], required: true },
      { key: 'model', label: 'Model you want', type: 'text', placeholder: 'e.g. iPhone 14 128GB', required: true },
      { key: 'budget', label: 'Budget (optional)', type: 'text', placeholder: 'e.g. 700,000' },
    ],
  },
  {
    id: 'sell',
    title: 'Sell your device',
    summary: 'Share what you have and its condition to get an offer.',
    cta: 'Get an offer',
    fields: [
      { key: 'device', label: 'Your device', type: 'text', placeholder: 'e.g. MacBook Air M1 8/256', required: true },
      { key: 'condition', label: 'Condition', type: 'select', options: conditions, required: true },
      { key: 'notes', label: 'Anything we should know', type: 'text', placeholder: 'Battery health, issues, box and charger' },
    ],
  },
  {
    id: 'iphone-swap',
    title: 'iPhone swap',
    summary: 'Upgrade from one iPhone to another and pay only the difference.',
    cta: 'Start an iPhone swap',
    fields: [
      { key: 'have', label: 'iPhone you have', type: 'text', placeholder: 'e.g. iPhone 12 64GB', required: true },
      { key: 'battery', label: 'Battery health', type: 'text', placeholder: 'e.g. 87%' },
      { key: 'condition', label: 'Condition', type: 'select', options: conditions, required: true },
      { key: 'want', label: 'iPhone you want', type: 'text', placeholder: 'e.g. iPhone 15 Pro 256GB', required: true },
    ],
  },
  {
    id: 'android-ios',
    title: 'Android to iOS swap',
    summary: 'Move from Android to iPhone. We value your phone and price the difference.',
    cta: 'Start an Android to iOS swap',
    fields: [
      { key: 'have', label: 'Android phone you have', type: 'text', placeholder: 'e.g. Samsung S22 Ultra', required: true },
      { key: 'condition', label: 'Condition', type: 'select', options: conditions, required: true },
      { key: 'want', label: 'iPhone you want', type: 'text', placeholder: 'e.g. iPhone 14 Pro', required: true },
    ],
  },
  {
    id: 'console-swap',
    title: 'PlayStation swap',
    summary: 'Trade up your console or add games and controllers to the deal.',
    cta: 'Start a PlayStation swap',
    fields: [
      { key: 'have', label: 'Console you have', type: 'text', placeholder: 'e.g. PS4 Slim 500GB', required: true },
      { key: 'extras', label: 'What comes with it', type: 'text', placeholder: 'Controllers, games' },
      { key: 'want', label: 'Console you want', type: 'text', placeholder: 'e.g. PS5 Disc', required: true },
    ],
  },
];

export const naira = (n: number) => '\u20A6' + n.toLocaleString('en-NG');
