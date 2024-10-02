const culturasPorEstacao = {
    verao: [
        { nome: "Cenoura", periodo: "Setembro a fevereiro", dicas: "Solo bem drenado e irrigação regular." },
        { nome: "Alface", periodo: "Outubro a março", dicas: "Prefere sombra parcial em climas quentes." },
        { nome: "Mandioca", periodo: "Durante todo o ano", dicas: "Solo bem preparado e sol pleno." },
        { nome: "Milho", periodo: "Setembro a dezembro", dicas: "Plantá-los em fileiras para melhor polinização." },
        { nome: "Tomate", periodo: "Setembro a março", dicas: "Requer bastante luz solar." },
        { nome: "Pimentão", periodo: "Setembro a março", dicas: "Solo bem fertilizado." }
    ],
    outono: [
        { nome: "Beterraba", periodo: "Março a junho", dicas: "Solo rico em matéria orgânica." },
        { nome: "Cenoura (segunda safra)", periodo: "Final de março a junho", dicas: "Manter a umidade do solo." },
        { nome: "Brócolis", periodo: "Abril a junho", dicas: "Solo bem drenado." },
        { nome: "Rabanete", periodo: "Março a junho", dicas: "Cresce rapidamente." }
    ],
    inverno: [
        { nome: "Alface (variedades resistentes)", periodo: "Maio a agosto", dicas: "Protegê-las contra geadas." },
        { nome: "Beterraba (segunda safra)", periodo: "Final de agosto a outubro", dicas: "Solo leve." },
        { nome: "Espinafre", periodo: "Abril a julho", dicas: "Solo rico." },
        { nome: "Couve", periodo: "Maio a agosto", dicas: "Resistente ao frio." }
    ],
    primavera: [
        { nome: "Morango", periodo: "Agosto a novembro", dicas: "Solo bem drenado." },
        { nome: "Cenoura (plantio de primavera)", periodo: "Setembro a dezembro", dicas: "Fertilizar o solo." },
        { nome: "Pepino", periodo: "Setembro a dezembro", dicas: "Necessita de muito sol." },
        { nome: "Abobrinha", periodo: "Setembro a dezembro", dicas: "Solo bem nutrido." }
    ]
};

document.getElementById('season-select').addEventListener('change', function() {
    const selectedSeason = this.value;
    const culturasDiv = document.getElementById('culturas');
    culturasDiv.innerHTML = ''; // Limpa a lista anterior

    if (selectedSeason && culturasPorEstacao[selectedSeason]) {
        culturasPorEstacao[selectedSeason].forEach(cultura => {
            const culturaDiv = document.createElement('div');
            culturaDiv.innerHTML = `<h3>${cultura.nome}</h3>
                                    <p>Melhor época: ${cultura.periodo}</p>
                                    <p>Dicas: ${cultura.dicas}</p>`;
            culturasDiv.appendChild(culturaDiv);
        });
    }
});