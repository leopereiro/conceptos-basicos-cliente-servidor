const paxinas = {
    app: `estou dentro da app
    <main></main>
    <button id="sair"> Sair </button>
    <div class="caixa">
      <p>Datos usuario:</p>
    </div>
    <form id="envio">
      <label for="user_nome"> Nome : </label>
      <input id="user_nome" name="user_nome" type="text" placeholder="Introduce nome " />

      <label for="user_mail">mail :</label>
      <input
        id="user_mail"
        name="user_mail"
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
    <form id="envioTarefa">
      <label for="titulo"> Título: </label>
      <input id="titulo" name="Titulo" type="text" placeholder="Introduce título" />

      <label for="descricao"> Descripción: </label>
      <textarea id="descricao" name="Descricao" placeholder="Introduce descripción"></textarea>

      <button type="submit" id="gardarTarefa">Insertar</button>
      <button type="reset">Borrar datos</button>
    </form>
    `
    
}

module.exports = paxinas