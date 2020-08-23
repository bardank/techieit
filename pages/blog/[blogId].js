import React, { Fragment ,useEffect } from 'react'
import WhatweDo from '../../components/WhatweDo';
import Icon from '../../components/UI/Icon';
import Head from 'next/head';
import {POST_ID} from '../../queries/postId';
import {Query} from "@apollo/react-components";
import moment from "moment";
import Spinner from '../../components/UI/Spinner';

const BlogId = (props) => {
    let {blogId} = props.query
    let url;
    useEffect(() => {
        
        let uri = window.location.pathname;
        url = `https://techieit.vercel.com/blog/${props.query.id}`;
        return () => {};
    }, []);
	const renderPage = function (loading, error, data, refetch) {
        if (loading) {
          return (
            <div>
              <Spinner/>
            </div>
          );
        }
        if (error) {
          console.log(error);
          return <h1>error</h1>;
        }
         console.log(data);

        return (
            <Fragment>
                <Head>
                    <meta property="og:url" content={`${url}`} />
                    <meta property="og:title" content={`${data.post.title}`} />
                    <meta
                        property="og:description"
                        content={`${data.post.content}`}
                    />

                    <meta
                        property="og:image"
                        content={`${data.post.featuredImage.mediaItemUrl}`}
                    />
                    <title>Blog</title>
                </Head>
                <div className="row blog-detail">
                    <div className="col-md-3">
                        <div className="date">
                            {moment(data.post.date).date()}
                            <span>{moment().month(moment(data.post.date).month()).format("MMM")}, {moment(data.post.date).year()}</span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h1>{data.post.title}</h1>
                        <p
                            className=""
                            dangerouslySetInnerHTML={{
                                __html: data.post.content,
                            }}
                        ></p>
                    </div>
                </div>
            </Fragment>
        );
    }
    return (
        <Fragment>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rd-pag">
                        <span>Blogs</span>
                        <span>
                            <Icon />
                        </span>
                    </div>
                </div>
            </div>
            <div className="main-contain">
                <div className="container">
                    <Query query={POST_ID} variables={{ id: blogId }}>
                        {({ loading, error, data, refetch }) => {
                            return renderPage(loading, error, data, refetch);
                        }}
                    </Query>
                    
                    <div className="col-md-12 blog">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="date">
                                    19
                                    <span>June, 2020</span>
                                </div>
                                <h4>
                                    <a href="#">
                                        Why Keywords Are No Longer the Center
                                        Stage of SEO
                                    </a>
                                </h4>
                                <p>
                                    <a href="#">
                                        What you need to know, in a nutshell, is
                                        this: If you want to rank high on Google
                                        search results, your marketing efforts
                                        need to focus on your users and their
                                        customer journey. SEO boils down to
                                        producing quality content and aligning
                                        your information with the way users
                                        search online.
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-3">
                                <div className="date">
                                    19
                                    <span>June, 2020</span>
                                </div>
                                <h4>
                                    <a href="#">
                                        Why Keywords Are No Longer the Center
                                        Stage of SEO
                                    </a>
                                </h4>
                                <p>
                                    <a href="#">
                                        What you need to know, in a nutshell, is
                                        this: If you want to rank high on Google
                                        search results, your marketing efforts
                                        need to focus on your users and their
                                        customer journey. SEO boils down to
                                        producing quality content and aligning
                                        your information with the way users
                                        search online.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatweDo />
        </Fragment>
    );
}
BlogId.getInitialProps = async (props) => {
    console.log(props.query)
    return { query: props.query }
}
export default BlogId;
