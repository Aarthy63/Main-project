import React, { useEffect, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import qr_code from '../../assets/images/qr_code.jpg';
import { useHandleTwofactorAuthMutation, useTwoFactorverifySecretCodeMutation } from '../redux/api';
import { toast } from 'react-toastify';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from '../../assets/images/logo.png';


const schema = Yup.object().shape({
    authCode: Yup.string().required('authCode is required').min(6, 'Enter Six Digits Number').max(6, 'Invalid AuthCode').trim(),
    authCode: Yup.string().required('authcode is required')
});

const Securitypage = () => {
    const navigate = useNavigate()
    // get USerID in LocalStoage
    const getLoggedUserId = localStorage.getItem('verifyUserId')
    // Two Factor authcation RTK query
    const [handleTwoFactorAuth] = useHandleTwofactorAuthMutation()
    const [verifySecretCode] = useTwoFactorverifySecretCodeMutation()


    const [twoFactorStatus, setTwoFactorStatus] = useState(false)
    const [twoFactorAuthCode, setTwoFactorAuthCode] = useState('')
    const [twoFactorAuthQrCode, setTwoFactorAuthQrCode] = useState('')

    // React-hook-form Data function
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    useEffect(() => {
        const handleTwoFactorauthData = async () => {
            try {
                const getTwoFactorReponse = await handleTwoFactorAuth({ id: getLoggedUserId })
                const verifyTwoFactorStatus = getTwoFactorReponse.data.twoFactorAuthData
                    .twoFactorAuth
                // check Status
                if (verifyTwoFactorStatus) {
                    setTwoFactorStatus(verifyTwoFactorStatus)
                    return
                }
                const secretKey = getTwoFactorReponse.data.twoFactorAuthData
                    .temp_secret.base32
                const qrCodeImg = getTwoFactorReponse.data.twoFactorAuthData
                    .temp_secret.otpauth_url
                setTwoFactorAuthCode(secretKey)
                setTwoFactorAuthQrCode(qrCodeImg)

            } catch (error) {
                console.log(error);
            }
        }
        handleTwoFactorauthData()
    }, [])

    const verifyTwoFactorAuth = async (data) => {
        const verifyReponse = await verifySecretCode({ id: getLoggedUserId, token: data.authCode })
        console.log(verifyReponse);
        if (verifyReponse.error) {
            return toast.error(verifyReponse.error.data.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }

        localStorage.setItem('verifyUserId', verifyReponse.data)
        localStorage.setItem('token', verifyReponse.data.token)
        console.log(verifyReponse.data.twoFactorAuth);
        navigate('/dashboard')
    }

    return (
        <Fragment>
            <Header />
            <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
                <div className="container container-1200">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="LgnPg">
                                <img src={logo} className="img-fluid d-block mx-auto" />
                                <div className='row'>
                        <div className="fs-20 fw-700 mb-3">Account Security</div>
                        <div className="fs-14 fw-400 text-gray mb-4">You need to enable Two-Factor Authentication  [Enable Google 2FA]
                            You can set Two-Factor Authentication
                            ON / OFF, when you Login or Withdraw the funds in [ Account Security Settings ]
                        </div>
                        </div>
                        <div className="col-md-3">
                     
                        <div className="fs-16 fw-400 mb-2">You Google Authenticator Code is
                        <div className='row'>
                            </div>
                        </div>
                       
                            
                        <div className="bordercard text-center p-4">
                            <div className="fs-20 fw-600 mb-4">Enable Google 2FA</div>
                            <div className="text-center">
                                <img alt="" src={qr_code} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                        <div className="fs-14 fw-400 text-gray mb-4">Take care of this code! To verify, please enter your one-time password from Google Authenticator</div>
                        <div className="fs-20 fw-600 mb-3">{twoFactorStatus ? '' : twoFactorAuthCode}</div>
                        {
                            twoFactorStatus ?
                                <div>
                                    <button className="btn btn-primary py-2" type="submit">Disable</button>
                                </div>
                                :
                                (
                                    <>
                                        <form onSubmit={handleSubmit(verifyTwoFactorAuth)}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group formInputs mb-4">
                                                        <input
                                                            name='authCode'
                                                            className={`form-control  ${errors?.authCode ? 'is-invalid' : ''
                                                                }`}
                                                            {...register('authCode')}
                                                            type="text"
                                                            placeholder="Enter 2FA code"
                                                        />
                                                        <div className="invalid-feedback ">
                                                            <span style={{ margin: "13px" }}>{errors?.authCode?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn btn-primary py-2" type="submit">Enable</button>
                                            </div>
                                        </form>
                                    </>
                                )

                        }
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </Fragment>
    );
}

export default Securitypage;