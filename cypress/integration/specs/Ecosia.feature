@ecosia
Feature: Search engine on the Ecosia website

  Background:
    Given I go to the Ecosia page
    And I see "Ecosia" in the title

  @smoke
  Scenario: Using the search input with the text "smoke test"
    Given I fill the search input with the "smoke test" term on the Search Engine page
    When I click on the search button on the Search Engine page
    Then the text "What is Smoke Testing?" should be visible on the result page on the Search Engine page

  Scenario Outline: Using the search input with the text "<search_text>"
    Given I fill the search input with the "<search_text>" term on the Search Engine page
    When I click on the search button on the Search Engine page
    Then the text "<expected_text>" should be visible on the result page on the Search Engine page

    Examples:
      | search_text | expected_text  |
      | cypress     | cypress.io     |
      | javascript  | JavaScript.com |
