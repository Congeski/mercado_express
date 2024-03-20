// Data for development (users, products)

const users = [
    {
        login: "001",
        password: "teste123",
        name: "Fabio",
        admin: true,
    },
    {
        login: "002",
        password: "teste123",
        name: "Renan",
        admin: false,
    }
];

const products = [
    { name: "Arroz", price: 5.00, id: '001', quantity: 50 },
    { name: "Feijão", price: 4.50, id: '002', quantity: 50 },
    { name: "Açúcar", price: 2.30, id: '003', quantity: 50 },
    { name: "Sal", price: 1.50, id: '004', quantity: 50 },
    { name: "Óleo", price: 3.75, id: '005', quantity: 50 },
    { name: "Farinha", price: 2.00, id: '006', quantity: 50 },
    { name: "Macarrão", price: 3.50, id: '007', quantity: 50 },
    { name: "Leite", price: 3.00, id: '008', quantity: 50 },
    { name: "Café", price: 4.00, id: '009', quantity: 50 },
    { name: "Biscoito", price: 1.75, id: '010', quantity: 50 },
    { name: "Chocolate", price: 2.50, id: '011', quantity: 50 },
    { name: "Manteiga", price: 4.00, id: '012', quantity: 50 },
    { name: "Presunto", price: 3.00, id: '013', quantity: 50 },
    { name: "Queijo", price: 5.00, id: '014', quantity: 50 },
    { name: "Frango", price: 6.00, id: '015', quantity: 50 }
];

const suppliers = [
    { name: "AgroCelsoLTDA", cnpj: "0026352830-44", cep: "87103375"},
    { name: "ExtraBatatacamp", cnpj: "002933394-14", cep: "87356375"},
    { name: "JoséGerandlvincentinoLTDA", cnpj: "0003928834-53", cep: "871044475"},
]

const employees = [
    {code: "001", name: "Lucas Gabriel Baldo", cpf: "000000000-00" , email: "lucasgabriel@gmail.com", role: "caixa" },
    {code: "002", name: "Renan João dos Santos", cpf: "000000000-00" , email: "renanjoaodss@gmail.com", role: "caixa" },
    {code: "003", name: "Claudio Maia", cpf: "000000000-00" , email: "claudi2011@gmail.como" , role: "marketing" },
    {code: "004", name: "Fabio Meneses" , cpf: "000000000-00" , email: "fabiomeneses2834@gmail.com" , role: "gerente" },
]

export { users, products, suppliers, employees }