export const serverFetch = (method, endpoint, params) => {
  const apiBaseUrl = "https://excelerate-api.herokuapp.com/";
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
