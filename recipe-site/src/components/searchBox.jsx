import { breakfastArray } from "../data/breakfastData";
import { recipeArray } from "../data/homeData";
import { useMemo, useState } from "react";

export const SearchBox = ({ search, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search.."
        value={search}
      ></input>
      <button type="submit">
        <i class="search-icon"></i>
      </button>
    </div>
  );
};
