/// <reference types="Cypress" />

describe('My first test suit', function () {
    it('My first case', function () {


        //checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdowns
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((ele, index, $list) => {
            if (ele.text() == 'India') {
                cy.wrap(ele).click()
            }
        })
        //auto-complete
        cy.get('#autocomplete').should('have.value', 'India')
        //visible and invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('input[value="radio2"]').check().should('be.checked')

















    })
})