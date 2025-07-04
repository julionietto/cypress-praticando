/// <reference types="cypress"/>

export default {
    clicarBtnCadastrar() {
        cy.get('#btnRegister')
            .click()
    }, 

    // Existem duas formas de validar: uma é com expect 
    // outra forma é usar o should logo abaixo
    /* 
    validarMensagemErro() {
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq('O campo nome deve ser prenchido')
            })
    },
    */

    validarMensagemErro(mensagem) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', mensagem)
    }, 

    digitarNome(nome) {
        cy.get('#user')
            .type(nome)
    }, 

    digitarEmail(email) {
        cy.get('#email')
            .type(email)
    },

    digitarSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(campo, mensagem) {
        cy.get(campo)
            .should('be.visible')
            .should('have.text', mensagem)
    }
   
}