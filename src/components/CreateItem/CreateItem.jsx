import React, { useState } from "react";
import css from "./CreateItem.module.css";
import ItemCreationForm from "./Form/ItemCreationForm";

function CreateItem({ query }) {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <span className={css.container} onClick={() => setDisplay(!display)}>
        Add{query && <>: "{query}"</>}
      </span>
      {display && (
        <div className={css.overlay}>
          <ItemCreationForm query={query} setDisplay={setDisplay} />
        </div>
      )}
    </>
  );
}

export default CreateItem;
