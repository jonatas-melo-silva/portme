#!/bin/zsh

# Gera o build
pnpm build

# Entra na pasta gerada
cd portme

# Inicializa um repositório git temporário
git init
git checkout -b gh-pages

# Adiciona todos os arquivos
git add .

# Faz o commit
git commit -m "deploy: atualiza site para GitHub Pages"

# Adiciona o remoto (substitua pelo seu repositório, se necessário)
git remote add origin https://github.com/jonatas-melo-silva/portme.git

# Faz o push forçado para o branch gh-pages
git push -f origin gh-pages

# Volta para a raiz do projeto
cd ..

# Remove o git temporário
rm -rf portme/.git