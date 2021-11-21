import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

// this will get called before each scenario
Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('I go to the Ecosia page', () => {
    cy.visit('https://www.ecosia.org/');
    cy.get('body').should('be.visible');
});

Given('I fill the search input with the {string} term on the Ecosia page', (text: string) => {
    cy.get('input[type=search]').should('be.visible').type(text);
});

When('I click on the search button on the Ecosia page', () => {
    cy.get('button[type=submit]').should('be.visible').click();
});

Then('the text {string} should be visible on the result page on the Ecosia page', (text: string) => {
    cy.get('.mainline-results', { timeout: 20000 }).should('be.visible').then(($elem: any) => {
        expect($elem).to.contain.text(text);
    });
});
