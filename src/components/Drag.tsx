import { useEffect, useState } from "react";
import Pictures from "./Pictures";
import Drop from "./Drop";
import { useDrop } from "react-dnd";
import { useDragLayer } from "react-dnd";

const objectList = [
  {
    id: 1,
    url: "https://assets3.thrillist.com/v1/image/2855068/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
  },
  {
    id: 2,
    url: "https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXILb0_Empu8EaOAdf5be68Ru57QF-megmbySo_3vo6T5AlNfvjRtrbTzu5yIUYEp5s6Q&usqp=CAU",
  },
];

function Drag() {
  const [board, setBoard] = useState<any>([]);
  const [droppedItem, setDroppedItem] = useState<any>();

  const [{ isOver }, drop]: any = useDrop<any>(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (item: any) => {
    setDroppedItem(item);
  };

  useEffect(() => {
    if (droppedItem) {
      if (board.some((obj: any) => obj.id === droppedItem.id)) {
        return;
      }
      const pictureList = objectList.filter(
        (pic) => droppedItem?.id === pic.id
      );
      setBoard((board: any) => [...board, pictureList[0]]);
      setDroppedItem(undefined);
    }
  }, [droppedItem, board]);

  const removeFromBoard = (id: number) => {
    const pictures = board.filter((pic: any) => id !== pic.id);
    setBoard([...pictures]);
    setDroppedItem(undefined);
  };

  return (
    <div>
      <div>
        {objectList.map((arr): any => {
          return <Pictures arr={arr} />;
        })}
      </div>
      <div className="drop-area" ref={drop}>
        {board?.map((image: any) => {
          return <Drop removeFromBoard={removeFromBoard} arr={image} />;
        })}
      </div>
    </div>
  );
}

export default Drag;
