import React, { useState, useEffect, createFactory } from "react";
import calculatePacks from "../helperFunctions/calculatePacks";
import styles from "../styles/Home.module.css";
import Swal from "sweetalert2";

function Home() {
  const [numOfWidgets, setNumOfWidgets] = useState("");
  const [packSizes, setPackSizes] = useState([5000, 2000, 1000, 500, 250, 100]);
  const [result, setResult] = useState({});

  const sortPackSizes = () => {
    const sortedPacks = packSizes.sort((a, b) => b - a);
    setPackSizes(sortedPacks);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Package size added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleOrderChange = (event) => {
    setNumOfWidgets(event.target.value);
  };

  const handleAddPackSize = () => {
    const newPackSizes = [...packSizes, ""];
    setPackSizes(newPackSizes);
  };
  const handleUpdatePackSize = () => {
    const newPackSizes = [...packSizes, ""];
    setPackSizes(newPackSizes);
  };

  const handlePackSizeChange = (event, index) => {
    const newPackSizes = [...packSizes];
    newPackSizes[index] = event.target.value;
    setPackSizes(newPackSizes);
  };

  const handleRemovePackSize = (index) => {
    const newPackSizes = [...packSizes];
    newPackSizes.splice(index, 1);
    setPackSizes(newPackSizes);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Package size removed",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const packSizesAsNumbers = packSizes.map(Number);
    const result = calculatePacks(Number(numOfWidgets), packSizesAsNumbers);
    setResult(result);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Welcome to Wallys Widgets!</h1>
        <p>
          Complete and customizable packs, efficient orders, optimal solutions -
          Wally's Widgets delivers widgets your way.
        </p>
      </div>
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <label>
          How many widgets you need?
          <input
            className={styles.input}
            type="text"
            value={numOfWidgets}
            onChange={(event) => handleOrderChange(event)}
          />
        </label>
        {packSizes.map((packSize, index) => (
          <div key={index}>
            Pack size #{index + 1}:
            <input
              className={styles.input}
              type="text"
              value={packSize}
              onChange={(event) => handlePackSizeChange(event, index)}
            />
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => handleRemovePackSize(index)}
            >
              Remove
            </button>
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => handleRemovePackSize(index)}
            >
              update
            </button>
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <button
            className={styles.addButton}
            type="button"
            onClick={() => handleAddPackSize()}
          >
            New Pack size
          </button>
          <button
            className={styles.sortButton}
            type="button"
            onClick={() => sortPackSizes()}
          >
            Add
          </button>
        </div>

        <button className={styles.submitButton} type="submit">
          Calculate packs
        </button>
      </form>
      <div className={styles.resultContainer}>
        {result.length > 0 && (
          <p>
            You will receive the following packages:{" "}
            {result.map((pack, index) => (
              <span key={index}>
                {pack} units{index !== result.length - 1 && ","}{" "}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
