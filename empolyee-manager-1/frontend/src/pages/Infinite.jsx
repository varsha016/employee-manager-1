import InfiniteScroll from "react-infinite-scroll-component"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Infinite() {
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
        setEmployees([...employees, ...data])
        setTotal(headers["x-total-count"])
        setTotalBtn(Math.ceil(headers["x-total-count"] / size))
        setpage(page + 1)
    }
    useEffect(() => {
        getAllEmployees()
    }, [])
    return <>
        <InfiniteScroll
            dataLength={employees.length}
            hasMore={totalBtn === page - 1 ? false : true}
            next={getAllEmployees}
            loader={<div className="spinner-border"></div>}
        >

            {employees.map(item => <h1 key={item.id} style={{ margin: "400px 0px", backgroundColor: "gray" }}>{item.name}</h1>)}


        </InfiniteScroll>
        {totalBtn === page - 1 && page > 1 && <h1>No more data</h1>}



    </>
}
