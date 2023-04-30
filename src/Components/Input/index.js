import React, { useContext, useState, useEffect } from "react";
import styles from "./Input.module.css";
import StarshipsContext from "../../Context/StarshipsContext";

const Input = () => {
  const { starshipsData, setStarshipsData } = useContext(StarshipsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = () => {
    const filteredData = starshipsData.filter(
      (starship) =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        starship.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStarshipsData(filteredData);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setStarshipsData(starshipsData);
    }
  }, [searchTerm, starshipsData, setStarshipsData]);

  return (
    <div className={styles.InputMain}>
      <div className={styles.MainInput}>
        <div className={styles.HeaderTitle}>Name / Model</div>
        <div>
          <input
            className={styles.HeaderInput}
            placeholder="Name / Model"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button className={styles.FilterButton} onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>
      <div className={styles.Seperator} />
    </div>
  );
};

export default Input;
