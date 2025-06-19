import { useState } from "react";
import { BsChatFill, BsSendFill, BsSendSlashFill, BsX } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import { Input } from "@mui/material";
import handleChatRequest from "../utils/handleChatRequest";

function Chat() {
  const [openChat, setopenChat] = useState(false);

  const handleClick = () => {
    setopenChat(!openChat);
  };

  return (
    <section className="sticky md:fixed bottom-2 md:bottom-10 right-1 md:right-10 h-full md:h-min w-full md:w-min flex flex-col items-end">
      <AnimatePresence>
        {openChat && <ChatPane handleClose={handleClick} />}
      </AnimatePresence>
      <div
        className="cursor-pointer rounded-full bg-transparent text-[#D5FF2F] p-4 text-5xl w-min h-min hover:scale-125 transition-transform ease-in-out"
        onClick={handleClick}
      >
        <BsChatFill />
      </div>
    </section>
  );
}

const getGreeting = () => {
  const currentHour = new Date().getHours(); // Get the current hour based on the user's time zone

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good afternoon!";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good evening!";
  } else {
    return "Good night!";
  }
};

const ChatPane = ({ handleClose }) => {
  const [query, setQuery] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [messages, setMessages] = useState([
    { text: `${getGreeting()}  How can I help you?`, sender: "bot" },
  ]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    if (query.trim() === "") return;

    // Add user query to chat log
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: query, sender: "user" },
    ]);

    // Clear the input and simulate bot response
    setQuery("");
    setWaiting(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Thinking...", sender: "bot" },
    ]);

    var aiResp = await handleChatRequest(query);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: aiResp, sender: "bot" },
    ]);
    setWaiting(false);
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.text !== "Thinking...")
    );
  };

  return (
    <motion.div
      initial={{ scale: 0, x: "50%", y: "50%", opacity: 0.5 }}
      animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
      exit={{
        scale: 0.1,
        x: "50%",
        y: "50%",
        opacity: 0,
        animationDuration: 100,
      }}
      className="w-4/5 md:w-[50vw] md:max-w-xl h-[70vh] p-6 bg-gray-900 text-gray-300 mr-10 rounded-2xl"
    >
      <div
        className="text-2xl md:text-3xl absolute top-0 right-0 m-6 hover:text-red-700 text-red-500 cursor-pointer"
        onClick={handleClose}
      >
        <BsX />
      </div>
      <h1 className="font-HNbold text-base md:text-xl m-2 underline underline-offset-8">
        Virtual Assistant
      </h1>
      <div className="flex flex-col gap-3 overflow-y-auto h-[55vh] pb-16">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.sender}
          />
        ))}
        {waiting && (
          <div className="blinking-bulb text-base md:text-xl mx-10">💡</div>
        )}
      </div>
      <div className="relative w-full flex flex-row items-center bottom-2 bg-slate-700 rounded-md px-5 ">
        <Input
          disabled={waiting}
          type="search"
          placeholder={
            waiting ? "Waiting for Response..." : "Type to Chat with AI..."
          }
          value={query}
          onChange={handleChange}
          style={{
            minWidth: "90%",
            borderRadius: "10px",
            padding: "0.3rem",
            color: "#dddddd",
          }}
        />
        {waiting ? (
          <BsSendSlashFill className="text-lg m-3 hover:scale-125 text-red-700 transition-transform min-w-min" />
        ) : (
          <BsSendFill
            className="text-lg m-3 hover:scale-125 text-green-500 transition-transform min-w-min"
            onClick={handleSubmit}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Chat;
