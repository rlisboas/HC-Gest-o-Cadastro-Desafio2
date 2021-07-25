let cadastroProduto = JSON.parse(localStorage.getItem('cadastroProduto') || '[]')
localStorage.setItem('cadastroProduto', JSON.stringify(cadastroProduto))

let codigo = document.getElementById("codigo").value;
let fornecedor = document.getElementById("fornecedor").value;
let descricaoProduto = document.getElementById("descricaoProduto").value;
let marca = document.getElementById("marca").value;
let modelo = document.getElementById("modelo").value;
let quantidade = document.getElementById("quantidade").value;
let observacoes = document.getElementById("observacoes").value;



cadastroCliente.push({codigo: codigo, fornecedor: fornecedor, descricaoProduto: descricaoProduto, marca: marca, modelo: modelo, quantidade: quantidade, observacoes: observacoes})