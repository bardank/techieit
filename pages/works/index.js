import React,{Fragment} from 'react'
import WhatweDo from '../../components/WhatweDo';
import Icon from '../../components/UI/Icon';
import Head from 'next/head';

const index = () => {
    return (
        <Fragment>
            <Head>
                <title>Techie IT:Blog</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rd-pag">
                        <span>Works</span>
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
                            <h1>Work we've <br/><span>spent many nights </span></h1>
                        </div>
                    </div>
                </div>
                <div className="container mtb">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-showcase">
                                <div className="w-background"></div>
                                <div className="w-text">
                                    <h3>KathmanduPati</h3>
                                    <p>A News Portal Based in Nepal.</p>
                                </div>
                                <img src="/img/work/utsav.png" className="img-fluid" alt=""/>
                            </div>
                            <div className="w-showcase">
                                <div className="w-background" style={{background:"#3498db"}}></div>
                                <h3>KathmanduPati</h3>
                                <p></p>
                                <img src="/img/bondix-mockup-intro.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatweDo/>
        </Fragment>
    )
}

export default index;
