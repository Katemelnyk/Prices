const arr = [
    'firstItem',
    'secondItem',
    'thirdItem'
];
    for (const item of arr) {
        console.log ('Code for "i" item', item);
    }


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

      for (const item of products) {
        console.log ('Code for "i" item', item.priceHistory);
    }



    for (let i = 0; i < arr.length; ++i) {
        console.log ('Code for "i" item', arr[i]);
    }
