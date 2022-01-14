import React, { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Mr.Fahim Chaudhury', position: "Medecal Officer", salary: 30000 },
        { id: 2, name: 'Jhankar Mahbub', position: "React Developer", salary: 40000 },
        { id: 3, name: 'Mr.Sumon', position: "Grafics Designer", salary: 50000 },
        { id: 4, name: 'Sharmin Peu', position: "Hero 0f 11", salary: 60000 },
        { id: 5, name: 'Modon Kumar', position: "Scientist", salary: 440000 },
        { id: 6, name: 'Mr.Kabir', position: "Architecture", salary: 60500 },
        { id: 7, name: 'X-rumaies', position: "Spiderman", salary: 89000 },
    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}
