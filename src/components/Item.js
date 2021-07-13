

export async function getData() {
  const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=vinostintos");
  const data = await response.json();
return data.results;
} 