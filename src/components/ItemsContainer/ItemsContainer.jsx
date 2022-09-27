import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

function ItemsContainer({ itemsList, pageNumber }) {
  const [list, setList] = useState(itemsList.slice(0, pageNumber));

  useEffect(() => {
    setList(itemsList.slice(0, pageNumber));
  }, [pageNumber, itemsList]);

  return (
    <div>
      {list.map((e) => {
        return (
          <Item
            key={e.id}
            name={e.name}
            socialReason={e.socialReason}
            nit={e.nit}
            phone={e.phone}
            code={e.code}
          />
        );
      })}
    </div>
  );
}

export default ItemsContainer;
