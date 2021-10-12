var orderHistory = [
  {
    orderNumber: 114 - 3941689 - 8772232,
    orderDate: '8-4-2020',
    ShippingAddress: 'JS Masher',
    isDelivered: true,
    DeliveryDate: '8-4-2020',
    returnWindowOpen: false,
    returnWindowCloseDate: '9-7-2020',
    total: 34.00,
    numItems: [{
      category: 'book',
      qty: 1,
      itemName: 'JavaScript for Impatient Programmers',
      creator: 'Rauschmayer, Dr. Axel',
      price: 34.00,
      priceIn: 'USD'
    }]
  },
  {
    orderNumber: 113 - 998468 - 1280257,
    orderDate: '7-19-2020',
    ShippingAddress: 'JS Masher',
    isDelivered: true,
    DeliveryDate: '7-20-2020',
    returnWindowOpen: false,
    returnWindowCloseDate: '8-19-20',
    total: 44.53,
    numItems: [{
      category: 'book',
      qty: 1,
      itemName: 'The Timeless Way of Building',
      creator: 'Alexander, Christopher',
      price: 44.53,
      priceIn: 'USD'
    }]

  },
  {
    orderNumber: 114 - 2875557 - 9059409,
    orderDate: '7-4-2020',
    ShippingAddress: 'JS Masher',
    isDelivered: true,
    DeliveryDate: '7-7-2020',
    returnWindowOpen: false,
    returnWindowCloseDate: '8-5-2020',
    total: 17.22,
    numItems: [{
      category: 'electronics',
      qty: 1,
      itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      creator: 'Optic',
      price: 17.22,
      priceIn: 'USD'
    }]
  },
  {
    orderNumber: 113 - 2883177 - 2648248,
    orderDate: '7-3-2020',
    ShippingAddress: 'JS Masher',
    isDelivered: true,
    DeliveryDate: '7-5-2020',
    returnWindowOpen: false,
    returnWindowCloseDate: '8-4-2020',
    total: 138.93,
    totalIn: 'USD',
    numItems: [
      {
        item: 'electronics',
        qty: 1,
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        creator: 'Nintendo',
        price: 94.95,
        priceIn: 'USD'
      }, {
        item: 'book',
        qty: 1,
        itemName: 'The Art of Sql',
        creator: 'Faroult, Stephane',
        price: 33.99,
        priceIn: 'USD'
      }

    ]
  }
];

const highestPriced = orderHistory.reduce((acc, cur) => cur.total > acc.total ? cur : acc);

const sortByPriceAscending = orderHistory.sort((a, b) => a.total - b.total);
