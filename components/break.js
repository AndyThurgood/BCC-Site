import React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

const Break = () =>(
    <div className="stats">
        <div className="overlay-layer-2">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-4 col-sm-4 col-xs-4 single-stats">
                        <div className="icon-container">
                            <i className="white-text fa fa-calendar fa-3x"></i>
                        </div>
                        <h4 className="white-text">15+</h4>
                        <p className="uppercase transparent-text small-text">
                            Years of technical expertise
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 single-stats transparent-border-left transparent-border-right">
                        <div className="icon-container">
                            <i className="white-text fa fa-signal fa-3x"></i>
                        </div>
                        <h4 className="white-text">Track Record</h4>
                        <p className="uppercase transparent-text small-text">
                            History of cross domain success
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 single-stats">
                        <div className="icon-container">
                            <i className="white-text fa fa-user-plus fa-3x"></i>
                        </div>
                        <h4 className="white-text">Skilled Consultants</h4>
                        <p className="uppercase transparent-text small-text">
                            Leading and Augmenting your teams
                        </p>
                    </div>
                </div>
                <div className="stats-footer">
                    <div className="long-transparent-line">
                    </div>
                    <p className="white-text">
                        We can help you - <Link to="/contact" className="white-text strong inpage-scroll">Contact Us »</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Break;