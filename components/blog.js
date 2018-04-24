import React from "react";
import { withPhenomicApi, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";

const Blog = (props) => (
  <Layout title={(props.content.node && props.content.node.title)}>
    <h4>{(props.content.node && props.content.node.title)}</h4>
    <p>{(props.content.node && props.content.node.subtitle)}</p>
    <p>{(props.content.node && props.content.node.author)}</p>
    {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
  </Layout>
);

export default withPhenomicApi(Blog, props => ({
  content: query({
    path: "blog",
    id: props.params.splat
  })
}));