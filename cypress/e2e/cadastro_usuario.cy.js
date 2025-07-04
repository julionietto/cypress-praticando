/// <reference types="cypress"/>

import commum_page   from "../support/pages/commum_page"
import cadastro_page from "../support/pages/cadastro_usuario_page"
import { fa, faker } from '@faker-js/faker'

describe('Cadastro de usuario', () => {

    beforeEach('Acessar cadastro de usuario', () => {
        commum_page.acessarCadastroUsuario()
    })
    
    it('Campo nome vazio', () => {
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo email vazio', () => {
        cadastro_page.digitarNome(faker.person.fullName())
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email invalido', () => {
        cadastro_page.digitarNome(faker.person.fullName())
        cadastro_page.digitarEmail('teste.mail.com')
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_page.digitarNome(faker.person.fullName())
        cadastro_page.digitarEmail(faker.internet.email())
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha invalida', () => {
        cadastro_page.digitarNome(faker.person.fullName())
        cadastro_page.digitarEmail(faker.internet.email())
        cadastro_page.digitarSenha('123')
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {
        const nome = await faker.person.fullName()

        cadastro_page.digitarNome(nome)
        cadastro_page.digitarEmail(faker.internet.email())
        cadastro_page.digitarSenha('123456')
        cadastro_page.clicarBtnCadastrar()
        cy.wait(2000)
        cadastro_page.validarMensagemSucesso('#swal2-title', 'Cadastro realizado!')
        cadastro_page.validarMensagemSucesso('#swal2-html-container', `Bem-vindo ${nome}`)
    })

})