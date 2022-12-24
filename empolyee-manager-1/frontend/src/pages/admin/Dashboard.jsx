import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import EmployeeDeatils from '../../components/EmployeeDeatils';
import { addEmployee, getEmployee, updateEmployee } from '../../store/employeeAction';

export default function Dashboard() {
    const [show, setShow] = useState(false)
    const initialData = {
        name: "kate",
        email: "kate@gmail.com",
        profile: "https://media.istockphoto.com/id/1371895204/photo/young-woman-on-sofa-looking-at-smartphone-relaxing-at-home.jpg?s=612x612&w=is&k=20&c=BgM4MzT3t8hPjQbaISLgts73RddiG4xJVo74yzlRq_E=",
        gender: "female",
        active: true,
        role: "backend"
    }
    const [employeeData, setemployeeData] = useState(initialData)

    const { employee, employeeAdded, updated, deleteEmployees, loading } = useSelector(state => state.allEmpolyee)

    const [selectedEmployee, setselectedEmployee] = useState()
    const [showEditCard, setshowEditCard] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addEmployee(employeeData))
        setemployeeData(initialData)
        setShow(false)
        // console.log("ddd");
    }

    const handleUpdateSubmit = e => {
        e.preventDefault()
        dispatch(updateEmployee(selectedEmployee))
        setshowEditCard(false)
        // console.log("ddd");
    }

    useEffect(() => {
        dispatch(getEmployee())

    }, [employeeAdded, updated, deleteEmployees])
    useEffect(() => {

        if (employeeAdded) {
            toast.success("employee Add SuccessFully")
        }

    }, [employeeAdded])

    return <>


        <pre>
            <p>
                {/* {JSON.stringify(employeeData, null, 2)} */}
                {/* {JSON.stringify(selectedEmployee, null, 2)}    */}

                {/* for jyacya var click tyach data yenya sathi selectedEmployee */}
            </p>
        </pre>

        <div className="constainer">
            <div className="d-flex justify-content-end">
                <button type="button"
                    onClick={e => setShow(true)}
                    className="my-4 btn btn-outline-primary">Add Employee</button>

            </div>
            <div className="row">
                {loading && <div className=' spinner-border '></div>}

                <div className="col-sm-4">

                    <div className="card">
                        <div className="card-header">Emplyees</div>
                        <div className="card-body">
                            <ul className="list-group">
                                {
                                    employee.map(item => <li key={item.id} className="list-group-item d-flex justify-content-between">
                                        <img src={item.profile} alt="User Profile" height={60} width={60} />
                                        <h3>{item.name}</h3>
                                        <button type="button"
                                            onClick={e => {
                                                setselectedEmployee(item)
                                                setshowEditCard(false)
                                            }}
                                            className="btn btn-warning">Details</button>
                                    </li>
                                    )}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="col-sm-4">
                    {
                        selectedEmployee
                            ? <EmployeeDeatils
                                selectedEmployee={selectedEmployee}
                                setshowEditCard={setshowEditCard}
                                setselectedEmployee={setselectedEmployee}
                            />
                            : <h3>No Employee selected</h3>
                    }

                </div>

                <div className="col-sm-4">
                    {
                        showEditCard
                            ? <div className="card">
                                <div className="card-header">Edit</div>
                                <div className="card-body">
                                    <form onSubmit={handleUpdateSubmit}>


                                        <div>
                                            <label htmlFor="name" className="form-label">First name</label>
                                            <input type="text"
                                                value={selectedEmployee.name}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, name: e.target.value })}
                                                className="form-control" id="name" placeholder="Enter Your Name" />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please choose a username.</div>
                                        </div>

                                        <div className='my-3'>
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text"
                                                value={selectedEmployee.email}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, email: e.target.value })}
                                                className="form-control" id="email" placeholder="Enter Your email" />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please choose a email</div>
                                        </div>

                                        <div className='my-3'>
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="text"
                                                value={selectedEmployee.image}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, image: e.target.value })}
                                                className="form-control" id="image" placeholder="Enter Your image" />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please choose a Image</div>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" value="male" type="radio"
                                                checked={selectedEmployee.gender === "male" ? true : false}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, gender: e.target.value })}
                                                name="gender" id="male" />
                                            <label className="form-check-label" htmlFor="male">
                                                male
                                            </label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" value="female" type="radio"
                                                checked={selectedEmployee.gender === "female" ? true : false}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, gender: e.target.value })}
                                                name="gender" id="female" />
                                            <label className="form-check-label" htmlFor="female">
                                                female
                                            </label>
                                        </div>

                                        <div className="form-check form-switch my-3">
                                            <input className='form-check-input'

                                                checked={selectedEmployee.active ? true : false}
                                                onChange={e => setselectedEmployee({
                                                    ...selectedEmployee,
                                                    active: selectedEmployee.active ? false : true
                                                })}
                                                type="checkbox"
                                                id="active"
                                            />
                                            <label
                                                className='form-check-lable'
                                                htmlFor="active">Active</label>
                                        </div>

                                        <select className="form-select"
                                            value={selectedEmployee.role}
                                            onChange={e => setselectedEmployee({ ...selectedEmployee, role: e.target.value })}>
                                            <option selected>Select Role</option>
                                            <option value="intern">Intern</option>
                                            <option value="frontend">Frontend</option>
                                            <option value="backend">Backend</option>
                                        </select>

                                        <button type="submit" className="btn btn-primary w-100 mt-3">update</button>

                                    </form>
                                    {/* //////react-bootstrap */}
                                    {/* <Form onSubmit={handleUpdateSubmit} >
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text"
                                                value={selectedEmployee.name}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, name: e.target.value })}
                                                placeholder="Enter name" />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please choose a username.</div>

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email"
                                                value={selectedEmployee.email}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, email: e.target.value })}
                                                placeholder="Enter email" />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please choose a email.</div>

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicProfile">
                                            <Form.Label>profile address</Form.Label>
                                            <Form.Control type="text"
                                                value={selectedEmployee.profile}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, profile: e.target.value })}
                                                placeholder="Enter profile" />

                                        </Form.Group>


                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                inline
                                                checked={selectedEmployee.gender === "male" ? true : false}
                                                value="male" type="radio"
                                                id="male" name='gender' label="male" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                inline
                                                checked={selectedEmployee.gender === "female" ? true : false}
                                                value="male" type="radio"
                                                id="female" name='gender' label="female" />
                                        </Form.Group>


                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, active: selectedEmployee.active ? false : true })}

                                                checked={selectedEmployee.active ? true : false}

                                                type="switch"
                                                label="Active" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="disabledSelect"> select Role </Form.Label>
                                            <Form.Select id="disabledSelect"
                                                value={selectedEmployee.role}
                                                onChange={e => setselectedEmployee({ ...selectedEmployee, role: e.target.value })}
                                            >
                                                <option> select Role</option>
                                                <option value="intern">Intern</option>
                                                <option value="frontend">Frontend</option>
                                                <option value="backend">Backend</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Button type="submit" className="btn btn-success w-100 btn-lg mt-3">Update</Button>

                                    </Form> */}
                                </div>
                            </div>
                            : <h3> no employee selected</h3>
                    }
                </div>

            </div>


            {/* model */}


            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>


                                <div>
                                    <label htmlFor="name" className="form-label">First name</label>
                                    <input type="text"
                                        onChange={e => setemployeeData({ ...employeeData, name: e.target.value })}
                                        value={employeeData.name}
                                        className="form-control" id="name" placeholder="Enter Your Name" />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>

                                <div className='my-3'>
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text"
                                        onChange={e => setemployeeData({ ...employeeData, email: e.target.value })}
                                        value={employeeData.email}
                                        className="form-control" id="email" placeholder="Enter Your email" />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a email</div>
                                </div>

                                <div className='my-3'>
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="text"
                                        onChange={e => setemployeeData({ ...employeeData, image: e.target.value })}
                                        value={employeeData.image}
                                        className="form-control" id="image" placeholder="Enter Your image" />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a Image</div>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        onChange={e => setemployeeData({ ...employeeData, gender: e.target.value })}
                                        value="male" type="radio" name="gender" id="male" />
                                    <label className="form-check-label" htmlFor="male">
                                        male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"

                                        onChange={e => setemployeeData({ ...employeeData, gender: e.target.value })}
                                        value="female" type="radio" name="gender" id="female" />
                                    <label className="form-check-label" htmlFor="female">
                                        female
                                    </label>
                                </div>

                                <div className="form-check form-switch my-3">
                                    <input className='form-check-input'
                                        onChange={e => setemployeeData({ ...employeeData, active: employeeData.active ? false : true })}
                                        checked={employeeData.active ? true : false}
                                        type="checkbox"
                                        id="eactive" />
                                    <label
                                        className='form-check-lable'
                                        htmlFor="eactive">Active</label>
                                </div>

                                <select className="form-select"
                                    onChange={e => setemployeeData({ ...employeeData, role: e.target.value })}
                                    value={employeeData.role}
                                >
                                    <option selected>Select Role</option>
                                    <option value="intern">Intern</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="leader">Leader</option>
                                </select>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary w-100 mt-3"
                                // onClick={e => }
                                >update </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div> */}
            <Modal show={show} onHide={e => setShow(false)}>


                <Modal.Body>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"
                                value={employeeData.name}
                                onChange={e => setemployeeData({ ...employeeData, name: e.target.value })}
                                placeholder="Enter name" />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                value={employeeData.email}
                                onChange={e => setemployeeData({ ...employeeData, email: e.target.value })}
                                placeholder="Enter email" />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a email.</div>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicProfile">
                            <Form.Label>profile address</Form.Label>
                            <Form.Control type="text"
                                value={employeeData.profile}
                                onChange={e => setemployeeData({ ...employeeData, profile: e.target.value })}
                                placeholder="Enter profile" />

                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Check
                                checked={employeeData.gender === "male" ? true : false}
                                value="male" type="radio"
                                label="Can't check this" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                checked={employeeData.gender === "female" ? true : false}
                                value="male" type="radio"
                                label="Can't check this" disabled />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Check
                                onChange={e => setemployeeData({ ...employeeData, active: employeeData.active ? false : true })}

                                checked={employeeData.active ? true : false}

                                type="switch"
                                label="Can't check this" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect"> select Role </Form.Label>
                            <Form.Select id="disabledSelect"
                                value={employeeData.role}
                                onChange={e => setemployeeData({ ...employeeData, role: e.target.value })}
                            >
                                <option> select Role</option>
                                <option value="intern">Intern</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit" className="btn btn-success w-100 btn-lg mt-3">Update</Button>

                    </Form>


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={e => setShow(false)}>Close</Button>

                </Modal.Footer>
            </Modal>
        </div>
    </>
}
/////////////////////////////////
// import { useEffect } from 'react'
// import { useState } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import EmployeeDeatils from '../../components/EmployeeDeatils'
// import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from '../../store/employeeAction'
// import AddModal from '../../components/AddModal'
// import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
// import { Form } from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Dashboard() {
//     const [show, setShow] = useState(false);
//     const dispatch = useDispatch()


