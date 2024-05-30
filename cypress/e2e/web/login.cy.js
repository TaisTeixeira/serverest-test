/// <reference types="cypress" />

describe('Funcionalidade: login', () => {

    afterEach(() => {
        //Fazer algo após CADA cenário
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('silvatais@qa.com.br','teste@123')
        cy.get('h1').should('contain' , 'Bem Vindo')
        //cy.get('.lead').should('contain' , 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Validação: Usuário inválido', () => {
        cy.login('silvatais@qa.br', 'teste@123')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    
    });

    it('Validação: Senha inválida', () => {
        cy.login('silvatais@qa.com.br', 'tesdfdfte@123')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

    it('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('login').then((dadosLogin) =>{
            cy.login(dadosLogin.email, dadosLogin.senha)
        })
        cy.get('h1').should('contain' , 'Bem Vindo')

    });
    
});