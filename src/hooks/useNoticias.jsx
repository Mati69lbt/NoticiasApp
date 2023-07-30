import { useContext } from "react";
import NewsContext from "../context/NewsProvider.jsx";

const useNoticias = () => {
  return useContext(NewsContext);
};

export default useNoticias;
