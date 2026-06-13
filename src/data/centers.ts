export interface Center {
  badge: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  hours: string;
}

export const centers: Center[] = [
  {
    badge: 'Kharghar Center',
    name: 'Aadi Shakti Kharghar',
    address:
      'Shop 22, Green Heritage, Plot No. 79/80, Near Green Medical, Kharghar Sector 20, Navi Mumbai — 410210',
    phone: '+91 91377 86462',
    phoneHref: 'tel:+919137786462',
    hours: 'Mon – Sat | Morning & Evening Batches Available',
  },
  {
    badge: 'Ulwe Center',
    name: 'Aadi Shakti Ulwe',
    address:
      'Shop No. 1, Plot No. 25, Sector 9, Tejas Symphony, Ulwe, Navi Mumbai',
    phone: '+91 91374 05818',
    phoneHref: 'tel:+919137405818',
    hours: 'Mon – Sat | Morning & Evening Batches Available',
  },
];