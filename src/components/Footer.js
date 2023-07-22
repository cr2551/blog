import './Footer.css';
import {FaGithub, FaGoogle, FaTwitter,  FaLinkedin, FaLinkedinIn} from 'react-icons/fa';

export const Footer = () => {
    return (

        <footer className='footer'>
          <div className='icons'>
            <FaGithub className='icon github'></FaGithub>
            <FaGoogle className='icon google'></FaGoogle>
            <FaTwitter className='icon twitter'></FaTwitter>
            <FaLinkedin className='icon linkedin'></FaLinkedin>
            <FaLinkedinIn className='icon lnIn'></FaLinkedinIn>
          </div>  
        </footer>

    );
};