
          const product3 = "Xiaomi Redmi HDD,PNG";
          const product3price1 = 34048.39;
          const product3price2 = 13456.06;
          const product3price3 = 15800.45;
          const product3price4 = 17712.19;
          const product3price5 = 8480.41;
          const maker3 = "Xiaomi";
          const model3 = "Redmi";


          const product1 = "Apple iPhone ADP,SDD";
          const product1price1 = 18299.69;
          const product1price2 = 7210.55;
          const product1price3 = 5894.16;
          const product1price4 = 23449.38;
          const product1price5 = 34583.52;
          const product1price6 = 13547.97;
          const product1price7 = 35704.51;
          const product1price8 = 45111.32;
          const product1price9 = 20646.5;
          const maker1 = "Apple";
          const model1 = "Apple";


    const products= [
    {
      name: "Xiaomi Redmi HDD,PNG",
      maker: "Xiaomi",
      model: "Redmi",
      priceHistory: [34048.39, 13456.06, 15800.45, 17712.19, 288480.41,
      ],
      latestPrice: 288480.41,
    },
    {
    name: "Apple iPhone ADP,SDD",
    maker: "Apple",
    model: "iPhone",
    priceHistory: [
      18299.69, 7210.55, 5894.16, 23449.38, 34583.52, 13547.97, 35704.51,
      45111.32, 20646.5
    ],
    latestPrice: 20646.5,
   },
  ]



console.log(products[0].name, products[0].latestPrice);
const index = 1;
console.log(products[index].name, products[index].latestPrice);
console.log(products.length);
console.log(products[0].priceHistory.length);
console.log(products[index].priceHistory.length);

let Myx = 6;

switch (true) {
    case Myx <= 10:
      console.log('smallchild');
      break;
    case 10 < Myx && Myx <= 16:
      console.log('child');
      break;
    case 16 < Myx && Myx <= 21:
      console.log('teenager');
      break;
    default:
      console.log('undefined');
}

while (Myx < 10) {
  console.log('smallchild');
  Myx = Myx +2;
}


//const productsForNotification = [;
//for (let p of products) {
  //switch (p.flag) {
    //case FLAG_PRICE_HUGE_DECREASE:
      //productsForNotification.push(p); // Варто працювати з кінцем масиву
      //break;
    //case FLAG_PRICE_DECREASE:
    //case FLAG_PRICE_INCREASE:
    //case FLAG_ERROR:
    //case NO_FLAG:
    //default:
      //console.log(p.product, "proceed");
  //},
//},

//]