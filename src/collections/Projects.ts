import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks', // Transforma o campo em um construtor visual de seções
      blocks: [
        {
          slug: 'hero',
          labels: { singular: 'Hero Section', plural: 'Hero Sections' },
          fields: [
            { name: 'tagline', type: 'text' },
            { name: 'heading', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'ctaText', type: 'text' },
          ],
        },
        {
          slug: 'brands',
          labels: { singular: 'Brands Grid', plural: 'Brands Grids' },
          fields: [
            { name: 'sectionTitle', type: 'text' },
            { name: 'brandList', type: 'array', fields: [{ name: 'name', type: 'text' }] },
          ],
        },
        {
          slug: 'niches',
          labels: { singular: 'Niche Categories', plural: 'Niche Categories' },
          fields: [
            { name: 'title', type: 'text' },
            { name: 'subtitle', type: 'text' },
          ],
        },
      ],
    },
  ],
}
