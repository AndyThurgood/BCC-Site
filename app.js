import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import "bootstrap-css-only/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles.css";
import "./blue.css";
import About from "./components/about";
import Home from "./components/home";
import Services from "./components/services";
import Contact from "./components/contact";
import Blog from "./components/blog";
import BlogList from "./components/bloglist";

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/blog" component={BlogList} />
    <Route path="/blog/*" component={Blog} />
  </Router>
));