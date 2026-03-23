// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Pega o formulário pelo ID que criamos no HTML
    const form = document.getElementById("formContato");

    // Intercepta o momento em que o usuário clica em "Enviar"
    form.addEventListener("submit", function(event) {
        
        // 1. Impede a página de recarregar sozinha
        event.preventDefault();

        // 2. Pega os valores digitados e tira os espaços em branco das pontas (.trim)
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // 3. Verifica se algum campo está vazio
        if (nome === "" || email === "" || mensagem === "") {
            // Se estiver vazio, exibe o alerta de erro
            alert("⚠️ Por favor, preencha todos os campos antes de enviar!");
        } else {
            // Se estiver tudo certo, exibe o alerta de sucesso e limpa os campos
            alert("✅ Mensagem enviada com sucesso, " + nome + "! Entrarei em contato em breve.");
            form.reset(); 
        }
    });
});