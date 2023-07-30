import { useContext } from "react";
import NoticiasContext from "../context/noticiasProvider.jsx";

const useNoticias = () => {
  return useContext(NoticiasContext);
};

export default useNoticias;
