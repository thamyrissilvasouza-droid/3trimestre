/* Garante que o corpo da página empurre o rodapé para baixo */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
}

/* Centraliza o jogo no meio da página entre cabeçalho e rodapé */
.container-jogo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #121212;
}

/* Moldura estilo TV/Atari */
.moldura-atari {
    background-color: #2b2b2b;
    padding: 15px;
    border-radius: 12px;
    border: 4px solid #444;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    text-align: center;
}

#telaEnduro {
    background-color: #000;
    border: 2px solid #111;
    display: block;
    margin: 0 auto;
    max-width: 100%;
}

.controles-info {
    margin-top: 12px;
    color: #ccc;
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}
