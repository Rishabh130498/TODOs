import React from "react";
import "./ListItems.css";
import FlipMove from "react-flip-move";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems = ({ items, deleteItem, setUpdate }) => {
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            key={item.key}
            value={item.text}
            onChange={(e) => setUpdate(e.target.value, item.key)}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => deleteItem(item.key)}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
