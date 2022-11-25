import { Text, VStack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

export default function About() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <VStack>
                <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
                    About Me
                </Text>
            </VStack>
        </div>
    )
}
