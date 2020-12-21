// TODO: save remeber too! -> when getToken or ClearToken, only clear proper token
let remember;

function setRemember(_remember) {
  remember = _remember;
}

function setSessionToken(token) {
  sessionStorage.setItem("token", "Bearer " + token);
}

function setLocalToken(token) {
  localStorage.setItem("token", "Bearer " + token);
}

function getToken() {
  if (remember) return localStorage.getItem("token");
  else return sessionStorage.getItem("token");
}

function clearToken() {
  if (remember) {
    localStorage.removeItem("token");
  } else {
    sessionStorage.removeItem("token");
  }
}

export { setSessionToken, setLocalToken, getToken, clearToken, setRemember };
