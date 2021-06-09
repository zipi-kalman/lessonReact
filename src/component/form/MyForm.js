import React, { useState } from 'react'



export default function MyForm(props) {
    // const{userName}=props
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [hoobies, setHoobies] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPage = React.Children.count(props.children)
    
    function body(thisPage) {
        const allProps = { name, setName, lastName, setLastName, hoobies, setHoobies, currentPage, setCurrentPage }
        const child = React.Children.toArray(props.children)[thisPage]
        return React.cloneElement(child, allProps)

    }
    return (
        <>

            <button
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(v => v - 1)} >
                -</button>
            <button
                disabled={currentPage >= numberOfPage - 1}
                onClick={(e) => setCurrentPage(v => v + 1)} >
                +</button>
            {body(currentPage)}
        </>

    )

}