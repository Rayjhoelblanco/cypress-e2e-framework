import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

describe('Regresión - Agregar todos los productos al carrito', () => {
  beforeEach(() => {
    cy.login('standard')
  })

  it('Debe permitir agregar todos los productos y reflejarlos en el carrito', () => {
    ProductsPage.getProductsCount().then((count) => {
      ProductsPage.addAllProductsToCart()
      cy.get('.shopping_cart_badge').should('have.text', count.toString())

      cy.get('.shopping_cart_link').click()
      CartPage.getItems().should('have.length', count)
    })
  })
})
