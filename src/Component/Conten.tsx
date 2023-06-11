import React from 'react'

function Banner() {
    return (
        <>
            <div className='shrink-0'>
                <div className=' opacity-70 bg-hero-pattern h-screen bg-no-repeat bg-cover bg-center bg-fixed flex items-center max-[600px]:bg-scroll max-[600px]:h-64 '>
                    <div className=' bg-black text-white text-3xl ml-40% p-3 tracking-.5rem max-[600px]:ml-1/3  max-[700px]:text-3xl'>MY <span className='max-[700px]:hidden'>WEBSITE</span> LOGO</div>
                </div>
                <div className='w-1/2  mx-auto my-auto  md:w-2/3 sm:w-11/12 max-[600px]:w-full px-3 '>
                    <div>
                        <h1 className='text-center mt-20'>ABOUT ME</h1>
                        <p className='text-center m-10'>I love photography</p>
                        <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex max-[600px]:flex-col'>
                        <div className='p-5' >
                            <b className='text-center block w-full  '>


                                <i className="fa fa-user ml-4" aria-hidden="true"></i> &nbsp;
                                <span>My Name</span>
                            </b>
                            <img src='https://www.w3schools.com/w3images/avatar_hat.jpg' alt='' className='w-500 p-5 opacity-60 hover:opacity-100 ' />
                        </div>
                        <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                    <p className='text-center'>
                        Im really good at:
                    </p>
                    <p>
                        <i className="fa fa-camera" aria-hidden="true"></i> &nbsp;
                        <span className='tracking-.5rem'> Photography</span>
                    </p>
                    <div className='bg-slate-300 w-full my-5'>
                        <p className='text-emerald-50 text-center bg-black w-9/1 p-2 '>90%</p>
                    </div>
                    <p>
                        <i className="fa fa-laptop" aria-hidden="true"></i> &nbsp;
                        <span className='tracking-.5rem'> Web Design</span>
                    </p>
                    <div className='bg-slate-300 w-full my-5'>
                        <p className='text-emerald-50 text-center bg-black w-8/1 p-2'>80%</p>
                    </div>
                    <p>
                        <i className="fa fa-picture-o" aria-hidden="true"></i> &nbsp;
                        <span className='tracking-.5rem'> Photoshop</span>
                    </p>
                    <div className='bg-slate-300 w-full my-5'>
                        <p className='text-emerald-50 text-center bg-black w-7/1 p-2'>70%</p>
                    </div>
                </div>
                <div className=' bg-balck1 text-blue-50 h-40 flex justify-around items-center text-center mt-20 sm: w-full '>
                    <p>
                        <span>14 +</span> <br></br>
                        <span>partner</span>
                    </p>
                    <p>
                        <span>55 +</span> <br></br>
                        <span>Project Done</span>
                    </p>
                    <p>
                        <span>89 +</span> <br></br>
                        <span>Happy Client</span>
                    </p>
                    <p>
                        <span>150 +</span> <br></br>
                        <span>Meetings</span>
                    </p>
                </div>
                <div className='bg-bg2 h-screen bg-no-repeat bg-cover bg-fixed bg-center opacity-70  flex items-center max-[600px]:h-64 max-[600px]:bg-scroll  '>
                    <p className='text-white ml-40% tracking-.5rem text-5xl sm:text-4xl max-[600px]:text-4xl max-[600px]:ml-1/3'>PORTFOLIO</p>
                </div>
                <div>
                    <p className='text-center p-4 mt-20'>MY WORK</p>
                    <p className='text-center p-4 opacity-60'><em>Here are some of my latest lorem work ipsum tipsum.<br></br>
                        Click on the images to make them bigger
                    </em></p>
                </div>
                <div className='grid grid-cols-4 w-1/2 md:w-2/3 mx-auto gap-3 sm:w-11/12 max-[600px]:grid-cols-1 max-[600px]:w-11/12'>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p1.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p2.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p3.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p4.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p5.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p6.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p7.jpg' alt=''></img></p>
                    <p className='mx-auto'><img src='https://www.w3schools.com/w3images/p8.jpg' alt=''></img></p>
                </div>
                <div className='text-center p-10'>
                    <input type='button' value='LOAD MORE' className='bg-button p-2 w-48 h-14'></input>
                </div>
                <div className='bg-bg3 flex items-center bg-no-repeat bg-cover bg-center opacity-70 bg-fixed h-screen max-[600px]:bg-scroll max-[600px]:h-64'>
                    <p className='text-white ml-40% tracking-.5rem text-5xl sm:text-4xl max-[600px]:text-4xl max-[600px]:ml-1/3'>CONTACT</p>
                </div>
                <div className='w-1/2 md:w-2/3 mx-auto max-[600px]:w-11/12'>
                    <div className='mb-14'>
                        <h1 className='text-center p-5 text-3xl sm:text-2xl'>WHERE I WORK</h1>
                        <p className='text-center p-5'><i>I'd love your feedback!</i></p>
                    </div>
                    <div className=' grid-cols-2 grid text-2x sm:w-11/12 max-[700px]:grid-cols-1'>
                        <div className='mr-22 sm:mr-4'>
                            <img src='https://www.w3schools.com/w3images/map.jpg' alt='' className='w-full ml-5 object-cover p-3 max-[700px]:p-0 max-[700px]:ml-0'></img>
                        </div>
                        <div className='max-[700px]:mt-4'>
                            <p className='mb-5' >
                                <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
                                <span> Chicago, US</span>
                            </p>
                            <p className='mb-5'>
                                <i className="fa fa-phone-square" aria-hidden="true"></i> &nbsp;
                                <span> Phone: +00 151515</span>
                            </p>
                            <p className='mb-10'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                                <span> Email: mail@mail.com</span>
                            </p>
                            <p className='mb-5'>Swing by for a cup of &nbsp;
                                <i className="fa fa-coffee" aria-hidden="true"></i>
                                , or leave me a note:
                            </p>
                            <div className=''>
                                <div className='flex max-[600px]:flex-col '>
                                    <input type='type' placeholder='Name' className='border-solid border-2 border-gray-500 m-1 w-1/2  max-[600px]:w-full '></input>
                                    <input type='type' placeholder='Email' className='border-solid border-2 border-gray-500 m-1  w-1/2 max-[600px]:w-full '></input>
                                </div>
                                <input type='type' placeholder='Message' className='border-solid border-2 border-gray-500 m-1 w-full'></input>
                            </div>
                            <div className=' text-right mt-4'>
                                <button className='bg-black  text-zinc-50  h-14 p-3 sm:h-10 sm:p-2'>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    <span>SEND MESSAGE</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner