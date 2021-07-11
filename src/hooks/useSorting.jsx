import React, { useState } from "react";

export const useSorting = () => {
  const [sortable, setSortable] = useState();
  const [orderByByName, setOrderByName] = useState(false);

  const setSortableData = (data) => setSortable([...data]);

  const startSortingByName = (key) => {
    setOrderByName(!orderByByName);
    return sortable.sort(function (val1, val2) {
      var nameA = val1[key].toUpperCase();
      var nameB = val2[key].toUpperCase();
      if (orderByByName ? nameA < nameB : nameA > nameB) {
        return -1;
      }
      if (orderByByName ? nameA < nameB : nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };

  return { startSortingByName, setSortableData };
};

export default useSorting;
