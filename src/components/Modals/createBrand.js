import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show,onHide}) => {

    const [value,setValue] = useState('')
    const addBrand = () =>{
        createBrand({name:value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Dialog>
                <Modal.Header className="align-self-center" closeButton>
                    <Modal.Title>Add new brand</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder = {"Enter the brand name"} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <div className='justify-content-start'>
                        <Button className='mr-1' onClick={onHide} variant="outline-danger">Close</Button>
                        <Button onClick={addBrand} variant="outline-success">Add</Button>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default CreateBrand;