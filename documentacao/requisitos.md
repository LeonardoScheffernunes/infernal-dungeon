# Requisitos

## Objetivo do sistema

O sistema Infernal Dungeon tem como objetivo apresentar uma wiki/site oficial fictício de um jogo de tower defense com tema de dungeon, reunindo informações sobre história, dungeons, máscaras, torres, NPCs, loja, inventário e suporte.

## Descrição do problema

A proposta da Etapa 2 exige uma aplicação funcional relacionada ao projeto aprovado na Etapa 1. O site precisava ir além de uma página informativa, contendo um fluxo completo de interação com cadastro, login, loja fictícia, carrinho, inventário e envio de dúvidas.

## Público-alvo

O público-alvo são avaliadores, estudantes e pessoas interessadas em conhecer a proposta fictícia do jogo Infernal Dungeon por meio de uma interface web simples, funcional e responsiva.

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

1. O usuário acessa a página inicial e navega pelas seções informativas da wiki.
2. O usuário realiza cadastro informando nome, e-mail e senha.
3. O usuário faz login com as credenciais cadastradas.
4. O usuário acessa a loja e adiciona itens fictícios ao carrinho.
5. O usuário remove itens do carrinho, se desejar.
6. O usuário finaliza a compra fictícia.
7. Os itens comprados são salvos no inventário individual do usuário.
8. O usuário acessa a central de suporte.
9. O usuário envia, edita e exclui dúvidas.
10. O usuário pode encerrar a sessão com logout.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript puro
- LocalStorage
- Git
- GitHub

## Observação

A aplicação não possui backend e não utiliza banco de dados real. O armazenamento é feito com LocalStorage por se tratar de uma entrega acadêmica funcional da Etapa 2.
