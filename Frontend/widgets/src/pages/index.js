import React, { useState } from "react";
import calculatePacks from "../helperFunctions/calculatePacks";
import styles from "../styles/Home.module.css";
import Swal from "sweetalert2";
import WidgetOrderForm from "../Components/WidgetOrderForm/WidgetOrderForm";

function Home() {
  const [numOfWidgets, setNumOfWidgets] = useState("");
  const [packSizes, setPackSizes] = useState([5000, 2000, 1000, 500, 250]);
  const [result, setResult] = useState({});

  const handleOrderChange = (event) => {
    setNumOfWidgets(event.target.value);
  };

  const handleAddPackSize = () => {
    const newPackSizes = [...packSizes, ""];
    setPackSizes(newPackSizes);
  };

  const handleUpdatePackSize = (event, index) => {
    const newValue = Number(
      event.target.parentElement.querySelector("input").value
    );

    if (isNaN(newValue) || packSizes.includes(newValue)) {
      // Alert user that value already exists
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your input is invalid or this package size already exists",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let newPackSizes = [...packSizes];
      newPackSizes[index] = newValue;

      // Sort newPackSizes
      newPackSizes = [...newPackSizes].sort((a, b) => b - a);
      setPackSizes(newPackSizes);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Package size added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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

    const order = Number(
      event.target.parentElement.querySelector("input").value
    );

    if (isNaN(order) || order <= 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid input",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const result = calculatePacks(Number(numOfWidgets), packSizes);
      setResult(result);
    }
  };

  return (
    <div className={styles.page} data-testid="home">
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Welcome to Wallys Widgets!</h1>
          <p>
            Complete and customizable packs, efficient orders, optimal solutions
            - Wally's Widgets delivers widgets your way.
          </p>
        </div>
        <WidgetOrderForm
          numOfWidgets={numOfWidgets}
          handleOrderChange={handleOrderChange}
          handleSubmit={handleSubmit}
          packSizes={packSizes}
          handleAddPackSize={handleAddPackSize}
          handleRemovePackSize={handleRemovePackSize}
          handleUpdatePackSize={handleUpdatePackSize}
        />
        <div className={styles.resultContainer}>
          {result.length > 0 && (
            <p>
              You will receive the following package(s):{" "}
              {result.map((pack, index) => (
                <span key={index}>
                  {pack} units{index !== result.length - 1 && ","}{" "}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
