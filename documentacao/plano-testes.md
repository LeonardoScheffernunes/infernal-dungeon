# Plano de Testes

| Caso de teste | Dados utilizados | Resultado esperado | Resultado obtido | Status |
| ------------- | ---------------- | ------------------ | ---------------- | ------ |
| Cadastro com campos vazios | Nome, e-mail e senha vazios | Sistema exibe mensagem solicitando preenchimento dos campos | Mensagem de erro exibida corretamente | Aprovado |
| Cadastro válido | Nome: Teste, e-mail: teste@email.com, senha: 123456 | Usuário é salvo no LocalStorage e mensagem de sucesso é exibida | Cadastro realizado e salvo corretamente | Aprovado |
| Cadastro com e-mail duplicado | E-mail já cadastrado: teste@email.com | Sistema impede o cadastro e informa que o e-mail já existe | Cadastro bloqueado com mensagem adequada | Aprovado |
| Login inválido | E-mail ou senha incorretos | Sistema exibe mensagem de e-mail ou senha inválidos | Login recusado corretamente | Aprovado |
| Login válido | E-mail: teste@email.com, senha: 123456 | Usuário é logado e nome aparece na interface | Login realizado e usuário exibido no topo e na área de conta | Aprovado |
| Adicionar item ao carrinho | Item: Máscara do Abismo | Item aparece no carrinho e total é atualizado | Item adicionado e total recalculado | Aprovado |
| Remover item do carrinho | Item já inserido no carrinho | Item é removido e total é atualizado | Item removido corretamente | Aprovado |
| Finalizar compra | Carrinho com um ou mais itens e usuário logado | Itens são movidos para o inventário e carrinho é limpo | Compra finalizada, inventário atualizado e carrinho limpo | Aprovado |
| Verificar inventário | Usuário logado com item comprado | Inventário exibe os itens comprados pelo usuário | Itens exibidos individualmente para o usuário logado | Aprovado |
| Enviar dúvida | Título, categoria e descrição preenchidos | Dúvida é salva e exibida na lista do usuário | Dúvida criada e listada corretamente | Aprovado |
| Editar dúvida | Alteração de título, categoria ou descrição | Dúvida é atualizada na lista do usuário | Dúvida editada e renderizada com dados atualizados | Aprovado |
| Excluir dúvida | Dúvida existente na lista | Dúvida é removida da lista e do LocalStorage | Dúvida excluída corretamente | Aprovado |
| Logout | Usuário logado clica em sair | Sessão é encerrada e ações protegidas exigem login novamente | Logout realizado e interface voltou ao estado de visitante | Aprovado |
