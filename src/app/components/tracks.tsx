"use client";
import { Box, Flex, Separator } from "@radix-ui/themes";
import {
  MailIcon,
  HeartIcon,
  LeafIcon,
  DollarSignIcon,
  SchoolIcon,
  Gamepad2Icon,
  CogIcon,
  TrophyIcon,
  MedalIcon,
} from "lucide-react";

const trackCards = [
  {
    title: "TRACK ONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <HeartIcon size={24} />,
    color: "bg-red-500/20 text-red-400 border-red-500", // Kept colors for visual separation
  },
  {
    title: "TRACK TWO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <LeafIcon size={24} />,
    color: "bg-green-500/20 text-green-400 border-green-500",
  },
  {
    title: "TRACK THREE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <DollarSignIcon size={24} />,
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
  },
  {
    title: "TRACK FOUR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <SchoolIcon size={24} />,
    color: "bg-blue-500/20 text-blue-400 border-blue-500",
  },
];

const extraAwards = [
  {
    title: "Grand Prize",
    description: "Awarded to the best project overall.",
    icon: (
      <TrophyIcon
        className="p-2 bg-yellow-500/20 text-yellow-400 border-yellow-500 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
  {
    title: "Most Innovative",
    description: "Awarded to the most creative or novel idea.",
    icon: (
      <CogIcon
        className="p-2 bg-purple-500/20 text-purple-400 border-purple-500 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
  {
    title: "Best Themed Project",
    description: "Awarded to the best project that fits the event theme.",
    icon: (
      <Gamepad2Icon
        className="p-2 bg-orange-500/20 text-orange-400 border-orange-500 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
];

const TrackCard = ({ title, description, icon, color }) => {
  return (
    <Flex
      direction="column"
      className="p-4 bg-primary text-foreground border border-secondary backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
    >
      <Flex
        align="center"
        gap="2"
        className="text-xl font-primary sm:text-2xl font-semibold"
      >
        <Box className={`border rounded-xl p-2 mr-2 ${color}`}>{icon}</Box>
        {title}
      </Flex>
      <p className="mt-2 text-[0.85rem] font-secondary sm:text-base">
        {description}
      </p>
    </Flex>
  );
};

const Tracks = () => {
  return (
    <Box
      id="tracks"
      className="overflow-hidden relative py-4 w-full border-y border-secondary bg-background"
    >
      <Flex
        gap="4"
        direction="column"
        className="relative text-foreground px-4 sm:px-8 py-8 z-10 sm:h-full mx-auto max-w-6xl"
      >
        <Flex direction="column" justify="center" className="col-span-2">
          <Flex
            direction="column"
            align="center"
            className="mb-4 sm:mb-8 font-primary text-3xl sm:text-5xl text-foreground font-extrabold gap-4"
          >
            <span className="font-extrabold w-min whitespace-nowrap text-accent text-sm border-2 border-accent rounded-lg p-2">
              TRACKS
            </span>
            <p>PRIZES & TRACKS</p>
          </Flex>
        </Flex>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trackCards.map((card, index) => (
            <TrackCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>

        <Separator className="mt-8" size="4" color="gray" />

        {/* Extra Awards Section */}
        <Flex align="center" justify="center" className="flex-col mt-2">
          <h2 className="text-3xl font-bold font-secondary text-foreground mb-6">
            EXTRA AWARDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraAwards.map((award, index) => (
              <Flex
                key={index}
                align="center"
                gap="4"
                className="bg-primary hover:scale-[1.01] transition-all flex-none border-secondary border text-foreground p-6 rounded-2xl shadow-md"
              >
                {award.icon}
                <Flex className="flex-col">
                  <h3 className="text-lg font-semibold font-primary">
                    {award.title}
                  </h3>
                  <p className="mt-2 font-secondary">{award.description}</p>
                </Flex>
              </Flex>
            ))}
            <Flex
              align="center"
              gap="4"
              className="bg-accent/20 hover:scale-[1.01] transition-all border-accent border text-foreground p-6 rounded-2xl shadow-md"
            >
              <MedalIcon
                className="p-2 bg-accent/20 text-accent border-accent border flex-none rounded-xl h-12 w-12"
                size={24}
              />
              <Flex className="flex-col">
                <a
                  href="#" // Generic link
                  className="text-lg hover:underline font-secondary font-semibold"
                >
                  Click here to view all challenges & prizes!
                </a>
              </Flex>
            </Flex>
          </div>
        </Flex>

        <Flex
          direction="column"
          className="whitespace-normal font-secondary mt-8 col-span-2"
        >
          <span className="text-foreground font-semibold">
            Want to collaborate with us on a track? Contact us at:{" "}
          </span>
          <p className="mt-2">
            <a
              href="mailto:sponsor@your-event.com"
              className="bg-accent/20 text-accent-foreground w-min gap-2 whitespace-nowrap flex items-center hover:bg-accent/30 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
            >
              <MailIcon size={24} className="text-accent" />
              sponsor@your-event.com
            </a>
          </p>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tracks;
