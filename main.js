document.getElementById("pesquisar").addEventListener("click", function () {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      alert("Digite um CEP válido com 8 dígitos.");
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert("CEP não encontrado.");
          return;
        }
  
        // Preenche os campos do formulário
        document.getElementById("logradouro").value = data.logradouro || '';
        document.getElementById("bairro").value = data.bairro || '';
      })
      .catch(error => {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
      });
  });
  