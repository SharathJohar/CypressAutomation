/// <reference types="Cypress" />

describe('My first test suit', function () {
    it('My first case', function () {


        //checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', '#top')



    })
})