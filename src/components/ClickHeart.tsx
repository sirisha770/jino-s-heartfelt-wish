interface Props {
  x: number;
  y: number;
}

const ClickHeart = ({ x, y }: Props) => {
  return (
    <span
      className="fixed pointer-events-none z-50 text-rose-deep text-2xl"
      style={{
        left: x,
        top: y,
        animation: "pop-heart 1.2s ease-out forwards",
      }}
    >
      ❤
    </span>
  );
};

export default ClickHeart;
