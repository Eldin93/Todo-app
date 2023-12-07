import React from "react";

const Content = ({ items, onDeleteItem }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item}
            <button className="deleteBtn" onClick={() => onDeleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
