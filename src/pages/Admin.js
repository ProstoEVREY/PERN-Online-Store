import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/Modals/createBrand";
import CreateType from "../components/Modals/createType";
import CreateDevice from "../components/Modals/createDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={'outline-dark'}
                className='mt-4'
                onClick={() => setDeviceVisible(true)}>
                Add device
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4'
                onClick={() => setTypeVisible(true)}>
                Add type
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4'
                onClick={() => setBrandVisible(true)}>
                Add brand
            </Button>
            <CreateBrand  show = {brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show = {typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show = {deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;