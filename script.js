
document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const equipamentos = document.getElementById("equipamentos").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const descricao = document.getElementById("descricao").value;

  const dados = {
    nome,
    cpf,
    telefone,
    email,
    equipamentos,
    dataNascimento,
    descricao
  };

  fetch("https://script.google.com/macros/s/AKfycbxHmFoGRGu2yem1XG4doTwX9HdCmbPJF3E_hwIe0Bxm/dev", {
    method: "POST",
    body: JSON.stringify(dados),
    mode: "no-cors"
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
