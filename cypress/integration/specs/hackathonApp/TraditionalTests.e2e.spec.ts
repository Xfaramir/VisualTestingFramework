import { BasePage } from '../../../pages/basepage';
const users = require('../../../fixtures/users.json');
const page = new BasePage();

describe('Login Page UI Elements Test', () => {
  before(() => {
    page.visit();
  });

  it('should check UI Elements fields, labels and all other items exist', () => {
    cy.get('h4').should('contain', 'Login Form');
    cy.contains('Username');
    cy.contains('Password');
    cy.get('#log-in').should('contain', 'Log In');

    //Checking Page Images src attributes

    cy.get('img').each(($el, index) => {
      console.log(index);
      switch (index) {
        case 0:
          cy.wrap($el).should('have.attr', 'src', 'img/logo-big.png');
          break;
        case 1:
          cy.wrap($el).should(
            'have.attr',
            'src',
            'img/social-icons/twitter.png'
          );
          break;
        case 2:
          cy.wrap($el).should(
            'have.attr',
            'src',
            'img/social-icons/facebook.png'
          );
          break;
        case 3:
          cy.wrap($el).should(
            'have.attr',
            'src',
            'img/social-icons/linkedin.png'
          );
          break;

        default:
          break;
      }
    });
  });
});

describe('Login Data-Driven Test', () => {
  beforeEach(() => {
    page.visit();
  });

  it('should throw an error If you don’t enter the username and password and attempt login', () => {
    cy.get('.form-check-input').click();
    cy.get('#log-in').click();
    cy.get('.alert').should(
      'contain',
      'Both Username and Password must be present'
    );
  });

  it('should throw an error If you only enter the username and click the login button', () => {
    cy.get('#username').type(users[0].email);
    cy.get('.form-check-input').click();
    cy.get('#log-in').click();
    cy.get('.alert').should('contain', 'Password must be present');
  });

  it('should throw an error If you only enter the password and click the login button', () => {
    cy.get('#password').type(users[0].password);
    cy.get('.form-check-input').click();
    cy.get('#log-in').click();
    cy.get('.alert').should('contain', 'Username must be present');
  });

  it('should login to page', () => {
    page.login();
  });
});

