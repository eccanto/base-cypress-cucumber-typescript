/**
 * Abstract Class BaseSearchEngine.
 *
 * @class BaseSearchEngine
*/
export default class BaseSearchEngine {
    protected _url!: string;

    protected _inputSearch!: string;
    protected _btnSearch!: string;
    protected _resultSearch!: string;

    constructor() {
        if (this.constructor === BaseSearchEngine) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    load(): BaseSearchEngine {
        cy.visit(this._url);
        cy.get('body').should('be.visible');
        return this;
    }

    fillSearch(text: string) {
        cy.get(this._inputSearch).should('be.visible').type(text);
    }

    search() {
        cy.get(this._btnSearch).should('be.visible').click();
    }

    resultText(callback: (text: string) => void) {
        cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
            callback($elem.text());
        });
    }
}
