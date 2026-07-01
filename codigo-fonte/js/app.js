"use strict";

const storageKeys = {
  users: "infernalDungeon_users",
  loggedUser: "infernalDungeon_loggedUser",
  cart: "infernalDungeon_cart",
  inventory: "infernalDungeon_inventory",
  questions: "infernalDungeon_questions"
};

const storeItems = [
  {
    id: "mascara-abismo",
    name: "Máscara do Abismo",
    type: "Máscara",
    rarity: "Épico",
    price: 420,
    description: "Amplia efeitos de controle em corredores profundos e fortalece defesas próximas ao núcleo."
  },
  {
    id: "torre-sangrenta",
    name: "Torre Sangrenta",
    type: "Torre",
    rarity: "Raro",
    price: 360,
    description: "Estrutura ofensiva focada em alto dano contra invasores resistentes."
  },
  {
    id: "skin-guardiao-cinzas",
    name: "Skin Guardião das Cinzas",
    type: "Skin",
    rarity: "Incomum",
    price: 180,
    description: "Visual alternativo para defensores do núcleo, inspirado em armaduras queimadas."
  },
  {
    id: "pacote-nucleo-profano",
    name: "Pacote Núcleo Profano",
    type: "Pacote de recursos",
    rarity: "Raro",
    price: 300,
    description: "Conjunto fictício de materiais para acelerar melhorias do núcleo da dungeon."
  },
  {
    id: "mascara-ruina",
    name: "Máscara da Ruína",
    type: "Máscara",
    rarity: "Lendário",
    price: 620,
    description: "Aumenta a força das unidades durante invasões contra dungeons controladas por NPCs."
  },
  {
    id: "torre-ossos",
    name: "Torre dos Ossos",
    type: "Torre",
    rarity: "Incomum",
    price: 240,
    description: "Dispara fragmentos ósseos rapidamente contra grupos numerosos de invasores."
  },
  {
    id: "skin-mestre-infernal",
    name: "Skin Mestre Infernal",
    type: "Skin",
    rarity: "Épico",
    price: 480,
    description: "Aparência cerimonial para o mestre da dungeon, com detalhes dourados e rubros."
  },
  {
    id: "pacote-cristais-dungeon",
    name: "Pacote Cristais da Dungeon",
    type: "Pacote de recursos",
    rarity: "Comum",
    price: 150,
    description: "Cristais fictícios usados para desbloquear câmaras iniciais e pequenos aprimoramentos."
  }
];

const elements = {
  headerUserStatus: document.querySelector("#headerUserStatus"),
  accountStatusText: document.querySelector("#accountStatusText"),
  logoutButton: document.querySelector("#logoutButton"),
  registerForm: document.querySelector("#registerForm"),
  registerName: document.querySelector("#registerName"),
  registerEmail: document.querySelector("#registerEmail"),
  registerPassword: document.querySelector("#registerPassword"),
  registerMessage: document.querySelector("#registerMessage"),
  loginForm: document.querySelector("#loginForm"),
  loginEmail: document.querySelector("#loginEmail"),
  loginPassword: document.querySelector("#loginPassword"),
  loginMessage: document.querySelector("#loginMessage"),
  storeMessage: document.querySelector("#storeMessage"),
  storeItems: document.querySelector("#storeItems"),
  cartItems: document.querySelector("#cartItems"),
  cartCount: document.querySelector("#cartCount"),
  cartTotal: document.querySelector("#cartTotal"),
  checkoutButton: document.querySelector("#checkoutButton"),
  inventoryMessage: document.querySelector("#inventoryMessage"),
  inventoryItems: document.querySelector("#inventoryItems"),
  questionForm: document.querySelector("#questionForm"),
  questionEditId: document.querySelector("#questionEditId"),
  questionTitle: document.querySelector("#questionTitle"),
  questionCategory: document.querySelector("#questionCategory"),
  questionDescription: document.querySelector("#questionDescription"),
  questionSubmitButton: document.querySelector("#questionSubmitButton"),
  cancelQuestionEdit: document.querySelector("#cancelQuestionEdit"),
  questionMessage: document.querySelector("#questionMessage"),
  questionsList: document.querySelector("#questionsList")
};

