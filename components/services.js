import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";
import Break from "./break";

const Services = (props) => (
<Layout title={(props.content.node && props.content.node.title)}>
    <How {... props}/>
    <Break/>
    <What/>
</Layout>
);

const How = (props) => (
<div>
    <section className="grey-bg text-left">
        <div className="container">
            <div className="section-header">
                <div className="small-text-medium uppercase colored-text">
                    Our Services
                </div>
                <h2 className="dark-text"><strong>We Provide</strong> Services, leadership, strategy</h2>
                <div className="colored-line-left">
                </div>
                <div className="sub-heading">
                </div>
            </div>
                {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
            <div className="row">
            <div className="col-md-4" data-wow-offset="10" data-wow-duration="1.75s">
                <div className="single-service border-bottom-hover center-text">
                    <div className="service-icon colored-text">
                        <span className="fa fa-cogs fa-x3"></span>
                    </div>
                    <h3 className="colored-text">End to end Services</h3>
                    <p>
                        Providing you with a complete digital service, from design and build through to 
                        ongoing support and continious delivery. 
                    </p>
                </div>
            </div>
            <div className="col-md-4" data-wow-offset="10" data-wow-duration="1s">
                <div className="single-service border-bottom-hover center-text">
                    <div className="service-icon colored-text">
                        <span className="fa fa-cloud fa-x3"></span>
                    </div>
                    <h3 className="colored-text">Cloud Computing</h3>
                    <p>
                        Scalable and resilient services that leverage the most suitable cloud services 
                        including IAAS, PAAS and SAAS offerings.
                    </p>
                </div>
            </div>
            <div className="col-md-4" data-wow-offset="10" data-wow-duration="1.75s">
                <div className="single-service border-bottom-hover center-text">
                    <div className="service-icon colored-text">
                        <span className="fa fa-users fa-x3"></span>
                    </div>
                    <h3 className="colored-text">Consultancy</h3>
                    <p>
                        Onsite consultancy and development to lead or augment your existing teams, delivering the services 
                        that you need, the right way.
                    </p>
                </div>
            </div>
            </div>
        </div>
      </section>
</div>
);

const What = () => (
    <div className="unique-features white-bg text-left">
        <div className="container">
            <div className="section-header">
                <div className="small-text-medium uppercase colored-text">
                    What we do
                </div>
                <h2 className="dark-text"><strong>Working</strong> With You</h2>
                <div className="colored-line-left">
                </div>
                <div className="sub-heading">
                </div>
            </div>
            <p>
                A glimpse into how we do business with you.
            </p>
            <div className="row">
                <div className="col-md-4">
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-laptop colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Engagement</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            The begining of the project, requirements, a statement of work and high level designs
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-map-alt colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Design</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            Techinical and visual designs, use cases and user stories.
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-cloud-alt colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Project Management</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            Project plans, timescales, delivery promise.
                        </p>
                    </div>
                </div>              
                </div>
                <div className="col-md-4">
                    <div className="ipad-image">
                        <img src="images/contribute.png" alt="logo"></img>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-gift-alt colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Development</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            Feature creation, agile process, testable deliverables.
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-star-alt colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Delivery</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            Product overview, final revisions, future enhancements.
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-container">
                        <span className="icon-chat-alt colored-text"></span>
                    </div>
                    <div className="description text-left">
                        <h4 className="dark-text">Support</h4>
                        <div className="grey-line-short pull-left">
                        </div>
                        <p className="text-left">
                            Ongoing product support, further development, change requests.
                        </p>
                    </div>
                </div>               
                </div>          
            </div>
        </div>
    </div>
);



export default withPhenomicApi(Services, props => ({
  content: query({
    path: "site",
    id: "services"
  })
}));