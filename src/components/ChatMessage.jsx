import { BsFillDropletFill } from "react-icons/bs";

const ChatMessage = ({ text, sender }) => {
  return (
    <div
      className={`relative top-2 flex my-2
        ${sender === "bot" ? " flex-row" : " flex-row-reverse"}`}
    >
      <div
        className={`flex text-2xl  ${
          sender === "bot"
            ? "text-green-500"
            : "text-white transform scale-x-[-1]"
        }`}
      >
        <BsFillDropletFill />
      </div>
      <div className="bg-gray-700 p-4 rounded-xl flex max-w-[80%] md:max-w-[70%] text-sm md:text-base">
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
