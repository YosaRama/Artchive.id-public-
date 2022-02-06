/// <reference types="cypress" />

describe("Dashboard User Create", () => {
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

    cy.visit("/dashboard");
  });

  //? ============== Should Success Create User ============= ?//
  it("Should success create artist", () => {
    cy.get(".ant-menu-title-content").contains("Users").should("exist");
    cy.get(".ant-menu-title-content").contains("Users").click();
    cy.get(".ant-menu-title-content").contains("Artist").should("exist");
    cy.get(".ant-menu-title-content").contains("Artist").click();
    cy.url().should("include", "/users/artist");
    cy.contains("Add User").should("exist");
    cy.contains("Add User").click();
    cy.url().should("include", "/users/create");
    cy.get("#email").should("exist");
    cy.get("#email").type("artist@artchive.id");
    cy.get("#password").should("exist");
    cy.get("#password").type("Asdf1234");
    cy.get("#fullName").should("exist");
    cy.get("#fullName").type("Artchive Artist");
    cy.get("#role").should("exist");
    cy.get("#role").click();
    cy.get(".ant-select-item-option-content").contains("Artist").should("be.visible");
    cy.get(".ant-select-item-option-content").contains("Artist").click();
    cy.contains("Submit").should("exist");
    cy.contains("Submit").click();
    cy.get(".ant-notification-notice-success").should("be.visible");
    cy.url().should("include", "/users/artist");
    cy.contains("Artchive Artist").should("exist");
  });
  // * ====================================== * //

  //? ============== Should Show Validation Form ============= ?//
  it("Should show validation form", () => {
    cy.get(".ant-menu-title-content").contains("Users").should("exist");
    cy.get(".ant-menu-title-content").contains("Users").click();
    cy.get(".ant-menu-title-content").contains("Artist").should("exist");
    cy.get(".ant-menu-title-content").contains("Artist").click();
    cy.url().should("include", "/users/artist");
    cy.contains("Add User").should("exist");
    cy.contains("Add User").click();
    cy.url().should("include", "/users/create");
    cy.get("#email").should("exist");
    cy.get("#email").type("artistartchive");
    cy.get("#password").should("exist");
    cy.get("#password").type("asdf1234");
    cy.get("#fullName").should("exist");
    cy.get("#fullName").type("a{backspace}");
    cy.get("#role").should("exist");
    cy.contains("Submit").should("exist");
    cy.contains("Submit").click();
    cy.contains("Please input email!").should("exist");
    cy.contains(
      "Password must be at least 8 characters long and contain at least one capital letter and one number."
    ).should("exist");
    cy.contains("Please input full name!").should("exist");
    cy.contains("Please select role!").should("exist");
  });
  // * ====================================== * //

  //? ============== Should Show Warning User Exist  ============= ?//
  it("Should show warning user already exist", () => {
    cy.get(".ant-menu-title-content").contains("Users").should("exist");
    cy.get(".ant-menu-title-content").contains("Users").click();
    cy.get(".ant-menu-title-content").contains("Artist").should("exist");
    cy.get(".ant-menu-title-content").contains("Artist").click();
    cy.url().should("include", "/users/artist");
    cy.contains("Add User").should("exist");
    cy.contains("Add User").click();
    cy.url().should("include", "/users/create");
    cy.get("#email").should("exist");
    cy.get("#email").type("artist@artchive.id");
    cy.get("#password").should("exist");
    cy.get("#password").type("Asdf1234");
    cy.get("#fullName").should("exist");
    cy.get("#fullName").type("Artchive Artist");
    cy.get("#role").should("exist");
    cy.get("#role").click();
    cy.get(".ant-select-item-option-content").contains("Artist").should("be.visible");
    cy.get(".ant-select-item-option-content").contains("Artist").click();
    cy.contains("Submit").should("exist");
    cy.contains("Submit").click();
    cy.get(".ant-notification-notice-warning").should("be.visible");
  });
  // * ====================================== * //
});
