import {
  motion,
  useTransform,
  useScroll,
  useInView,
  spring,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Wave from "../assets/images/Waves_top.svg";
import Circles from "../assets/images/circles.svg";
import { cards } from "../data/ProjectList";
import { ProjectCard } from "./ProjectCard";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.8], ["0%", "-8000%"]),
    {
      stiffness: 20,
      bounce: 1500,
    }
  );

  return (
    <motion.div
      animate="tween"
      id="projects"
      ref={targetRef}
      className="h-[400vw] bg-black w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black w-full">
        <motion.div
          style={{ x }}
          className="flex flex-col content-evenly h-[75%] mt-10"
        >
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: -50 }}
            transition={{ duration: 1 }}
            className="bg-repeat-x h-24 w-full bg-slate-200 "
            style={{
              backgroundImage: `url(${Wave})`,
              backgroundSize: "contain",
              zIndex: 5,
            }}
          />
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: -50 }}
            transition={{ duration: 1 }}
            className="bg-repeat-x h-32 w-full"
            style={{
              backgroundImage: `url(${Circles})`,
              backgroundSize: "contain",
              zIndex: 4,
            }}
          />
          <div className="flex flex-row items-center">
            <div className="w-[100vw] font-semibold text-7xl text-center text-white">
              Projects
            </div>
            {cards.map((card) => (
              <ProjectCard card={card} key={card.id} />
            ))}
          </div>
          <motion.div
            initial={{ translateY: -300 }}
            whileInView={{ translateY: 50 }}
            transition={{ duration: 1 }}
            className="bg-repeat-x h-32 w-full"
            style={{
              backgroundImage: `url(${Circles})`,
              backgroundSize: "contain",
              zIndex: 5,
            }}
          />
          <motion.div
            initial={{ translateY: -300 }}
            whileInView={{ translateY: 50 }}
            transition={{ duration: 1 }}
            className="bg-repeat-x h-24 w-full bg-slate-200"
            style={{
              backgroundImage: `url(${Wave})`,
              backgroundSize: "contain",
              zIndex: 4,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HorizontalScrollCarousel;
