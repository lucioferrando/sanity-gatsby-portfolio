export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61a5259ff72ab96518fbe57a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7ef8zu2d',
                  apiId: '90fe5b0c-0280-49f9-975b-ff214a5dc084'
                },
                {
                  buildHookId: '61a5259f552ad9689f6045f3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q2ba5a8v',
                  apiId: '299baec2-431c-4b6d-ab65-11ffbbb82462'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucioferrando/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-q2ba5a8v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
