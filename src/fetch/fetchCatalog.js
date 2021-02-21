const baseUrlApi =
  process.env.REACT_APP_BASE_URL_API || "'https://localhost:44313/api/v1/Catalog";
const responseToJson = (response) => response.json();

export default function newlifetripfetch(route) {
  return () => {
    return fetch(`${baseUrlApi}${route}`).then(responseToJson);
  };
}