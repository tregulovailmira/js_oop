/*1. Реализовать класс DataLoader. Класс должен являтся абстракцией над fetch'ом.
Конструктор класса принимает url по которому запрашивается инфа и метод по которому
эту инфу обрабатывать( обычно используем json ).*/

class DataLoader{
    constructor(url, method = (res) => res.json()) {
        this._url = url;
        this._fetch = fetch(url);
        this._method = method;
    }

    get url() {
        return this._url;
    }

    get fetch() {
        return this._fetch;
    }

    get method() {
        return this._method;
    }

    set method(method) {
        return this._method = method;
    }

    getData() {
        return this.fetch.then(this.method);
    }
}

getDataWithDataLoader();

async function getDataWithDataLoader() {
    const dataLoader = new DataLoader('../../users.json');
    const result = await dataLoader.getData();
    console.log(result);
}