const bad = require("../fixtures/test2_data.json").bad
const good = require("../fixtures/test2_data.json").good

it("Admin login pos. test", () => {
    cy.visit(" http://qamid.tmweb.ru/admin");
    cy.get('[for="email"] > .login__input').type(good.login);
    cy.get('[for="pwd"] > .login__input').type(good.pass);
    cy.get('.login__button').click();
    cy.contains('Администраторррская').should("be.visible");
})

it("Admin login neg. test", () => {
    cy.visit(" http://qamid.tmweb.ru/admin");
    cy.get('[for="email"] > .login__input').type(bad.login);
    cy.get('[for="pwd"] > .login__input').type(bad.pass);
    cy.get('.login__button').click();
    cy.contains('Ошибка авторизации!').should("be.visible");
})