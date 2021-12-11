import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import BaseSearchEngine from './src/pages/baseSearchEngine';
import EcosiaPage from './src/pages/ecosia';
import DuckDuckGoPage from './src/pages/duckduckgo';

Given('I go to the Ecosia page', () => {
    const browser = new EcosiaPage();
    browser.load();

    cy.wrap(browser).as('browser');
});

Given('I go to the Duckduckgo page', () => {
    const browser = new DuckDuckGoPage();
    browser.load();

    cy.wrap(browser).as('browser');
});

Given('I fill the search input with the {string} term on the Search Engine page', (text: string) => {
    cy.get('@browser').then((val: any) => {
        const browser: BaseSearchEngine = val;

        browser.fillSearch(text);
    });
});

When('I click on the search button on the Search Engine page', () => {
    cy.get('@browser').then((val: any): void => {
        const browser: BaseSearchEngine = val;

        browser.search();
    });
});

Then('the text {string} should be visible on the result page on the Search Engine page', (text: string) => {
    cy.get('@browser').then((val: any): void => {
        const browser: BaseSearchEngine = val;

        browser.resultText((elemText: string) => {
            expect(elemText).contains(text);
        });
    });
});
