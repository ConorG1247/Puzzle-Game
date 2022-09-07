import { useState } from "react";
import Pictures from "./Pictures";
import { useDrop } from "react-dnd";

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

  const [{ isOver }, drop]: any = useDrop<any>(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id: any) => {
    const dupeCheck = board.map((obj: any) => {
      console.log(obj.id, id);
      if (obj.id === id) {
        return true;
      }
      return false;
    });

    console.log(dupeCheck);

    const pictureList = objectList.filter((pic) => id === pic.id);
    console.log(pictureList);

    setBoard((board: any) => [...board, pictureList[0]]);
  };

  const removeFromBoard = (id: number) => {
    const pictures = board.filter((pic: any) => id !== pic.id);
    setBoard([...pictures]);
  };

  return (
    <div>
      <div>
        {objectList.map((arr): any => {
          return <Pictures removeFromBoard={removeFromBoard} arr={arr} />;
        })}
      </div>
      <div className="drop-area" ref={drop}>
        {board.map((image: any) => {
          return <Pictures removeFromBoard={removeFromBoard} arr={image} />;
        })}
      </div>
    </div>
  );
}

export default Drag;