describe('Table Sorting Test', () => {
  before(() => {
    cy.clearCookies();
    page.visit();
  });

  it('should login to page', () => {
    page.login();
  });

  it('should show Recent Transactions table after loggin ', () => {
    cy.get('tbody')
      .get('tr')
      .each(($el, index) => {
        switch (index) {
          case 1:
            //First Table Row values checking
            //We store the values of the rows in order to compare them after sorting
            cy.wrap($el).contains('td', 'Complete');
            cy.wrap($el).contains('td', 'Today');
            cy.wrap($el).contains('td', 'Starbucks coffee');
            cy.wrap($el).contains('td', 'Restaurant / Cafe');
            cy.wrap($el).contains('td', '+ 1,250.00 USD');

            break;

          case 2:
            //First Table Row values checking
            //We store the values of the rows in order to compare them after sorting
            cy.wrap($el).contains('td', 'Declined');
            cy.wrap($el).contains('td', 'Jan 19th');
            cy.wrap($el).contains('td', 'Stripe Payment Processing');
            cy.wrap($el).contains('td', 'Finance');
            cy.wrap($el).contains('td', '+ 952.23 USD');

            break;

          case 3:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Yesterday');
            cy.wrap($el).contains('td', '7:45am');
            cy.wrap($el).contains('td', 'MailChimp Services');
            cy.wrap($el).contains('td', 'Software');
            cy.wrap($el).contains('td', '- 320.00 USD');

            break;

          case 4:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Jan 23rd');
            cy.wrap($el).contains('td', '2:7pm');
            cy.wrap($el).contains('td', 'Shopify product');
            cy.wrap($el).contains('td', 'Shopping');
            cy.wrap($el).contains('td', '+ 17.99 USD');

            break;

          case 5:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Complete');
            cy.wrap($el).contains('td', 'Jan 7th');
            cy.wrap($el).contains('td', '9:51am');
            cy.wrap($el).contains('td', 'Ebay Marketplace');
            cy.wrap($el).contains('td', 'Ecommerce');
            cy.wrap($el).contains('td', '- 244.00 USD');

            break;

          case 6:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Jan 9th');
            cy.wrap($el).contains('td', '7:45pm');
            cy.wrap($el).contains('td', ' Templates Inc');
            cy.wrap($el).contains('td', 'Business');
            cy.wrap($el).contains('td', '+ 340.00 USD');

            break;

          default:
            break;
        }
      });
  });

  it('should sort in ASC order Recent Transactions table after click on the "Amounts" header ', () => {
    cy.get('#amount').click();
  });

  it('should show same data for products/rows after sorting table by amounts', () => {
    cy.get('tbody')
      .get('tr')
      .each(($el, index) => {
        switch (index) {
          case 6:
            //First Table Row values checking
            //We store the values of the rows in order to compare them after sorting
            cy.wrap($el).contains('td', 'Complete');
            cy.wrap($el).contains('td', 'Today');
            cy.wrap($el).contains('td', 'Starbucks coffee');
            cy.wrap($el).contains('td', 'Restaurant / Cafe');
            cy.wrap($el).contains('td', '+ 1,250.00 USD');

            break;

          case 5:
            //First Table Row values checking
            //We store the values of the rows in order to compare them after sorting
            cy.wrap($el).contains('td', 'Declined');
            cy.wrap($el).contains('td', 'Jan 19th');
            cy.wrap($el).contains('td', 'Stripe Payment Processing');
            cy.wrap($el).contains('td', 'Finance');
            cy.wrap($el).contains('td', '+ 952.23 USD');

            break;

          case 1:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Yesterday');
            cy.wrap($el).contains('td', '7:45am');
            cy.wrap($el).contains('td', 'MailChimp Services');
            cy.wrap($el).contains('td', 'Software');
            cy.wrap($el).contains('td', '- 320.00 USD');

            break;

          case 3:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Jan 23rd');
            cy.wrap($el).contains('td', '2:7pm');
            cy.wrap($el).contains('td', 'Shopify product');
            cy.wrap($el).contains('td', 'Shopping');
            cy.wrap($el).contains('td', '+ 17.99 USD');

            break;

          case 2:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Complete');
            cy.wrap($el).contains('td', 'Jan 7th');
            cy.wrap($el).contains('td', '9:51am');
            cy.wrap($el).contains('td', 'Ebay Marketplace');
            cy.wrap($el).contains('td', 'Ecommerce');
            cy.wrap($el).contains('td', '- 244.00 USD');

            break;

          case 4:
            //Third Table Row values checking
            cy.wrap($el).contains('td', 'Pending');
            cy.wrap($el).contains('td', 'Jan 9th');
            cy.wrap($el).contains('td', '7:45pm');
            cy.wrap($el).contains('td', ' Templates Inc');
            cy.wrap($el).contains('td', 'Business');
            cy.wrap($el).contains('td', '+ 340.00 USD');

            break;

          default:
            break;
        }
      });
  });
});

describe('Canvas Chart Test', () => {
  before(() => {
    page.visit();
  });

  it('should login to page', () => {
    page.login();
  });

  it('should click on the "Compare Expenses" button and then see canvas', () => {
    cy.get('#showExpensesChart').click();
    cy.get('#canvas');
    cy.get('script').each(($el, index) => {
      switch (index) {
        case 3:
          page.canvasDataCheck($el);
          break;
      }
    });
  });
  it('should see click on add dataSet and see next year 2019', () => {
    cy.get('#addDataset').click();
    cy.get('script').each(($el, index) => {
      switch (index) {
        case 3:
          page.canvasDataCheck($el);
          break;
      }
    });
  });
});

describe('Dynamic Content Test', () => {
  before(() => {
    page.visitAd();
  });

  it('should login to page', () => {
    page.login();
  });

  it('should see both ads', () => {
    cy.get('#flashSale > img');
    cy.get('#flashSale2 > img');
  });
});
