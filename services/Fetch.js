export const serverFetch = (email, password) => {
  const apiBaseUrl = "https://excelerate-api.herokuapp.com/";
  return fetch(apiBaseUrl + 'auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  .then((response) => response.json());
  // .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text))  // then log it out
}
