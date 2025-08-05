
const form = document.getElementById('formCliente');
const lista = document.getElementById('listaClientes');

function carregarClientes() {
  const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  lista.innerHTML = '';
  clientes.forEach((cliente, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${cliente.nome}</strong> | CPF: ${cliente.cpf} | Tel: ${cliente.telefone} |
      Email: ${cliente.email} | Equipamentos: ${cliente.equipamentos} | Nascimento: ${cliente.dataNascimento} <br>
      <strong>Descrição:</strong> ${cliente.descricao}
      <button onclick="excluirCliente(${index})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

function excluirCliente(index) {
  const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  clientes.splice(index, 1);
  localStorage.setItem('clientes', JSON.stringify(clientes));
  carregarClientes();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const cliente = {
    nome: document.getElementById('nome').value,
    cpf: document.getElementById('cpf').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value,
    equipamentos: document.getElementById('equipamentos').value,
    dataNascimento: document.getElementById('dataNascimento').value,
    descricao: document.getElementById('descricao').value
  };
  const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  clientes.push(cliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));
  form.reset();
  carregarClientes();
});

function exportarCSV() {
  const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  if (clientes.length === 0) {
    alert('Nenhum cliente para exportar!');
    return;
  }

  let csv = 'Nome,CPF,Telefone,Email,Equipamentos,Data de Nascimento,Descrição do Serviço\n';
  clientes.forEach(c => {
    csv += `${c.nome},${c.cpf},${c.telefone},${c.email},${c.equipamentos},${c.dataNascimento},"${c.descricao.replace(/"/g, '""')}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'clientes.csv';
  link.click();
}

carregarClientes();
