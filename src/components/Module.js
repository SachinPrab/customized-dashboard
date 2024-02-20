import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  MODULE: 'module',
};

const Module = ({ id, name, description, index, moveModule }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.MODULE, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.MODULE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Call the `moveModule` function to update state
      if (dragIndex !== hoverIndex) {
        moveModule(dragIndex, hoverIndex);
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }}>
      <h3>{name}</h3>
      <p>{description}</p>
      {/* Add module content here */}
    </div>
  );
};

export default Module;