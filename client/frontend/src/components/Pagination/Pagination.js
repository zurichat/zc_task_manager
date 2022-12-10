import React, { useContext } from 'react'
import { useGetTasksQuery } from '../../api/TaskApi'
import { PaginationContext } from '../../context/PaginationContext'
import './Pagination.css'

const Pagination = () => {
    const { currentPage, paginate } = useContext(PaginationContext)
    const organization_id = "61db3b27eba8adb50ca1399b"
    const { data: tasks } = useGetTasksQuery({ organization_id, page: currentPage })
    const tasksPerPage = tasks?.page_limit
    const totalPage = tasks?.total_page
    const totalTasks = (totalPage * tasksPerPage)
    const pageNumbers = []
    for (let i = 0; i <= Math.ceil(totalTasks / tasksPerPage) + 1; i++) {
        pageNumbers.push(i)
    }
    console.log({ pageNumbers, tasks })

    return (
        <div className='pagination'>
            {pageNumbers.map(number => (
                <a onClick={() => paginate(number)} href='#!' className='page-numbers'>{number}</a>
            ))}
        </div>
    )
}

export default Pagination