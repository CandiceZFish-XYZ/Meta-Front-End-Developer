import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white" borderRadius="lg">
      <VStack spacing={4}>
        <Image src={imageSrc} borderRadius="lg" />
        <Box padding={4}>
          <VStack spacing={4} align="left">
            <Heading color="black" size="md">
              {title}
            </Heading>
            <Text color="gray" fontSize="md">
              {description}
            </Text>
            <HStack spacing={1}>
              <Text color="black" fontSize="xs">
                See more
              </Text>
              <FontAwesomeIcon icon={faArrowRight} color="black" size="xs" />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
