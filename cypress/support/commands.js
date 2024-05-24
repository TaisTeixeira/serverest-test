// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login')
    cy.get('[data-testid="email"]').clear().type(email)
    cy.get('[data-testid="senha"]').clear().type(senha)
    cy.get('[data-testid="entrar"]').click()
    cy.wait(1000)
 })


 Cypress.Commands.add('CadastroUsuarioAdmin', (nome, email, senha) => {
    cy.visit('cadastrarusuarios')
    cy.get('[data-testid="nome"]', ).clear().type(nome)
    cy.get('[data-testid="email"]').clear().type(email)
    cy.get('[data-testid="password"]').clear().type(senha)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
 })

 Cypress.Commands.add('CadastroUsuarioComum', (nome, email, senha) => {
    cy.visit('cadastrarusuarios')
    cy.get('[data-testid="nome"]', ).clear().type(nome)
    cy.get('[data-testid="email"]').clear().type(email)
    cy.get('[data-testid="password"]').clear().type(senha)
    cy.get('[data-testid="cadastrar"]').click()
 })

 Cypress.Commands.add('token', (email, senha) => {
      cy.request({
         method: 'POST', 
         url: 'https://serverest.dev/',
         body: 
            {
               "email": email,
               "password": senha
            }
      }).then((response) =>{
         expect(response.status).equal(200)
         return response.body.authorization
      })
 })


 Cypress.Commands.add('cadastrarProduto', (tkn) =>{
   var produtoAlterado = `Tais Produto${Date.now()}`
   cy.request({
       method: 'POST',
       url:  'https://serverest.dev/produtos',
       body: {
           "nome": produtoAlterado,
           "preco": 1001,
           "descricao": "customizados...",
           "quantidade": 1001
         },
         headers: {
           authorization: tkn
         }
   })
 })