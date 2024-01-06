export default class HomePage {
    private BASE_URL = 'https://duckduckgo.com/'

    private CSS_INPUT_SEARCH = '#searchbox_input'
    private CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    open(): void {
        cy.visit(this.BASE_URL)
        cy.get('body').should('be.visible')
    }

    fillSearch(text: string): void {
        cy.get(this.CSS_INPUT_SEARCH).should('be.visible').type(text)
    }

    search(): void {
        cy.get(this.CSS_BUTTON_SEARCH).should('be.visible').click()
    }
}
