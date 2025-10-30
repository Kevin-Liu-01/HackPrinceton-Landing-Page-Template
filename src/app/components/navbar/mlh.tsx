import Image from "next/image";

const MLHBanner = () => {
  return (
    <a
      href="https://mlh.io/na?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2025-season&amp;utm_content=blue"
      target="_blank"
      rel="noopener noreferrer"
      className="z-50"
    >
      <Image
        alt="Major League Hacking 2025 Hackathon Season"
        width={200}
        height={50}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        className="transparent w-12 sm:w-16 md:w-20 lg:w-24"
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-red.svg"
      />
    </a>
  );
};

export default MLHBanner;
