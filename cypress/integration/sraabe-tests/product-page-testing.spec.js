describe('ProductPageTesting', () => {
    beforeEach(() => {
        cy.visit('https://bubbling-summit-zcgdxlhsvi1d.vapor-farm-e1.com/');
    })

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
        cy.get('.sr-only').contains('Recent reviews');     
    })
});