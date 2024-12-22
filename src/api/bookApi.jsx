const BASE_URL = ""

// Kitoblar ro'yxatini olish

export async function fetchBooks() {
  const response = await fetch (BASE_URL);
  if (!response){
    throw new Error("Failed to fetch books");
  }
  return response.json()
}

// Kitob qo'shish 

export async function createBook(book) {
  const response = await fetch(BASE_URL,{
    method:"Post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(book)
  });
  if(!response.ok){
    throw new Error("Failed to create book");
  }
  return response.json()
}