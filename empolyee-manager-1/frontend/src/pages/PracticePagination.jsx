import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function PracticePagination() {
    const [dataAll, setDataAll] = useState([])
    const [btn, setBtn] = useState(0)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(1)
    const getPagination = async () => {

        const { data, headers } = await axios.get(`http://localhost:5000/employee/`, {
            params: {
                _page: page,
                _limit: size
            }
        })
        setDataAll(data)
        setPage(page + 1)
        setTotal(headers["x-total-count"])
        setBtn(Math.ceil(headers["x-total-count"] / size))



    }
    useEffect(() => {
        getPagination()
    }, [])
    return <>
        <InfiniteScroll
            dataLength={dataAll.length}
            hasMore={btn === page - 1 ? false : true}
            next={getPagination}

        >
            {dataAll.map(item => <p>{item.name}</p>)}


        </InfiniteScroll>
    </>
}
