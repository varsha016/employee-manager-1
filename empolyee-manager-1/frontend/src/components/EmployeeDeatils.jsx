import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteEmployee } from '../store/employeeAction'

export default function EmployeeDeatils({ selectedEmployee, setshowEditCard, setselectedEmployee }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    return <>
        <Card>
            <Card.Header className='d-flex justify-content-between'>details
                <Button type="button" className="btn btn-warning" onClick={e => setshowEditCard(true)}>Edit</Button>
                <Button type="button" class="btn btn-outline-danger " onClick={e => setShow(true)}>Delete</Button>
            </Card.Header>

            <Card.Body>
                <div className='d-flex  justify-content-center'>

                    <img src={selectedEmployee.profile} className='rounded-circle border border-3 border-primary ' height={100} width={100} alt="" />
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h3>{selectedEmployee.name}</h3>
                        <p>{selectedEmployee.email}</p>
                        <p>{selectedEmployee.gender}</p>
                        <p className='text-primary'>Role: <strong>{selectedEmployee.role}</strong> </p>
                        <p className='text-warning'>Status: <strong>{selectedEmployee.active ? "Active" : "InActive"}</strong> </p>
                    </li>
                </ul>
            </Card.Body>

        </Card>

        {/* ////// */}



        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Are you sure</h1>
                <div className='btn-group w-100'>
                    <button type="button" data-bs-dismiss="modal" onClick={e => {
                        dispatch(deleteEmployee(selectedEmployee.id))
                        setselectedEmployee(false)

                    }} class="btn btn-danger w-100">YES</button>
                    <Button type="button" data-bs-dismiss="modal" class="btn btn-success w-100 ">NO</Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={e => setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={e => setShow(false)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
