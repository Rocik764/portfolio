import React from 'react';
import './TopCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const TopCards = ({title, img, link}) => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  // const [isOpen, setIsOpen] = useState(false);

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  // const hideModal = () => {
  //   setIsOpen(false);
  // };

  return(
    <animated.div className="img-fluid topCards-main card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <a href={link}>
        <img className="card-img-top" src={img} alt="some img"/>
        <div className="card-img-overlay d-flex flex-column justify-content-end text-center mx-0 px-0 py-0">
          <div className="topCards-shadow">
            <h4 className="topCards-title">{title}</h4>
          </div>
        </div>
      </a>
    </animated.div>
  );
}

export default TopCards