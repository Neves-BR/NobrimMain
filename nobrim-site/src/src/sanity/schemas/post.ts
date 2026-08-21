export default {
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Português', value: 'pt-BR' },
          { title: 'Inglês', value: 'en' }
        ]
      },
      initialValue: 'pt-BR',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'translationOf',
      title: 'Original post / translation group',
      type: 'reference',
      to: [{ type: 'post' }],
      weak: true,
      description: 'Link the translated version to its original post so language navigation can find the equivalent article.',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      initialValue: 'Equipe Nobrim',
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'excerpt',
      title: 'Resumo (Para SEO e Listagem)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
}
