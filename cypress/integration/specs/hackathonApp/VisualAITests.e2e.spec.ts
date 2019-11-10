import { BasePage } from '../../../pages/basepage';
const users = require('../../../fixtures/users.json');
const page = new BasePage();

//I decided to group login page UI and data driven in just one test, since we're on that same login page.
describe('Should Login to Page and check UI Elements Test', () => {
  beforeEach(() => {
    page.visit();
    cy.eyesOpen();
  });

  it('Login Page UI Elements Test and Data-Driven Test', () => {
    cy.eyesCheckWindow('Login Page');
    cy.get('.form-check-input').click();
    cy.get('#log-in').click();
    cy.eyesCheckWindow('No username/password');
    cy.get('#username').type(users[0].email);
    cy.get('#log-in').click();
    cy.eyesCheckWindow('No password');

    cy.get('#username').clear();
    cy.get('#password').type(users[0].password);
    cy.get('#log-in').click();
    cy.eyesCheckWindow('No Username');
    page.login();
    cy.eyesCheckWindow('Dashboard After Login');
  });

  after(() => {
    cy.eyesClose();
  });
});

describe('should sort Recent Transactions table in ascending order', () => {
  beforeEach(() => {
    page.visit();
    cy.eyesOpen();
  });

  it('Table Sort Test', () => {
    page.login();
    cy.eyesCheckWindow('Dashboard After Login');
    cy.get('#amount').click();
    cy.eyesCheckWindow('Dashboard After Login');
  });

  after(() => {
    cy.eyesClose();
  });
});

describe('Should add data set to canvas and compare canvas', () => {
  beforeEach(() => {
    page.visit();
    cy.eyesOpen();
  });

  it('Canvas Chart Test', () => {
    page.login();
    cy.get('#showExpensesChart').click();
    cy.wait(2000);
    cy.get('#canvas');
    cy.eyesCheckWindow('Initial Expenses Canvas');
    cy.get('#addDataset').click();
    cy.eyesCheckWindow('Compare Expenses Canvas');
  });

  after(() => {
    cy.eyesClose();
  });
});

describe('Should see both ads', () => {
  before(() => {
    page.visitAd();
    cy.eyesOpen();
  });
  it('Dynamic Content Test', () => {
    page.login();
    cy.eyesCheckWindow('Compare Expenses Canvas');
  });
  after(() => {
    cy.eyesClose();
  });
});
