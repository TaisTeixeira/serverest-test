/// <reference types="cypress" />
import cadastroPage from '../../support/pages/cadastro.page';
import CadastroPage from '../../support/pages/cadastro.page'

describe('Funcionalidade: Cadastro - Usando Pages Objects', () => {
    beforeEach(() => {
        CadastroPage.visitarUrl()
    });

    it('Realizar cadastro de usuário admin com sucesso', () => {
        var email = `tais${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioAdmin('Tais teste Page', email, 'teste@123')
        cy.get('.lead',{timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Realizar cadastro de usuário comum com sucesso', () => {
        var email = `tais${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioComumn('Tais teste comum', email, 'teste@123')
    });
});