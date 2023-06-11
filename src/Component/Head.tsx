import React, { useState } from 'react'
import { useScrolly } from './Scrolly'
function Head() {
    const [scrollY] = useScrolly();
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
   

    return (
        <div className={scrollY < 80 ? 'flex fixed justify-between w-full  top-0 h-10  transition-all z-10 p-4  ' :
            'flex fixed justify-between w-full  top-0 h-10  transition-all z-10 p-4 bg-white '} >
            <div className='flex '>
                <p>HOME</p>
                <div onClick={handleToggle}>
                    <i className="fa fa-bars hidden absolute right-10 max-[600px]:block" aria-hidden="true"></i>
                </div>
                {
                    toggle ? (
                        <ul className='flex max-[600px]:hidden'>
                            <li className='ml-7'><a href='/ #'>
                                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                ABOUT</a></li>
                            <li className='ml-7'><a href='/ #'>
                                <i className="fa fa-th " aria-hidden="true"></i>&nbsp;
                                PORTFOLIO
                            </a></li>
                            <li className='ml-7'><a href='/ #'>
                                <i className="fa fa-envelope-o text-black" aria-hidden="true"></i>&nbsp;
                                CONTACT
                            </a></li>
                        </ul>) : 
                         (
                            <ul className='bg-white fixed w-full mt-12 mr-10 max-[600px]:block'>
                                <li className='ml-7'><a href='/ #'>
                                    ABOUT</a></li>
                                <li className='ml-7'><a href='/ #'>
                                    PORTFOLIO
                                </a></li>
                                <li className='ml-7'><a href='/ #'>
                                    CONTACT
                                </a></li>
                                <li className='ml-7'><a href='/ #'>
                                    SEARCH
                                </a></li>
                            </ul>)
                }
            </div>
            <div>
                <i className="fa fa-search mr-10  max-[600px]:hidden lg:block" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Head