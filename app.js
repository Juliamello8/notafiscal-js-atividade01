const product1 = new Product(001, 'Abacaxi', 'Fruta', 10, 1)
const product2 = new Product(002, 'DVD', 'Filme', 1, 51)
const product3 = new Product(003, 'Copo de vidro', 'Utensilios', 10, 6)
const product4 = new Product(004, 'Mamão', 'Fruta', 3, 4);

const listaProdutos = [product1, product2, product3, product4];
const notaFiscal = new NotaFiscal(001, '22-04-2021', 'ACB01', '13.043.813/0001-00', 'Supermercado', '088.888.888-99', 'Julia Campos', listaProdutos); // aqui você passa todas as informações só das notas

console.log(notaFiscal)
