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
    default:
      return state;
  }
};

const CategoryProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [params] = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "LOADING" });
      try {
        const categories = await getCategories();
        const projects = await getProjects("Web Development");
        dispatch({ type: "SET_CATEGORY", payload: categories });
        if (params.get("category") === null) {
          dispatch({ type: "SET_PROJECTS", payload: projects });
          dispatch({ type: "SET_CURRENT_PROJECT", payload: projects[0] });
          dispatch({
            type: "SET_CURRENT_CATEGORY",
            payload: "Web Development",
          });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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
