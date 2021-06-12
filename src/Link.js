const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
  return (
    <>
      {/* {[...Array(15).keys()].map(i => (
        <a
          key={i}
          href="#!"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
        >
          Count {i}
        </a>
      ))} */}
      <img src={src} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} />
    </>
  );
};

export default Link;