let loggedUser = readStorage(storageKeys.loggedUser, null);

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readStorage(storageKeys.users, []);
}

function saveUsers(users) {
  writeStorage(storageKeys.users, users);
}

function getCartMap() {
  return readStorage(storageKeys.cart, {});
}

function saveCartMap(cartMap) {
  writeStorage(storageKeys.cart, cartMap);
}

function getInventoryMap() {
  return readStorage(storageKeys.inventory, {});
}

function saveInventoryMap(inventoryMap) {
  writeStorage(storageKeys.inventory, inventoryMap);
}

function getQuestionsMap() {
  return readStorage(storageKeys.questions, {});
}

function saveQuestionsMap(questionsMap) {
  writeStorage(storageKeys.questions, questionsMap);
}

function getCurrentCart() {
  if (!loggedUser) {
    return [];
  }

  const cartMap = getCartMap();
  return cartMap[loggedUser.email] || [];
}

function saveCurrentCart(cart) {
  if (!loggedUser) {
    return;
  }

  const cartMap = getCartMap();
  cartMap[loggedUser.email] = cart;
  saveCartMap(cartMap);
}

function getCurrentInventory() {
  if (!loggedUser) {
    return [];
  }

  const inventoryMap = getInventoryMap();
  return inventoryMap[loggedUser.email] || [];
}

function saveCurrentInventory(items) {
  if (!loggedUser) {
    return;
  }

  const inventoryMap = getInventoryMap();
  inventoryMap[loggedUser.email] = items;
  saveInventoryMap(inventoryMap);
}

function getCurrentQuestions() {
  if (!loggedUser) {
    return [];
  }

  const questionsMap = getQuestionsMap();
  return questionsMap[loggedUser.email] || [];
}

