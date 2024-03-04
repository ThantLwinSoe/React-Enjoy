import './index.scss'
import logoTitle from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnnimatedLetter/AnimatedLetter';
import Logo from './Logo/Logo';

function Home() {

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['T','h','a','n','t',' ','L','w','i','n',' ','S','o','e']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

/** 
     useEffect( () => {
         return setTimeout( () => { 
             setLetterClass('text-animate-hover')
         }, 4000)
     }, [])
*/
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span> 
                    <br />
                    
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <img src={logoTitle} alt="Developer" />
                    
                    <AnimatedLetter letterClass={letterClass}
                    strArray={nameArray} idx={15}/>
                    
                    <br />
                    
                    <AnimatedLetter letterClass={letterClass}
                    strArray={jobArray} idx={22}/>
                </h1>
                <h2>Full Stack Developer/ Java Developer</h2>
                <Link to="/contact" className='flat-botton'>CONTACT ME</Link>
            </div>

            <Logo/>
        </div>
    );
}

export default Home

