import React from 'react';
import { catalog, CatalogCategory } from '../data/catalog';
import { STORE_NAME } from '../config';
import { whatsappLink } from '../whatsapp';

interface Props {
  list: string[];
  onToggle: (id: string) => void;
}

const Catalogue: React.FC<Props> = ({ list, onToggle }) => {
  return (
    <section className="section" id="catalogue" aria-labelledby="cat-h">
      <h2 id="cat-h">MJT Gadgets Catalog</h2>
      {catalog.map((cat: CatalogCategory) => (
        <div key={cat.id} className="category">
          <h3 className="eyebrow">{cat.label}</h3>
          <ul className="grid">
            {cat.items.map((item) => (
              <li key={item.id} className="card">
                <img src={item.image} alt={item.name} className="thumb" />
                <h4>{item.name}</h4>
                <div className="row">
                  <a
                    className="btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={whatsappLink(`Hello ${STORE_NAME}, do you have ${item.name}?`)}
                  >
                    Ask on WhatsApp
                  </a>
                  <button
                    className="btn ghost"
                    aria-pressed={list.includes(item.id)}
                    onClick={() => onToggle(item.id)}
                  >
                    {list.includes(item.id) ? '✓' : '+'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Catalogue;
