/// <reference types ="cypress" />


describe('Funcionalidade: Cadastrar', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });


    it('Cadastro com sucesso', () => {

        cy.get('[data-testid="nome"]').clear().type('TaisTeixeira')
        cy.get('[data-testid="email"]').clear().type('taisteixeira4@qa.com')
        cy.get('[data-testid="password"]').clear().type('teste123')
        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert').should('contain' , 'Cadastro realizado com sucesso')
    
    });

 //   it('Validação Cadastro: Nome', () => {
    
 ///   });
    
 //   it('Validação Cadastro: E-mail', () => {
    
//    });
  
  //  it('Validação Cadastro: Password', () => {
    
  //  });
    
});

