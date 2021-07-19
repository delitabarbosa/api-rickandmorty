/// <reference types="cypress"/>

var query2 = `query {
  locations {
    info {
      count
      pages
      next 
      prev
    }
    results {
      id
      name
      type
      dimension
      residents {
        id
        episode {
          id
          air_date
        }
      }
      created
    }
  }
}`

function locations() {
  return cy.request({
    method: 'POST',
    url: 'https://rickandmortyapi.com/graphql',
    failOnStatusCode: false,
    body: {
      query: query2
    }
  })
}

export { locations };