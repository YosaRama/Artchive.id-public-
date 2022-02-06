/// <reference types="cypress" />

describe("Dashboard User Delete", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);

    //? ============== Cookies Setup ============= ?//
    cy.clearCookie("next-auth.session-token");
    cy.clearCookie("next-auth.callback-url");
    cy.setCookie("next-auth.session-token", Cypress.env("auth-session"));
    cy.setCookie("next-auth.callback-url", Cypress.env("auth-callback"));
    cy.getCookie("next-auth.session-token").should("exist");
    cy.getCookie("next-auth.callback-url").should("exist");
    // * ====================================== * //

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("/dashboard/users/artist");
  });

  //? ============== Should Show Confirmation Modal ============= ?//
  it("Should show confirmation modal", () => {
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).should("exist");
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).click();
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").should("exist");
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").click();
    cy.get(".ant-modal-confirm-body").should("be.visible");
    cy.contains("Delete").should("exist");
    cy.contains("No").should("exist");
  });
  // * ====================================== * //

  //? ============== Should Close Confirmation Modal ============= ?//
  it("Should close confirmation modal when press No", () => {
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).should("exist");
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).click();
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").should("exist");
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").click();
    cy.get(".ant-modal-confirm-body").should("be.visible");
    cy.contains("No").should("exist");
    cy.contains("No").click();
    cy.get(".ant-modal-confirm-body").should("not.exist");
  });
  // * ====================================== * //

  //? ============== Should Success Delete User ============= ?//
  it("Should success delete user", () => {
    cy.contains("Artchive Artist").should("exist");
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).should("exist");
    cy.get(
      ":nth-child(2) > .ant-card-body > .ant-row > .card-user-list_menu__wjmuN > .ant-col > .anticon > svg"
    ).click();
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").should("exist");
    cy.get(".ant-row > :nth-child(2) > .anticon > svg").click();
    cy.get(".ant-modal-confirm-body").should("be.visible");
    cy.contains("Delete").should("exist");
    cy.contains("Delete").click();
    cy.get(".ant-notification-notice-success").should("be.visible");
    cy.get(".ant-modal-confirm-body").should("not.exist");
    cy.contains("Artchive Artist").should("not.exist");
  });
  // * ====================================== * //
});
