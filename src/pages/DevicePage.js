import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Image, Button, Card} from "react-bootstrap";
import star from '../Assets/star.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevices} from "../http/deviceAPI";
const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevices(id).then(data => setDevice(data))
    },[])

    return (
        <Container className='mt-3'>
            <Row className="flex-d justify-content-between">
                <Col md={4}>
                    <Image width={300} height={300} src={'http://localhost:8080/' +  device.img}/>
                </Col>
                <Col md={4}>
                    <Row  className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{background:`url(${star}) no-repeat center center`, width:240, height:240, backgroundSize: 'color', fontSize:63}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width:300, height:300,fontSize:32, border:'5px solid lightgray'}}>
                        <h3>Starting at: ${device.price}</h3>
                        <Button variant={'outline-dark'}>Add to the Basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Specifications</h1>
                {device.info.map((info, index) =>
                <Row key = {info.id} style={{background:index % 2 === 0 ? 'Lightgray' : 'transparent', padding:10}}>
                    {info.title}: {info.description}
                </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;