/*1. Реализовать класс DataLoader. Класс должен являтся абстракцией над fetch'ом.
Конструктор класса принимает url по которому запрашивается инфа и метод по которому
эту инфу обрабатывать( обычно используем json ).*/

class DataLoader{
    constructor(url, method = (res) => res.json()) {
        this._url = url;
        this._method = method;
    }

    get url() {
        return this._url;
    }

    get method() {
        return this._method;
    }

    set method(method) {
        return this._method = method;
    }

    fetch() {
        this.response = fetch(this.url);
        return this;
    }

    then() {
        return this.response.then(this.method);
    }
}

(async function () {
    const dataLoader = new DataLoader('../../users.json');
    console.log(dataLoader);
    const result = await dataLoader.fetch().then();
})()