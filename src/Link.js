import getImage from 'util/getImage';

const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
  return (
    <>
      {[...Array(4).keys()].map(i => (
        <a
          key={i}
          href="#!"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
        >
          Count {i}
        </a>
      ))}
    </>
  );
};

export default Link;

// <img
//   alt="images"
//   key={i}
//   onMouseOver={mouseOverEvent}
//   onMouseOut={mouseOutEvent}
//   src={getImage(i + 1)}
// />
