import { useDrag } from "react-dnd";

function Pictures({
  arr,
  removeFromBoard,
}: {
  arr: any;
  removeFromBoard: (id: number) => void;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: arr.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      onClick={() => removeFromBoard(arr.id)}
      ref={drag}
      src={arr.url}
      alt=""
      style={{
        width: 150,
        margin: 10,
        border: isDragging ? "5px solid pink" : "0px",
      }}
    />
  );
}

export default Pictures;
