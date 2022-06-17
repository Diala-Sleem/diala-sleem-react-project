import { useTypewriter, Cursor } from "react-simple-typewriter";

const CustomSimpleTypewriter = () => {
  const { text } = useTypewriter({
    words: [
      "Enthusiastic Dev 🤓",
      "Full Stack Developer❓",
      "Graphic Designer ✔️",
    ],
    loop: true,
    typeSpeed: 100,
    cursorStyle: "|",
  });
  return (
    <>
      <span>{text}</span>
      <Cursor />
      
    </>
  );
};

export default CustomSimpleTypewriter;
