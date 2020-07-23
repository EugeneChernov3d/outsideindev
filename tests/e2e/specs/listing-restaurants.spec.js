describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Placew';

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'https://api.outsidein.dev/1Rb1oOqz6WWcXbtyMMeEqOG2FeUcsBIS/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
