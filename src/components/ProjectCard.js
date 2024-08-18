import { Button } from "@mui/material";
import ImageWithLoader from "./ImageWithLoader";

export const ProjectCard = ({ card }) => {
  let imageUrl = "";
  try {
    console.log(card.url);
    imageUrl = require(`../assets/projects/${
      card && card.url ? card.url : "star.png"
    }`);
  } catch (error) {
    console.log(error);
    imageUrl = require("../assets/images/ASTERIKS.png");
  }
  return (
    <div
      key={card.id}
      className="w-[100vw] h-[50vh] md:w-[100vw] overflow-hidden mx-2 md:mx-5 flex flex-col md:flex-row justify-evenly align-middle "
    >
      <ImageWithLoader src={imageUrl} className="w-full" />

      <div className="md:w-[60%] px-4  text-white text-xl flex flex-col items-left justify-evenly">
        <h1 className="text-3xl md:text-5xl p-2">{card.title}</h1>
        <p className="flex-wrap text-sm md:text-base p-2">{card.description}</p>
        <Button className="mx-4">Live</Button>
      </div>
    </div>
  );
};
