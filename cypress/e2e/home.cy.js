import store from "../../src/redux/store";
// import App, { Posts } from "../../src/App";
// import React from 'react';
import { fetchPostsSuccess } from "../../src/redux/actions/postAction";

describe("The Home Page", () => {
  it("Page loaded", () => {
    cy.visit("/");
  });
  it("Press + and expect count value to be 1", () => {
    cy.visit("/");
    cy.contains("+").click();
    cy.get("h1").should("contain", "1");
  });
  it("Press - and expect count value to be -1", () => {
    cy.visit("/");
    cy.contains("-").click();
    cy.get("h1").should("contain", "-1");
  });
  it("Press + and - and expect count value to be 0", () => {
    cy.visit("/");
    cy.contains("-").click();
    cy.contains("+").click();
    cy.get("h1").should("contain", "0");
  });
  it("Redux test - Fetch API data and display items", () => {
    cy.visit("/");
    // store.dispatch(fetchPostsSuccess(posts));
    // cy.mount(<App />, { reduxStore: store });
    // cy.get('#posts').should("have.length", 5);

    cy.get("#4").should("have.text", "eum et est occaecati");
  });
});
