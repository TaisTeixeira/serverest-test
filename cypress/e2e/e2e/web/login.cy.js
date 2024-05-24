/// <reference types ="cypress" />


describe('Funcionalidade: Login', () => {

    afterEach(() => {
        //Ação após de CADA cenário
        cy.screenshot()
    });

    
it('Realizar login com sucesso', () => {
    cy.login('baseUser@teste.com', 'senhaBase123')
    cy.get('h1').should('contain', 'serverest Store')
    //cy.get('.lead').should('contain' , 'Este é seu sistema para administrar seu ecommerce.')
});

it('Validação: Usuário inválido', () => {
    cy.login('dshfsdkfh@teste.com', 'senhaBase123')
    cy.get('.alert').should('contain', 'E-mail e/ou senha inválidos')
});

it('Validação: Senha inválida', () => {
    cy.login('baseUser@teste.com', 'tesdfdfte@123')
    cy.get('.alert').should('contain', 'E-mail e/ou senha inválidos')
});

it('Realiza login com sucesso usando fixture', () => {
    cy.fixture('login').then((dadosLogin) =>{
        cy.login(dadosLogin.email, dadosLogin.senha)
    })
    cy.get('h1').should('contain' , 'Serverest Store')
});

});