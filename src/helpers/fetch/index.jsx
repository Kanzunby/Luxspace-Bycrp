export default function fetchData({
  url,
  method = "GET",
  host = "https://f79c594c-e647-4c6a-94b4-b463a417246c.mock.pstmn.io",
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  }).then(async (response) => {
    const statusHasResponse = [200, 404];
    const jsonResponse = statusHasResponse.includes(response.status)
      ? await response.json()
      : response;
    if (response.ok) return jsonResponse;

    throw new Error(JSON.stringify(jsonResponse));
  });
}
