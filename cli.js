const inquirer = require("inquirer");
const helpers = require("./helpers");
const { getProducts } = require("./getProducts");
const { loadProductsForPage } = require("./loadPageProducts");
const { loadPriceForProduct } = require("./myLoadPageProduct");

function getLastPrice(intrestingProduct) {
  return intrestingProduct.prices[intrestingProduct.prices.length - 1];
}

function getFlagRepresentation(intrestingProduct) {
  return helpers.getProductFlag(
    intrestingProduct.prices[intrestingProduct.prices.length - 1],
    intrestingProduct.prices[intrestingProduct.prices.length - 2]
  );
}

const ACTION_PRODUCT_STATS = "product_stats";
const ACTION_LOAD_PRODUCTS = "load_products";
const ACTION_UPDATE_PRICE = "update_price";
async function askUserForProduct(products) {
  try {
    const answers = await inquirer.prompt([
      {
        name: "action",
        message: "Choose action to perform",
        type: "list",
        choices: [
          {
            name: "Update price",
            value: ACTION_UPDATE_PRICE,
          },
          {
            name: "Load products from page",
            value: ACTION_LOAD_PRODUCTS,
          },
          {
            name: "Give product stats",
            value: ACTION_PRODUCT_STATS,
          },
        ],
      },
      {
        message: "Setup page to load",
        name: "page",
        type: "number",
        when: ({ action }) => action === ACTION_LOAD_PRODUCTS,
      },
      // Згідно API https://www.npmjs.com/package/inquirer передали список запитань
      {
        message: "Please insert product name",
        name: "product_name", // Унікальний ключ запитання
        type: "input", // Тип очікуваної відповіді
        when: ({ action }) => action === ACTION_PRODUCT_STATS,
      },
      //{
        //message: "Page to search",
        //name: "product_name", 
        //when: ({ action }) => action === ACTION_UPDATE_PRICE,
      //},
    ]);

    switch (answers.action) {
      case ACTION_LOAD_PRODUCTS:
        const newProducts = await loadProductsForPage({ page: answers.page });
        console.log("Products>", newProducts);
        break;
      case ACTION_PRODUCT_STATS:
        // instanceof Array
        const intrestingProduct = products.find(
          (product) => product.product === answers.product_name
        );
        console.log("Продукт знайдено!");
        console.log("Остання ціна\t| Стан");
        console.log(
          `${getLastPrice(intrestingProduct)}\t| ${getFlagRepresentation(
            intrestingProduct
          )}`
        );
        break;
      case ACTION_UPDATE_PRICE:
        const pageWithData = await loadPriceForProduct({ page: answers.page });
        console.log("Products>", pageWithData);
        break;

        /*console.log("Продукт знайдено!");
        console.log("Остання ціна\t| Стан");
        console.log(
          `${getLastPrice(intrestingProduct)}\t| ${getFlagRepresentation(
            intrestingProduct
          )}`
        );
        break;*/
    }
  } catch (error) {
    console.error("Під час обробки виникла помилка: ", error);
  }
}

askUserForProduct(getProducts());

