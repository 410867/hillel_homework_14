const store = {
    name: 'OLX',
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Khreshchatyk',
        houseNumber: 30,
    },
}
store.clients = {};
store.clients['Bohdan Onatsky'] = {
    quantity: 10,
    bonuses: 1000,
};
store.clients['Iryna Makarova'] = {
    quantity: 5,
    bonuses: 700,
};
store.clients['Mykhail Hitko'] = {
    quantity: 3,
    bonuses: 500,
};
store.clients['Oleksandra Horbenko'] = {
    quantity: 6,
    bonuses: 1500,
};
store.clients['Olena Demchyk'] = {
    quantity: 12,
    bonuses: 1800,
};

console.log(store);
