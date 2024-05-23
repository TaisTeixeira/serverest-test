/// <reference types ="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        //Ação antes de CADA cenário

        cy.visit('login')
    });

    afterEach(() => {
        //Ação após de CADA cenário

        cy.screenshot()
    });

    
it('Realizar login com sucesso', () => {
    cy.get('[data-testid="email"]').clear().type('taisqa@tais.com')
    cy.get('[data-testid="senha"]').clear().type('teste123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').should('contain' , 'Bem Vindo')
    cy.get('.lead').should('contain' , 'Este é seu sistema para administrar seu ecommerce.')
});


it('Validação: Usuário', () => {
    cy.get('[data-testid="email"]').clear().type('tais@tais.com')
    cy.get('[data-testid="senha"]').clear().type('teste123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain' , 'Email e/ou senha inválidos')
});

it('Validação: Senha', () => {
    cy.get('[data-testid="email"]').clear().type('taisqa@tais.com')
    cy.get('[data-testid="senha"]').clear().type('teste!123')
    cy.get('[data-testid="entrar"]').click()
});

});