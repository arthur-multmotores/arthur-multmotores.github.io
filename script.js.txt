async function getTimestamp() {
  try {
    const response = await fetch('https://exquisite-swan-45ec74.netlify.app/.netlify/functions/timestamp');
    const data = await response.json();
    console.log(data.Data.timestamp); // Faça o que você quiser com o timestamp retornado
  } catch (error) {
    console.error('Erro ao obter timestamp:', error);
  }
}

getTimestamp();
