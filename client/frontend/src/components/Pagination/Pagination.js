import React, { useContext } from 'react'
import { useGetTasksQuery } from '../../api/TaskApi'
import { AppCredentialsContext } from '../../context/AppCredentialsContext'
import { PaginationContext } from '../../context/PaginationContext'
import './Pagination.css'

const Pagination = () => {
    const { currentPage, paginate } = useContext(PaginationContext)
    const { organization_id } = useContext(AppCredentialsContext)
    const { data: tasks } = useGetTasksQuery({ organization_id, page: currentPage })
    const tasksPerPage = tasks?.page_limit
    const totalPage = tasks?.total_page
    const totalTasks = (totalPage * tasksPerPage)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage) + 1; i++) {
        pageNumbers.push(i)
    }
    console.log({ pageNumbers, tasks })

    return (
        <div className='pagination'>
            {pageNumbers.map(number => (
                <a key={number} onClick={() => paginate(number)} href='#!' className='page-numbers'>{number}</a>
            ))}
        </div>
    )
}

export default Pagination