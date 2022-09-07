function Pictures({
  arr,
  removeFromBoard,
}: {
  arr: any;
  removeFromBoard: (id: number) => void;
}) {
  return (
    <img
      onClick={() => removeFromBoard(arr.id)}
      src={arr.url}
      alt=""
      style={{
        width: 150,
        margin: 10,
      }}
    />
  );
}

export default Pictures;
