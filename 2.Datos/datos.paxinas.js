const paxinas = {
    app: `estou dentro da app
    <main></main>
    <button id="sair"> Sair </button>
    <div class="caixa">
      <p>Datos usuario:</p>
    </div>
    <form id="envio" enctype="multipart/form-data">
      <label for="nome"> Nome : </label>
      <input id="nome" name="Nome" type="text" placeholder="Introduce nome " />

      <label for="mail">mail :</label>
      <input
        id="mail"
        name="mail"
        type="text"
        placeholder="Introduce o mail"
      />
      <button type="submit">Insertar</button>
      <button type="reset">Borrar datos</button>
    </form>
    `
  ,

  tarefas: `
    <button id="sair"> Sair </button>
    <div class="caixaTarefa">
      <p>Tarefas usuario:</p>
    </div>
    <form id="envioTarefa" enctype="multipart/form-data">
      <label for="titulo"> Título: </label>
      <input id="titulo" name="Titulo" type="text" placeholder="Introduce título" />

      <label for="descricao"> Descripción: </label>
      <textarea id="descricao" name="Descricao" placeholder="Introduce descripción"></textarea>

      <button type="submit">Insertar</button>
      <button type="reset">Borrar datos</button>
    </form>
    `
    
}

module.exports = paxinas