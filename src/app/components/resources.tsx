"use client";
import { Box, Flex } from "@radix-ui/themes";
import { BookMarkedIcon } from "lucide-react";

const Resources = () => {
  return (
    <Flex
      id="resources"
      gap="4"
      align="center"
      className="relative flex-col font-averia text-foreground h-full overflow-clip w-full bg-primary"
    >
      <Flex
        direction="column"
        justify="center"
        className="px-4 py-12 z-10 max-w-6xl mx-auto w-full"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl sm:text-5xl font-primary text-foreground font-extrabold gap-4"
        >
          <span className="font-extrabold w-min whitespace-nowrap text-sm border-2 border-accent text-accent rounded-xl p-2">
            ADDITIONAL INFO
          </span>
          <p>RESOURCES</p>
        </Flex>

        <a
          href="#"
          className="p-4 bg-secondary font-secondary border border-accent backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
        >
          <Flex align="center" gap="4" className="text-2xl font-semibold">
            <Box className="border rounded-xl p-2 bg-accent text-accent-foreground border-accent">
              {" "}
              <BookMarkedIcon size={24} />{" "}
            </Box>
            <span className="font-primary">Code of Conduct</span>
          </Flex>
          <p className="mt-2">
            {`Please refer to our Code of Conduct for all standards on how
            to build an inclusive hacking environment.`}
          </p>
        </a>

        {/* Replaced iFrame with a Google Form Skeleton */}
        <Box className="mt-8 font-secondary bg-primary border border-secondary rounded-3xl text-left shadow-2xl shadow-accent/20 overflow-hidden">
          {/* Form Header */}
          <div className="w-full h-3 bg-accent rounded-t-2xl"></div>

          <div className="p-6 sm:p-8">
            {/* Title and Description */}
            <h3 className="text-3xl font-primary font-semibold mb-2 text-foreground">
              Feedback Form
            </h3>
            <p className="mb-8 text-foreground/70">
              Let us know what you thought of the event! Embed a Google Form
              (through iFrame) here.
            </p>

            {/* Skeleton Question 1 (Text Input) */}
            <div className="mb-6">
              {/* Question Title */}
              <div className="w-1/3 h-6 bg-secondary rounded-xl mb-3 animate-pulse"></div>
              {/* Input Box */}
              <div className="w-full h-10 bg-secondary rounded-xl border border-secondary/50 animate-pulse" />
            </div>

            {/* Skeleton Question 2 (Radio Buttons) */}
            <div className="mb-6">
              {/* Question Title */}
              <div className="w-1/2 h-6 bg-secondary rounded-xl mb-3 animate-pulse"></div>
              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary animate-pulse" />
                  <div className="w-1/3 h-5 bg-secondary rounded-xl animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary animate-pulse" />
                  <div className="w-1/2 h-5 bg-secondary rounded-xl animate-pulse" />
                </div>
              </div>
            </div>

            {/* Skeleton Question 3 (Text Area) */}
            <div className="mb-8">
              {/* Question Title */}
              <div className="w-1/3 h-6 bg-secondary rounded-xl mb-3 animate-pulse"></div>
              {/* Text Area Box */}
              <div className="w-full h-24 bg-secondary rounded-xl border border-secondary/50 animate-pulse" />
            </div>

            {/* Skeleton Submit Button */}
            <div className="flex">
              <div className="bg-accent text-accent-foreground font-bold px-6 py-2 rounded-xl">
                Submit
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Resources;
