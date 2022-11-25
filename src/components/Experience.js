import React from 'react'
import { ScaleFade, Text, useColorMode, useMediaQuery, useToken, VStack } from "@chakra-ui/react";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function () {

  const purple = useToken("colors", "purple.400")
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <VStack>
        <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, purple.200, purple.400, purple.600)" bgClip="text">
          Experience
        </Text>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="May 2023 - Aug. 2023"
            dateInnerStyle={{ backgroundColor: purple }}
            style={{ color: purple }}
          >
            <Text fontSize="2xl" color="purple.400">
              Datadog
            </Text>
            <Text fontSize="lg" color={isDark ? "gray.200" : "gray.500"}>
              Incoming Software Engineer Intern
            </Text>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="Aug. 2022 - Nov. 2022"
            dateInnerStyle={{ backgroundColor: purple }}
            style={{ color: purple }}
          >
            <Text fontSize="2xl" color="purple.400">
              Google
            </Text>
            <Text fontSize="lg" color={isDark ? "gray.200" : "gray.500"}>
              Software Engineer Intern
            </Text>
            <br></br>
            <Text color={isDark ? "gray.200" : "black"}>
              Intern on the Google Cloud Data & Insights team. Spearheaded development for a low latency user attribute serving API for
              customization of content on <a href="https://cloud.google.com/" style={{ color: purple }}>cloud.google.com</a> to increase
              user engagement. Constructed an end-to-end pipeline to backfill a database with historical data, minimizing data staleness. Reduced latency
              from 3000 ms to 100 ms, an improvment of over 96%.
            </Text>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="May 2022 - Aug. 2022"
            dateInnerStyle={{ backgroundColor: purple }}
            style={{ color: purple }}
          >
            <Text fontSize="2xl" color="purple.400">
              Amazon (AWS)
            </Text>
            <Text fontSize="lg" color={isDark ? "gray.200" : "gray.500"}>
              Software Development Engineer Intern
            </Text>
            <br></br>
            <Text color={isDark ? "gray.200" : "black"}>
              Intern on the AWS EC2 Core Platform team. Worked with other interns to develop a website serving as a source of truth
              for EC2 cell metrics, reducing the operaional load for customer inqueries. Built a periodic service to query performance 
              metrics from Amazon's internal network to provide data to be shown on the website. 
            </Text>
          </TimelineItem>
        </Timeline>
      </VStack>
    </div>
  )
}
