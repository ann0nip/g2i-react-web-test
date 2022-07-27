const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

const handleErrors = (response) => {
  throw Error(response.statusText);
};

export async function getQuestionsService() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    handleErrors(response);
  }
  return await response.json();
}
