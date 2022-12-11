import React, { createContext } from 'react'

export const AppCredentialsContext = createContext()


const AppCredentialsContextProvider = (props) => {

    const task_creator = '637cb019601ce3fc5dc735c2'
    const task_assignee = '637cb019601ce3fc5dc735c2'
    const organization_id = '637cb019601ce3fc5dc735c1'
    const pluginId = '6393d425ad60a62cd4608e90'

    return (
        <AppCredentialsContext.Provider value={{ task_creator, task_assignee, organization_id, pluginId }}>
            {props.children}
        </AppCredentialsContext.Provider>
    )
}

export default AppCredentialsContextProvider