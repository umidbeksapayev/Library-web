const BASE_URL = ""
export async function fetchUser() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok){
    throw new Error("Failed to fetch users");
  }
  return response.json()
}

export async function createUser(user) {
  const response = await fetch (`${BASE_URL}/users`,{
    method :"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)
  });
  if (!response.ok){
    throw new Error("Failed to create user")
  }
  return response.json()
}