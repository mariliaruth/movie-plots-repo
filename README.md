
# Projeto Movie Plots

## Descrição do Projeto

O **Movie Plots** é um serviço que integra informações de filmes e oferece sinopses traduzidas para o português, proporcionando uma experiência mais acessível para falantes de português. Este projeto utiliza a **OMDb API** para obter informações detalhadas sobre filmes e o **LibreTranslate** para traduzir as sinopses para o português.

## APIs Utilizadas

- **OMDb API**: Uma base de dados de filmes para obter informações e sinopses ([OMDb API](http://www.omdbapi.com/)).
- **LibreTranslate**: Serviço de tradução das sinopses para o português ([LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)).

## Stack Tecnológica

- **JavaScript**
- **Express.js**
- **Docker**

## Como Inicializar o Projeto

Este projeto utiliza Docker para facilitar a inicialização das dependências, incluindo o serviço de tradução e a própria aplicação de consulta de filmes.

### Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado em sua máquina. Caso não tenha instalado, siga as instruções no site oficial do [Docker](https://docs.docker.com/get-docker/).

### Passos para Inicializar

Para iniciar os containers Docker que incluem o LibreTranslate e o MoviePlotsTranslator, basta executar o script `run.sh`. Este script fará o download e iniciará ambos os containers de forma automatizada.

Execute o seguinte comando no terminal:

```sh
./run.sh
```

### O que o Script Faz?

1. **Verifica Dependências**: O script verifica se o Docker está instalado.
2. **Inicia o LibreTranslate**: Inicia o container do LibreTranslate na porta **5001**.
3. **Inicia o MoviePlotsTranslator**: Inicia o container da aplicação principal na porta **3001**, fazendo a conexão necessária com o LibreTranslate.

### URLs dos Serviços

- **LibreTranslate**: Disponível em [http://localhost:5001](http://localhost:5001)
- **MoviePlotsTranslator**: Disponível em [http://localhost:3001](http://localhost:3001)

## Como Consultar um Filme

Depois de inicializar o projeto, você poderá fazer uma consulta de filme diretamente pelo navegador.

1. Abra o navegador e acesse a URL da aplicação MoviePlotsTranslator:

   ```
   http://localhost:3001
   ```

2. Para realizar uma consulta específica, adicione ao final do endereço a seguinte rota: `/movie/search?movie=<nome_do_filme>`, onde `<nome_do_filme>` deve ser substituído pelo nome do filme que você deseja consultar.

### Exemplo de Uso

Se desejar buscar informações sobre o filme "Inception", utilize a seguinte URL no navegador:

```
http://localhost:3001/movie/search?movie=inception
```

Isso retornará a sinopse do filme traduzida para o português, oferecendo uma maneira conveniente de acessar as informações de forma clara e acessível.

---

## Observações

- Este projeto foi desenvolvido para fins educacionais e de aprendizado, aproveitando tecnologias modernas como Docker para facilitar a integração entre serviços.
- Certifique-se de que as portas **5001** e **3001** estejam livres antes de executar o script para evitar conflitos com outros serviços locais.

## Problemas Conhecidos

### Portas Ocupadas

Caso as portas **5001** ou **3001** já estejam sendo usadas, é possível modificar o script `run.sh` para usar outras portas disponíveis.

No entanto, existe uma maneira fácil de atribuir portas que estejam livrees no momento da execução utilizando **variáveis de ambiente**. 

#### Exemplo: Alterando as Portas no Momento da Execução

Para definir novas portas, você pode rodar o comando da seguinte forma:

```sh
LT_PORT=6001 APP_PORT=4001 ./run.sh
```

- **LT_PORT=6001**: Define a porta **6001** para o serviço LibreTranslate.
- **APP_PORT=4001**: Define a porta **4001** para a aplicação principal MoviePlotsTranslator.

Estes numeros de portas podem ser a sua escolha.
Desta forma, as novas portas são atribuídas no momento da execução, sem precisar modificar o script. Com essa configuração, você deverá acessar os serviços utilizando as novas portas:

- **LibreTranslate**: [http://localhost:6001](http://localhost:6001)
- **MoviePlotsTranslator**: [http://localhost:4001](http://localhost:4001)




## Como realizar a consulta da sinopse de um filme?

Por exemplo, para buscar informações sobre o filme "Inception" com as portas alteradas, utilize:

```
http://localhost:4001/movie/search?movie=inception
```

## Conexão Docker

Em algumas configurações, o link entre os containers pode falhar. Certifique-se de que ambos os containers estejam rodando para evitar problemas de conexão.