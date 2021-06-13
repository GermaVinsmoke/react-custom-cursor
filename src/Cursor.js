import Link from 'Link';
import { useRef } from 'react';
import getImage from 'util/getImage';
import './App.css';

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const list = useRef(null);

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>

      <div ref={list} className="links-container">
        {[...Array(4).keys()].map(i => (
          <Link key={i} src={getImage(i + 1)} />
        ))}
      </div>
    </>
  );
};

export default Cursor;
