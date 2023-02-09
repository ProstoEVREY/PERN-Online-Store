import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import cart from '../Assets/cart.png'
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = ()=> {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" expand="lg">
        <Container>
                <NavLink style = {{color:'white'}} to = {SHOP_ROUTE}> BuyDevice Store </NavLink>
            {user.isAuth ? <Nav className="ml-auto " style={{color:'white'}}>
                <div className="pr-3">
                    <Image height={40} width={40} src = {cart} onClick={()=> navigate(BASKET_ROUTE)} style={{cursor:'pointer'}}/>
                </div>
                <Button variant={"outline-light"} onClick={()=> navigate(ADMIN_ROUTE)}> Admin Panel </Button>
                <Button variant={"outline-light"} className="ml-2" onClick={() => logOut()}> Log out </Button>
            </Nav> :
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => {
                        navigate(LOGIN_ROUTE)
                    }}> Authorization </Button>
                </Nav>}
        </Container>
</Navbar>
    );
})

export default NavBar;