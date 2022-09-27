import React, { useEffect, useState } from "react";
import CreateItem from "../CreateItem/CreateItem";
import css from "./Search.module.css";
function Search({ handleSearch }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div className={css.container}>
      <input
        className={css.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <CreateItem query={query} />
    </div>
  );
}

export default Search;
