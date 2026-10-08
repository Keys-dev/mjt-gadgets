import { useEffect, useRef } from 'react';
import { naira, products } from '../data';
import { STORE_NAME } from '../config';
import { whatsappLink } from '../whatsapp';

interface Props {
  open: boolean;
  ids: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function EnquirySheet({ open, ids, onClose, onRemove, onClear }: Props) {
  const ref = useRef<HTMLElement>(null);
  const items = ids.map((id) => products.find((p) => p.id === id)).filter((p) => !!p);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const message =
    `Hello ${STORE_NAME}, I would like to ask about these items:\n\n` +
    items.map((p) => `- ${p!.name} (${p!.condition}, ${naira(p!.price)})`).join('\n');

  return (
    <div className="overlay" onClick={onClose}>
      <aside ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Enquiry list" className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <h2>Enquiry list</h2>
          <button className="btn ghost" onClick={onClose}>Close</button>
        </div>
        {items.length === 0 ? (
          <p className="empty">Nothing here yet. Add devices from the catalogue and send them all in one WhatsApp message.</p>
        ) : (
          <>
            <ul className="lines">
              {items.map((p) => (
                <li key={p!.id}>
                  <div>
                    <strong>{p!.name}</strong>
                    <span>{p!.condition} / {naira(p!.price)}</span>
                  </div>
                  <button className="link" onClick={() => onRemove(p!.id)} aria-label={`Remove ${p!.name}`}>Remove</button>
                </li>
              ))}
            </ul>
            <a className="btn primary wa" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
              Send list on WhatsApp
            </a>
            <button className="link" onClick={onClear}>Clear list</button>
          </>
        )}
      </aside>
    </div>
  );
}
