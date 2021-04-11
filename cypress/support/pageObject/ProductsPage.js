class ProductPage {

    checkoutButton() {
        return cy.get('a.nav-link.btn.btn-primary')
    }

}

export default ProductPage;