const cyView = require("cy-view");
const deviceArray = [
    {
        model: 'iphone-4',
        width: 320,
        height: 480
    },
    {
        model: 'macbook-11',
        width: 1366,
        height: 768
    }
];
const urls = ['https://bubbling-summit-zcgdxlhsvi1d.vapor-farm-e1.com/'];
const pageTests = cyView(deviceArray);

pageTests(urls, () => {
    describe('ProductPageTesting', () => {
        it('Has visible product title', () => {
            cy.contains('Everyday Ruck Snack').should('be.visible');
        })

        it('Has visible "Add to bag" button', () => {
            cy.get('button').contains('Add to bag').should('be.visible');
        })

        it('Has visible reviews section', () => {
            cy.get('#reviews-heading').should('be.visible');
        })

        it('Has a visible featured review', () => {
            cy.get('.sr-only').contains('Recent reviews').should('be.visible');
        })
    });
});