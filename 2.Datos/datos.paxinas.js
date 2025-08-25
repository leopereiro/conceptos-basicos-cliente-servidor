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

      <label for="apelido 1">Apelido 1 :</label>
      <input
        id="apelido 1"
        name="Apelido 1"
        type="text"
        placeholder="Introduce apelido 1"
      />
      <label for="apelido 2">Apelido 2 :</label>
      <input
        id="apelido 2"
        name="Apelido 2"
        type="text"
        placeholder="Introduce apelido 2"
      />
      <label for="idade"> Idade: </label>
      <input
        id="idade"
        name="Idade"
        type="text"
        placeholder="Introduce profesión"
      />
      <label for="profesion"> Profesión: </label>
      <input
        id="profesion"
        name="Profesion"
        type="text"
        placeholder="Introduce profesión"
      />
      <button type="submit">Insertar</button>
      <button type="reset">Borrar datos</button>
    </form>
    

    
    `

    
}

module.exports = paxinas