document.getElementById("formCliente").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const equipamentos = document.getElementById("equipamentos").value;
    const descricao = document.getElementById("descricao").value;

    const data = {
        nome,
        cpf,
        telefone,
        email,
        dataNascimento,
        equipamentos,
        descricao
    };

    fetch("https://script.google.com/macros/s/AKfycbxXxkadTyy3gwpGMlLFxQAo0vaM25z2o2jWCG0108-UOf8OZ_131V_1AsjCo8l1xPu2rQ/exec", {
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
    });
});
