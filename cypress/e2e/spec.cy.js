describe("Pizza Siparis Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Input Metin Testi", () => {
    cy.get("#isim-input").type("Ozge");
  });

  it("Ek Malzeme Testi", () => {
    cy.get("[value=Pepperoni]").check();
    cy.get("[value=Sosis]").check();
    cy.get("[value=Biber]").check();
  });

  it("Form Submit Testi", () => {
    cy.get("[value=Küçük]").click();
    cy.get("[name=hamur]").select("İnce Kenar");
    cy.get("[value=Pepperoni]").check();
    cy.get("[value=Sosis]").check();
    cy.get("[value=Biber]").check();
    cy.get("[value=Domates]").check();
    cy.get("[value=Ananas]").check();
    cy.get("#isim-input").type("Ozge");
    cy.get("#order-button").click();
  });
});
