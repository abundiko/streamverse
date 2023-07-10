import { motion, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line react/prop-types
const AppButton = ({ text, icon, onClick }) => {
  const animateHeight = useMotionValue("0%");
  return (
    <motion.button
      whileTap={{
        scale: 0.8
      }}
      onMouseEnter={() => animateHeight.set("20%")}
      onMouseLeave={() => animateHeight.set("0%")}
      onClick={onClick}
      className="max-h-full overflow-hidden drop-shadow-md px-8 AppButton relative rounded-[50px] py-5 bg-primary-dark dark:bg-primary-light"
    >
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end">
        {[1, 2, 3, 4, 5].map((item, index) =>
          <motion.div
            key={index}
            style={{
              height: animateHeight,
              opacity: `${item * 15}%`
            }}
            className="bg-black"
          />
        )}
      </div>
      <div className="relative  inline-flex justify-center items-center">
        <h2 className="font-bold text-md">
          {text}
        </h2>
        <div className="px-3" />
        <FontAwesomeIcon icon={icon} />
      </div>
    </motion.button>
  );
};

export default AppButton;
