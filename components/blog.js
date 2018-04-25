import React from "react";
import { withPhenomicApi, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";

const Blog = (props) => (
  <Layout title={(props.content.node && props.content.node.title)}>
    <div className="grey-bg">
      <div className="container">
      <div className="section-header">
        <div class="small-text-medium uppercase colored-text">
        {(props.content.node && props.content.node.intro)}
        </div>
        <h2 class="dark-text">{(props.content.node && props.content.node.title)}</h2>
        <div class="colored-line">
        </div>
        <div class="sub-heading">
        {props.content.node && props.content.node.date} by {props.content.node && props.content.node.author}
        </div>
      </div>
      </div>
    </div>
    
    <div className="white-bg">
      <div className="container">
      {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
      </div>
    </div>
  </Layout>
);

export default withPhenomicApi(Blog, props => ({
  content: query({
    path: "blog",
    id: props.params.splat
  })
}));