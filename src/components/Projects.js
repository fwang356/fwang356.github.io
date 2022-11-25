import { Text, useColorMode, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Projects() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <VStack>
                <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
                    Projects
                </Text>
            </VStack>
        </div>
    )
}
