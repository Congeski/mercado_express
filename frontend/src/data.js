// Data for development (users, products)

const users = [
    {
        login: "teste",
        password: "teste123",
        name: "Fabio",
        admin: true,
    },
    {
        login: "funcionario",
        password: "teste123",
        name: "Renan",
        admin: false,
    }
];

const products = [
    { name: "Arroz", price: 5.00, id: '001' },
    { name: "Feijão", price: 4.50, id: '002' },
    { name: "Açúcar", price: 2.30, id: '003' },
    { name: "Sal", price: 1.50, id: '004' },
    { name: "Óleo", price: 3.75, id: '005' },
    { name: "Farinha", price: 2.00, id: '006' },
    { name: "Macarrão", price: 3.50, id: '007' },
    { name: "Leite", price: 3.00, id: '008' },
    { name: "Café", price: 4.00, id: '009' },
    { name: "Biscoito", price: 1.75, id: '010' },
    { name: "Chocolate", price: 2.50, id: '011' },
    { name: "Manteiga", price: 4.00, id: '012' },
    { name: "Presunto", price: 3.00, id: '013' },
    { name: "Queijo", price: 5.00, id: '014' },
    { name: "Frango", price: 6.00, id: '015' }
];

export { users, products }