import { Text, VStack, useMediaQuery, Flex, Box, Image, useColorMode, IconButton, ScaleFade } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useInViewport } from 'react-in-viewport';

export default function About() {

    const ref = useRef(null);


    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <VStack ref={ref}>
                <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="semiBold">
                    About Me
                </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    alignSelf="flex-start" pt={12} pl={isNotSmallerScreen ? "32" : "8"} pr={isNotSmallerScreen ? "32" : "8"}>
                    <Image alignSelf="center"
                        mb={isNotSmallerScreen ? "0" : "12"} mr={isNotSmallerScreen ? "12" : "0"} borderRadius="lg"
                        backgroundColor="transparent" boxShadow="lg"
                        boxSize={isNotSmallerScreen ? "25%" : "80%"} src='./me.jpg' />
                    <Box align='flex-start'>
                        <Text fontSize={isNotSmallerScreen ? "md" : "sm"} color={isDark ? "white" : "gray.500"}>
                            My name is Felix and I'm currently working as a software engineer at Datadog.
                            I'm passionate about creating consumer facing products and I'm primarily interested in backend development and data infrastructure,
                            although I'm always eager to explore the different facets of computer science.
                            <br></br>
                            <br></br>
                            Outside of work, you'll probably find me playing tennis, shopping for clothes, or binge 
                            watching entire seasons of the latest K-dramas/anime. I love discovering new music to listen to on repeat
                            and learning new pieces on the guitar.
                            <br></br>
                            <br></br>
                            Feel free to contact me at wang052020(at)gmail(dot)com or
                            click on the buttons below!
                        </Text>
                        <IconButton mt={4} icon={<FaGithub />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("https://www.github.com/fwang356")
                        } />
                        <IconButton ml={4} mt={4} icon={<FaLinkedin />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("https://www.linkedin.com/in/fwang356")
                        } />
                        <IconButton ml={4} mt={4} icon={<HiOutlineMail />} isRound="true" size={isNotSmallerScreen ? "md" : "sm"} onClick={() =>
                            window.open("mailto:wang052020@gmail.com")
                        } />
                    </Box>
                </Flex>
            </VStack>
        </div>
    )
}
