/// <reference types ="cypress" />
const urlBase = 'https://serverest.dev/'


describe('API Produtos', () => {
beforeEach(() => {
    cy.token ('fabio1716393622215@teste.com', 'teste@123').as('token')
});

    it('Listar produtos com sucesso', () => {
        cy.request({
            method: 'GET',
            url: urlBase + 'produtos'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.duration).to.be.lessThan(800)
            expect(response.body).to.have.property('produtos')
            expect(response.body).to.have.property('quantidade')
        })
    });

    it.only('Cadastrar produto com sucesso', function () {
        var produto = `Tais Produto${Date.now()}`

        cy.request({
            method: 'POST',
            url: urlBase + 'produtos',
            body: {
            "nome": produto,
            "preco": 690,
            "descricao": "Notebook hp",
            "quantidade": 100,
            },
            headers: {
                authorization: this.token
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });

    it('Alterar os dados produto com sucesso', function () {
        cy.request({
            method: 'PUT'
            url: urlBase + 'produtos/' + 'id', //informa ID
            body
            {
            "nome": produto,
            "preco": 690,
            "descricao": "Notebook hp",
            "quantidade": 100,
            },
            headers: {
                authorization: this.token
            }
        }).then((response) => {
            expect(response.status).to.equal(20)
            expect(response.body.message).to.equal('Registro alterado com sucesso')
        
    });

    it('Exclusão com sucesso', function () {
        cy.cadastrarProduto(this.token).then((response) => {
            cy.log(response.body._id)
            var id = response.body._id
            cy.request({
                method: 'DELETE'
                url: urlBase + 'Produtos/' + 'id' //informar ID
    
            }).then((response) => {
                expect(response.status).to.equal(20)
                expect(response.body.message).to.equal('Registro excluído com sucesso')
            
        });
        })


    
});