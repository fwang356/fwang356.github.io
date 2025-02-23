import React, {useRef} from 'react'
import { Text, useMediaQuery, VStack } from "@chakra-ui/react";
import 'react-vertical-timeline-component/style.min.css';
import "../static/css/style.css";

export default function Experience() {

  const ref = useRef(null);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
   
  return (
    <div className="vert-container title-and-text">
      <VStack ref={ref} spacing={12} paddingX={isNotSmallerScreen ? "32" : "8"} paddingY={12}>
        <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="semiBold">
          Experience
        </Text>
        <div className="container" style={{ gap: '40px' }}>
          <div className="vert-container intern-block text-centered items-centered f1" style={{ borderColor: 'white', padding: '32px' }}>
            <img className="intern-logo" src="./datadog.png" alt="Datadog logo" title="Datadog" />
            <p className="intern-title">Software Engineer &mdash; Granular Access</p>
            <p className="intern-dates">July 2024 - Present</p>
            <p>
              Enhancing Datadog's access control platform. Stay tuned for more!
            </p>
          </div>
          <div className="vert-container intern-block text-centered items-centered f1" style={{ borderColor: 'white', padding: '32px' }}>
            <img className="intern-logo" src="./datadog.png" alt="Datadog logo" title="Datadog" />
            <p className="intern-title">Software Engineer Intern &mdash; Driveline</p>
            <p className="intern-dates">May 2023 - August 2024</p>
            <p>
              I created a service to classify customer orgs by size based on their ingested data. Accurately classifying these orgs
              allows for a more efficient allocation of data across our in-memory distributed database, reducing query latency and network traffic overhead.
            </p>
          </div>
        </div>
        <div className="container" style={{ gap: '40px' }}>
          <div className="vert-container intern-block text-centered items-centered f1" style={{ borderColor: 'white', padding: '32px' }}>
            <img className="intern-logo" src="./google.png" alt="Google logo" title="Google" />
            <p className="intern-title">Software Engineer Intern &mdash; GCP Data & Insights</p>
            <p className="intern-dates">August 2023 - November 2023</p>
            <p>
              I implemented a user attribute serving gRPC API for personalization of content
              on <a href="https://cloud.google.com/" style={{ color: "blue" }}>cloud.google.com</a> to increase user engagement.
              Due to high latency sensitivity, I set up a Spanner table to serve as a cache, reducing the latency from 3000 ms to 100 ms.
              To prevent data staleness, I constructed an end-to-end Apache Flume pipeline to backfill the table with historical data.
            </p>
          </div>
          <div className="vert-container intern-block text-centered items-centered f1" style={{ borderColor: 'white', padding: '32px' }}>
            <img className="intern-logo" src="./amazon.png" alt="Amazon logo" title="Amazon" />
            <p className="intern-title">Software Engineer Intern &mdash; AWS EC2 Core Platform</p>
            <p className="intern-dates">May 2022 - August 2022</p>
            <p>
              I wrote a periodic service to query performance metrics and publish the data to a DynamoDB table
              every 30 minutes. Data from this table would be displayed on a website serving as a source of truth
              for EC2 cell metrics, reducing the operational load for customer inqueries. 
              The service was made scalable and extensible to future use cases by making the metric type configurable 
              through a JSON template.
            </p>
          </div>
        </div>
      </VStack>
      <br /><br /><br />
    </div>
  )
}