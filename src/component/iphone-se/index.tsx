import { useEffect, useState } from 'react';
import './style.scss';
export default function IphoneSE() {
    const[scrolled, setScrolled]=useState(0);
    useEffect(() => {
        const container = document.querySelector('.right') as HTMLDivElement;
        const scrollhandle = (e: Event) => {
            
            let noStickyOffset = document.documentElement.clientHeight * 2
            let scrolled = container.scrollTop / noStickyOffset
            setScrolled(scrolled);

        }
        window.addEventListener('scroll', scrollhandle, true)
        return () => {
            window.removeEventListener('scroll', scrollhandle, true)
        }
    }, [])
    return (
        <div className="iphone-se-container">
            <div className={`sticky-container ${scrolled>1?'no-sticky':''}`}>
                <div className="iphone black">
                    <h3>
                        Comes in Black.<br />
                        {'\u00A0'}
                    </h3>
                    <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_black__b06syayq94wi_medium_2x.png" alt="" />
                </div>
                <div className="iphone white" style={{clipPath:`inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`}} >
                    <h3>
                        Comes in Black.<br />
                        <span>White</span>
                    </h3>
                    <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_white__drv9fwq9vzwy_medium_2x.png" alt="" />
                </div>
                <div className="iphone red" style={{clipPath:`inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
}}>
                    <h3>
                        Comes in Black.<br />
                        White. <span>And Pow.</span>
                    </h3>
                    <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_red__eqfv1ongy282_medium_2x.png" alt="" />
                </div>
            </div>
        </div>
    )
}