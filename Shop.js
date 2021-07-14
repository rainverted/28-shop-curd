class Shop {
    constructor(companyName, currency) {
        this.list = [];
        this.companyName = companyName;
        this.currency = currency;
    }
    intro() {
        console.log(`Hi, we are "${this.companyName}".`);
    }

    addItem(item, price) {

        console.log(`"${this.companyName.toLowerCase()}" sells ${item} for ${price / 100} ${this.currency} now!`);
    }

    items() {
        for (let i = 0; i < this.list.length; i++) {
            const element = array[i];

        }

        console.log(`Items for sale at "${this.companyName}":`);
        console.log(`====================`);

        console.log(`${i + 1}) Obuolys - 1.30 EUR;`);

        console.log(`====================`);
    }
}

module.exports = Shop;