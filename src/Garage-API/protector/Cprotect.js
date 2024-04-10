import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const Cprotect = (props) => {

    const history = useHistory()
    const [istoken, setIstoken] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('customertoken')
        if (!token) {
            return history.push('/vehical')
        }
        setTimeout(() => setIstoken(token), 1000)
    }, [])

    if (!istoken) {
        return <div className='parentLoader'>
            <span className="loader"></span>
        </div>
    }

    return (
        <div>
            {props.children}
        </div>
    )
}

export default Cprotect