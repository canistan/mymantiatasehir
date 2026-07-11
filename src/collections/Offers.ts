import type { CollectionConfig } from 'payload';

export const Offers: CollectionConfig = {
  slug: 'offers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'product', 'status', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true, // Herkes siteden teklif bırakabilir
    update: ({ req: { user } }) => Boolean(user), // Sadece admin güncelleyebilir
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Müşteri Adı',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefon Numarası',
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      label: 'Adres Bilgisi',
    },
    {
      name: 'product',
      type: 'text',
      required: false,
      label: 'İlgilendiği Ürün / Hizmet',
    },
    {
      name: 'message',
      type: 'textarea',
      required: false,
      label: 'Müşteri Notu',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      label: 'Durum',
      options: [
        { label: 'Yeni', value: 'new' },
        { label: 'İletişime Geçildi', value: 'contacted' },
        { label: 'Tamamlandı', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
