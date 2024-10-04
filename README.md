
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

Este projeto utiliza **npm** para iniciar o servidor da aplicação principal e Docker para inicializar o serviço de tradução, que será utilizado pela aplicação de consulta de filmes.

### Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado em sua máquina. Caso não tenha instalado, siga as instruções no site oficial do [Docker](https://docs.docker.com/get-docker/).
- **Node.js e npm**: Para rodar o servidor da aplicação, você também precisará do Node.js e do npm instalados. Para instalar, siga as instruções do [site oficial do Node.js](https://nodejs.org/).

### Passos para Inicializar

1. **Iniciar o LibreTranslate** com Docker:
   
   Primeiramente, precisamos iniciar o container Docker que contém o serviço de tradução LibreTranslate. Para isso, execute o comando abaixo no terminal no diretorio LibreTranslate-main

   ```sh
   ./run.sh --port 8000
   ```

### Instalar Dependências:
No diretorio /movie-plots rode o comando 

   ```sh
   npm install
   ```
### Iniciar a Aplicação Principal:
  ```sh
   npm start
   ```


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
- Certifique-se de que as portas estejam livres antes de executar o script para evitar conflitos com outros serviços locais.

## Problemas Conhecidos

### Portas Ocupadas

Caso as portas já estejam sendo usadas, é possível modificar o script `run.sh` para usar outra porta disponível para rodar o LibreTranslate e configurar a ```const PORT =6100;```na linha seis do server.js.

Estes numeros de portas podem ser a sua escolha.

## Como realizar a consulta da sinopse de um filme?

Por exemplo, para buscar informações sobre o filme "Inception" com as portas alteradas, utilize:

```
http://localhost:/movie/search?movie=inception
```

## Conexão Docker

Em algumas configurações, o link entre os containers pode falhar. Certifique-se de que ambos os containers estejam rodando para evitar problemas de conexão.