const apiBaseUrl = "https://excelerate-api.herokuapp.com/";

export const serverFetch = (method, endpoint, params) => {
  return fetch(apiBaseUrl + endpoint, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
  .then((response) => response.json());
  // .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text))  // then log it out
}


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
  // .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text));  // then log it out
}
