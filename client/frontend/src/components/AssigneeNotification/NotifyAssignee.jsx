import React from 'react'
import style from "../AssignerNotification/AssignerNotification.module.css"
import notifications from "../AssignerNotification/Notifications.json"


const AssigneeNotification = () => {
  return (
    <div className={style.notificationContainer}>
        {
            notifications.map((item,index) => (
                <div key={index} className={style.notificationDetail}>
                    <div className={style.designFeatures}>
                    <span className={style.design}></span>
                    <span className={style.designText}>{item.name}</span>
                    </div>
                    <p>{item.time}</p>
                </div>
                
            ))}
    </div>
  )
}

export default AssigneeNotification

