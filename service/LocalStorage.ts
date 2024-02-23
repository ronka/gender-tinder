// LocalStorageService.js

// Function to get data from local storage
export function getDataFromLocalStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error getting data from local storage:", error);
    return null;
  }
}

export function setDataInLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting data in local storage:", error);
  }
}
