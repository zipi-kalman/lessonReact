
// import { useState, useEffect } from 'react'
// import Display from './Display'



export default function Imuutible() {
    const [items, setItems] = useState(['Milk', 'Egg', 'Bread', 'Suger'])
    const [selectedItems, setSelectedItems] = useState([])

    // function funSelectItem(e) {
    //     debugger
    //     const checked = e.target.checked
    //     const item = e.target.parentElement.textContent
    //     if (checked) {
    //         selectedItems.push(item)
    //     }
    //     else {
    //         const itemIndex = selectedItems.findIndex(x => x === item)
    //         selectedItems.splice(itemIndex, 1)
    //     }
    //     setSelectedItems(selectedItems)

    // }

    function funSelectItem(e) {
        debugger
        const checked = e.target.checked;
        const item = e.target.parentElement.textContent

        if (checked) {
            setSelectedItems(x => x.concat([item]));
        }
        else {
            setSelectedItems(items => items.filter(x => x !== item));
        }
    }
    return (
        <>
            <p>selected items: {selectedItems.join(", ")}</p>

            <ul>
                {items.map(item => (
                    <li key={item}>
                        <label>
                            {item}
                            <input
                                type="checkbox"
                                onChange={funSelectItem}
                                checked={selectedItems.includes(item)} />
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}

// export default function Counter({ max, setmax }) {
//     const [counter, setCounter] = useState(0)
//     const [i, setI] = useState(false)


//     useEffect(() => {
//         console.log('max')
//         if (counter > max) {
//             setmax(counter)
//         }
//         if (max === counter) { setI(true) }
//         else
//             setI(false)

//     }, [max])

//     useEffect(() => {
//         if (counter > max)
//             setmax(counter)

//         if (counter === 0 && i)
//             setmax(0)


//     }, [counter])

//     const resetCounter = (num) => {
//         setCounter(0)
//     }
//     function add() {
//         setCounter(counter + 1)

//     }

//     return (
//         <>
//             <div style={{ backgroundColor: (i && counter != 0) && 'red' }}>
//                 <Display counter={counter} resetCounter={resetCounter} />
//                 <button onClick={add}>click</button>
//             </div>
//         </>
//     )
