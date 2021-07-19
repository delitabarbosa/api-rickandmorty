import * as CHARACTERS from '../requests/charactersrequest';
import * as LOCATIONS from '../requests/locations.request';

describe('TESTE GRAPHQL - RICK AND MORTY', () => {
  it('CHARACTERS', () => {
    CHARACTERS.characters().should((response) => {
      cy.log(response.status);
      cy.log(response.statusText);
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq("OK");
      expect(response.body).to.be.not.null;
    })
  });

    it('LOCATIONS', () => {
      LOCATIONS.locations().should((response) => {
        cy.log(response.status);
        cy.log(response.statusText);
        cy.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");
        expect(response.body).to.be.not.null;
      })
    });
  });