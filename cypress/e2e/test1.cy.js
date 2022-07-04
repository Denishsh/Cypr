it("Open main page", () => {
    cy.visit("qamid.tmweb.ru");
    cy.contains('Идёмвкино').should("be.visible");
});