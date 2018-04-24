import React from "react";
import { withPhenomicApi, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";

const Map = () => (
  <div className="map white-bg">
      <div id="container-fluid">
          <div className="map">
              <iframe height="500" width="100%" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=LS11%205QP&key=AIzaSyCYjRaBURP59hnr-UO0j4wlhatEp2RZkZo"></iframe>
          </div>
      </div>
  </div>
);

const Email = () => (
  <div className="contact brief grey-bg">
  <div className="container">
  <div className="row">
      <div className="col-md-6 timeline-text text-left">
          <div className="small-text-medium uppercase colored-text text-left">
              Contact Us
          </div>
          <h2 className="text-left dark-text"><strong>Say</strong> Hello</h2>
          <div className="colored-line-left">
          </div>
      </div>
      
  </div>
  <div className="row">
    <div className=" col-sm-12">
      <p>
        We are based out of Leeds city centre. Use the contact form to get in touch or to request a call back from one of the Box Concepts team.
      </p>
      </div>
  </div>
    <div className="row">
      <div className=" col-sm-12">
        <ul className="feature-list text-left">
          <li>
            <span className="icon-basic-mail colored-text"></span>
            <a href="mailto:hello@boxconcepts.co.uk" className="strong">hello@boxconcepts.co.uk</a>
          </li>
          <li>
            <span className="icon-basic-geolocalize-01 colored-text"></span>
            <a href="www.roundfoundrymediacenter.co.uk" className="strong">Round Foundry Media Center, Leeds LS11 5QP, UK</a>
          </li>
          <li>
            <span className="icon-basic-tablet colored-text"></span>
            <a href="#" className="strong">+tbc</a>
          </li>
        </ul>
     </div>
    </div>
  </div>
</div>
);

const Testamonials = () => (
  <div className="testimonials white-bg">
      <div className="container">
          <div className="section-header">
              <div className="small-text-medium uppercase colored-text">
                Testimonials
              </div>
              <h2 className="dark-text"><strong>Happy</strong> Customers</h2>
                  <div className="colored-line">
              </div>
              <div className="sub-heading">
                Feedback from our clients relating to projects we have been responsible for.
              </div>
          </div>
          <div className="row no-gutters">
          <div className="col-md-4" data-wow-offset="10" data-wow-duration="1.75s">
                <div className="feedback">
                    <div >
                        <img src="images/companies/1.png" alt=""></img>
                    </div>
                    <p>
                        "Box Concepts were engaged to create a fully featured client portal. They quickly understood our requirements and 
                        took on the role of lead developer / system architect. We found the whole experience with Box Concepts a real joy.  
                        I would recommend Box Concepts to people who need a real professional approach to software."
                    </p>
                    <h5 className="colored-text">- Senior Software Developer</h5>
                    <div className="small-text">
                        Munich RE
                    </div>
                </div>
            </div>
            <div className="col-md-4" data-wow-offset="10" data-wow-duration="1.75s">
                <div className="feedback border-left border-right">
                    <div>
                        <img src="images/companies/6.png" alt=""></img>
                    </div>
                    <p>
                        "Box Concepts have been an integral part of our journey from wholesaler to online retailer providing
                        Northern Filters with expert advise and technical resource that have delivered our new E-commerce platform."
                    </p>
                    <h5 className="colored-text">- Owner/Director</h5>
                    <div className="small-text">
                        Northern Filter Supplies.
                    </div>
                </div>
            </div>
            <div className="col-md-4" data-wow-offset="10" data-wow-duration="1.75s">
                <div id="feedback">
                    <div className="feedback">
                        <div>
                            <img src="images/companies/5.png" alt=""></img>
                        </div>
                        <p>
                            "The consultancy provided by Box Concepts was extremely useful and professional. The 
                            structure development approach and mentoring of our new developers was very well received.
                            Also the level of documentation that was provided was excellent and will put us in a good position to 
                            further develop the application framework."
                        </p>
                        <h5 className="colored-text">- Project Manager</h5>
                        <div className="small-text">
                            Car Care Plan
                        </div>
                    </div>
                </div>
            </div>                
          </div>
      </div>
  </div>
);

const Contact = (props) => (
  <Layout title={(props.content.node && props.content.node.title)}>
  <Email/>
  <Map/>
  <Testamonials/>
  </Layout>
);

export default withPhenomicApi(Contact, props => ({
  content: query({
    path: "site",
    id: "contact"
  })
}));