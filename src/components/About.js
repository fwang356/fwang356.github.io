import { Text, VStack, useMediaQuery, Flex, Box, Image, useColorMode, IconButton, ScaleFade } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useInViewport } from 'react-in-viewport';

export default function About() {

    const ref = useRef(null);
    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-200px" },
        { disconnectOnLeave: false },
        {}
    );

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <ScaleFade initialScale={0.95} in={enterCount > 0}>
                <VStack ref={ref}>
                    <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
                        About Me
                    </Text>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"}
                        alignSelf="flex-start" pt={12} pl={isNotSmallerScreen ? "32" : "8"} pr={isNotSmallerScreen ? "32" : "8"}>
                        <Image alignSelf="center"
                            mb={isNotSmallerScreen ? "0" : "12"} mr={isNotSmallerScreen ? "12" : "0"} borderRadius="lg"
                            backgroundColor="transparent" boxShadow="lg"
                            boxSize={isNotSmallerScreen ? "25%" : "80%"} src='./me.jpg' />
                        <Box align='flex-start'>
                            <Text fontSize={isNotSmallerScreen ? "md" : "sm"} color={isDark ? "gray.200" : "gray.500"}>
                                My name is Felix and I'm a third-year B.S. Computer Science student at the Georgia Institute of Technology.
                                I'm passionate about creating consumer facing products that help improve people's quality of living.
                                My primary interests are in backend development, distributed systems, and high performance computing,
                                although I'm always eager to explore the different facets of computer science.
                                <br></br>
                                <br></br>
                                Outside of work and school, my hobbies include playing tennis, going to the gym, bouldering, and binge
                                watching entire seasons of the latest K-dramas/anime. I love discovering new music to listen to on repeat
                                and learning new pieces on the guitar.
                                <br></br>
                                <br></br>
                                I'm seeking software engineering opportunities; please feel free to contact me at fwang356(at)gatech(dot)edu or
                                click on the buttons below!
                            </Text>
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
                </VStack>
            </ScaleFade>
        </div>
    )
}
