import { useEffect, useState } from 'react';
import './style.scss'
export default function LoadBar() {
    const [isFinish, setIsFinish] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsFinish(true);
        }, 3000)
    })
    return (
        <div className="load-bar-container">
            <div className="load-bar-mask">
                <div className="process-container">
                    <div className="process-bar"
                        style={{
                            animation: `${isFinish ? 'finish 1s linear forwards' :
                                'load 2s linear forwards'} `
                        }}></div>
                </div>
            </div>
        </div>
    )
}