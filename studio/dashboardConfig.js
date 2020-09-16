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
                  buildHookId: '5f6231cbbc757e0124414568',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a1wof8br',
                  apiId: '6cb033d7-82cf-4a58-8443-b612ab8c8f36'
                },
                {
                  buildHookId: '5f6231cbc0a3ee00be730b96',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nmp5d4kb',
                  apiId: 'f9096df6-7866-41ec-8ba6-3eb5b445a6dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coulterdigital/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nmp5d4kb.netlify.app',
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
