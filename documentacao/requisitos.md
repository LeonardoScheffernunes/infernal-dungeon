# Requisitos

## Objetivo do sistema

Infernal Dungeon apresenta uma wiki/site fictício de um jogo de tower defense com tema de dungeon. A aplicação reúne informações sobre o jogo e permite que o usuário teste um fluxo simples com conta, loja, carrinho, inventário e suporte.

## Descrição do problema

A etapa atual do trabalho precisava transformar a ideia aprovada em uma aplicação funcional. Por isso, o site combina conteúdo informativo sobre o universo do jogo com interações básicas feitas no navegador.

## Público-alvo

O projeto é voltado para os avaliadores do trabalho e para usuários que desejam conhecer a proposta do jogo Infernal Dungeon por meio de uma interface web simples e responsiva.

## Requisitos funcionais implementados

| Código | Requisito funcional |
| ------ | ------------------- |
| RF01 | Cadastrar usuário |
| RF02 | Realizar login |
| RF03 | Realizar logout |
| RF04 | Visualizar itens da loja |
| RF05 | Adicionar item ao carrinho |
| RF06 | Remover item do carrinho |
| RF07 | Finalizar compra fictícia |
| RF08 | Visualizar inventário |
| RF09 | Visualizar FAQ |
| RF10 | Enviar dúvida |
| RF11 | Editar dúvida |
| RF12 | Excluir dúvida |

## Requisitos não funcionais considerados

| Código | Requisito não funcional |
| ------ | ----------------------- |
| RNF01 | Interface responsiva |
| RNF02 | Armazenamento local com LocalStorage |
| RNF03 | Aplicação executável em navegador |
| RNF04 | Organização do código em HTML, CSS e JavaScript |
| RNF05 | Uso de Git para controle de versão |
| RNF06 | Interface clara e objetiva |

## Fluxo principal da aplicação

1. O usuário acessa a página inicial e navega pelas seções informativas.
2. O usuário cria uma conta com nome, e-mail e senha.
3. O usuário faz login com os dados cadastrados.
4. O usuário acessa a loja e adiciona itens ao carrinho.
5. O usuário remove itens do carrinho, se necessário.
6. O usuário finaliza a compra fictícia.
7. Os itens comprados aparecem no inventário do usuário logado.
8. O usuário acessa a central de suporte.
9. O usuário envia, edita e exclui dúvidas.
10. O usuário pode encerrar a sessão com logout.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- LocalStorage
- Git e GitHub

## Observação

A aplicação não possui backend nem banco de dados real. Os dados ficam salvos no LocalStorage do navegador, o que atende ao funcionamento necessário para esta etapa do trabalho.
