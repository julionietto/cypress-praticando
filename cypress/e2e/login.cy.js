/// <reference types="cypress"/>

import commum_page   from "../support/pages/commum_page"
import login_page    from "../support/pages/login_page"
import { fa, faker } from '@faker-js/faker'

describe('Login', () => {
    it('Login vazio', () => {
        commum_page.acessarLogin()
        login_page.clicarBtnLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login invalido', () => {
        commum_page.acessarLogin()
        login_page.digitarEmail(faker.person.firstName())
        login_page.clicarBtnLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })
    
    it('Senha vazio', () => {
        commum_page.acessarLogin()
        login_page.digitarEmail(faker.internet.email())
        login_page.clicarBtnLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Senha inválida', () => {
        commum_page.acessarLogin()
        login_page.digitarEmail(faker.internet.email())
        login_page.digitarSenha('123')
        login_page.clicarBtnLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })
    
    it('Login com sucesso', () => {
        commum_page.acessarLogin()
        const usuario = faker.internet.email()
        login_page.digitarEmail(usuario)
        login_page.digitarSenha('123456')
        login_page.clicarBtnLogin()
        login_page.validarMensagemSucesso('#swal2-title', 'Login realizado')
        login_page.validarMensagemSucesso('#swal2-html-container', `Olá, ${usuario}`)
    })
})