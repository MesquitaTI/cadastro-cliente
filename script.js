document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();

  // Mostrar aviso e spinner
  const aviso = document.getElementById("avisoEnvio");
  const btn = document.getElementById("btnCadastrar");
  aviso.style.display = "block";
  btn.disabled = true;
  btn.textContent = "Enviando...";

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const equipamento = document.getElementById("equipamentos").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const descricao = document.getElementById("descricao").value;

  const data = {
    nome,
    cpf,
    telefone,
    email,
    equipamentos: equipamento,
    dataNascimento,
    descricao
  };

  fetch("https://script.google.com/macros/s/AKfycbzpVBMo_s9MHZfDrDaBj3Us6gVnxNMXmGTv2hVebP8OXpo_Bw5vCaB-I01Q1XcnLyNFWg/exec", {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors"
  })
  .then(() => {
    alert("Cadastro enviado com sucesso para o Google Sheets!");
    document.getElementById("formCliente").reset();
  })
  .catch((error) => {
    alert("Erro ao enviar cadastro. Verifique a conexão ou o link do Google Script.");
    console.error("Erro:", error);
  })
  .finally(() => {
    aviso.style.display = "none";
    btn.disabled = false;
    btn.textContent = "Cadastrar";
  });
});
