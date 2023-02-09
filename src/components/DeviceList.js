import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.devices.length ?
                device.devices.map(device =>
                <DeviceItem key={device.id} device = {device}/>)
                    : <h2> No Devices available</h2>
            }
        </Row>
    );
});

export default DeviceList;