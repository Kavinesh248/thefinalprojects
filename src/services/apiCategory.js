const BASE_URL = "https://admin.thefinalprojects.com/api/";

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getProjects = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}projects?category=${query}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
