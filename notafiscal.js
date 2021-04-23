let NotaFiscal = class NotaFiscal {
    #num
    #date
    #key
    #emitterCNPJ
    #emitterName
    #documentClient
    #nameClient


    constructor(num, date, key, emitterCNPJ, emitterName, documentClient, nameClient) {
        this.#num = num;
        this.#date = date;
        this.#key = key;
        this.#emitterCNPJ = emitterCNPJ;
        this.#emitterName = emitterName;
        this.#documentClient = documentClient;
        this.#nameClient = nameClient;
    }

    get notaByNum() {
        return (
            this.#num
        );
    }

}

