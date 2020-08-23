import React, { Fragment, useState } from "react";
import Icon from "../../components/UI/Icon";
import WhatweDo from "../../components/WhatweDo";
import Head from "next/head";
import next from "next";

const index = (props) => {
    const [formData, setFormData] = useState({
        currentStep: 1,
        name: "",
        email: "",
        phone: "",
        budget: "",
        servicesChoosen: [],
        message: "",
    });
    const {
        name,
        email,
        phone,
        budget,
        servicesChoosen,
        message,
        currentStep,
    } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onServiceChange = (e) => {
        const newList = [...servicesChoosen];

        const index = newList.indexOf(e.target.value);
        if (index > -1) {
            newList.splice(index, 1);
        } else {
            newList.push(e.target.value);
        }
        setFormData({ ...formData, servicesChoosen: [...newList] });
        // console.log(formData)
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const next = () => {
        if (currentStep < 4) {
            let current = currentStep + 1;
            setFormData({ ...formData, currentStep: current });
            console.log(formData, "next");
        }
    };
    const previous = () => {
        if (currentStep > 1) {
            let current = currentStep - 1 ;
            setFormData({ ...formData, currentStep: current });
            console.log(formData);
        }
    };
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
            </Head>
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
                            <h1>
                                GET A <span>QUOTE</span>
                            </h1>
                        </div>
                        <form
                            className="col-md-9 rdform"
                            onSubmit={(e) => onSubmit(e)}
                        >
                            <Step1
                                name={name}
                                onChange={onChange}
                                currentStep={currentStep}
                                email={email}
                                phone={phone}
                                next={next}
                            />
                            <Step2
                                name={name}
                                onServiceChange={onServiceChange}
                                currentStep={currentStep}
                                servicesChoosen={servicesChoosen}
                                previous={previous}
                                next={next}
                            />
                            <Step3
                                name={name}
                                onChange={onChange}
                                currentStep={currentStep}
                                servicesChoosen={servicesChoosen}
                                previous={previous}
                                next={next}
                                budget={budget}
                            />
                            <Step4
                                name={name}
                                email={email}
                                phone={phone}
                                onChange={onChange}
                                currentStep={currentStep}
                                servicesChoosen={servicesChoosen}
                                previous={previous}
                                next={next}
                                budget={budget}
                                onSubmit={onSubmit}
                            />
                            
                        </form>
                        <div className="col-md-3 contact-step">
                            <div className="swrap active">
                                <div className="step-index">1</div>
                                <div className="step-text">
                                    <div className="head">
                                        1. HOW CAN WE REACH YOU?
                                    </div>
                                    <div>
                                        Let us know the best way to get in
                                        touch.
                                    </div>
                                </div>
                            </div>
                            <div className="swrap">
                                <div className="step-index">2</div>
                                <div className="step-text">
                                    <div className="head">
                                        2. HOW CAN WE HELP YOU?
                                    </div>
                                    <div>
                                        Choose from a list of available
                                        services.
                                    </div>
                                </div>
                            </div>
                            <div className="swrap">
                                <div className="step-index">3</div>
                                <div className="step-text">
                                    <div className="head">
                                        3. WHAT IS YOUR BUDGET?
                                    </div>
                                    <div>
                                        Tell us about your budget and we'll
                                        recommend the best option.
                                    </div>
                                </div>
                            </div>
                            <div className="swrap">
                                <div className="step-index">4</div>
                                <div className="step-text">
                                    <div className="head">
                                        4. WHAT IS YOUR IDEA?
                                    </div>
                                    <div>
                                        In a few words, briefly describe your
                                        project or idea.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatweDo />
        </Fragment>
    );
};
function Step1({ name, email, phone, currentStep, next, onChange }) {
    if (currentStep !== 1) {
        return null;
    }
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="name">
                    Name<span>*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={(e) => onChange(e)}
                    value={name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Email<span>*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={(e) => onChange(e)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">
                    Phone<span>*</span>
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    onChange={(e) => onChange(e)}
                    value={phone}
                />
            </div>
            <div className="mar-20"></div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                    <button
                        type="button"
                        disabled={name && email && phone ? false : true}
                        className="btn btn-lg btn-primary"
                        onClick={() => next()}
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </Fragment>
    );
}
function Step2({ previous, next, onServiceChange, currentStep, servicesChoosen }) {
    if (currentStep !== 2) {
        return null;
    }
    return (
        <Fragment>
            <div className="step-2">
                <ul className="class-form-radio row">
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Web Development"
                                defaultChecked={servicesChoosen.includes("Web Development")}
                                onChange={(e) =>
                                    onServiceChange(e)
                                }
                            />
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/code.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>Web Development</b>
                                </div>
                                <div className="radio-style-text-description">
                                    Frontend and Backend
                                    Development - NodeJS,
                                    Python, Ruby on Rails,
                                    ReactJS, GraphQL
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Mobile Development"
                                defaultChecked={servicesChoosen.includes("Mobile Development")}
                                onChange={(e) =>
                                    onServiceChange(e)
                                }
                            />
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/smartphone.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>
                                        Mobile Development
                                    </b>
                                </div>
                                <div className="radio-style-text-description">
                                    iOS and Android Native
                                    APP development -
                                    Objective-C, Swift, Java
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="UI/UX Design"
                                defaultChecked={servicesChoosen.includes("UI/UX Design")}
                                onChange={(e) =>
                                    onServiceChange(e)
                                }
                            />
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/computer.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>UI/UX Design</b>
                                </div>
                                <div className="radio-style-text-description">
                                    Intuitive &amp; Engaging
                                    Designs - Wireframing,
                                    High-Fidelity
                                    Prototyping
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Animated Videos"
                                defaultChecked={servicesChoosen.includes("Animated Videos")}
                                onChange={(e) =>
                                    onServiceChange(e)
                                }
                            />
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/magnifying-glass.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>Creative Marketing</b>
                                </div>
                                <div className="radio-style-text-description">
                                    Animated Explainer
                                    Videos - Short animated
                                    video used to explain a
                                    product/service
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Hosting Solution"
                                defaultChecked={servicesChoosen.includes("Hosting Solution")}
                                onChange={(e) =>
                                    onServiceChange(e)
                                }
                            />
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/vagueness.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>Hosting Solutions</b>
                                </div>
                                <div className="radio-style-text-description">
                                    Secure Web Hosting -
                                    Dedicated Servers,
                                    Server Clusters, Cloud
                                    Server, Linux, Windows
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="col-md-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Other"
                                defaultChecked={servicesChoosen.includes("Other")}
                                onChange={(e) =>onServiceChange(e)}/>
                            <div className="radio-style">
                                <div className="radio-style-img">
                                    <img
                                        src="img/contact/keyword.svg"
                                        style={{
                                            width: "3em",
                                        }}
                                    />
                                </div>
                                <div className="radio-style-text">
                                    <b>Other</b>
                                </div>
                                <div className="radio-style-text-description">
                                    Emerging Technologies -
                                    Artificial Intelligence,
                                    Computer Vision, Deep
                                    Learning, Chatbots
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="mar-20"></div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        onClick={previous}
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        disabled={servicesChoosen.length > 0 ? false : true}
                        className="btn btn-lg btn-primary"
                        onClick={() => next()}
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </Fragment>
    );
}
function Step3({  currentStep, next, onChange, previous, budget }) {
    if (currentStep !== 3) {
        return null;
    }
    return(
        <Fragment>
            <div className="step-3">
                <ul className="class-form-radio class-form-radio2">
                    <li>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                onChange={(e) =>
                                    onChange(e)
                                }
                                defaultChecked={budget === "$0-10K"}
                                value="$0-10K"
                            />
                            <div className="radio-style-budget">
                                <div>$0 - 10K</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="$10-50K"
                                onChange={(e) =>
                                    onChange(e)
                                }
                                defaultChecked={budget === "$10-50K"}
                            />
                            <div className="radio-style-budget">
                                <div>$10 - 50K</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="$50-100K"
                                onChange={(e) =>
                                    onChange(e)
                                }
                                defaultChecked={budget === "$50-100K"}
                            />
                            <div className="radio-style-budget">
                                <div>$50 - 100K</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="$100K+"
                                defaultChecked={budget === "$100K+"}
                                onChange={(e) =>
                                    onChange(e)
                                }
                            />
                            <div className="radio-style-budget">
                                <div>$100K+</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                name="budget"
                                value="Unsure"
                                defaultChecked={budget === "Unsure"}
                                onChange={(e) =>
                                    onChange(e)
                                }
                            />
                            <div className="radio-style-budget">
                                <div>Unsure</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="mar-20"></div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        onClick={previous}
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        disabled={budget ? false : true}
                        className="btn btn-lg btn-primary"
                        onClick={() => next()}
                    >
                        NEXT
                    </button>
                    {/* <button type='submit'
                        disabled={(name && email && budget && phone && servicesChoosen.length > 0) ? false : true}
                        className="btn btn-lg btn-primary">NEXT</button> */}
                </div>
            </div>
        </Fragment>
    )
}
function Step4({ currentStep, onChange, previous, budget, message, name, email, phone, servicesChoosen, onSubmit }) {
    if (currentStep !== 4) {
        return null;
    }
    return (
        <Fragment>
            <div className="step-4">
                <div className="form-group">
                    <label htmlFor="message">
                        Your Message<span>*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                        onChange={(e) => onChange(e)}
                        value={message}
                    ></textarea>
                </div>
            </div>
            <div className="mar-20"></div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        onClick={previous}
                    >
                        BACK
                    </button>
                    
                    <button type='submit'
                        disabled={(name && email && budget && phone && servicesChoosen.length > 0) ? false : true}
                        className="btn btn-lg btn-primary" >Submit</button>
                </div>
            </div>
        </Fragment>
    )
}
export default index;
