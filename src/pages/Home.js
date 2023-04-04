import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, IconButton, Text, VStack, useColorMode, useMediaQuery, Stack } from "@chakra-ui/react";
import { FaArrowDown, FaSun, FaMoon, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Experience from '../components/Experience';
import About from '../components/About';
import Div100vh from 'react-div-100vh';

export default function Home() {

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
        <div>
            <Div100vh>
                <VStack p={4} h="full" w="100%">
                    <Flex p={8} direction="row"
                        alignSelf="center" h="full">
                        <Box align="flex-start" alignSelf="center">
                            <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="semiBold">
                                Hi, I'm
                            </Text>
                            <Text fontSize={isNotSmallerScreen ? "7xl" : "5xl"} fontWeight="bold" bgGradient="linear(to-r, periwinkle.100, periwinkle.200, periwinkle.300)" bgClip="text">
                                Felix Wang
                            </Text>
                            <Text fontSize={isNotSmallerScreen ? "lg" : "sm"} color={"gray.200"}>
                                Software Engineer | Computer Science Student @ the Georgia Institute of Technology
                            </Text>
                            <Button mt={4} color="periwinkle.200" onClick={() =>
                                window.open("/Resume.pdf")
                            }>Resume</Button>
                            <Button mt={4} ml={4} color="periwinkle.200" onClick={() =>
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
            </Div100vh>
            <Stack alignItems="flex-end">
                <Flex h="0vh" p={4} position="fixed" bottom="5vh">
                    {isVisible && <IconButton icon={<FaArrowUp />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={scrollToTop} />}
                </Flex>
            </Stack>
            <About />
            <br></br>
            <br></br>
            <br></br>
            <Experience />
        </div>

    )
}
