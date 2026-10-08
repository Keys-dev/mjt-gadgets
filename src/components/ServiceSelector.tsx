import { useState } from 'react';
import { services } from '../data';
import { STORE_NAME } from '../config';
import { whatsappLink } from '../whatsapp';

export default function ServiceSelector() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [values, setValues] = useState<Record<string, Record<string, string>>>({});
  const [error, setError] = useState('');

  const service = services.find((s) => s.id === serviceId)!;
  const current = values[serviceId] || {};

  const setValue = (key: string, v: string) => {
    setError('');
    setValues((all) => ({ ...all, [serviceId]: { ...all[serviceId], [key]: v } }));
  };

  const send = () => {
    const missing = service.fields.find((f) => f.required && !(current[f.key] || '').trim());
    if (missing) {
      setError(`Please fill in: ${missing.label}`);
      return;
    }
    const lines = service.fields
      .filter((f) => (current[f.key] || '').trim())
      .map((f) => `${f.label}: ${current[f.key].trim()}`);
    const message = `Hello ${STORE_NAME}, I am interested in: ${service.title}.\n\n${lines.join('\n')}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <h2 id="services-h">What do you need today?</h2>
      <div className="services">
        <div role="radiogroup" aria-label="Service type" className="service-list">
          {services.map((s) => (
            <button
              key={s.id}
              role="radio"
              aria-checked={s.id === serviceId}
              className={'service' + (s.id === serviceId ? ' on' : '')}
              onClick={() => { setServiceId(s.id); setError(''); }}
            >
              <strong>{s.title}</strong>
              <span>{s.summary}</span>
            </button>
          ))}
        </div>

        <div className="panel" aria-live="polite">
          <h3>{service.title}</h3>
          {service.fields.map((f) => (
            <label key={f.key} className="field">
              <span>{f.label}{f.required ? ' *' : ''}</span>
              {f.type === 'select' ? (
                <select value={current[f.key] || ''} onChange={(e) => setValue(f.key, e.target.value)}>
                  <option value="">Select</option>
                  {f.options!.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input value={current[f.key] || ''} placeholder={f.placeholder} onChange={(e) => setValue(f.key, e.target.value)} />
              )}
            </label>
          ))}
          {error && <p className="error" role="alert">{error}</p>}
          <button className="btn primary wa" onClick={send}>{service.cta} on WhatsApp</button>
          <p className="hint">Opens WhatsApp with your details filled in. Nothing is stored on this site.</p>
        </div>
      </div>
    </section>
  );
}
