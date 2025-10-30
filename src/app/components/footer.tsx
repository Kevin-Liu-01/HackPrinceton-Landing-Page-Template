import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { InstagramIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative h-full w-full bg-primary text-foreground/70 border-t-2 border-secondary">
      <Flex
        align="center"
        justify="center"
        gap="4"
        className="max-w-6xl mx-auto py-8 px-4 flex-col sm:flex-row"
      >
        <Image
          src="/images/logos/hackprinceton_logo_primary.png"
          alt="Event Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="px-2 h-16 w-auto"
        />
        <Flex
          direction="column"
          gap="2"
          className="text-lg font-averia font-semibold whitespace-nowrap text-center sm:text-left"
        >
          <Box>© 20XX HackPrinceton</Box>
          <Flex
            gap="4"
            align="center"
            className="transition-all justify-center sm:justify-start"
          >
            <span className="text-xs">FOLLOW OUR SOCIALS:</span>
            <a
              href="https://www.instagram.com/hackprinceton/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/hackprinceton/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all"
            >
              <LinkedinIcon />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
