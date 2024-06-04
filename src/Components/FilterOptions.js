import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { deposit } from "../api/Money";

const FilterOptions = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState(``);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    onChange(type);
  };

  return (
    <div className=" w-[500px]  flex gap-3 items-center justify-center">
      <div className="font-semibold">Filter:</div>
      <div className="flex gap-1">
        <label>
          <input
            type="radio"
            value=""
            checked={selectedType === ``}
            onChange={() => handleTypeChange(``)}
          />
        </label>
        All
      </div>
      <div className="flex gap-1">
        <label>
          <input
            type="radio"
            value="deposit"
            checked={selectedType === `deposit`}
            onChange={() => handleTypeChange(`deposit`)}
          />
        </label>
        Deposit
      </div>
      <div className="flex gap-1">
        <label>
          <input
            className="gap-2"
            type="radio"
            value="withdraw"
            checked={selectedType === `withdraw`}
            onChange={() => handleTypeChange(`withdraw`)}
          />
        </label>
        Withdraw
      </div>
      <div className="flex gap-1">
        <label>
          <input
            type="radio"
            value="transfare"
            checked={selectedType === `transfare`}
            onChange={() => handleTypeChange(`transfare`)}
          />
        </label>
        Transfare
      </div>
    </div>
  );
};

export default FilterOptions;
