/// <reference types ="cypress" />
import { faker } from '@faker-js/faker';
import dadosUsuario from '../../fixtures/usuarios.json'


describe('Funcionalidade: Cadastrar', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });


    it('Realizar cadastro com sucesso (usando método Date.now)', () => {
        var email = 'tais' + Date.now + '@teste.com'

        cy.cadastroUsuarioComum('Tais Teixeira', email, 'teste123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    });

    it('Realizar cadastro com sucesso (usando a biblioteca Faker)', () => {
        cy.cadastroUsuarioComum(faker.person.fullName(), faker.internet.email(), faker.internet.password())
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    });

    it('Validação: email válido', () => {
        cy.cadastroUsuarioComum('Tais tester', 'tais$gmail.com', 'senha@123')
        cy.window().then((win) => {
        const alertElement = win.document.querySelector('.seletor-do-elemento-alerta');
            expect(alertElement).to.contain('inclua um "@" no endereço de e-mail');
        });
    });

    it('Realizar cadastro de admin com sucesso usando comando Customizado', () => {
        cy.cadastroUsuarioAdmin('Tais tester',faker.internet.email(), 'senha@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('.lead,{timeout: 10000}').should('contain', 'Este é seu sistema para administrar o ecommerce')
    });

    it('Realizar cadastro comum com sucesso usando comando Customizado', () => {
        cy.cadastroUsuarioComum('Tais tester',faker.internet.email(), 'senha@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1', {timeout: 10000}).should('contain', 'serverest store')
    });

    it.skip('Cadastrar usuario com sucesso usando importação de dados', () => {
        cy.cadastroUsuarioComum(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha)
        cy.get('h1', {timeout: 10000}).should('contain', 'serverest store')
    });


});

