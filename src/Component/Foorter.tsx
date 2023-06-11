import React from 'react'

function Foorter() {
    return (
        <div className='bg-balck1 p-24 text-center text-white text-2xl mt-40 max-[600px]:p-10'>
            <a href='/#' className='bg-white p-4 text-black sm:p-2 opacity-60'>
                <i className="fa fa-arrow-up mr-4" aria-hidden="true"></i>
                <span>To the Top</span>
            </a>
            <div className='text-3xl my-6'>
            <i className="fa fa-facebook ml-4" aria-hidden="true"></i>
            <i className="fa fa-instagram ml-4" aria-hidden="true"></i>
            <i className="fa fa-telegram ml-4" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p ml-4" aria-hidden="true"></i>
            <i className="fa fa-twitter ml-4" aria-hidden="true"></i>
            </div>
            <p>
                Powered by
                <a href='https://www.w3schools.com/w3css/default.asp'> w3.css</a>
            </p>
        </div>
    )
}

export default Foorter