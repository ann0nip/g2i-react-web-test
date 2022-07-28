const API_URL = process.env.REACT_APP_API_URL;

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
