import React,{Fragment} from 'react'
import WhatweDo from '../../components/WhatweDo';
import Icon from '../../components/UI/Icon';
import {ALL_POSTS} from '../../queries/posts';
import {Query} from "@apollo/react-components";
import Head from 'next/head';

function Index(props) {
    const renderPage = function (loading, error, data, refetch) {
        if (loading) {
          return (
            <div>
              loading data
            </div>
          );
        }
        if (error) {
          console.log(error);
          return <h1>error</h1>;
        }
        console.log(data.posts.edges);
        return (
          <Fragment>
            <h1>Search Result</h1>
            
          </Fragment>
        );
    }
    return(
        <Fragment>
                <Head>
                    <title>Techie IT : Blog</title>
                </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rd-pag">
                        <span>Blogs</span>
                        <span>
                            <Icon/>
                        </span>
                    </div>
                </div>
            </div>
            <Query query={ALL_POSTS}>
                {
                    ({loading, error, data, refetch}) => {
                        return renderPage(loading, error, data, refetch)
                    }
                }
            </Query>
            <div className="main-contain">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 title">
                            <h1>B<span>logs</span></h1>
                        </div>
                    </div>
                    <div className="row blog">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="date">
                                        19
                                        <span>June, 2020</span>
                                    </div>
                                    <h4><a href="#">Why Keywords Are No Longer the  Center Stage of SEO</a></h4>
                                    <p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
                                </div>	
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <a href="#"><img src="img/blog/1.png" className="img-fluid" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <a href="#"><img src="img/blog/1.png" className="img-fluid" alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="date">
                                        29
                                        <span>April, 2020</span>
                                    </div>
                                    <h4><a href="#">How to Build a  Successful Ecommerce Marketing Strategy </a></h4>
                                    <p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
                                </div>	
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="date">
                                        19
                                        <span>June, 2020</span>
                                    </div>
                                    <h4><a href="#">Why Keywords Are No Longer the  Center Stage of SEO</a></h4>
                                    <p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
                                </div>	
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <a href="#"><img src="img/blog/1.png" className="img-fluid" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <a href="#"><img src="img/blog/1.png" className="img-fluid" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="date">
                                        29
                                        <span>April, 2020</span>
                                    </div>
                                    <h4><a href="#">How to Build a  Successful Ecommerce Marketing Strategy </a></h4>
                                    <p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatweDo/>
        </Fragment>
    )
}
export default Index;