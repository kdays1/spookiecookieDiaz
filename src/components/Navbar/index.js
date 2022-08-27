import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/products'>
                        Products
                    </NavLink>
                    <NavLink to='/howtobuy'>
                        How to Buy
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                    <NavLink to='/cart'>
                        Cart
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;