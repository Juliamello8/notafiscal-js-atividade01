let Product = class Product {
    #id;
    #name;
    #description;
    #quantity;
    #value;

    constructor(id, name, description, quantity, value) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = quantity * value;
    }

    get productById() {
        return this.#id;
    }

}

let products = new Product(
    {
        id: 001,
        name: 'Abacaxi',
        description: 'Fruta',
        quantity: 10,
        value: 1,
    },
    {
        id: 002,
        name: 'DVD',
        description: 'Filme',
        quantity: 1,
        value: 51,
    },
    {
        id: 001,
        name: 'Copo de vidro',
        description: 'Utensilios',
        quantity: 10,
        value: 6,
    },
    {
        id: 001,
        name: 'Mamão',
        description: 'Fruta',
        quantity: 3,
        value: 4,
    }
);

console.log(products);