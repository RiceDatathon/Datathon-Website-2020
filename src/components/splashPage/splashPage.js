import React from 'react';
import { Box, Image } from 'rebass';
import './splashPage.css';
import datathonLogo from '../../static/datathon-logo.png'

const screenHeight = window.outerHeight - 100

const SplashPage = () => (
    <div className='splashpage' style={{height: screenHeight}}>
        <Box width={[0.9, 0.7, 0.7, 0.7]} ml='auto' mr='auto' className='datathon-logo'>
            <Image src={datathonLogo} width={1} />
        </Box>
        <h4 className='date'>Jan 24st - 25th 2020</h4>
        <Box width={[0.4, 0.3, 0.3, 0.15]} ml='auto' mr='auto' mt={40}>
            <a>
                <div className='intro-link'>
                    <h4 className='intro-link-text'>Sign Up</h4>
                </div>
            </a>
        </Box>
        <Box width={[0.7, 0.27]} ml='auto' mr='auto' mt={20}>
            <a>
                <div className='intro-link'>
                    <h4 className='intro-link-text'>Become a Sponsor</h4>
                </div>
            </a>
        </Box>
    </div>
)

export default SplashPage;