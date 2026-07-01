# Infernal Dungeon

Wiki/site oficial fictício do jogo **Infernal Dungeon**, desenvolvido para a Etapa 2 do Trabalho Avaliativo.

## Integrantes

- Leonardo Scheffer Nunes
- Vinicius Cecatto

## Descrição resumida

Infernal Dungeon é uma aplicação web em página única que apresenta o universo fictício de um jogo de tower defense com tema de dungeon. O jogador assume o papel de mestre de uma dungeon, protege um núcleo, constrói torres, recruta NPCs, utiliza máscaras especiais e invade dungeons controladas por NPCs.

Além das seções informativas, o projeto possui fluxo funcional completo com cadastro, login, loja fictícia, carrinho, compra simulada, inventário e central de dúvidas.

## Objetivo do projeto

Criar uma wiki/site oficial fictício para apresentar o jogo Infernal Dungeon e demonstrar funcionalidades básicas de uma aplicação web usando apenas HTML, CSS, JavaScript puro e LocalStorage.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript puro
- LocalStorage
- Git
- GitHub

## Funcionalidades implementadas

- Navegação por seções em página única
- Seções informativas sobre história, dungeons, máscaras, torres e NPCs
- Cadastro de usuário com validação de campos, e-mail simples e bloqueio de e-mail duplicado
- Login e logout com persistência no LocalStorage
- Exibição do usuário logado na interface
- Loja fictícia com 8 itens
- Carrinho com adição, remoção e cálculo de total
- Finalização de compra fictícia
- Inventário individual por usuário
- FAQ fixo
- Envio, edição e exclusão de dúvidas por usuário logado
- Persistência local usando as chaves:
  - `infernalDungeon_users`
  - `infernalDungeon_loggedUser`
  - `infernalDungeon_cart`
  - `infernalDungeon_inventory`
  - `infernalDungeon_questions`

## Estrutura de pastas

```text
InfernalDungeon/
├── codigo-fonte/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
├── documentacao/
│   ├── requisitos.md
│   ├── participacao.md
│   ├── interface.md
│   └── plano-testes.md
├── evidencias/
│   └── orientacoes-evidencias.md
├── README.md
└── netlify.toml
```

## Execução local

Para executar localmente, basta abrir o arquivo abaixo no navegador:

```text
codigo-fonte/index.html
```

Também é possível usar uma extensão como Live Server, caso o avaliador prefira navegar com um servidor local.

## Publicação no Netlify

O projeto já possui o arquivo `netlify.toml` configurado para publicar a pasta `codigo-fonte` sem comando de build.

Passos sugeridos:

1. Criar conta ou entrar no Netlify.
2. Importar o repositório do GitHub.
3. Deixar o build command vazio.
4. Definir o publish directory como `codigo-fonte`.
5. Publicar o site.
6. Copiar o link publicado para este README.

Configuração utilizada:

```toml
[build]
  publish = "codigo-fonte"
  command = ""
```

## Links

- Link do repositório GitHub: preencher após criação/publicação
- Link do site publicado no Netlify: preencher após publicação
- Link do vídeo de demonstração: preencher após gravação

## Observações

Este projeto não usa React, backend, banco de dados real ou bibliotecas externas. Todos os dados funcionais são armazenados localmente no navegador com LocalStorage, conforme a proposta acadêmica da Etapa 2.
