import * as React from "react";
import { withPhenomicApi, query, Link } from "@phenomic/preset-react-app/lib/client";

const BlogView = (props) => (
<div className="brief white-bg text-left">
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
        <div className="row">
            {props.posts.node && props.posts.node.list.map(blogPost => (
                <div key={blogPost.id} className="col-md-4">       
                    <Link to={"/blog/" + blogPost.id}>
                        <div className="single-service border-bottom-hover">
                            <div className="row">
                                <h4 className="dark-text">{blogPost.title}</h4>
                                <img src={blogPost.image}></img>
                            </div>
                            <div className="row">
                                <p>{blogPost.date} by <strong>{blogPost.author}</strong></p>
                                <div className="colored-line-left"></div>
                                <p className="dark-text">"{blogPost.intro}"</p>
                            </div>
                            <div className="row">
                                <div className="bc-button-outline btn btn-outline-primary">Read More</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        <div className="center-text">
            <Link to="/blog" className="bc-button btn btn-primary btn-lg">More...</Link>
        </div>
    </div>
</div>
)

export default withPhenomicApi(BlogView, props => ({
    posts: query({
      path: "blog",
      limit: 3
    })
  }));