//     const [showUpdateCard, setshowUpdateCard] = useState(false)
//     const [selectedEmployee, setselectedEmployee] = useState()

//     const { employee, employeeAdded, updated, deleteEmployees, loading } = useSelector(state => state.allEmpolyee)
//     const initialData = {
//         name: "kate",
//         email: "kate@gmail.com",
//         profile: "https://media.istockphoto.com/id/1371895204/photo/young-woman-on-sofa-looking-at-smartphone-relaxing-at-home.jpg?s=612x612&w=is&k=20&c=BgM4MzT3t8hPjQbaISLgts73RddiG4xJVo74yzlRq_E=",
//         gender: "female",
//         active: true,
//         role: "backend"
//     }
//     const [employeeData, setemployeeData] = useState(initialData)


//     const handleSubmit = e => {
//         e.preventDefault()
//         dispatch(addEmployee(employeeData))
//         setemployeeData(initialData)
//         setShow(false)


//     }
//     const handleUpdateSubmit = e => {
//         e.preventDefault()

//         dispatch(updateEmployee(selectedEmployee))
//         setemployeeData(true)
//         setshowUpdateCard(false)


//     }


//     useEffect(() => {
//         dispatch(getEmployee())
//         if (employeeAdded) {
//             toast.success("Employee is Added successfuly", { position: "top-center" })
//         }

