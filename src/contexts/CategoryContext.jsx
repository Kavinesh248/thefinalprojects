import { createContext, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories, getProjects } from "../services/apiCategory";

const CategoryContext = createContext();

const initialState = {
  categories: [],
  projects: [],
  currentCategoryName: "",
  currentProject: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SET_PROJECTS":
      return { ...state, projects: action.payload, isLoading: false };
    case "SET_CATEGORY":
      return { ...state, isLoading: false, categories: action.payload };
    case "SET_CURRENT_PROJECT":
      return { ...state, currentProject: action.payload };
    case "SET_CURRENT_CATEGORY":
      return { ...state, currentCategoryName: action.payload };
    case "SET_DATA":
      return {
        ...state,
        categories: action.payload.categories,
        projects: action.payload.projects,
        currentCategoryName: action.payload.currentCategory,
        currentProject: action.payload.projects[0],
        isLoading: false,
      };
    default:
      return state;
  }
};

const CategoryProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [params] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      try {
        const categories = await getCategories();
        const currentCategory = params.get("category") || "Machine Learning";
        const projects = await getProjects(currentCategory);

        dispatch({
          type: "SET_DATA",
          payload: { categories, projects, currentCategory },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <CategoryContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
