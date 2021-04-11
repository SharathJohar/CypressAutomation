class Homepage {


    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender() {
        return cy.get('select')
    }

    getTwowayBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getMinLength() {
        return cy.get('input[name="name"]:nth-child(2)')
    }


    getEnterprenaur() {
        return cy.get('#inlineRadio3').should('be.disabled')
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default Homepage;