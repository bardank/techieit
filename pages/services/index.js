import React, { Fragment } from 'react'
import WhatweDo from '../../components/WhatweDo';
import Head from 'next/head';
import Icon from '../../components/UI/Icon';
const index = () => {
    return (
        <Fragment>
            <Head>
              <title>Techie IT:Services</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rd-pag">
                        <span>Services</span>
                        <span>
                            <Icon />
                        </span>
                    </div>
                </div>
            </div>
        <div className="main-contain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 title ">
                        <h1>A <br/> <span>Full-Service</span> <br/> Digital Agency</h1>
                        <h2 className='service-animation'>Techie IT offers everything from web design, corporate identity, digital marketing, mobile, and brand positioning.</h2>
                        <p >Techie IT Pvt. Ltd. is a Nepali IT company that specializes in providing IT support and solution to individuals as well as small and medium businesses.<br/><br/>Established in 2015 with aim to be “your enthusiastic supporter”, we value the development of long term relationships with our clients. We always aim to demonstrate integrity and reliability, and to ultimately become a trusted partner.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <SvgComponent/>
                    </div>
                </div>
                <div className="services">
                    <div className="row d-flex align-items-center" style={{position: "relative"}}>
                      <div className="col-md-6" >
                        <img src="./img/services/design-wire-sk.svg" className="img-fluid" id="design-wire-sk" />
                      </div>
                      <div className="col-md-6" style={{position:"absolute"}} >
                        <img src="./img/services/design-wire.svg" id="design-wire"  />
                      </div>
                      <div className="col-md-6 parallex">
                        <h2>Responsive UI/UX Design</h2>
                        <p>We recognize the fact that usability, functionality, and visualization are three of the most important factors when designing interfaces or websites. Using this strategy, we work with you to ensure that your messaging and marketing goals are realized with the designs we create.</p>
                      </div>
                    </div>
                    <div className="row d-flex align-items-center" style={{position: "relative"}}>
                    <div className="col-md-6 text-right parallex">
                      <h2>Website Development</h2>
                      <p>With professional designers and developers are dedicated to creating powerful, effective and engaging websites. We specialize in developing international standard compliant websites that are compatible with the latest devices.</p>
                    </div>
                    <div className="col-md-6" style={{position:"relative"}}>
                      <img src="/img/services/webdevelopment-wire.svg" id='webdevelopment-wire' style={{position:"absolute"}} className="img-fluid" />
                      <img src="/img/services/webdevelopment-wire-sk.svg" id='webdevelopment-wire-sk' className="img-fluid" />
                    </div>
                  </div>
                </div>	
            </div>
            {/* </div> */}
	    </div>
      <WhatweDo />
    </Fragment>
    )
}

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 864 895"
      width={864}
      height={895}
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h864v895H0z" />
        </clipPath>
        <clipPath id="prefix__h">
          <path
            fill="#fff"
            d="M269.25-150.5c0 7.042-5.708 12.75-12.75 12.75H-128c-7.042 0-12.75-5.708-12.75-12.75s5.708-12.75 12.75-12.75h384.5c7.042 0 12.75 5.708 12.75 12.75"
          />
        </clipPath>
        <clipPath id="prefix__g">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__f">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__e">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__d">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
        <clipPath id="prefix__c">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
        <clipPath id="prefix__b">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <g display="block">
          <path
            fill="#F95645"
            d="M726.5 256.046c9.382 0 17 8.384 17 18.71v355.488c0 10.326-7.618 18.71-17 18.71h-611c-9.382 0-17-8.384-17-18.71V274.756c0-10.326 7.618-18.71 17-18.71h611z"
          />
          <path
            d="M726.5 256.046c9.382 0 17 8.384 17 18.71v355.488c0 10.326-7.618 18.71-17 18.71h-611c-9.382 0-17-8.384-17-18.71V274.756c0-10.326 7.618-18.71 17-18.71h611z"
            fill="none"
          />
        </g>
        <g
          clipPath="url(#prefix__e)"
          transform="translate(74.501 -78.375) scale(.87975)"
          display="block"
        >
          <path
            strokeLinecap="round"
            stroke="#FFF"
            strokeWidth={11.743500000000001}
            d="M426.259 646.546h155.666"
            fill="none"
            display="block"
          />
          <path
            strokeLinecap="round"
            stroke="#FFF"
            strokeWidth={8.6119}
            d="M424.259 677.546h240.448M424.259 702.546h222.894"
            fill="none"
            opacity={0.47}
            display="block"
          />
        </g>
        <g
          clipPath="url(#prefix__h)"
          transform="translate(461 443.5)"
          display="block"
        >
          <path
            fill="#FFF"
            d="M262.25-150.5c0 6.899-5.601 12.5-12.5 12.5h-364c-6.899 0-12.5-5.601-12.5-12.5s5.601-12.5 12.5-12.5h364c6.899 0 12.5 5.601 12.5 12.5z"
          />
          <path
            d="M262.25-150.5c0 6.899-5.601 12.5-12.5 12.5h-364c-6.899 0-12.5-5.601-12.5-12.5s5.601-12.5 12.5-12.5h364c6.899 0 12.5 5.601 12.5 12.5z"
            fill="none"
          />
        </g>
      </g>
    </svg>
  )
}
export default index
