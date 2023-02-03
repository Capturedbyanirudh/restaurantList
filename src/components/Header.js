import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        // html code
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img className='border rounded-5'
                        alt="no image"
                        src='https://t3.ftcdn.net/jpg/00/96/40/18/240_F_96401810_LO67BgmOuktElpee2xNF7hOVIbQC2nvD.jpg'
                        width='40'
                        height='40'
                    />{' '}
                    <span className='mx-2 '> Chefs Circle</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header