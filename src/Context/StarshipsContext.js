import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [detailStarships, setDetailStarships] = useState();
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");

  const PageCount = () => {
    page < 4 ? setPage(page + 1) : toast.success("Tüm verilere ulaştınız.");
  };

  useEffect(() => {
    const getStarships = async () => {
      try {
        const { data } = await axios.get(
          `https://swapi.dev/api/starships/?page=${page}`
        );
        setStarshipsData((prevState) => {
          if (Array.isArray(prevState)) {
            return [...prevState, ...data.results];
          } else {
            return [prevState, ...data.results];
          }
        });
      } catch {
        toast.error("Veri alinirken bir hata oluştu");
      }
    };
    getStarships();
  }, [page]);

  console.log(detailStarships);

  // Filtreleme işlemi için fonksiyon
  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    const filteredStarshipsData = starshipsData.filter(
      (starship) =>
        starship.name.toLowerCase().includes(value.toLowerCase()) ||
        starship.model.toLowerCase().includes(value.toLowerCase())
    );
    setStarshipsData(filteredStarshipsData);
  };

  const values = {
    starshipsData,
    PageCount,
    page,
    detailStarships,
    setDetailStarships,
    setStarshipsData,
    filterValue,
    handleFilter,
  };

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};

export default StarshipsContext;
