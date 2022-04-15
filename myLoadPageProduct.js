const { default: axios } = require("axios");
const cheerio = require("cheerio");

module.exports = {
  /**
   * @param {{
   *    page: number
   * }} payload
   *
   * @returns {Promise<{
   *    name: string,
   *    currency: string,
   *    price: number
   * }>}
   */
   loadPriceForProduct: ({ page }) => {
    return axios
      .get(
        `https://allo.ua/ua/products/mobile/samsung-galaxy-a32-4-128gb-black-sm-a325fzkgsek.html`
      )
      .then((response) => {
        console.log("Status:", response.status); // Важливо, каже чи з вашим запитом все добре
        // console.log("Headers:", response.headers);
        console.log("Data length", response.data.length);
        // response.data - WEB сторінка в текстовому представленні.
        // Розмічена за допомогою HTML. Для того, щоб знаходити необхідний елемент скористаємось розміткою
        const dom = cheerio.load(response.data); // DOM - Document Object Model

        const product = [];

        dom(".product-view").map((_index, item) => {
          const card = cheerio.load(item);

          const name = card("h1.p-view__header-title").text();
          //const url = card("h1.p-view__header-title").attr("href");
          const price = card(".p-trade-price__current .sum").text();
          //console.log(price);
          const pieces = price.split(' ');
          //console.log(pieces, '\n');
          //const currency = card(".p-trade-price__current .sum .currency").text();

          const currency = pieces.pop();
          const numericPrice = Number(pieces.filter((p) => p.length && Number.isInteger(Number(p))).join(''));
          console.log(currency);
          console.log(numericPrice);

          product.push({
            name,
            price: Number(price.replace(/\ /gm, "")), // .replace - один з вбудованих методів стрічки
            // /\ /gm - регулярний вираз
            currency: currency.replace(/\ /gm, ""),
          });
        });

        return product;
      });
  },
};
