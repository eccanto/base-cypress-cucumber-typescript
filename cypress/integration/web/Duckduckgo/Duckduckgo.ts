import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

// this will get called before each scenario
Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('I go to the Duckduckgo page', () => {
    cy.visit('https://duckduckgo.com/');
    cy.get('body').should('be.visible');
});

Given('I fill the search input with the {string} term on the Duckduckgo page', (text: string) => {
    cy.get('#search_form_input_homepage').should('be.visible').type(text);
});

When('I click on the search button on the Duckduckgo page', () => {
    cy.get('#search_button_homepage').should('be.visible').click();
});

Then('the text {string} should be visible on the result page on the Duckduckgo page', (text: string) => {
    cy.get('#links', { timeout: 20000 }).should('be.visible').then(($elem: any) => {
        expect($elem).to.contain.text(text);
    });
});
