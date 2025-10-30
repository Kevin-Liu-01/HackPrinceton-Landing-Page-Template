"use client";
import { Box, Flex } from "@radix-ui/themes";
import { ChevronDown, MessageCircleQuestionIcon } from "lucide-react";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="border-b p-2 font-averia border-secondary">
      <button
        className="w-full rounded-xl flex justify-between hover:bg-secondary/50 items-center p-4 text-left text-lg font-medium text-foreground focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex align="center" gap="4">
          <MessageCircleQuestionIcon size={24} className="text-accent" />
          {question}
        </Flex>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <Box
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="px-4 pb-4 mt-4 text-foreground/80">{answer}</p>
      </Box>
    </Box>
  );
};

// FAQ Data
const Faq = () => {
  const faqData = [
    {
      question: "What is this event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "When is the event?",
      answer:
        "The event will take place from [Start Date] to [End Date]. We'll have 36 hours of hacking, events, speakers, social events, and more!",
    },
    {
      question: "Who can attend?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Why should I come to this event?",
      answer:
        "Beyond the learning opportunities and mentorship workshops, this is also a great place to meet other people who are just as passionate and enthusiastic as you are. Not to mention, we’ll also have awesome swag, prizes, and a few other surprises!",
    },
    {
      question: "Is this event in-person?",
      answer:
        "This event will be an entirely in-person experience for all attendees this year!",
    },
    {
      question: "Do I need a team to participate?",
      answer:
        "While teams are not required in order to participate, it’s a great way to meet new people and create something together. Teams may have up to 4 members, and you will have a chance to meet other people at our Team Formation events!",
    },
    {
      question: "Do I need to pay to participate?",
      answer:
        "Not at all! There is absolutely no cost for applying or participating in this event. We want to make this event as accessible as possible to all those interested so make sure you apply!",
    },
  ];

  return (
    <Flex
      id="faq"
      gap="4"
      align="center"
      className="flex-col relative py-8 text-foreground h-full overflow-clip w-full bg-background"
    >
      <Flex
        direction="column"
        justify="center"
        className="px-4 sm:px-8 py-4 z-10 max-w-6xl mx-auto"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl font-primary text-center sm:text-5xl font-extrabold gap-4"
        >
          <span className="font-extrabold w-min whitespace-nowrap text-accent text-sm border-2 border-accent rounded-lg p-2">
            FAQ
          </span>
          <p className="text-foreground">FREQUENTLY ASKED QUESTIONS</p>
        </Flex>
        <Flex
          direction="column"
          className="bg-primary/50 overflow-hidden rounded-xl backdrop-blur-sm"
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Faq;
