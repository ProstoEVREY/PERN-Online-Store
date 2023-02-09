import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context)
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            if (isLogin){
                data = await login(email, password)
            }
            else{
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }
        catch(e){
            alert(e.response.data.message)
        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight-54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto"> {isLogin ? 'Authorization' : 'Registration'}</h2>
            <Form className="d-flex flex-column align-items-center">
                <Form.Control
                    className="mt-3"
                placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <Form.Control
                    className="mt-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? <div className="pl-3 mt-4">
                        Not a user? <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
                    </div> : <div className="pl-3 mt-4">
                            Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                        </div>}
                    <Button variant="outline-success" className="mt-3 align-self-end m-3"
                            onClick={click}
                    >
                        {isLogin ? "Log In" : "Register"}
                    </Button>
                </Row>
            </Form>
            </Card>
            </Container>
    );
});

export default Auth;