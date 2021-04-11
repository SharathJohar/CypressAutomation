/// <reference types="Cypress" />
import Homepage from '../../support/pageObject/HomePage'
import ProductPage from '../../support/pageObject/ProductsPage'

describe('My first test suit', function () {

    before(function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My first case', function () {
        const homepage = new Homepage()
        const productp = new ProductPage()
        cy.visit(Cypress.env('url') + '/angularpractice/')
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwowayBinding().should('have.value', this.data.name)
        homepage.getMinLength().should('have.attr', 'minlength', '2')
        homepage.getEnterprenaur().should('be.disabled')
        homepage.getShopTab().click()

        //this.data.ProductName.forEach(element => cy.SelectProduct(element));
        //OR
        this.data.ProductName.forEach(function (element) {
            cy.SelectProduct(element);

        })
        productp.checkoutButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each((ele, index, $list) => {

            const amount = ele.text()
            var res = amount.split(' ')
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        })
            .then(function () {
                cy.log(sum)
            })

        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(' ')
            var total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })

        cy.get('.btn.btn-success').click()
        cy.get('#country').type('India')
        cy.get('div.suggestions').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function (element) {
            const acctext = element.text()
            expect(acctext.includes('Success!')).to.be.true
        })


    })
})