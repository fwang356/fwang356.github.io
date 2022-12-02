import { Button, Container, Flex, Heading, ScaleFade, Text, useColorMode, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport';
import Carousel from './Carousel';

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

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./projects.json")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (
        <div>
            <ScaleFade initialScale={0.95} in={enterCount > 0}>
                <VStack ref={ref}>
                    <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
                        Projects
                    </Text>
                    <Container
                        py={8}
                        px={isNotSmallerScreen ? "20" : "0"}
                        maxW={{
                            base: "100%",
                            sm: "35rem",
                            md: "43.75rem",
                            lg: "57.5rem",
                            xl: "75rem",
                            xxl: "87.5rem"
                        }}
                    >
                        <Carousel gap={64}>
                            {data.slice(0, 5).map((post, index) => (
                                <Flex
                                    key={index}
                                    boxShadow="rgba(0, 0, 0, 0.08) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 2px 4px"
                                    background={isDark ? "gray.300" : "gray.50"}
                                    justifyContent="space-between"
                                    flexDirection="column"
                                    overflow="hidden"
                                    color="gray.300"
                                    rounded={8}
                                    flex={1}
                                    p={5}
                                >
                                    <VStack mb={6}>
                                        <Heading
                                            fontSize={{ base: "xl", md: "2xl" }}
                                            textAlign="left"
                                            w="full"
                                            mb={2}
                                            color="gray.500"
                                        >
                                            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                                        </Heading>
                                        <Text fontSize={isNotSmallerScreen ? "md" : "sm"} color="gray.500" w="full">{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</Text>
                                    </VStack>

                                    <Flex justifyContent="space-between">
                                        <Button color="purple.400" size="sm" onClick={() =>
                                            window.open(post.link)
                                        }>GitHub</Button>
                                    </Flex>
                                </Flex>
                            ))}
                        </Carousel>
                    </Container>
                </VStack>
            </ScaleFade>
        </div>
    )
}
