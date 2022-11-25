import React from 'react'
import { Box, Button, Flex, IconButton, Text, VStack, useColorMode, useMediaQuery, Stack, Heading, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function Home() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <VStack p={4} h="calc(100vh)" w="100%">
                <Flex w="100%" h="0vh" position="fixed" justifyContent="end">
                    <IconButton ml={4} icon={<FaGithub />} isRound="true" onClick={() =>
                        window.open("https://www.github.com/fwang356")
                    } />
                    <IconButton ml={4} icon={<FaLinkedin />} isRound="true" onClick={() =>
                        window.open("https://www.linkedin.com/in/fwang356")
                    } />
                    <IconButton ml={4} mr={4} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
                </Flex>

                <Flex direction="row"
                    alignSelf="center" h="full">
                    <Box align="flex-start" alignSelf="center">
                        <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="semiBold">
                            Hi, I'm
                        </Text>
                        <Text fontSize={isNotSmallerScreen ? "7xl" : "5xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
                            Felix Wang
                        </Text>
                        <Text fontSize={isNotSmallerScreen ? "lg" : "sm"} color={isDark ? "gray.200" : "gray.500"}>
                            Software Engineer | Computer Science Student @ the Georgia Institute of Technology
                        </Text>
                        <Button mt={4} color="purple.400" onClick={() =>
                            window.open("/resume.pdf")
                        }>Resume</Button>
                        <Button mt={4} ml={4} color="purple.400" onClick={() =>
                            window.open("mailto:fwang356@gatech.edu")
                        }>Contact Me!</Button>
                    </Box>
                </Flex>
            </VStack>
            <Experience />
            <Projects />
        </div>
    )
}
