import { useDrag } from "react-dnd";

function Pictures({ arr }: { arr: any }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { ...arr },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
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
