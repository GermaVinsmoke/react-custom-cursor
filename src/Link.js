const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
  return (
    <img
      alt="images"
      onMouseOver={mouseOverEvent}
      onMouseOut={mouseOutEvent}
      src={src}
    />
  );
};

export default Link;
