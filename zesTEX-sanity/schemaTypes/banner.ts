export const banner = {
  name: 'banner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Main Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'extraImages',
      title: 'Additional Images (optional)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'bgColor',
      title: 'Background Color (optional)',
      type: 'string',
    },
  ],
}
