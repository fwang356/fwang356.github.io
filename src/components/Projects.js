import { Box, Flex, IconButton, ScaleFade, Text, useColorMode, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaGithub } from 'react-icons/fa';
import { useInViewport } from 'react-in-viewport';

export default function Projects() {

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
                        Projects
                    </Text>
                    <Box alignSelf="center" pb={12}>
                        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} mb={8}>
                            <Flex rounded="xl" direction="column" mt={4} bg={isDark ? "gray.500" : "gray.200"} h="40vh" w="30vh" justify="flex-end" _hover={{ bg: "gray.400" }}>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-start">
                                    <Text pl={4} pr={4} fontSize={isNotSmallerScreen ? "lg" : "sm"} fontWeight="semibold" alignItems="flex-start" >
                                        View your top tracks and artists on Spotify
                                    </Text>
                                </Flex>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-end">
                                    <IconButton ml={4} icon={<FaGithub />} w="12" h="12" size="lg" bg="transparent" _hover={{ bg: "transparent" }} onClick={() =>
                                        window.open("https://www.github.com/fwang356/moodi")} />
                                    <Text pl={4} pb={4} fontSize="xl" fontWeight="semibold">
                                        Moodi
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex rounded="xl" direction="column" mt={4} bg={isDark ? "gray.500" : "gray.200"} h="40vh" w="30vh" ml={isNotSmallerScreen ? 4 : 0} justify="flex-end" _hover={{ bg: "gray.400" }}>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-start">
                                    <Text pl={4} pr={4} fontSize={isNotSmallerScreen ? "lg" : "sm"} fontWeight="semibold" alignItems="flex-start" >
                                        Track and manage your car's carbon footprint
                                    </Text>
                                </Flex>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-end">
                                    <IconButton ml={4} icon={<FaGithub />} w="12" h="12" size="lg" bg="transparent" _hover={{ bg: "transparent" }} onClick={() =>
                                        window.open("https://www.github.com/fwang356/carbon")} />
                                    <Text pl={4} pb={4} fontSize="xl" fontWeight="semibold">
                                        Car-Bon
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex rounded="xl" direction="column" mt={4} bg={isDark ? "gray.500" : "gray.200"} h="40vh" w="30vh" ml={isNotSmallerScreen ? 4 : 0} justify="flex-end" _hover={{ bg: "gray.400" }}>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-start">
                                    <Text pl={4} pr={4} fontSize={isNotSmallerScreen ? "lg" : "sm"} fontWeight="semibold" alignItems="flex-start" >
                                        Pre-plan the best gas stops for your drive
                                    </Text>
                                </Flex>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-end">
                                    <IconButton ml={4} icon={<FaGithub />} w="12" h="12" size="lg" bg="transparent" _hover={{ bg: "transparent" }} onClick={() =>
                                        window.open("https://www.github.com/fwang356/fuelr")} />
                                    <Text pl={4} pb={4} fontSize="xl" fontWeight="semibold">
                                        Fuelr
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex rounded="xl" direction="column" mt={4} bg={isDark ? "gray.500" : "gray.200"} h="40vh" w="30vh" ml={isNotSmallerScreen ? 4 : 0} justify="flex-end" _hover={{ bg: "gray.400" }}>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-start">
                                    <Text pl={4} pr={4} fontSize={isNotSmallerScreen ? "lg" : "sm"} fontWeight="semibold" alignItems="flex-start" >
                                        AI model to notify you of new shoes you may like
                                    </Text>
                                </Flex>
                                <Flex rounded="xl" direction="column" mt={4} h="30vh" w="30vh" justify="flex-end">
                                    <IconButton ml={4} icon={<FaGithub />} w="12" h="12" size="lg" bg="transparent" _hover={{ bg: "transparent" }} onClick={() =>
                                        window.open("https://www.github.com/fwang356/ushoe")} />
                                    <Text pl={4} pb={4} fontSize="xl" fontWeight="semibold">
                                        uShoe
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </VStack>
            </ScaleFade>
        </div>
    )
}
