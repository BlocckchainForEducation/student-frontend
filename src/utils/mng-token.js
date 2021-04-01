import axios from "axios";

let remember = true;

function setRemember(_remember) {
  remember = _remember;
}

function getRemember() {
  return remember;
}

function setSessionToken(token) {
  sessionStorage.setItem("token", "Bearer " + token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

function setLocalToken(token) {
  localStorage.setItem("token", "Bearer " + token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

function getToken() {
  if (remember) return localStorage.getItem("token");
  else return sessionStorage.getItem("token");
}

function clearToken() {
  axios.defaults.headers.common["Authorization"] = null;
  if (remember) {
    localStorage.removeItem("token");
  } else {
    sessionStorage.removeItem("token");
  }
}

export { setSessionToken, setLocalToken, getToken, clearToken, setRemember, getRemember };
