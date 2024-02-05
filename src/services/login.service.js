export const fetchLogin = async (payload) => {
  const response = await fetch("http://localhost:7000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};
