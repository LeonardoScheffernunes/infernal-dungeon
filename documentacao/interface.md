# Interface

## Descrição das principais interfaces

O projeto Infernal Dungeon foi desenvolvido como uma aplicação de página única, com menu superior para navegação entre as seções. A interface utiliza tema escuro, cores infernais, cards, bordas douradas e organização visual inspirada em sites oficiais de jogos, sem copiar assets de jogos reais.

## Tela inicial

A tela inicial apresenta o nome Infernal Dungeon, uma descrição curta do jogo fictício e botões de acesso rápido para a loja e para a criação de conta. Também há indicadores simples com informações do universo do jogo.

## Área de conta

A área de conta contém dois formulários: cadastro e login. O cadastro solicita nome, e-mail e senha. O login solicita e-mail e senha. Após o login, o nome do usuário aparece na interface e o botão de logout fica disponível.

## Loja

A loja apresenta cards de itens fictícios, incluindo máscaras, skins, torres e pacotes de recursos. Cada card mostra nome, tipo, raridade, preço em Fragmentos Infernais, descrição e botão para adicionar ao carrinho.

## Carrinho

O carrinho fica na seção Loja. Ele mostra os itens adicionados pelo usuário logado, permite remoção de itens, calcula o total e possui botão para finalizar a compra fictícia.

## Inventário

O inventário exibe os itens comprados pelo usuário logado. Caso não haja usuário logado, a interface solicita login. Caso o usuário não tenha itens, uma mensagem informativa é exibida.

## Suporte/FAQ

A seção de suporte contém um FAQ fixo com perguntas frequentes e um formulário para envio de dúvidas. Usuários logados podem cadastrar, editar e excluir dúvidas, que são exibidas em uma lista individual.

## Fluxo de navegação entre as seções

O menu superior contém atalhos para Início, História, Dungeons, Máscaras, Torres, NPCs, Loja, Inventário, Suporte e Conta. A navegação ocorre por âncoras internas da página, mantendo a aplicação simples e funcional apenas com HTML, CSS e JavaScript.

## Observação sobre protótipos

Os protótipos foram representados diretamente na interface desenvolvida. A organização das telas, cards, formulários e fluxos navegáveis já funciona como protótipo visual e versão funcional do sistema.
