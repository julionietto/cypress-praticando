/// <reference types="cypress"/>

export default {
    clicarBtnLogin() {
        cy.get('#btnLogin')
            .click()
    }, 

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    }, 

    digitarEmail(email) {
        cy.get('#user')
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