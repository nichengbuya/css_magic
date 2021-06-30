import { useEffect, useState } from 'react';
import './style.scss';

export default function AppleA13() {
    const[scale,setScale] = useState(1);
    useEffect(() => {
        let isPinned = false;
        const h2 = document.querySelector('h2') as HTMLHeadingElement;
        const imac = document.getElementsByClassName('imac')[0] as HTMLDivElement;
        const observer =new IntersectionObserver(([e])=>{
            isPinned = e.intersectionRatio<1
            e.target.classList.toggle('panning',isPinned);
        },{threshold:[1]});
        observer.observe(h2);

        const scrollHandel = ()=>{
            if(isPinned){
                let height = parseInt( getComputedStyle(h2).getPropertyValue('height') +
                parseInt(getComputedStyle(h2).getPropertyValue('margin-bottom'))
                );
                let marginTop = parseInt(getComputedStyle(h2).getPropertyValue('margin-top'));
                let scrolled = (imac.scrollTop - marginTop) / height;
                setScale(1 - scrolled);
            }
        }
        imac.addEventListener('scroll',scrollHandel)
        return ()=>{
            observer.unobserve(h2);
            imac.removeEventListener('scroll',scrollHandel);
        }

    },[])
    return (
        <div className="imac">
            <h2 style={{transform:`scale(clamp(0.15,${scale},1))`}} >Only 11.5mm. Now that's thin.</h2>
            <div className="image">
                <img src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/design-hero/large/flow/flow_startframe.jpg" alt="" />
            </div>
        </div>
    )
}