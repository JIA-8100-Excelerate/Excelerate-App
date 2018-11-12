// Server methods. Uses Fetch API for HTTP GET, POST, PUT, DELETE.

const apiBaseUrl = "https://excelerate-api.herokuapp.com/"; // url of the server

export const serverGet = (endpoint, token) => {
  return fetch(apiBaseUrl + endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
  .then((response) => response.json());
}

export const serverPost = (endpoint, params, token) => {
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = token;
  }
  return fetch(apiBaseUrl + endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params)
  })
  .then((response) => response.json());
}

export const serverPut = (endpoint, params, token) => {
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = token;
  }
  return fetch(apiBaseUrl + endpoint, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(params)
  })
}

export const serverDelete = (endpoint, token) => {
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = token;
  }
  return fetch(apiBaseUrl + endpoint, {
    method: 'DELETE',
    headers: headers,
  })
}
