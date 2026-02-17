import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'SAUFEX Admin',
    },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        slug: fields.text({
          label: 'URL Slug',
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Author',
        }),
        date: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        updated: fields.date({
          label: 'Last Updated',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
    news: collection({
      label: 'News',
      slugField: 'slug',
      path: 'src/content/news/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        slug: fields.text({
          label: 'URL Slug',
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        partner: fields.text({
          label: 'Partner',
          description: 'Which partner this news is about (e.g. DROG, Faktabaari, Debunk)',
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
