import * as React from "react";
import { withPhenomicApi, query, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout";

const BlogList = (props) => (
<Layout title="Our Blog">
<div className="brief grey-bg text-left">
    <div className="container">
        <div className="row">
            <div className="col-md-6 content-section">
                <div className="small-text-medium uppercase colored-text">
                    Our Blog
                </div>
                <h2 className="text-left dark-text">
                    Latest Insights
                </h2>
                <div className="colored-line-left"></div>
                <div className="text-left">
                    <p>
                        The latest thoughts and rambling from the box concepts team
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="brief white-bg">
    <div className="container">
        <div className="row">
            {props.posts.node && props.posts.node.list.map(blogPost => (
                 <div key={blogPost.id} className="col-md-4">       
                 <Link to={"/blog/" + blogPost.id}>
                     <div className="single-service border-bottom-hover">
                         <div className="row">
                             <img src={blogPost.image}></img>
                         </div>
                         <div className="row">
                         <div className="col-md-12 content-section">
                             <div className="small-text-medium uppercase colored-text">
                                 {blogPost.date} by <strong>{blogPost.author}</strong>
                             </div>
                             <h3 className="text-left dark-text">
                                 {blogPost.title}
                             </h3>
                             <div className="colored-line-left"></div>
                             <div className="text-left">
                                 <p className="dark-text">
                                 "{blogPost.intro}"
                                 </p>
                             </div>
                             <div className="bc-button-outline btn btn-outline-primary">Read More</div>
                         </div>
                         </div>
                     </div>
                 </Link>
             </div>
                ))}
            </div>
    </div>
</div>
</Layout>
)

export default withPhenomicApi(BlogList, props => ({
    posts: query({
      path: "blog",
      after: props.params.after
    })
  }));