import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Metin (SEO)',
    },
  ],
};