//     }, [employeeAdded, updated, deleteEmployees])


//     return <>
//         <Container>
//             <Row>
//
//                 <Col sm={4}>
//                     {selectedEmployee
//                         ? <EmployeeDeatils selectedEmployee={selectedEmployee} setselectedEmployee={setselectedEmployee} setshowUpdateCard={setshowUpdateCard} />
//                         : <h4>No Empolyee selected</h4>
//                     }

//                 </Col>
//                 <Col sm={4}>
//                     {showUpdateCard
//                         ? <Card>
//                             <Card.Header>Edit</Card.Header>
//                             <Card.Body>
//                                 <Form onSubmit={handleUpdateSubmit} >
//                                     <Form.Group className="mb-3" controlId="formBasicName">
//                                         <Form.Label>First Name</Form.Label>
//                                         <Form.Control type="text"
//                                             value={selectedEmployee.name}
//                                             onChange={e => setselectedEmployee({ ...selectedEmployee, name: e.target.value })}
//                                             placeholder="Enter name" />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">Please choose a username.</div>

//                                     </Form.Group>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label>Email address</Form.Label>
//                                         <Form.Control type="email"
//                                             value={selectedEmployee.email}
//                                             onChange={e => setselectedEmployee({ ...selectedEmployee, email: e.target.value })}
//                                             placeholder="Enter email" />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">Please choose a email.</div>

