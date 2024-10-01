#!/bin/bash
set -eo pipefail

# Define a porta e a URL da API do LibreTranslate
LT_PORT=5001
APP_PORT=3001
LIBRETRANSLATE_IMAGE="libretranslate/libretranslate"
MOVIEPLOTTRANSLATOR_IMAGE="movieplotstranslator/movieplotstranslator"

# Verifica se o Docker está instalado
check_command() {
    command -v "$1" >/dev/null 2>&1 || {
        echo >&2 "$1 não encontrado. Por favor, instale antes de continuar.";
        exit 1;
    }
}

# Remove containers existentes
docker rm -f libretranslate 2>/dev/null || true
docker rm -f movieplotstranslator 2>/dev/null || true
check_command docker

# Inicia o container do LibreTranslate
echo "Preparando as letrinhas para as traducoes..."
cd ../LibreTranslate-main
docker run -d --rm -p $LT_PORT:5001 --name libretranslate $LIBRETRANSLATE_IMAGE --load-only en, pt

# Inicia o container da sua aplicação
echo "Iniciando a aplicação..."
cd ../movie-plots
docker run -d --rm -p $APP_PORT:3001 --link libretranslate:libretranslate --name movieplotstranslator $MOVIEPLOTTRANSLATOR_IMAGE

# Mensagem de sucesso
echo "Ambos os containers foram iniciados:
- LibreTranslate: http://localhost:$LT_PORT
- MoviePlotsTranslator: http://localhost:$APP_PORT

Para executar a aplicacao basta acessar

http://localhost:$APP_PORT

adicionar no endereco do navegador 
/movie/search?movie=

e o nome do filme.

Por exmeplo:
http://localhost:3001/movie/search?movie=inception
"

