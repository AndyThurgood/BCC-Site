import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";
import BlogView from "./blogview";
import Break from "./break"

const Home = (props) => (
<Layout title={props.content.node && props.content.node.title}>
    <div className="header" data-stellar-background-ratio="0.5" id="home">
        <div className="overlay-layer">
            <div className="container">
                <div className="only-logo">
                    <div className="navbar">
                        <div className="navbar-header">
                            <img src="/images/logo.png" alt="boxconceptslogo"></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro-section">
                            <h1 className="intro white-text">{props.content.node && props.content.node.title}</h1>
                            <h5 className="white-text">
                            {props.content.node && props.content.node.subtitle}
                            </h5>
                            <div className="button">
                                <Link to="/contact" className="btn btn-primary white-button">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="white-bg">
        <ul className="client-logos">
            <li>
                <img src="/images/companies/1.png" alt="Munich Re logo"></img>
            </li>
            <li>
                <img src="/images/companies/2.png" alt="Capita logo"></img>
            </li>
            <li>
                <img src="/images/companies/3.png" alt="Food Standards logo"></img>
            </li>
            <li>
                <img src="/images/companies/4.png" alt="Virtual College logo"></img>
            </li>
            <li>
                <img src="/images/companies/5.png" alt="Care care plan logo"></img>
            </li>
            <li>
                <img src="/images/companies/6.png" alt="Northern filters logo"></img>
            </li>
        </ul>
    </div>
    <div className="brief grey-bg text-left">
        <div className="container">
            <div className="row">
                <div className="col-md-6 content-section">
                    <div className="small-text-medium uppercase colored-text">
                        The Concept
                    </div>
                    <h2 className="text-left dark-text">
                        Our vision and Values
                    </h2>
                    <div className="colored-line-left">
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 content-section">
                    <div className="text-left">
                        {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <Break />
    <BlogView />
</Layout>
);

export default withPhenomicApi(Home, props => ({
    content: query({
      path: "site",
      id: "home"
    })
}));