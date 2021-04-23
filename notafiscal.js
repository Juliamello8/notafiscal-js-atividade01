let NotaFiscal = class NotaFiscal extends Product {

    constructor(num, date, key, emitterCNPJ, emitterName, documentClient, nameClient) {
        this.#num = num;
        this.#date = date;
        this.#key = key;
        this.#emitterCNPJ = emitterCNPJ;
        this.#emitterName = emitterName;
        this.#documentClient = documentClient;
        this.#nameClient = nameClient;
        this.listProducts = products;
    }

    get nota() {
        return this.#id;
    }

}

