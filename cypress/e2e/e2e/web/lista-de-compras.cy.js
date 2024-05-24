/// <reference types="cypress" />

describe('Funcionalidade: Lista de compras', () => {

    beforeEach(() => {
        cy.fixture('login').then((dadosLogin) =>{
            cy.login(dadosLogin.email, dadosLogin.senha)
        })
    });

    it('Validar entrada na lista de compras', () => {
        cy.visit('minhaListaDeProdutos')
        cy.get('h1').should('contain', 'Lista de Compras')
        cy.url().should('contain', 'minhaListaDeProdutos')
        
    });
    
});