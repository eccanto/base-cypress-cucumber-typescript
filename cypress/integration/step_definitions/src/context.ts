import BaseSearchEngine from './pages/baseSearchEngine';

export default class Context {
    public static init(): void {
        cy.wrap({}).as('_context');
    }

    public static set(attributeName: string, value: any): void {
        cy.get('@_context').then((context: any) => {
            context[attributeName] = value;
            cy.wrap(context).as('_context');
        });
    }

    public static get(attributeName: string, callback: (value: any) => void): void {
        cy.get('@_context').then((context: any) => {
            callback(context[attributeName]);
        });
    }

    public static setBrowser(browser: BaseSearchEngine): void {
        this.set('browser', browser);
    }

    public static getBrowser(callback: (browser: BaseSearchEngine) => void): void {
        this.get('browser', callback);
    }
}
