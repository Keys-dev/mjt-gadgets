import { useEffect, useRef, useState } from 'react';
import { STORE_NAME } from './config';
import { greeting, whatsappLink } from './whatsapp';
import ServiceSelector from './components/ServiceSelector';
import Catalogue from './components/Catalogue';
import EnquirySheet from './components/EnquirySheet';

const KEY = 'gadget-enquiry-v1';

export default function App() {
  const [list, setList] = useState<string[]>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(raw) ? raw.filter((x) => typeof x === 'string') : [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  // Smart sticky: hide nav on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (navRef.current) {
        if (currentY > lastScrollY.current && currentY > 80) {
          navRef.current.classList.add('nav--hidden');
        } else {
          navRef.current.classList.remove('nav--hidden');
        }
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch {
      /* storage unavailable, list still works in memory */
    }
  }, [list]);

  // toggle item in enquiry list
  const toggleItem = (id: string) =>
    setList((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
          <header className="nav" ref={navRef}>
            <a className="brand" href="#top">
              <div className="brand-top">
                <img src="/images/MJT%20Gadgets%20logo.jpeg" alt="MJT Gadgets logo" className="logo" />
                <strong>{STORE_NAME}</strong>
              </div>
              <span className="address-text">Ido Osun and Owode Ede</span>
            </a>
            <nav aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#catalogue">Catalogue</a>
              <a href="#contact">Contact</a>
            </nav>
            <button className="btn ghost" onClick={() => setOpen(true)} aria-haspopup="dialog">
              Enquiry list ({list.length})
            </button>
          </header>


      <main id="main">
        <section className="hero" id="top">
          <p className="eyebrow">Phones, laptops, consoles and swaps</p>
          <h1>Get the right device, or swap up, with a chat.</h1>
          <p className="lede">
            Choose what you need, tell us a few details and we pick up the conversation on WhatsApp.
          </p>
          <div className="row">
            <a className="btn primary" href="#services">Choose a service</a>
            <a className="btn ghost" href="#catalogue">Browse devices</a>
          </div>
        </section>

        <ServiceSelector />
        <Catalogue list={list} onToggle={toggleItem} />
      </main>

      <footer className="footer" id="contact">
        <h2>Prefer to just talk?</h2>
        <p>Message us directly and we will reply as soon as we can.</p>
        <a className="btn primary" href={whatsappLink(greeting())} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
        <small>{STORE_NAME}. Sample content, replace before launch.</small>
      </footer>

      <EnquirySheet open={open} ids={list} onClose={() => setOpen(false)} onRemove={(id) => setList((l) => l.filter((x) => x !== id))} onClear={() => setList([])} />
    </>
  );
}
