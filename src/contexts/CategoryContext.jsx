import { createContext, useEffect, useState } from "react";

const BASE_URL = "https://admin.thefinalprojects.com/projects/";

const CategoryContext = createContext();

const CategoryProvider = function ({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  });

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// const useCategory = () => {
//   const context = useContext(CategoryContext);
//   if (!context) {
//     throw new Error("useCategory must be used within a CategoryProvider");
//   }
//   return context;
// };

export { CategoryProvider };
