import React from 'react'
import AssignerNotification from '../../components/AssignerNotification/AssignerNotification'
import Header from '../../components/Header/Header'

const NotificationPage = () => {
    return (
        <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
            <Header />
            <AssignerNotification />
        </div>
    )
}

export default NotificationPage