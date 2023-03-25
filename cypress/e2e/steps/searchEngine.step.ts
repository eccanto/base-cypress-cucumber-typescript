import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'

import BaseSearchEngine from './src/pages/baseSearchEngine';
import DuckDuckGoPage from './src/pages/duckduckgo';
import Context from './src/context';

Before(() => {
  Context.init();
})

Given('I go to the Duckduckgo page', () => {
  const browser = new DuckDuckGoPage().load()
  Context.setBrowser(browser)
})

Given('I fill the search input with the {string} term on the Search Engine page', (text: string) => {
  Context.getBrowser((browser: BaseSearchEngine) => {
    browser.fillSearch(text);
  })
})

When('I click on the search button on the Search Engine page', () => {
  Context.getBrowser((browser: BaseSearchEngine) => {
    browser.search()
  })
})

Then('the text {string} should be visible on the result page on the Search Engine page', (text: string) => {
  Context.getBrowser((browser: BaseSearchEngine) => {
    browser.resultText((elemText: string) => {
      expect(elemText).contains(text)
    })
  })
})
