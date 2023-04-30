import React, { useContext, useEffect, useState } from "react";
import styles from "./Main.module.css";
import StarshipsContext from "../../Context/StarshipsContext";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import StarshipsPng from "../../Asset/StarshipsPng.png";
import Input from "../Input";

const Main = () => {
  const { starshipsData, PageCount, setDetailStarships } =
    useContext(StarshipsContext);
  const [filteredData, setFilteredData] = useState(starshipsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredResults = starshipsData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.model.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredResults);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(starshipsData);
    }
  }, [starshipsData, searchTerm]);

  const detailItem = (item) => {
    setDetailStarships(item);
  };

  return (
    <div className={styles.Main}>
      <Input
        handleFilter={handleFilter}
        searchTerm={searchTerm}
        onInputChange={handleInputChange}
      />
      <div className={styles.mainContainer}>
        {filteredData ? (
          filteredData.map((item) => (
            <Link
              key={item.id}
              className={styles.linkText}
              to={`/starships/${item.name}`}
            >
              <div onClick={(e) => detailItem(item)} className={styles.Card}>
                <img src={StarshipsPng} alt="Starships" />
                <div className={styles.Name}>{item.name && item.name}</div>
                <div className={styles.Title}>
                  {" "}
                  <span className={styles.Name}>Model:</span> {item.model}
                </div>
                <div className={styles.Title}>
                  {" "}
                  <span className={styles.Name}>Hyperdrive Rating:</span>{" "}
                  {item.hyperdrive_rating}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <button
        className={styles.UploadMore}
        disabled={PageCount > 3 ? true : false}
        onClick={() => PageCount()}
      >
        Daha Fazla Yükle
      </button>
    </div>
  );
};

export default Main;
