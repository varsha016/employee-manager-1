import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Pagination() {

    const [size, setsize] = useState(1)
    const [employees, setEmployees] = useState([])
    const [total, setTotal] = useState(0)
    const [totalBtn, setTotalBtn] = useState(0)
    const [page, setpage] = useState(1)


    const getAllEmployees = async () => {
        const { data, headers } = await axios.get(`http://localhost:5000/employee/`, {
            params: {
                _page: page,
                _limit: size
            }
        })
        // const { data } = await axios.get(`http://localhost:5000/employee/?_page=2&_limit=${size}`)
        setEmployees(data)
        setTotal(headers["x-total-count"])
        setTotalBtn(Math.ceil(headers["x-total-count"] / size))
    }
    useEffect(() => {
        getAllEmployees()
    }, [size, page])
    return <>
        <h1>bumber of btn {JSON.stringify(total / size)}</h1>


        <select className="form-select" onChange={e => setsize(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">four</option>
        </select>
        {employees.map(item => <h1>{item.name}</h1>)}
        <button disabled={page === 1 ? true : false} onClick={e => setpage(page - 1)}>pre</button>

        {[...Array(totalBtn).keys()].map(item => <button onClick={e => setpage(item + 1)}>{item + 1}</button>)}
        <button disabled={totalBtn === page ? true : false} onClick={e => setpage(page + 1)}>next</button>
    </>
}
