# Musty Jnr

A website for a gadget seller: phones, laptops, PlayStations, iPhone swaps, Android to iOS swaps and more. Built on the Objet template stack (React, TypeScript, Vite, Tailwind) and its warm neutral design language.

## Run locally

Node.js 22.13 or newer.

```powershell
npm ci
npm run dev
```

Build for production with `npm run build`. Output goes to `dist/`.

## Set up before launch

1. Copy `.env.example` to `.env` and set `VITE_WHATSAPP_NUMBER` (international format, digits only, for example 2348012345678) and `VITE_STORE_NAME`.
2. Replace the sample products and prices in `src/data.ts`.
3. Edit the `services` list in `src/data.ts` to match what you really offer. Each service defines its own form fields.
4. Add real product photos to `public/images/` and show them in `src/components/Catalogue.tsx` in place of the placeholder tile.

## How it works

- **Service selector** (`ServiceSelector.tsx`): the visitor picks a service, fills the fields for it, and the button opens WhatsApp with a ready message.
- **Catalogue** (`Catalogue.tsx`): one tab per device type, with search. Each product has "Ask on WhatsApp" and "Add to list".
- **Enquiry list** (`EnquirySheet.tsx`): a side sheet, saved in localStorage, that sends several devices in one WhatsApp message.
- **Footer button**: opens a plain WhatsApp chat.

No backend or payment is involved. Prices are sample data and are confirmed in the chat.
