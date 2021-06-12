import { useEffect, useRef } from 'react';
import Link from './Link';
import './App.css';
import getImage from 'util/getImage';

const Cursor = () => {
  const delay = 18;
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const list = useRef(null);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    // console.log(endX);
    // console.log(endY);
    // console.log(_x);
    // console.log(_y);
    // console.log("-----");

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    // console.log("togglecursor visible");
    // console.log(dot.current);
    // console.log(dotOutline.current);
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    // console.log("toggle size");
    // console.log(dot.current);
    // console.log(dotOutline.current);
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  function coordinate(x, y, timestamp) {
    this.x = x;
    this.y = y;
    this.timestamp = timestamp;
  }

  const coordinates = [];
  const x = [];
  const y = [];
  const timestamps = [];

  const animateDotOutline = timestamp => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    // console.log(endX);
    // console.log(endY);
    // console.log(_x);
    // console.log(_y);
    // console.log('-----');

    coordinates.push(new coordinate(_x.current, _y.current, timestamp));
    x.push(_x.current);
    // y.push(_y.current);
    // timestamps.push(timestamp);

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    // if (
    //   Math.floor(_x.current) !== Math.floor(endX.current) &&
    //   Math.ceil(_x.current) !== Math.ceil(endX.current)
    // )
    requestRef.current = requestAnimationFrame(animateDotOutline);
    // else if (
    //   Math.floor(_x.current) === Math.floor(endX.current) ||
    //   Math.ceil(_x.current) === Math.ceil(_x.current)
    // ) {
    // console.table(coordinates);
    // console.log(x);
    // console.log(y);
    // console.log(timestamps);
    // cancelAnimationFrame(requestRef.current);
    // }
  };

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>

      {/* <div ref={list} className="links-container">
        {[...Array(4).keys()].map(i => (
          <Link
            key={i}
            src={getImage(i + 1)}
            mouseOverEvent={mouseOverEvent}
            mouseOutEvent={mouseOutEvent}
          />
        ))}
      </div> */}
    </>
  );
};

export default Cursor;
