import './index.scss'
import logoS from '../../../assets/images/logo.jpg'
import { useRef } from 'react';

function Logo() {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    return(
        <div className='logo-container'>
            <img ref={solidLogoRef} src={logoS} className="solid-logo"  alt="photo" />
            <svg 
                width="559pt"
                height="897pt"
                version='1.0'
                viewBox='0 0 559 897'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g 
                    className='svg-container'
                    transform='translate(0 457) scale(.1 -.1)'
                    fill='none'
                >

                </g>

            </svg>
        </div>
    );

}

export default Logo