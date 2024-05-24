import dados from '../../../fixtures/usuario-api.json'
const urlBase = 'https://serverest.dev/'

describe('API Produtos', () => {

    beforeEach(() => {
        cy.token(dados.email, dados.senha).as('token')
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

    it('Cadastrar produto com sucesso', function () {
        var produtoAlterado = `Tais Produto${Date.now()}`

        cy.request({
            method: 'POST',
            url: urlBase + 'produtos',
            body: {
                "nome": produtoAlterado,
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

    it('Alterar dados do produto com sucesso', function () {
        var produtoAlterado = `Produto teste ${Date.now()}`
        cy.cadastrarProduto(this.token)
            .then((response) => {
                cy.log(response.body._id)
                var id = response.body._id
                cy.request({
                    method: 'PUT',
                    url: urlBase + 'produtos/' + id,
                    body:
                    {
                        "nome": produtoAlterado,
                        "preco": 100,
                        "descricao": "Descrição alterada",
                        "quantidade": 100
                    },
                    headers: {
                        authorization: this.token
                    }
                }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
                })
            })
    });

    it('Exclusão com sucesso', function () {
        cy.cadastrarProduto(this.token)
            .then((response) => {
                cy.log(response.body._id)
                var id = response.body._id
                cy.request({
                    method: 'DELETE',
                    url: urlBase + 'Produtos/' + id, 
                    headers: {
                        authorization: this.token
                    }

                }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
                })

            })
    });
});