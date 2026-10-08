import { STORE_NAME, WHATSAPP_NUMBER } from './config';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function greeting(): string {
  return `Hello ${STORE_NAME}, I would like to continue our conversation.`;
}
