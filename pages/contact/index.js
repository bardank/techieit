import React, { Fragment } from 'react'
import Icon from '../../components/UI/Icon';
import WhatweDo from '../../components/WhatweDo';
import Head from 'next/head';

const index = props => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rd-pag">
                        <span>Request A Quote</span>
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
                        <h1>GET A <span>QUOTE</span></h1>
                    </div>
                    <form className="col-md-9 rdform">
                        <div className="form-group">
                            <label htmlFor="name">Name<span>*</span></label>
                            <input type="text" name="name" id="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email<span>*</span></label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone<span>*</span></label>
                            <input type="text" name="phone" id="phone" className="form-control"/>
                        </div>
                        <div className="step-2">
                            <ul className="class-form-radio row">
                                <li className="col-md-4">
                                    <label>
                                        <input type="checkbox" value="Web Development"/>
                                        <div className="radio-style">
                                            <div className="radio-style-img">
                                                <img src="img/contact/code.svg" style={{width: "3em"}}/></div>
                                            <div className="radio-style-text"><b>Web Development</b></div>
                                            <div className="radio-style-text-description">Frontend and Backend Development -
                                                NodeJS, Python, Ruby on Rails, ReactJS, GraphQL</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="col-md-4"><label><input type="checkbox" value="Mobile Development"/>
                                        <div className="radio-style">
                                            <div className="radio-style-img">
                                                <img src="img/contact/smartphone.svg" style={{width: "3em"}} />
                                            </div>
                                            <div className="radio-style-text"><b>Mobile Development</b></div>
                                            <div className="radio-style-text-description">iOS and Android Native APP development
                                                - Objective-C, Swift, Java</div>
                                        </div>
                                    </label></li>
                                <li className="col-md-4">
                                    <label>
                                        <input type="checkbox" value="UI/UX Design" />
                                        <div className="radio-style">
                                            <div className="radio-style-img">
                                                <img src="img/contact/computer.svg" style={{width: "3em"}} />
                                            </div>
                                            <div className="radio-style-text"><b>UI/UX Design</b></div>
                                            <div className="radio-style-text-description">Intuitive &amp; Engaging Designs -
                                                Wireframing, High-Fidelity Prototyping</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="col-md-4">
                                    <label>
                                        <input type="checkbox" value="Animated Videos" />
                                        <div className="radio-style">
                                            <div className="radio-style-img">
                                                <img src="img/contact/magnifying-glass.svg" style={{width: "3em"}} />
                                            </div>
                                            <div className="radio-style-text"><b>Creative Marketing</b></div>
                                            <div className="radio-style-text-description">Animated Explainer Videos - Short
                                                animated video used to explain a product/service</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="col-md-4">
                                    <label>
                                        <input type="checkbox" value="Hosting Solutions" />
                                        <div className="radio-style">
                                            <div className="radio-style-img"><img src="img/contact/vagueness.svg"
                                                    style={{width: "3em"}}/></div>
                                            <div className="radio-style-text"><b>Hosting Solutions</b></div>
                                            <div className="radio-style-text-description">Secure Web Hosting - Dedicated
                                                Servers, Server Clusters, Cloud Server, Linux, Windows</div>
                                        </div>
                                    </label></li>
                                <li className="col-md-4"><label><input type="checkbox" value="Other"/>
                                        <div className="radio-style">
                                            <div className="radio-style-img">
                                                <img src="img/contact/keyword.svg" style={{width : "3em"}} /></div>
                                            <div className="radio-style-text"><b>Other</b></div>
                                            <div className="radio-style-text-description">Emerging Technologies - Artificial
                                                Intelligence, Computer Vision, Deep Learning, Chatbots</div>
                                        </div>
                                    </label></li>
                            </ul>
                        </div>
                        <div className="step-3">
                            <ul className="class-form-radio class-form-radio2">
                                <li><label><input type="radio" name="budget" value="$0 - 10K"/>
                                        <div className="radio-style-budget">
                                            <div>$0 - 10K</div>
                                        </div>
                                    </label></li>
                                <li><label><input type="radio" name="budget" value="$10 - 50K"/>
                                        <div className="radio-style-budget">
                                            <div>$10 - 50K</div>
                                        </div>
                                    </label></li>
                                <li><label><input type="radio" name="budget" value="$50 - 100K"/>
                                        <div className="radio-style-budget">
                                            <div>$50 - 100K</div>
                                        </div>
                                    </label></li>
                                <li><label><input type="radio" name="budget" value="$100K+"/>
                                        <div className="radio-style-budget">
                                            <div>$100K+</div>
                                        </div>
                                    </label></li>
                                <li><label><input type="radio" name="budget" value="Unsure" />
                                        <div className="radio-style-budget">
                                            <div>Unsure</div>
                                        </div>
                                    </label></li>
                            </ul>
                        </div>
                        <div className="step-4">
                            <div className="form-group">
                                <label for="message">Your Message<span>*</span></label>
                                <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="mar-20"></div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-between">
                                <div className="btn btn-lg btn-outline-primary">BACK</div>
                                <div className="btn btn-lg btn-primary">NEXT</div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-3 contact-step">
                        <div className="swrap active">
                            <div className="step-index">1</div>
                            <div className="step-text">
                                <div className="head">1. HOW CAN WE REACH YOU?</div>
                                <div>Let us know the best way to get in touch.</div>
                            </div>
                        </div>
                        <div className="swrap">
                            <div className="step-index">2</div>
                            <div className="step-text">
                                <div className="head">2. HOW CAN WE HELP YOU?</div>
                                <div>Choose from a list of available services.</div>
                            </div>
                        </div>
                        <div className="swrap">
                            <div className="step-index">3</div>
                            <div className="step-text">
                                <div className="head">3. WHAT IS YOUR BUDGET?</div>
                                <div>Tell us about your budget and we'll recommend the best option.</div>
                            </div>
                        </div>
                        <div className="swrap">
                            <div className="step-index">4</div>
                            <div className="step-text">
                                <div className="head">4. WHAT IS YOUR IDEA?</div>
                                <div>In a few words, briefly describe your project or idea.</div>
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


export default index
