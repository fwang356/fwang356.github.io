import React from 'react'
import { Text, useColorMode, useMediaQuery, useToken, VStack } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiAmazonaws, SiDatadog, SiGoogle } from "react-icons/si"
import "../static/css/style.css";

export default function () {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const purple = useToken("colors", "periwinkle.200")

  if (isDark) {
    return (
      <div>
        <VStack>
          <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, periwinkle.100, periwinkle.200, periwinkle.300)" bgClip="text">
            Experience
          </Text>
          <br>
          </br>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(34, 42, 58)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="May 2023 - Aug. 2023"
              iconStyle={{ background: 'rgb(34, 42, 58)', color: '#fff'}}
              icon={<SiDatadog />}
            >
              <h1> Datadog </h1>
              <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
              <p>
                Intern on the Driveline livesearch team.
                Implemented a service to classify customer organizations by number of bytes ingested to more efficiently allocate data
                among a low latency in-memory distributed database, reducing query latency and network traffic.
                Monitored and alerted on potentially misclassified orgs, accelerating the transition process for misclassified orgs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(34, 42, 58)', color: 'grey.500' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Aug. 2022 - Nov. 2022"
              iconStyle={{ background: 'rgb(34, 42, 58)', color: '#fff'}}
              icon={<SiGoogle />}
            >
              <h1> Google </h1>
              <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
              <p>
                Intern on the Google Cloud Data & Insights team.
                Spearheaded development for a low latency user attribute serving API for customization of content
                on <a href="https://cloud.google.com/" style={{ color: purple }}>cloud.google.com</a> to increase user engagement.
                Constructed an end-to-end pipeline to backfill a database with historical data, minimizing data staleness.
                Reduced latency from 3000 ms to 100 ms, an improvment of over 96%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(34, 42, 58)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="May 2022 - Aug. 2022"
              iconStyle={{ background: 'rgb(34, 42, 58)', color: '#fff'}}
              icon={<SiAmazonaws />}
            >
              <h1> Amazon Web Services </h1>
              <h4 className="vertical-timeline-element-subtitle">Software Development Engineer Intern</h4>
              <p>
                Intern on the AWS EC2 Core Platform team.
                Worked with other interns to develop a website serving as a source of truth for EC2 cell metrics,
                reducing the operational load for customer inqueries.
                Built a periodic service to query performance metrics from Amazon's internal network to provide data
                to be shown on the website.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </VStack>
      </div>
    )
  } else {
    return (
      <div>
        <VStack>
          <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r, periwinkle.100, periwinkle.200, periwinkle.300)" bgClip="text">
            Experience
          </Text>
          <br>
          </br>
          <VerticalTimeline lineColor="rgb(188, 190, 242)">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(188, 190, 242)', color: '#22A3A' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="May 2023 - Aug. 2023"
              dateClassName={isDark ? "dark" : "light"}
              iconStyle={{ background: 'rgb(188, 190, 242)', color: '#fff'}}
              icon={<SiDatadog />}
            >
              <h1 className={isDark ? "dark" : "light"}> Datadog </h1>
              <h4 className={isDark ? "dark" : "light"}>Software Engineer Intern</h4>
              <p className={isDark ? "dark" : "light"}>
                Intern on the Driveline livesearch team.
                Implemented a service to classify customer organizations by number of bytes ingested to more efficiently allocate data
                among a low latency in-memory distributed database, reducing query latency and network traffic.
                Monitored and alerted on potentially misclassified orgs, accelerating the transition process for misclassified orgs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(188, 190, 242)', color: '#22A3A' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Aug. 2022 - Nov. 2022"
              dateClassName={isDark ? "dark" : "light"}
              iconStyle={{ background: 'rgb(188, 190, 242)', color: '#fff'}}
              icon={<SiGoogle />}
            >
              <h1 className={isDark ? "dark" : "light"}> Google </h1>
              <h4 className={isDark ? "dark" : "light"}>Software Engineer Intern</h4>
              <p className={isDark ? "dark" : "light"}>
                Intern on the Google Cloud Data & Insights team.
                Spearheaded development for a low latency user attribute serving API for customization of content
                on <a href="https://cloud.google.com/" style={{ color: purple }}>cloud.google.com</a> to increase user engagement.
                Constructed an end-to-end pipeline to backfill a database with historical data, minimizing data staleness.
                Reduced latency from 3000 ms to 100 ms, an improvment of over 96%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(188, 190, 242)', color: '#22A3A' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="May 2022 - Aug. 2022"
              dateClassName={isDark ? "dark" : "light"}
              iconStyle={{ background: 'rgb(188, 190, 242)', color: '#fff'}}
              icon={<SiAmazonaws />}
            >
              <h1 className={isDark ? "dark" : "light"}> Amazon Web Services </h1>
              <h4 className={isDark ? "dark" : "light"}>Software Development Engineer Intern</h4>
              <p className={isDark ? "dark" : "light"}>
                Intern on the AWS EC2 Core Platform team.
                Worked with other interns to develop a website serving as a source of truth for EC2 cell metrics,
                reducing the operational load for customer inqueries.
                Built a periodic service to query performance metrics from Amazon's internal network to provide data
                to be shown on the website.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </VStack>
      </div>
    )
  }
}