import React from "react";
import styles from "./Form.module.css";

function WidgetOrderForm({
  numOfWidgets,
  handleOrderChange,
  handleSubmit,
  packSizes,
  handleAddPackSize,
  handleRemovePackSize,
  handleUpdatePackSize,
}) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        How many widgets you need?
        <input
          className={styles.input}
          type="text"
          value={numOfWidgets}
          onChange={handleOrderChange}
        />
        <button className={styles.submitButton} type="submit">
          Calculate order
        </button>
      </label>
      {packSizes.map((packSize, index) => (
        <div className={styles.opt} key={packSize}>
          Pack size #{index + 1}:
          <input className={styles.input} type="text" defaultValue={packSize} />
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
            onClick={(event) => handleUpdatePackSize(event, index)}
          >
            update
          </button>
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          type="button"
          onClick={handleAddPackSize}
        >
          New Pack size
        </button>
      </div>
    </form>
  );
}

export default WidgetOrderForm;
