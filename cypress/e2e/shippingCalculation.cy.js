describe('SuperFrete Shipping calculation', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  context('Shipping calculation with valid values', () => {
      it('Should not be calcute and show error message', () => {
        cy.wait(10)
        cy.clearCookies()
        cy.visit('/')
        cy.get('#originPostcode').type("08090-284")
        cy.get('#weight').click()
        cy.get('[data-value="0.3"]').click()
        cy.get('#packageHeight').type("2")
        cy.get('#packageWidth').type("11")
        cy.get('#packageDepth').type("16")
        cy.get('#destinationPostcode').type("05407-002")
        cy.get('[data-cy="calculator-submit"]').click()
        cy.get('[data-cy="package-type-PAC"]').should('be.visible')
        cy.get('[data-cy="package-type-SEDEX"]').should('be.visible')
        cy.get('[data-cy="package-type-Mini Envios"]').should('be.visible')
      })
    })

  context('Shipping calculation with smallest values than required', () => {
    it('When height is smallest than 0.4 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("0.3")
      cy.get('#packageWidth').type("11")
      cy.get('#packageDepth').type("16")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageHeight-helper-text').should('have.text', 'Altura mínima 0.4 cm.')
    })

    it('When width is smallest than 8 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("2")
      cy.get('#packageWidth').type("7.9")
      cy.get('#packageDepth').type("16")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageWidth-helper-text').should('have.text', 'Largura mínima 8 cm.')
    })

    it('When depth is smallest than 13 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("2")
      cy.get('#packageWidth').type("11")
      cy.get('#packageDepth').type("12.9")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageDepth-helper-text').should('have.text', 'Comprimento mínimo 13 cm.')
    })
  }) 

  context('Shipping calculation with bigest values than required', () => {
    it('When height is bigest than 150 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("151")
      cy.get('#packageWidth').type("11")
      cy.get('#packageDepth').type("16")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageHeight-helper-text').should('have.text', 'Altura máxima 150 cm.')
    })

    it('When width is bigest than 150 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("2")
      cy.get('#packageWidth').type("151")
      cy.get('#packageDepth').type("16")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageWidth-helper-text').should('have.text', 'Largura máxima 150 cm.')
    })

    it('When depth is bigest than 150 should not be calculate and show error message', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("2")
      cy.get('#packageWidth').type("11")
      cy.get('#packageDepth').type("151")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.get('#packageDepth-helper-text').should('have.text', 'Comprimento máximo 150 cm.')
    })

    it.only('When the sum of height, width and depth exceeds the maximum value without exceeding the value of one of the fields', () => {
      cy.wait(10)
      cy.clearCookies()
      cy.visit('/')
      cy.get('#originPostcode').type("08090-284")
      cy.get('#weight').click()
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').type("101")
      cy.get('#packageWidth').type("101")
      cy.get('#packageDepth').type("101 ")
      cy.get('#destinationPostcode').type("05407-002")
      cy.get('[data-cy="calculator-submit"]').click()
      cy.contains('p', 'a soma resultante da altura + largura + comprimento não deve superar 300 cm.')
    })
  }) 
})