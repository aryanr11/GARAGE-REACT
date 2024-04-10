import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Protect = () => {

    
    useEffect(() => {
        setTimeout(() => {
            console.log("Delayed for 1 second.");
        }, "1000");
    }, [])

    return (
        <div>
            <div className='parentLoader'>
                <span className="loader"></span>
            </div>
        </div>
    )

}

export default Protect