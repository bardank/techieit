import React, { Fragment } from "react";
import WhatweDo from "../../components/WhatweDo";
import Icon from "../../components/UI/Icon";
import { ALL_POSTS } from "../../queries/posts";
import { Query } from "@apollo/react-components";
import Head from "next/head";
import moment from "moment";
import Link from "next/link";
import Spinner from '../../components/UI/Spinner';

function Index(props) {
    const renderPage = function (loading, error, data, refetch) {
        if (loading) {
            return <Spinner />;
        }
        if (error) {
            console.log(error);
            return <h1 className="d-none">error</h1>;
        }
        console.log(data.posts.nodes);
        return (
            <Fragment>
                {data.posts.nodes.map((post, i) => {
                    if (i % 2 === 0) {
                        return (
                            <div className="col-md-6" key={post.postId}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="date">
                                            {moment(post.date).date()}
                                            <span>
                                                {moment()
                                                    .month(
                                                        moment(
                                                            post.date
                                                        ).month()
                                                    )
                                                    .format("MMM")}
                                                , {moment(post.date).year()}
                                            </span>
                                        </div>
                                        <h4>
                                            <Link
                                                href="/blog/[blogId]"
                                                as={`/blog/${post.postId}`}
                                                passHref
                                            >
                                            <a>{post.title}</a>
                                            </Link>
                                        </h4>
                                        <p
                                            className=""
                                            dangerouslySetInnerHTML={{
                                                __html: post.content,
                                            }}
                                        ></p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-area">
                                            {post.featuredImage
                                                .mediaItemUrl && (
                                                <Link
                                                    href="/blog/[blogId]"
                                                    as={`/blog/${post.postId}`}
                                                    passHref
                                                >
                                                    <a>
                                                        <img
                                                            src={
                                                                post
                                                                    .featuredImage
                                                                    .mediaItemUrl
                                                            }
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="col-md-6" key={post.postId}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="img-area">
                                            {post.featuredImage
                                                .mediaItemUrl && (
                                                <Link
                                                    href="/blog/[blogId]"
                                                    as={`/blog/${post.postId}`}
                                                    passHref
                                                >
                                                <a >
                                                    <img
                                                        src={
                                                            post.featuredImage
                                                                .mediaItemUrl
                                                        }
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </a>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="date">
                                            {moment(post.date).date()}
                                            <span>
                                                {moment()
                                                    .month(
                                                        moment(
                                                            post.date
                                                        ).month()
                                                    )
                                                    .format("MMM")}
                                                , {moment(post.date).year()}
                                            </span>
                                        </div>
                                        <h4>
                                            <Link
                                                href="/blog/[blogId]"
                                                as={`/blog/${post.postId}`}
                                                passHref
                                            >
                                            <a>{post.title}</a>
                                            </Link>
                                        </h4>
                                        <p
                                            className=""
                                            dangerouslySetInnerHTML={{
                                                __html: post.content,
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </Fragment>
        );
    };
    return (
        <Fragment>
            <Head>
                <title>Techie IT : Blog</title>
            </Head>
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
                    <div className="row">
                        <div className="col-md-12 title">
                            <h1>
                                B<span>logs</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row blog">
                        <Query query={ALL_POSTS}>
                            {({ loading, error, data, refetch }) => {
                                return renderPage(
                                    loading,
                                    error,
                                    data,
                                    refetch
                                );
                            }}
                        </Query>
                    </div>
                </div>
            </div>
            <WhatweDo />
        </Fragment>
    );
}
export default Index;
