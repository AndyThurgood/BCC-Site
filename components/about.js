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
    <div className="brief grey-bg text-left">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 content-section pull-left">
                      <div className="small-text-medium uppercase colored-text">
                        About
                      </div>
                      <h2 className="text-left dark-text"><strong>Our</strong> Short Story</h2>
                      <div className="colored-line-left">
                      </div>
                      <div className="text-left">
                          {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
                      </div>
                  </div>
                  <div className="col-md-6 pull-right">
                      <div className="brief-image-right">
                          <img src={props.content.node && props.content.node.image} alt={props.content.node && props.content.node.title}></img>
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
                            <span className="fa fa-certificate"></span>
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
                            <span className="fa fa-code"></span>
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
                            <span className="fa fa-star"></span>
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
                            <span className="fa fa-cart-plus"></span>
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
                            <span className="fa fa-check"></span>
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