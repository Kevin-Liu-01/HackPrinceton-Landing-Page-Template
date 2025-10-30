"use client";
import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const SignUp = () => {
  return (
    <Flex
      align="center"
      justify="center"
      className="h-screen relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-dot-pattern bg-dot-sm z-0" />
      <Flex
        direction="column"
        align="center"
        gap="4"
        className="relative z-10 bg-primary p-10 rounded-lg shadow-xl border border-secondary"
      >
        <Text size="7" weight="bold" className="text-foreground">
          Sign Up for Updates
        </Text>
        <Text className="text-foreground/80">
          Get notified about registration and event details.
        </Text>
        <a
          href="#"
          className="bg-accent text-accent-foreground font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-300 mt-4"
        >
          Join Mailing List
        </a>
      </Flex>
    </Flex>
  );
};

export default SignUp;