//                                     </Form.Group>
//                                     <Form.Group className="mb-3" controlId="formBasicProfile">
//                                         <Form.Label>profile address</Form.Label>
//                                         <Form.Control type="text"
//                                             value={selectedEmployee.profile}
//                                             onChange={e => setselectedEmployee({ ...selectedEmployee, profile: e.target.value })}
//                                             placeholder="Enter profile" />

//                                     </Form.Group>


//                                     <Form.Group className="mb-3">
//                                         <Form.Check
//                                             checked={selectedEmployee.gender === "male" ? true : false}
//                                             value="male" type="radio"
//                                             label="Can't check this" disabled />
//                                     </Form.Group>
//                                     <Form.Group className="mb-3">
//                                         <Form.Check
//                                             checked={selectedEmployee.gender === "female" ? true : false}
//                                             value="male" type="radio"
//                                             label="Can't check this" disabled />
//                                     </Form.Group>


//                                     <Form.Group className="mb-3">
//                                         <Form.Check
//                                             onChange={e => setselectedEmployee({ ...selectedEmployee, active: selectedEmployee.active ? false : true })}

//                                             checked={selectedEmployee.active ? true : false}

//                                             type="switch"
//                                             label="Can't check this" />
//                                     </Form.Group>

//                                     <Form.Group className="mb-3">
//                                         <Form.Label htmlFor="disabledSelect"> select Role </Form.Label>
//                                         <Form.Select id="disabledSelect"
//                                             value={selectedEmployee.role}
//                                             onChange={e => setselectedEmployee({ ...selectedEmployee, role: e.target.value })}
//                                         >
//                                             <option> select Role</option>
//                                             <option value="intern">Intern</option>
//                                             <option value="frontend">Frontend</option>
//                                             <option value="backend">Backend</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                     <Button type="submit" className="btn btn-success w-100 btn-lg mt-3">Update</Button>

//                                 </Form>
//                             </Card.Body>

//                         </Card>
//                         : <h1>no selected third</h1>
//                     }

//                 </Col>
//             </Row>



//         </Container>
//     </>
// }
