export default class DuckduckgoPage {
  private _url = 'https://duckduckgo.com/'

  private _inputSearch = '#search_form_input_homepage'
  private _btnSearch = '#search_button_homepage'
  private _resultSearch = '#links'

  load(): void {
    cy.visit(this._url)
    cy.get('body').should('be.visible')
  }

  fillSearch(text: string): void {
    cy.get(this._inputSearch).should('be.visible').type(text)
  }

  search(): void {
    cy.get(this._btnSearch).should('be.visible').click()
  }

  resultText(callback: (text: string) => void): void {
    cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
      callback($elem.text())
    })
  }
}
