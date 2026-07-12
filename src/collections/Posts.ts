import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Başlık',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL dostu kısa ad (ör: kayseri-mantisi-tarifi)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Özet',
      admin: {
        description: 'Blog listesinde görünecek kısa açıklama',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'İçerik',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'SEO Başlığı',
      admin: {
        description: 'Boş bırakılırsa yazı başlığı kullanılır',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'SEO Açıklaması',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      label: 'Durum',
      options: [
        { label: 'Taslak', value: 'draft' },
        { label: 'Yayında', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Yayın Tarihi',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
};
