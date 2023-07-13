// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// <reference types="Cypress" />

//EXERRCICIO 1

// describe('Central de Atendimento ao Cliente TAT', function() {
//     it('verifica o título da aplicação', function() {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })
//   })

//EXERCICIO 

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it.only ('preenche os campos obrigatorios e envia o formulario', function() {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type('Teste')
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })
// })

//EXERCICIO EXTRA 1 - usando delay

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it ('preenche os campos obrigatorios e envia o formulario', function() {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, {delay: 0})
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })
// })

//EXERCICIO EXTRA 2 - ERRO NO EMAIL

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     }
//     )
// })

//EXERCICIO EXTRA 3 - telefone com string

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it.only('campo telefone continua vazio quando preenchido com campo nao numerico', function() {
//         cy.get('#phone')
//         .type('AAAAA-BBBB')
//         .should('have.value', '')
//     })
// })

//EXERCICIO EXTRA 4 - telefone sendo obrigatorio

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('campo telefone continua vazio quando preenchido com campo nao numerico', function() {
//         cy.get('#phone')
//         .type('AAAAA-BBBB')
//         .should('have.value', '')
//     })

//     it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail.com')
//         cy.get('#phone-checkbox').click()
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()



//         cy.get('.error').should('be.visible')
//     })
// })


//EXERCICIO EXTRA 5 - USANDO CLEAR
// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('campo telefone continua vazio quando preenchido com campo nao numerico', function () {
//         cy.get('#phone')
//             .type('AAAAA-BBBB')
//             .should('have.value', '')
//     })

//     it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail.com')
//         cy.get('#phone-checkbox').click()
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')
//     })

//     it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
//         cy.get('#firstName')
//             .type('Heloisa')
//             .should('have.value', 'Heloisa')
//             .clear()
//             .should('have.value', '')
//         cy.get('#lastName')
//             .type('Oliveira')
//             .should('have.value', 'Oliveira')
//             .clear()
//             .should('have.value', '')
//         cy.get('#email')
//             .type('mail@gmail.com')
//             .should('have.value', 'mail@gmail.com')
//             .clear()
//             .should('have.value', '')
//         cy.get('#phone')
//             .type('9999988888')
//             .should('have.value', '9999988888')
//             .clear()
//             .should('have.value', '')

//     })
// })

//EXERCICIO EXTRA 5

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('campo telefone continua vazio quando preenchido com campo nao numerico', function () {
//         cy.get('#phone')
//             .type('AAAAA-BBBB')
//             .should('have.value', '')
//     })

//     it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail.com')
//         cy.get('#phone-checkbox').click()
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')
//     })

//     it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
//         cy.get('#firstName')
//             .type('Heloisa')
//             .should('have.value', 'Heloisa')
//             .clear()
//             .should('have.value', '')
//         cy.get('#lastName')
//             .type('Oliveira')
//             .should('have.value', 'Oliveira')
//             .clear()
//             .should('have.value', '')
//         cy.get('#email')
//             .type('mail@gmail.com')
//             .should('have.value', 'mail@gmail.com')
//             .clear()
//             .should('have.value', '')
//         cy.get('#phone')
//             .type('9999988888')
//             .should('have.value', '9999988888')
//             .clear()
//             .should('have.value', '')

//     })

//     it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })
// })

//EXERCICIO EXTRA 7 - COMANDO CUSTOMIZADO
// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.get('button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('campo telefone continua vazio quando preenchido com campo nao numerico', function () {
//         cy.get('#phone')
//             .type('AAAAA-BBBB')
//             .should('have.value', '')
//     })

//     it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail.com')
//         cy.get('#phone-checkbox').click()
//         cy.get('#open-text-area').type('TESTE')
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')
//     })

//     it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
//         cy.get('#firstName')
//             .type('Heloisa')
//             .should('have.value', 'Heloisa')
//             .clear()
//             .should('have.value', '')
//         cy.get('#lastName')
//             .type('Oliveira')
//             .should('have.value', 'Oliveira')
//             .clear()
//             .should('have.value', '')
//         cy.get('#email')
//             .type('mail@gmail.com')
//             .should('have.value', 'mail@gmail.com')
//             .clear()
//             .should('have.value', '')
//         cy.get('#phone')
//             .type('9999988888')
//             .should('have.value', '9999988888')
//             .clear()
//             .should('have.value', '')

//     })

//     it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
//         cy.get('button[type="submit"]').click()

//         cy.get('.error').should('be.visible')

//     })

//     it.only('envia o formuário com sucesso usando um comando customizado', function() {
//         cy.fillMandatoryFieldsAndSubmit()

//         cy.get('.success').should('be.visible')

//     })
//exercicio extra 8 - alterando botao

// describe('Central de Atendimento ao Cliente TAT', function () {
//     beforeEach(function () {
//         cy.visit('./src/index.html')
//     })
//     it('verifica o título da aplicação', function () {
//         cy.visit('./src/index.html')

//         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

//     })

//     it('preenche os campos obrigatorios e envia o formulario', function () {
//         const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mail@gmail.com')
//         cy.get('#open-text-area').type(longText, { delay: 0 })
//         cy.contains('button', 'Enviar').click()

//         cy.get('.success').should('be.visible')
//     })

//     it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail,com')
//         cy.get('#open-text-area').type('TESTE')
//         cy.contains('button', 'Enviar').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('campo telefone continua vazio quando preenchido com campo nao numerico', function () {
//         cy.get('#phone')
//             .type('AAAAA-BBBB')
//             .should('have.value', '')
//     })

//     it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
//         cy.get('#firstName').type('Heloisa')
//         cy.get('#lastName').type('Oliveira')
//         cy.get('#email').type('mai@lgmail.com')
//         cy.get('#phone-checkbox').click()
//         cy.get('#open-text-area').type('TESTE')
//         cy.contains('button', 'Enviar').click()

//         cy.get('.error').should('be.visible')
//     })

//     it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
//         cy.get('#firstName')
//             .type('Heloisa')
//             .should('have.value', 'Heloisa')
//             .clear()
//             .should('have.value', '')
//         cy.get('#lastName')
//             .type('Oliveira')
//             .should('have.value', 'Oliveira')
//             .clear()
//             .should('have.value', '')
//         cy.get('#email')
//             .type('mail@gmail.com')
//             .should('have.value', 'mail@gmail.com')
//             .clear()
//             .should('have.value', '')
//         cy.get('#phone')
//             .type('9999988888')
//             .should('have.value', '9999988888')
//             .clear()
//             .should('have.value', '')

//     })

//     it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
//         cy.contains('button', 'Enviar').click()

//         cy.get('.error').should('be.visible')

//     })

//     it('envia o formuário com sucesso usando um comando customizado', function() {
//         cy.fillMandatoryFieldsAndSubmit()

//         cy.get('.success').should('be.visible')

//     })

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatorios e envia o formulario', function () {
        const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
        cy.get('#firstName').type('Heloisa')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('mail@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Heloisa')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('mai@lgmail,com')
        cy.get('#open-text-area').type('TESTE')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

    it('campo telefone continua vazio quando preenchido com campo nao numerico', function () {
        cy.get('#phone')
            .type('AAAAA-BBBB')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Heloisa')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('mai@lgmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('TESTE')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Heloisa')
            .should('have.value', 'Heloisa')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Oliveira')
            .should('have.value', 'Oliveira')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('mail@gmail.com')
            .should('have.value', 'mail@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('9999988888')
            .should('have.value', '9999988888')
            .clear()
            .should('have.value', '')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')

    })

    it('seleciona um produto (Youtube) por seu texto', function () {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function () {
        // cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
        cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
    })

    it('marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]').should('have.length', 3).each(function ($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })
    it('marca ambos checkboxes, depois desmarca o último', function () {
        cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')

    })

    it('seleciona um arquivo da pastara fixtures', function () {
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })

    })

    it('seleciona um arquivo simulando um drag-and-drop', function () {
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })

    })

    it('seleciona um arquivo utilizando uma fixture pra a qual foi dada um alias', function () {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]').selectFile('@sampleFile')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()

        cy.contains('Talking About Testing').should('be.visible')
    })

    
    })

