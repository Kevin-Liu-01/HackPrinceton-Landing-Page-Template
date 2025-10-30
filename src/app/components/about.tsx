"use client";
import Image from "next/image";
import { Flex, Box, Text } from "@radix-ui/themes";
import { MailIcon } from "lucide-react";

const About = () => {
  return (
    <Flex className="overflow-hidden py-12 px-8 w-full bg-primary text-foreground">
      <div
        id="about"
        className="h-full grid grid-cols-1 sm:grid-cols-2 sm:max-w-6xl sm:mx-auto w-full"
      >
        <Flex
          direction="column"
          justify="center"
          className="px-4 sm:px-8 py-12"
        >
          <Flex
            direction="column"
            className="text-start mb-6 text-3xl sm:text-5xl font-primary font-extrabold gap-2"
          >
            <span className="font-extrabold w-min whitespace-nowrap text-sm border-2 border-accent text-accent rounded-xl p-2">
              ABOUT US
            </span>
            <Text className=" text-4xl lg:text-5xl">Our Mission.</Text>
          </Flex>
          <Flex
            direction="column"
            gap="4"
            className="text-xs mr-4 font-secondary sm:text-base"
          >
            <Text>
              {"This is a great place to "}
              <strong>
                describe your event, its purpose, and what attendees can expect.
              </strong>{" "}
              {`Keep it engaging and informative. You can talk about
              workshops, mentorship, prizes, and more. Let people know
              what makes your event special!`}
            </Text>
            <Text>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </strong>
              , sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </Text>
            <Box className="whitespace-normal mt-2">
              <span className="text-accent font-semibold">
                Other questions? Contact us at:{" "}
              </span>
              <p className="mt-2">
                <a
                  href="mailto:contact@your-event.com"
                  className="bg-accent/20 text-accent-foreground w-min gap-2 whitespace-nowrap flex items-center hover:bg-accent/30 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
                >
                  <MailIcon size={24} className="text-accent" />
                  contact@your-event.com
                </a>
              </p>
            </Box>
          </Flex>
        </Flex>
        <Flex className="relative w-full h-64 sm:h-full">
          <Image
            src="/images/placeholders/generic_image_placeholder.svg" // Replace with your image
            alt="About Us Image"
            fill={true}
            className={`object-contain z-10 rounded-3xl`}
            priority
          />
        </Flex>
      </div>
    </Flex>
  );
};

export default About;
