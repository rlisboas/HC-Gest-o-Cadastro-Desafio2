let cadastroCliente = JSON.parse(localStorage.getItem('cadastroCliente'));
localStorage.setItem('cadastroCliente', JSON.stringify(cadastroCliente));

let name = document.getElementById("name").value;
let cpf = document.getElementById("cpf").value;
let dataNascimento = document.getElementById("dataNascimento").value;
let endereco = document.getElementById("endereco").value;
let tel = document.getElementById("tel").value;
let email = document.getElementById("email").value;
let sexo = document.getElementById("sexo").value;

cadastroCliente.push({nome: nome, cpf: cpf, dataNascimento: dataNascimento, endereco: endereco, tel: tel, email: email, sexo: ('feminino', 'masculino', 'outro')})
