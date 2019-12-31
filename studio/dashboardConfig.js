export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0ab87820406272bab2a1c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3cqpjw8t',
                  apiId: '82ae2c3b-2e34-4ca0-bf7e-6c12af0f0ea7'
                },
                {
                  buildHookId: '5e0ab878cc351e384c3fb3a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s8dv23tn',
                  apiId: '7052806e-5e3e-4779-b922-a06e470d883d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonwalz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s8dv23tn.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
