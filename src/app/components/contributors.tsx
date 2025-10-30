"use client";
import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";
import { BookDownIcon, SmileIcon } from "lucide-react";

// --- DATA ---
const placeholderPath = "/images/placeholders/contributor.svg";

// Define the list of contributors with tiers.
// Replace placeholder data with actual contributor info as needed.

const contributorsList = [
  // Tier 1
  { name: "Tier 1 Sponsor", tier: 1, url: "#", imageUrl: placeholderPath },
  { name: "Another Tier 1", tier: 1, url: "#", imageUrl: placeholderPath },
  // Tier 2
  { name: "Tier 2 Sponsor", tier: 2, url: "#", imageUrl: placeholderPath },
  { name: "Mid-Level Inc.", tier: 2, url: "#", imageUrl: placeholderPath },
  { name: "Other Tier 2", tier: 2, url: "#", imageUrl: placeholderPath },
  // Tier 3
  { name: "Tier 3 Sponsor", tier: 3, url: "#", imageUrl: placeholderPath },
  { name: "Startup Support", tier: 3, url: "#", imageUrl: placeholderPath },
  { name: "Local Biz", tier: 3, url: "#", imageUrl: placeholderPath },
  { name: "Friend of Event", tier: 3, url: "#", imageUrl: placeholderPath },
  { name: "New Contributor", tier: 3, url: "#", imageUrl: placeholderPath },
  { name: "Final Sponsor", tier: 3, url: "#", imageUrl: placeholderPath },
];

// --- HELPERS ---

/**
 * Returns the appropriate grid and height classes for a contributor based on their tier.
 * @param tier The contributor's tier (1, 2, or 3)
 */
const getTierClasses = (tier: number) => {
  switch (tier) {
    case 1:
      // Large: Full-width on mobile, half-width on desktop
      return "col-span-6 md:col-span-3 h-48";
    case 2:
      // Medium: Half-width on mobile, third-width on desktop
      return "col-span-3 md:col-span-2 h-32";
    case 3:
      // Small: Half-width on mobile, 3-per-row on sm, 6-per-row on desktop
      return "col-span-3 sm:col-span-2 md:col-span-1 h-24";
    default:
      return "col-span-3 sm:col-span-2 md:col-span-1 h-24";
  }
};

// --- COMPONENTS ---

/**
 * A placeholder component for a contributor logo.
 * It accepts a 'tier' prop to display different text.
 */
const ContributorPlaceholder = ({
  className = "",
  tier = 1,
  name,
  imageUrl,
}: {
  className?: string;
  tier: number;
  name: string;
  imageUrl: string;
}) => {
  let tierText = "Contributor";
  let textSize = "text-lg";
  const isPlaceholder = imageUrl === placeholderPath;

  // Adjust text based on tier
  if (tier === 1) {
    tierText = "Tier 1";
    textSize = "text-xl sm:text-2xl";
  } else if (tier === 2) {
    tierText = "Tier 2";
    textSize = "text-lg sm:text-xl";
  } else if (tier === 3) {
    tierText = "Tier 3";
    textSize = "text-sm sm:text-base";
  }

  return (
    <Flex
      justify="center"
      align="center"
      className={`relative flex justify-center items-center bg-secondary/50 rounded-lg border border-secondary/30 p-4 text-foreground/50 h-full ${className}`}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={200}
        className={`w-full h-full object-contain ${
          isPlaceholder ? "opacity-70" : "opacity-100"
        }`}
      />
      {/* Overlay text only if it's a placeholder */}
      {isPlaceholder && (
        <Flex
          direction="column"
          gap="1"
          align="center"
          className="absolute flex font-secondary justify-center items-center p-2 text-center"
        >
          <Text weight="bold" className={`text-foreground/80 ${textSize}`}>
            {name}
          </Text>
          <Text className="text-foreground/60 text-xs sm:text-sm">
            ({tierText})
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

const Contributors = () => {
  return (
    <Flex
      id="contributors"
      direction="column"
      align="center"
      gap="6"
      className="py-12 px-4 sm:px-8 bg-background text-foreground w-full"
    >
      <Flex
        direction="column"
        align="center"
        className="text-2xl sm:text-5xl text-foreground font-extrabold gap-4"
      >
        <p className="bg-accent font-primary font-extrabold w-min sm:whitespace-nowrap text-accent-foreground border-2 border-secondary rounded-2xl p-2 px-4">
          CONTRIBUTORS
        </p>
      </Flex>
      <div className="flex font-secondary items-center gap-4 flex-col sm:flex-row border-2 border-dashed border-secondary rounded-2xl p-4">
        <Text>Interested in contributing? View our prospectus:</Text>
        <a
          href="/prospectus.pdf" // Generic path
          download="Event-Prospectus.pdf"
          className="bg-primary gap-2 text-accent hover:text-foreground transition-all flex items-center hover:bg-secondary hover:underline px-4 py-2 rounded-xl font-bold"
        >
          <BookDownIcon size={24} /> PROSPECTUS
        </a>
      </div>
      <Flex
        direction="column"
        className="rounded-2xl max-w-6xl h-full w-full overflow-hidden bg-primary"
      >
        <Flex
          align="center"
          className="text-accent font-secondary px-4 whitespace-nowrap bg-secondary py-2 text-lg"
        >
          <SmileIcon size={24} className="text-accent mr-2" />
          <strong>
            <span className="hidden sm:inline">A BIG Thanks To…</span>
            <span className="sm:hidden">Our Contributors</span>
          </strong>
        </Flex>
        <Flex direction="column" gap="6" align="center" className="w-full p-4">
          <Flex className="justify-center mx-4 w-full">
            {/* Dynamic grid rendered from the contributorsList array */}
            <div className="grid grid-cols-6 gap-4 w-full">
              {contributorsList.map((contributor, index) => (
                <a
                  key={index}
                  href={contributor.url}
                  className={`${getTierClasses(
                    contributor.tier
                  )} hover:opacity-80 transition-opacity`}
                >
                  <ContributorPlaceholder
                    tier={contributor.tier}
                    name={contributor.name}
                    imageUrl={contributor.imageUrl}
                  />
                </a>
              ))}
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contributors;
