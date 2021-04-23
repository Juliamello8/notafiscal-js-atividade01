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
        return (
            this.#id
        )

    }

}