"use strict";

const storageKeys = {
  users: "infernalDungeon_users",
  loggedUser: "infernalDungeon_loggedUser"
};

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
  loginMessage: document.querySelector("#loginMessage")
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

function initAuth() {
  elements.registerForm.addEventListener("submit", handleRegister);
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.logoutButton.addEventListener("click", handleLogout);

  renderAuthState();
}

initAuth();
