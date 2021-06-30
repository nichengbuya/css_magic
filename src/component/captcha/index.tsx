import { useEffect } from "react"
import './style.scss';
import img from '../../assets/southpark.jpg';
export default function Captcha() {

    useEffect(() => {
        let shouldMove = false
        const captcha = document.querySelector('#captcha') as HTMLDivElement
        const handle = document.querySelector('#handle') as HTMLDivElement;
        const button = document.querySelector('#handle span') as HTMLDivElement

        button.addEventListener('mousedown', (e) => {
            shouldMove = true
        })
        const moveHandle = (e: MouseEvent) => {
            if (shouldMove) {
                const offsetLeft = handle.getBoundingClientRect().left
                const buttonWidth = button.getBoundingClientRect().width
                captcha.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`)
            }
        }
        window.addEventListener('mousemove', moveHandle)
        const upHandle = (e: MouseEvent) => {
            if (shouldMove) {
                const finalOffset = e.clientX - handle.getBoundingClientRect().left

                if (finalOffset >= 420 && finalOffset <= 440) {
                    // pass
                    captcha.classList.add('passed')
                } else {
                    // failed
                    captcha.style.setProperty('--moved', '0px')
                }

                shouldMove = false
            }
        }
        window.addEventListener('mouseup', upHandle)
        return () => {
            window.removeEventListener('mousemove', moveHandle)
            window.removeEventListener('mouseup', upHandle)
        }
    }, [])

    return (
        <div className="background">
            <div id="captcha" style={{ background: `url(${img})`, backgroundSize: 'cover' }}>
                <div id="handle">
                    <span></span>
                </div>
            </div>
        </div>

    )
}