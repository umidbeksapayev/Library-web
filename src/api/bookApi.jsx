const BASE_URL = "http://localhost:8080/books"

// Kitoblar ro'yxatini olish

export async function fetchBooks() {
  try{
    const response = await fetch (BASE_URL);
    if (!response.ok){
      throw new Error("Failed to fetch books");
    }
    return await response.json();
    
  } catch(error){
    console.error("Kitobda olishda xatolik:", error);
    
  }
  console.log( await fetchBooks());
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
  return await response.json()
}