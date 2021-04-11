/// <reference types="Cypress" />

describe('My first test suit', function () {
    it('My first case', function () {


        //checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each((ele, index, $list) => {
            const text = ele.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {

                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })

            }

        })

    })
})