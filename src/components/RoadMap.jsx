import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CommonTitle from './CommonTitle'

export default function RoadMap() {
    useEffect(() => {
        AOS.init({
          duration: 1600,
        });
      }, []);
  return (
    <section className='roadmap-area roadmap position-relative z-1 common-padding'>
      <div className="common-shape position-absolute end-0 z-n1"></div>
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={8}>
                    <CommonTitle title="roadmap" des="Release of $COSMO meme marketplacePreparation period for $COSMO wedsite revomp dapps " />
                </Col>
            </Row>
            <Row>
              <VerticalTimeline>

                <VerticalTimelineElement className="vertical-timeline-element--work">                  
                    <span className='number'>Q1 2021</span>
                    <p>Release of $COSMO meme marketplacePreparation period for $COSMO wedsite revomp dapps </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement  className="vertical-timeline-element--work">                    
                    <span className='number'>Q2 2022</span>
                    <p>Release of $COSMO meme marketplacePreparation period for $COSMO wedsite revomp dapps </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work">                    
                    <span className='number'>Q3 2023</span>
                    <p>Release of $COSMO meme marketplacePreparation period for $COSMO wedsite revomp dapps </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work">                    
                    <span className='number'>Q4 2024</span>
                    <p>Release of $COSMO meme marketplacePreparation period for $COSMO wedsite revomp dapps </p>
                </VerticalTimelineElement>

              </VerticalTimeline>
            </Row>
        </Container>
    </section>
  )
}