/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import dadosUsuario from '../../fixtures/usuarios.json'

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });
    
    it('Realizar cadastro com sucesso (usando método Date.Now)', () => {
        var email = 'tais' + Date.now() + '@teste.com'
        cy.CadastroUsuarioComum('Tais Teixeira', email, 'teste@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
      });

    it('Realizar cadastro com sucesso (usando a biblioteca Faker)', () => {
        cy.CadastroUsuarioComum(faker.person.fullName(), faker.internet.email(), faker.internet.password())
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    });

    it.skip('Validação: email válido', () => {
        cy.CadastroUsuarioComum('Tais tester', 'tais$gmail.com', 'senha@123')
        cy.window().then((win) => {
        const alertElement = win.document.querySelector('.seletor-do-elemento-alerta');
            expect(alertElement).to.contain('inclua um "@" no endereço de e-mail');
        });
    });

    it('Realizar cadastro de admin com sucesso - usando comando Customizado', () => {
        cy.CadastroUsuarioAdmin('Tais tester',faker.internet.email(), 'senha@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('.lead',{timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Realizar cadastro comum com sucesso usando comando Customizado', () => {
        cy.CadastroUsuarioComum('Tais tester',faker.internet.email(), 'senha@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1', {timeout: 10000}).should('contain', 'Serverest Store')
    });

    it.skip('Cadastrar usuario com sucesso usando importação de dados', () => {
        cy.CadastroUsuarioComum(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha)
        cy.get('h1', {timeout: 10000}).should('contain', 'Serverest Store')
    });


});

