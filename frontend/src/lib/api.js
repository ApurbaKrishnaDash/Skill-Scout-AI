const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (
  endpoint,
  method = "GET",
  body = null,
  token = null,
) => {
  const url = `${API_URL}${endpoint}`;
  console.log("API_URL =", API_URL);
  console.log("FETCH URL =", url);
  console.log("TOKEN =", token);

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  console.log("RESPONSE STATUS =", response.status);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
