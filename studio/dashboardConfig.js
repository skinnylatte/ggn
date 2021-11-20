export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61998661b4e38e2947979db2',
                  title: 'Sanity Studio',
                  name: 'ggn-studio',
                  apiId: '1565756f-564a-43e5-9223-f749af8358f2'
                },
                {
                  buildHookId: '619986628cdcbbfe73abe81a',
                  title: 'Landing pages Website',
                  name: 'ggn-web',
                  apiId: '1502b8af-1ea3-4fc8-b26d-187944ed1e87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skinnylatte/ggn',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ggn-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
