import React, { Fragment } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import termsBanner from '../../assets/images/termsBanner.png';
import logo from '../../assets/images/logo.png';
import aadar from '../../assets/images/aadar.png';
 
 const KYC = (props) => {
  
    return (
      <Fragment>
        <Header />
        <div className="Main-section cmsSec" style={{paddingTop:'80px'}}>
            <div className="container container-1200">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="LgnPg">
                            <img src={logo} className="img-fluid d-block mx-auto"/>
                            <h3>KYC</h3>
                            <div className="form-group">
                                <label>Select Proof</label>
                                <select className="form-control">
                                    <option>Licence</option>
                                    <option>Aadar Card</option>
                                    <option>Pan Card</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>PAN Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Front Side ID Proof</label>
                                <div className="UpldDvPf">
                                    <input type="file" className="form-control" />
                                    <img src={aadar} className="img-fluid " style={{marginTop: '-42px'}}/>
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label>Back Side ID Proof</label>
                                <div className="UpldDvPf">
                                    <input type="file" className="form-control" />
                                    <img src={aadar} className="img-fluid " style={{marginTop: '-42px'}}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>KYC Selfie With ID Proof</label>
                                <div className="UpldDvPf">
                                    <input type="file" className="form-control" />
                                    <img src={aadar} className="img-fluid " style={{marginTop: '-42px'}}/>
                                </div>
                            </div>
                            <button className="btn LGn-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<Footer />
      </Fragment>
    );
    
    }

export default KYC;