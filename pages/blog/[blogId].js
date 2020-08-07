import React, { Fragment } from 'react'
import WhatweDo from '../../components/WhatweDo';
import Icon from '../../components/UI/Icon';
import Head from 'next/head';
import {POST_ID} from '../../queries/postId';
import {Query} from "@apollo/react-components";

const PostId = () => {
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
        console.log(data);
        return (
          <Fragment>
            <h1>Search Result</h1>
            
          </Fragment>
        );
    }
    return (
        <Fragment>
            <Head>
                <title>Techie IT:Blog</title>
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
            <div className="main-contain">
			<div className="container">
			<div className="row blog-detail">
				<Query query={POST_ID} variables={{ id: 1 }}>
				{
                    ( {loading, error, data, refetch}) => {
                        return renderPage(loading, error, data, refetch)
                    }
                }
				</Query>
				<div className="col-md-3">
					<div className="date">
						29
						<span>April, 2020</span>
					</div>
				</div>
				<div className="col-md-9">
					<h1>How to Build a Successful Ecommerce Marketing Strategy</h1>
					<p><a href="#">Last year</a>, consumers spent over $600B with U.S. online merchants, up 14.9% from the previous year according to the US Department of Commerce. With the current economic climate and COVID-19 fallout, eCommerce is growing faster than ever. Online retailers are thriving as people in lockdown are shopping for almost everything online.<br/><br/>In an interview for Adweek, Geoff Tanner, Smucker’s Chief Marketing and Commercial Officer commented that the company is seeing its online sales increase by 66% in the last three months. To maintain momentum, Smucker plans to continue building a strong eCommerce strategy. “When the crisis hit, the two opportunities that really emerged for our business were the return to mainstream brands and the growth of online,” says Tanner.<br/><br/>We are currently seeing some of the biggest CPG names go directly to consumers by investing in their brands online, advertising on platforms where people shop, optimizing content, and search engine results.<br/><br/>Consequently, this is a great time to rethink your eCommerce marketing strategy and reevaluate your web experiences. If designed well, your website can become your ultimate sales tool, open to the world 24/7 while driving real business growth and new customer revenues.</p>
					<img src="img/blog/1.jpg" className="img-fluid" alt="" />
					<p>To analyze your website, start by examining your business model. It’s imperative to evaluate your key goals, strengths, challenges, and target audiences. Be precise and put together in-depth information about your market positioning.</p>
				</div>
			</div>
			<div className="col-md-12 blog">
				<div className="row">
					<div className="col-md-3">
						<div className="date">
							19
							<span>June, 2020</span>
						</div>
						<h4><a href="#">Why Keywords Are No Longer the  Center Stage of SEO</a></h4>
						<p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
					</div>	
					<div className="col-md-3">
						<div className="date">
							19
							<span>June, 2020</span>
						</div>
						<h4><a href="#">Why Keywords Are No Longer the  Center Stage of SEO</a></h4>
						<p><a href="#">What you need to know, in a nutshell, is this: If you want to rank high on Google search results, your marketing efforts need to focus on your users and their customer journey. SEO boils down to producing quality content and aligning your information with the way users search online.</a></p>
					</div>	
				</div>
			</div>
		</div>
		
	</div>
            <WhatweDo/>
        </Fragment>
    )
}

export default PostId;
