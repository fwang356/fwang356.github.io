import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, IconButton, Text, VStack, useColorMode, useMediaQuery, Stack, Heading, Spacer, Icon, Link } from "@chakra-ui/react";
import { FaArrowDown, FaHome, FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../components/About';
import Div100vh from 'react-div-100vh';

export default function Home() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        })
    };

    return (
        <Div100vh>
            <VStack p={4} w="100%">
                <Flex w="100%" h="0vh" position="fixed" justifyContent="end">
                    <IconButton mr={4} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={toggleColorMode} />
                </Flex>

                <Flex p={8} direction="row"
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
                            window.open("/Resume.pdf")
                        }>Resume</Button>
                        <Button mt={4} ml={4} color="purple.400" onClick={() =>
                            window.open("mailto:fwang356@gatech.edu")
                        }>Contact Me!</Button>
                        <br></br>
                        <IconButton mt={4} icon={<FaGithub />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("https://www.github.com/fwang356")
                        } />
                        <IconButton ml={4} mt={4} icon={<FaLinkedin />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("https://www.linkedin.com/in/fwang356")
                        } />
                        <IconButton ml={4} mt={4} icon={<HiOutlineMail />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("mailto:fwang356@gatech.edu")
                        } />
                    </Box>
                </Flex>
                <Stack>
                    <IconButton mb={4} icon={<FaArrowDown />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={scrollDown} />
                </Stack>


            </VStack>
            <Stack alignItems="flex-end">
                <Flex h="0vh" p={4} position="fixed" bottom="5vh">
                    {isVisible && <IconButton icon={<FaArrowUp />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={scrollToTop} />}
                </Flex>
            </Stack>
            <div id="about">
                <About />
            </div>

            <Experience />
            <Projects />
        </Div100vh>
    )
}
