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
    imageUrl = require("../assets/images/ASTERIKS.png"); // default image
  }
  return (
    <div
      key={card.id}
      className="h-[60vh] w-[100vw] overflow-hidden mx-5 flex flex-row justify-evenly align-middle "
    >
      <ImageWithLoader src={imageUrl} />

      <div className="w-[60%] px-4  text-white text-xl flex flex-col items-left justify-evenly">
        <h1 className=" text-5xl">{card.title}</h1>
        <p className="flex-wrap ">
          loremVelit commodo laboris et proident.Adipisicing voluptate
          incididunt occaecat dolor aute anim consectetur eiusmod nostrud sit
          cupidatat adipisicing nulla in. Reprehenderit do laboris consectetur
          aliquip non pariatur laborum adipisicing minim aliqua ut officia
          voluptate laboris. In fugiat reprehenderit proident nisi cupidatat
          Lorem pariatur reprehenderit adipisicing ullamco qui ipsum est. Amet
          do eu cillum consectetur pariatur ullamco dolor officia non ea commodo
          amet tempor. Laboris aliqua elit quis enim sint magna sint.
        </p>
        <Button className="mx-4">Live</Button>
      </div>
    </div>
  );
};
