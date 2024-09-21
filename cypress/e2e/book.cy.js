describe('open page', () => {
    it('Visible main page', () => {
        cy.visit('/')
        cy.get('.text-light > .ml-2').should(`be.visible`)
    })
  })
  describe('log in check', () => {
    beforeEach( () => {
      cy.visit('/')
  })
    it('test login', () => {
        cy.login("test@test.com", "test")
        cy.contains('Добро пожаловать test@test.com').should(`be.visible`)
    })
    it('test empty email', () => {
      cy.login(null , "test")
        cy.get('#mail').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false
        })
    })
    it('test empty pass', () => {
      cy.login("test@test.com", null)
        cy.get('#pass').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false
        })
    })
  })
  describe('book processing', () => {
    beforeEach( () => {
      cy.visit('/')
      cy.login("bropet@mail.ru", "123")
    })
    it('add book in favorites', () => {
      cy.contains('Add new').click()
      cy.get('#title').type(`Ведьмак`)
      cy.get('#description').type(`Фэнтези, приключения, драма, ужасы`)
      cy.get('.form-check-label').click()
      cy.get('.form-check-label').click()
      cy.get('form > .ml-2').click()
  })
    it('delete book in favorites', () => {
        cy.get('.p-0 > .btn').click()
        cy.get('#title').type(`Гарри Поттер и филососвский камень`)
        cy.get('#description').type(`Фэнтези`)
        cy.get('.form-check-label').click()
        cy.get('.form-check-label').click()
        cy.get('form > .ml-2').click()
        cy.contains('Delete from favorite').last().click()
    })
    it('book review', () => {
      cy.contains('Add new').click()
      cy.get('#title').type(`Ведьмак`)
      cy.get('#description').type(`Фэнтези, приключения, драма, ужасы`)
      cy.get('.form-check-label').click()
      cy.get('.form-check-label').click()
      cy.get('form > .ml-2').click()
      cy.contains('Ведьмак').click()
      cy.get('.col-md-7 > .btn').should('be.visible')
    })
  })