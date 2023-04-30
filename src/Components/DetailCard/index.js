import React, { useContext } from "react";
import styles from "./DetailCard.module.css";
import StarshipsContext from "../../Context/StarshipsContext";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../Asset/BackArrow.svg";
import Error from "../Error";
import StarshipsPng from "../../Asset/StarshipsPng.png";

const DetailCard = () => {
  const { detailStarships } = useContext(StarshipsContext);
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles.BackButton} onClick={() => navigate(-1)}>
        <img src={BackArrow} alt="Back Arrow" />
      </button>
      {detailStarships ? (
        <div className={styles.DetailMain}>
          <div className={styles.Card}>
            <img
              className={styles.Starships}
              src={StarshipsPng}
              alt="StarShips"
            />
            <span className={styles.CardBottom}>
              <div className={styles.Name}>{detailStarships.name}</div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Model:</span>{" "}
                {detailStarships.model}
              </div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Hyperdrive Rating:</span>{" "}
                {detailStarships.hyperdrive_rating}
              </div>{" "}
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Passengers:</span>{" "}
                {detailStarships.passengers}
              </div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>
                  Max Atmosphering Speed:
                </span>{" "}
                {detailStarships.max_atmosphering_speed}
              </div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Manufacturer:</span>{" "}
                {detailStarships.manufacturer}
              </div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Crew:</span>{" "}
                {detailStarships.crew}
              </div>
              <div className={styles.Title}>
                {" "}
                <span className={styles.Name}>Cargo Capacity:</span>{" "}
                {detailStarships.cargo_capacity}
              </div>
            </span>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default DetailCard;
