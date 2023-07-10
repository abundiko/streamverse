import AppButton from "../../components/AppButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const imageTop = useTransform(scrollY, [0, 500], [0, 200]);
  return (
    <div className="HeroSection relative h-[100vh] md:h-[85vh] overflow-hidden w-full bg-background-dark dark:bg-background-dark">
      <motion.img
        style={{
          opacity: imageOpacity,
          translateY: imageTop
        }}
        src="/assets/images/bg.jpg"
        alt=""
        className="absolute w-full h-full top-0 left-0"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-background-dark to-transparent " />
      <div className="relative w-full h-full  ">
        <div className="container mx-auto h-full text-text-light flex items-center justify-around">
          <div className="w-10/12 md:w-8/12 text-center h-fit">
            <h1 className="font-extrabold text-[60px] md:text-[4vw]">
              Lorem Ipsum dolor sit amet consectetur
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
              dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
              amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="flex justify-center mt-5">
              <AppButton text="Explore" icon={faPlay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
