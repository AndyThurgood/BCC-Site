import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout"
import Break from "./break";

const About = (props) => (
<Layout title={(props.content.node && props.content.node.title)}>
    <Story {...props}/>
    <Break/>
    <Journey/>
</Layout>
  );

  const Story = (props) => (
    <div className="brief grey-bg text-right">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 pull-left">
                      <div className="brief-image-left">
                          <img src={props.content.node && props.content.node.image} alt={props.content.node && props.content.node.title}></img>
                      </div>
                  </div>
                  <div className="col-md-6 content-section pull-right">
                      <div className="small-text-medium uppercase colored-text">
                        About
                      </div>
                      <h2 className="text-right dark-text"><strong>Our</strong> Short Story</h2>
                      <div className="colored-line-right">
                      </div>
                      <div className="text-right">
                          {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
                      </div>
                  </div>
              </div>
          </div>
      </div>
);

const Journey = () => (
    <div className="brief timeline white-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-6 timeline-text text-left">
                    <div className="small-text-medium uppercase colored-text text-left">
                        A Timeline
                    </div>
                    <h2 className="text-left dark-text"><strong>Our</strong> Journey</h2>
                        
                    <div className="colored-line-left">
                    </div>
                    <p>From humble beginngs...</p>


                </div>
                <div className="col-md-6 timeline-section">
                <ul className="vertical-timeline" id="timeline-scroll">
                    <li>
                        <div className="date small-text colored-text strong">
                            Apr, 2012
                        </div>
                        <div className="icon-container color-bg white-text">
                            <span className="icon-ribbon-alt"></span>
                        </div>
                        <div className="info">
                            Box-Concepts is founded.
                        </div>
                    </li>
                    <li>
                        <div className="date small-text dark-text strong">
                            Apr, 2012
                        </div>
                        <div className="icon-container color-bg white-text">
                            <span className="icon-piechart"></span>
                        </div>
                        <div className="info">
                            Box-Concepts agrees to provide technical resource to Capita and the Food Hygiene government division.
                        </div>
                    </li>
                    <li>
                        <div className="date small-text dark-text strong">
                            July, 2013
                        </div>
                        <div className="icon-container color-bg white-text">
                            <span className="icon-star-alt"></span>
                        </div>
                        <div className="info">
                            Box-Concepts leads a new insurance greenfield project for Munich RE, providing on site Architecture consultancy.
                        </div>
                    </li>
                    <li>
                        <div className="date small-text dark-text strong">
                            July, 2014
                        </div>
                        <div className="icon-container color-bg white-text">
                            <span className="icon-cart-alt"></span>
                        </div>
                        <div className="info">
                            Box-Concepts agrees to provide Northern Filters with a new online e-commerce platform.
                        </div>
                    </li>
                    <li>
                        <div className="date small-text dark-text strong">
                            August, 2014
                        </div>
                        <div className="icon-container color-bg white-text">
                            <span className="icon-check"></span>
                        </div>
                        <div className="info">
                            Box-Concepts provdes onsite consultancy to Virtual College Limited.
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
);
  
export default withPhenomicApi(About, props => ({
    content: query({
      path: "site",
      id: "about"
    })
  }));