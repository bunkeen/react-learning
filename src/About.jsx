import { useState } from 'react'
import Button from './Button'

function About(){
    const [isOpen, setIsOpen] = useState(false)
    const myCalculator = (num1, num2, operation) => operation(num1, num2)


    const sum = (num1, num2) =>  num1 + num2
    
    console.log(myCalculator(1,1, sum))

    return (
        <>
            <h1>About</h1>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
            {isOpen && <Button 
                text='Magic button'
                count={0}
            />}
        </>
    ) 
}

export default About