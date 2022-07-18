import React from 'react';
import './Landing.css';
import logoLight from '../../assets/images/logos/logo-light.png';
import logoDark from '../../assets/images/logos/logo-dark.png';
// const images = [{ logoLight }, { logoDark }];



const Landing = () => {
    return (
        <>
            <div id='login'>
                <div className='column__extraLarge column__large column__medium column__small login__wrapper'>
                    <div className='row h-100-vh justify-content-xxl-center justify-content-xl-center justify-content-md-center align-items-xxl-center align-items-xl-center align-items-md-center'>
                        <aside className='bg-color no--sidebar aside'>
                            <div className='row h-100' style={{ width: '100% !important' }}>
                                {/* Left Side Container */}
                                <div className='column__extraLarge column__large column__medium column__small'>
                                    <div className='container__login h-100 w-100 d-flex flex-column'>
                                        <div className='d-flex h-100 flex-column justify-content-center'>
                                            {/* Logo */}
                                            <div className='d-flex mb-3 mt-5 mt-xl-0 mt-lg-0'>
                                                <img
                                                    src={logoDark}
                                                    id='logo'
                                                    alt={"logo"}
                                                    className='flex-fill'
                                                />
                                            </div>
                                            <div className='alert alert-success text-center'>
                                                <b>New Server!</b>{' '}

                                                {' '}
                                                Join our{' '}
                                                <a
                                                    className='discord--link'
                                                    href='https://discord.gg/'
                                                >
                                                    Discord-Server
                                                </a>{' '}
                                                to stay up-to-date.

                                            </div>
                                            {/* Login Form */}
                                            {/* <LoginForm /> */}
                                        </div>
                                        {/* Register Button */}
                                        {/* <div className='d-inline-flex justify-content-center mt-4 mt-xl-0 mt-lg-0 pb-3'>
											<a
												id='register-anchor'
												href='https://habborp.co/register'
												target='_blank'
												without
												rel='noreferrer'
											>
												Don't have an account?{' '}
												<span className='text--blue'>Join HabboRP</span>
											</a>
										</div> */}
                                    </div>
                                </div>
                                {/* End of Left Top Half */}
                                {/* Carousel */}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing