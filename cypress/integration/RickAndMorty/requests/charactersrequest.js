/// <reference types="cypress"/>

var query1 = `query {
  characters {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        id
        name
      }
      location {
        id
        name
      }
    }  
  }
}`

function characters() {
  return cy.request({
    method: 'POST',
    url: 'https://rickandmortyapi.com/graphql',
    failOnStatusCode: false,
    body: {
      query: query1
    }
  })
}

export { characters };