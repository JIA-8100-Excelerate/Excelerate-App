const apiBaseUrl = "https://excelerate-api.herokuapp.com/";

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

  // .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text))  // then log it out
