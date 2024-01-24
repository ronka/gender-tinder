// LocalStorageService.js

// Function to get data from local storage
export const getDataFromLocalStorage = (key: string) => {
	try {
	  const item = localStorage.getItem(key);
	  return item ? JSON.parse(item) : null;
	} catch (error) {
	  console.error('Error getting data from local storage:', error);
	  return null;
	}
  };
  
  // Function to set data in local storage
  export const setDataInLocalStorage = (key:string, value: {highestScore: number}) => {
	try {
	  localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
	  console.error('Error setting data in local storage:', error);
	}
  };
  