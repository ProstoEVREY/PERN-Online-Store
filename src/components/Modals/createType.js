import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show,onHide}) => {
    const [value,setValue] = useState('')
     const addType = () =>{
         createType({name:value}).then(data => {
             setValue('')
             onHide()
         })
     }

    return (
       <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Dialog>
                <Modal.Header className="align-self-center" closeButton>
                    <Modal.Title>Add new type</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder = {"Enter the type name"} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <div className='justify-content-start'>
                        <Button className='mr-1' onClick={onHide} variant="outline-danger">Close</Button>
                        <Button onClick={addType} variant="outline-success">Add</Button>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
       </Modal>
    );
};

export default CreateType;