function saveCurrentQuestions(questions) {
  if (!loggedUser) {
    return;
  }

  const questionsMap = getQuestionsMap();
  questionsMap[loggedUser.email] = questions;
  saveQuestionsMap(questionsMap);
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setMessage(element, text, type = "") {
  if (!element) {
    return;
  }

  element.textContent = text;
  element.className = `message ${type}`.trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clearAuthMessages() {
  setMessage(elements.registerMessage, "");
  setMessage(elements.loginMessage, "");
}

function setLoggedUser(user) {
  loggedUser = user;

  if (user) {
    writeStorage(storageKeys.loggedUser, user);
  } else {
    localStorage.removeItem(storageKeys.loggedUser);
  }

  renderAuthState();
}

function renderAuthState() {
  const userName = loggedUser ? loggedUser.name : "Visitante";

  elements.headerUserStatus.textContent = userName;
  elements.accountStatusText.textContent = loggedUser
    ? `Usuário logado: ${loggedUser.name} (${loggedUser.email})`
    : "Nenhum usuário logado.";

  elements.logoutButton.classList.toggle("hidden", !loggedUser);
  renderCart();
  renderInventory();
  renderQuestions();
}

function handleRegister(event) {
  event.preventDefault();
  clearAuthMessages();

  const name = elements.registerName.value.trim();
  const email = normalizeEmail(elements.registerEmail.value);
  const password = elements.registerPassword.value.trim();

  if (!name || !email || !password) {
    setMessage(elements.registerMessage, "Preencha nome, e-mail e senha.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    setMessage(elements.registerMessage, "Informe um e-mail válido.", "error");
    return;
  }

  const users = getUsers();
  const emailAlreadyExists = users.some((user) => user.email === email);

  if (emailAlreadyExists) {
    setMessage(elements.registerMessage, "Este e-mail já está cadastrado.", "error");
    return;
  }

  const newUser = {
    id: `user-${Date.now()}`,
    name,
    email,
    password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  elements.registerForm.reset();
  setMessage(elements.registerMessage, "Cadastro realizado com sucesso. Agora você pode fazer login.", "success");
}

function handleLogin(event) {
  event.preventDefault();
  clearAuthMessages();

  const email = normalizeEmail(elements.loginEmail.value);
  const password = elements.loginPassword.value.trim();

  if (!email || !password) {
    setMessage(elements.loginMessage, "Preencha e-mail e senha.", "error");
    return;
  }

  const users = getUsers();
  const user = users.find((savedUser) => savedUser.email === email);

  if (!user || user.password !== password) {
    setMessage(elements.loginMessage, "E-mail ou senha inválidos.", "error");
    return;
  }

  setLoggedUser({
    id: user.id,
    name: user.name,
    email: user.email
  });

  elements.loginForm.reset();
  setMessage(elements.loginMessage, "Login realizado com sucesso.", "success");
}

function handleLogout() {
  setLoggedUser(null);
  clearAuthMessages();
  setMessage(elements.loginMessage, "Logout realizado com sucesso.", "success");
}

function formatCurrency(value) {
  return `${value} Fragmentos Infernais`;
}

function findStoreItem(itemId) {
  return storeItems.find((item) => item.id === itemId);
}

function renderStoreItems() {
  elements.storeItems.innerHTML = storeItems.map((item) => `
    <article class="store-card">
      <div class="meta-row">
        <span class="type-badge">${item.type}</span>
        <span class="rarity-badge">${item.rarity}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <strong class="price">${formatCurrency(item.price)}</strong>
      <button class="btn btn-primary full-width" type="button" data-add-to-cart="${item.id}">
        Adicionar ao carrinho
      </button>
    </article>
  `).join("");
}

function renderCart() {
  const cart = getCurrentCart();
  const total = cart.reduce((sum, itemId) => {
    const item = findStoreItem(itemId);
    return item ? sum + item.price : sum;
  }, 0);

  elements.cartCount.textContent = `${cart.length} ${cart.length === 1 ? "item" : "itens"}`;
  elements.cartTotal.textContent = formatCurrency(total);
  elements.checkoutButton.disabled = !loggedUser || cart.length === 0;

  if (!loggedUser) {
    elements.cartItems.innerHTML = '<p class="empty-state">Faça login para usar o carrinho.</p>';
    return;
  }

  if (cart.length === 0) {
    elements.cartItems.innerHTML = '<p class="empty-state">Seu carrinho está vazio.</p>';
    return;
  }

  elements.cartItems.innerHTML = cart.map((itemId, index) => {
    const item = findStoreItem(itemId);

    if (!item) {
      return "";
    }

    return `
      <div class="cart-line">
        <div>
          <strong>${item.name}</strong>
          <span>${formatCurrency(item.price)}</span>
        </div>
        <button class="small-button danger-button" type="button" data-remove-cart-index="${index}">
          Remover
        </button>
      </div>
    `;
  }).join("");
}

function renderInventory() {
  elements.inventoryItems.innerHTML = "";

  if (!loggedUser) {
    setMessage(elements.inventoryMessage, "Faça login para visualizar seu inventário.", "error");
    return;
  }

  const inventory = getCurrentInventory();

  if (inventory.length === 0) {
    setMessage(elements.inventoryMessage, "Seu inventário ainda não possui itens comprados.", "");
    return;
  }

  setMessage(elements.inventoryMessage, `${inventory.length} ${inventory.length === 1 ? "item salvo" : "itens salvos"} no inventário.`, "success");

  elements.inventoryItems.innerHTML = inventory.map((item) => {
    const purchasedAt = new Date(item.purchasedAt).toLocaleDateString("pt-BR");

    return `
      <article class="inventory-card">
        <div class="meta-row">
          <span class="type-badge">${item.type}</span>
          <span class="rarity-badge">${item.rarity}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>Preço:</strong> ${formatCurrency(item.price)}</p>
        <p><strong>Comprado em:</strong> ${purchasedAt}</p>
      </article>
    `;
  }).join("");
}

function renderQuestions() {
  if (!loggedUser) {
    elements.questionsList.innerHTML = '<p class="empty-state">Faça login para enviar e visualizar suas dúvidas.</p>';
    resetQuestionForm();
    return;
  }

  const questions = getCurrentQuestions();

  if (questions.length === 0) {
    elements.questionsList.innerHTML = '<p class="empty-state">Você ainda não enviou dúvidas.</p>';
    return;
  }

  elements.questionsList.innerHTML = questions.map((question) => {
    const createdAt = new Date(question.createdAt).toLocaleDateString("pt-BR");
    const updatedInfo = question.updatedAt
      ? `<p><strong>Atualizada em:</strong> ${new Date(question.updatedAt).toLocaleDateString("pt-BR")}</p>`
      : "";

    return `
      <article class="question-card">
        <div class="meta-row">
          <span class="type-badge">${escapeHtml(question.category)}</span>
          <span class="rarity-badge">Enviada em ${createdAt}</span>
        </div>
        <h3>${escapeHtml(question.title)}</h3>
        <p>${escapeHtml(question.description)}</p>
        ${updatedInfo}
        <div class="card-actions">
          <button class="small-button" type="button" data-edit-question="${question.id}">Editar</button>
          <button class="small-button danger-button" type="button" data-delete-question="${question.id}">Excluir</button>
        </div>
      </article>
    `;
  }).join("");
}

function handleAddToCart(itemId) {
  if (!loggedUser) {
    setMessage(elements.storeMessage, "Faça login antes de adicionar itens ao carrinho.", "error");
    return;
  }

  const item = findStoreItem(itemId);

  if (!item) {
    setMessage(elements.storeMessage, "Item não encontrado.", "error");
    return;
  }

  const cart = getCurrentCart();
  cart.push(item.id);
  saveCurrentCart(cart);
  renderCart();
  setMessage(elements.storeMessage, `${item.name} adicionado ao carrinho.`, "success");
}

function handleRemoveFromCart(index) {
  if (!loggedUser) {
    setMessage(elements.storeMessage, "Faça login para alterar o carrinho.", "error");
    return;
  }

  const cart = getCurrentCart();
  const removedItem = findStoreItem(cart[index]);

  cart.splice(index, 1);
  saveCurrentCart(cart);
  renderCart();

  const itemName = removedItem ? removedItem.name : "Item";
  setMessage(elements.storeMessage, `${itemName} removido do carrinho.`, "success");
}

function handleCheckout() {
  if (!loggedUser) {
    setMessage(elements.storeMessage, "Faça login para finalizar a compra.", "error");
    return;
  }

  const cart = getCurrentCart();

  if (cart.length === 0) {
    setMessage(elements.storeMessage, "Adicione pelo menos um item ao carrinho antes de finalizar.", "error");
    return;
  }

  const purchasedItems = cart
    .map((itemId, index) => {
      const item = findStoreItem(itemId);

      if (!item) {
        return null;
      }

      return {
        purchaseId: `purchase-${Date.now()}-${index}`,
        itemId: item.id,
        name: item.name,
        type: item.type,
        rarity: item.rarity,
        price: item.price,
        description: item.description,
        purchasedAt: new Date().toISOString()
      };
    })
    .filter(Boolean);

  const inventory = getCurrentInventory();
  saveCurrentInventory([...inventory, ...purchasedItems]);
  saveCurrentCart([]);
  renderCart();
  renderInventory();
  setMessage(elements.storeMessage, "Compra fictícia concluída. Os itens foram enviados para o inventário.", "success");
}

function resetQuestionForm() {
  elements.questionForm.reset();
  elements.questionEditId.value = "";
  elements.questionSubmitButton.textContent = "Enviar dúvida";
  elements.cancelQuestionEdit.classList.add("hidden");
}

function handleQuestionSubmit(event) {
  event.preventDefault();

  if (!loggedUser) {
    setMessage(elements.questionMessage, "Faça login para enviar dúvidas.", "error");
    return;
  }

  const title = elements.questionTitle.value.trim();
  const category = elements.questionCategory.value;
  const description = elements.questionDescription.value.trim();
  const editId = elements.questionEditId.value;

  if (!title || !category || !description) {
    setMessage(elements.questionMessage, "Preencha título, categoria e descrição.", "error");
    return;
  }

  const questions = getCurrentQuestions();

  if (editId) {
    const questionIndex = questions.findIndex((question) => question.id === editId);

    if (questionIndex === -1) {
      setMessage(elements.questionMessage, "Dúvida não encontrada para edição.", "error");
      return;
    }

    questions[questionIndex] = {
      ...questions[questionIndex],
      title,
      category,
      description,
      updatedAt: new Date().toISOString()
    };

    saveCurrentQuestions(questions);
    resetQuestionForm();
    renderQuestions();
    setMessage(elements.questionMessage, "Dúvida atualizada com sucesso.", "success");
    return;
  }

  questions.push({
    id: `question-${Date.now()}`,
    title,
    category,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: null
  });

  saveCurrentQuestions(questions);
  resetQuestionForm();
  renderQuestions();
  setMessage(elements.questionMessage, "Dúvida enviada com sucesso.", "success");
}

function handleEditQuestion(questionId) {
  if (!loggedUser) {
    setMessage(elements.questionMessage, "Faça login para editar dúvidas.", "error");
    return;
  }

  const question = getCurrentQuestions().find((item) => item.id === questionId);

  if (!question) {
    setMessage(elements.questionMessage, "Dúvida não encontrada.", "error");
    return;
  }

  elements.questionEditId.value = question.id;
  elements.questionTitle.value = question.title;
  elements.questionCategory.value = question.category;
  elements.questionDescription.value = question.description;
  elements.questionSubmitButton.textContent = "Salvar alteração";
  elements.cancelQuestionEdit.classList.remove("hidden");
  elements.questionForm.scrollIntoView({ behavior: "smooth", block: "center" });
  setMessage(elements.questionMessage, "Edite os campos e salve a alteração.", "");
}

function handleDeleteQuestion(questionId) {
  if (!loggedUser) {
    setMessage(elements.questionMessage, "Faça login para excluir dúvidas.", "error");
    return;
  }

  const filteredQuestions = getCurrentQuestions().filter((question) => question.id !== questionId);
  saveCurrentQuestions(filteredQuestions);

  if (elements.questionEditId.value === questionId) {
    resetQuestionForm();
  }

  renderQuestions();
  setMessage(elements.questionMessage, "Dúvida excluída com sucesso.", "success");
}

function initStore() {
  renderStoreItems();
  renderCart();
  renderInventory();

  elements.storeItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");

    if (button) {
      handleAddToCart(button.dataset.addToCart);
    }
  });

  elements.cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-cart-index]");

    if (button) {
      handleRemoveFromCart(Number(button.dataset.removeCartIndex));
    }
  });

  elements.checkoutButton.addEventListener("click", handleCheckout);
}

function initQuestions() {
  elements.questionForm.addEventListener("submit", handleQuestionSubmit);
  elements.cancelQuestionEdit.addEventListener("click", () => {
    resetQuestionForm();
    setMessage(elements.questionMessage, "Edição cancelada.", "");
  });

  elements.questionsList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-question]");
    const deleteButton = event.target.closest("[data-delete-question]");

    if (editButton) {
      handleEditQuestion(editButton.dataset.editQuestion);
    }

    if (deleteButton) {
      handleDeleteQuestion(deleteButton.dataset.deleteQuestion);
    }
  });

  renderQuestions();
}

function initAuth() {
  elements.registerForm.addEventListener("submit", handleRegister);
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.logoutButton.addEventListener("click", handleLogout);

  renderAuthState();
}

initAuth();
initStore();
initQuestions();
