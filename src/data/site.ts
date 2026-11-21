/** Shared contact details. Change a value here and every page that uses it updates. */
export const site = {
  email: 'pvvolleyballacademy@gmail.com',
  whatsappDisplay: '+506 6019 6290',
  whatsappNumber: '50660196290',
  location: 'Playa Cocles, Puerto Viejo, Limón, Costa Rica',
  // Planned future handle: @pv_volleyballacademy — switch only once confirmed.
  instagramHandle: '@pv_volleyballclub',
  instagramUrl: 'https://www.instagram.com/pv_volleyballclub/',
  paypalUrl: 'https://www.paypal.com/paypalme/pvvolleyballacademy',
  paypalQr: '/images/support/pvva-paypal-donation-qr.png',
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
