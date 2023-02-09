import React from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Image} from "react-bootstrap";
import star from '../Assets/star.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = observer(({device}) => {
    const navigate = useNavigate()
    return (
       <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
           <Card style ={{width:50, cursor:'pointer'}} border={'light'} className='mt-4'>
                 <Image width={150} height={150} src={'http://localhost:8080/' + device.img}/>
               <div className="d-flex justify-content-between text-black-50 mt-1  align-items-center">
                   <div>Samsung</div>
                   <div className="d-flex align-items-center">
                       <div>{device.rating}</div>
                               <Image width={13} height={13} src={star} />
                   </div>
               </div>
               <div className="d-flex justify-content-between">
                   {device.name}
               </div>
       </Card>
       </Col>
    );
});

export default DeviceItem;