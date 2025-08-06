document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coleta os dados do formulário
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const equipamentos = document.getElementById("equipamentos").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const descricao = document.getElementById("descricao").value;

  // Monta os dados como objeto
  const dados = {
    nome,
    cpf,
    telefone,
    email,
    equipamentos,
    dataNascimento,
    descricao
  };

  // Envia para o Google Sheets via Apps Script
  fetch("https://script.google.com/macros/s/AKfycbxXxkadTyy3gwpGMlLFxQAo0vaM25z2o2jWCG0108-UOf8OZ_131V_1AsjCo8l1xPu2rQ/exec", {
    method: "POST",
    body: JSON.stringify(dados),
    mode: "no-cors" // necessário para funcionar com Google Apps Script sem CORS
  })
    .then(() => {
      alert("Cadastro enviado com sucesso!");
      document.getElementById("formCliente").reset();
    })
    .catch((error) => {
      alert("Erro ao enviar cadastro. Verifique a conexão ou o link do Google Script.");
      console.error("Erro:", error);
    });
});
