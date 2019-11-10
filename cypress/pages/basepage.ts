/// <reference types="Cypress" />
const user = require('../fixtures/users.json');
export class BasePage {
  url: string;
  urlWithAd: string;
  constructor() {
    this.url = 'https://demo.applitools.com/hackathon.html';
    this.urlWithAd = this.url + '?showAd=true';
  }

  visit() {
    cy.visit(this.url);
  }

  visitAd() {
    cy.visit(this.urlWithAd);
  }

  login() {
    cy.get('#password').type(user[0].password);
    cy.get('#username').type(user[0].email);
    cy.get('.form-check-input').click();
    cy.get('#log-in').click();
  }
  canvasDataCheck($el: any) {
    cy.wrap($el).should('contain', '2017');
    cy.wrap($el).should('contain', '2018');
    cy.wrap($el).should('contain', 'January');
    cy.wrap($el).should('contain', 'February');
    cy.wrap($el).should('contain', 'March');
    cy.wrap($el).should('contain', 'April');
    cy.wrap($el).should('contain', 'May');
    cy.wrap($el).should('contain', 'June');
    cy.wrap($el).should('contain', 'July');
    cy.wrap($el).should('contain', 'August');
    cy.wrap($el).should('contain', 'September');
    cy.wrap($el).should('contain', 'November');
    cy.wrap($el).should('contain', 'December');

    cy.wrap($el).should('contain', '8');
    cy.wrap($el).should('contain', '9');
    cy.wrap($el).should('contain', '-10');
    cy.wrap($el).should('contain', '10');
    cy.wrap($el).should('contain', '40');
    cy.wrap($el).should('contain', '60');
    cy.wrap($el).should('contain', '40');
    cy.wrap($el).should('not.contain', '15');
  }
}
