import BaseSearchEngine from './baseSearchEngine';

export default class EcosiaPage extends BaseSearchEngine {
    _url = 'https://www.ecosia.org/';

    _inputSearch = 'input[type=search]';
    _btnSearch = 'button[type=submit]';
    _resultSearch = '.mainline';
}
