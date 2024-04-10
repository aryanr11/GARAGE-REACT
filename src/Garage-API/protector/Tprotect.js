import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Tprotect = (props) => {
    const history = useHistory()
    const [istoken, setIstoken] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('techniciantoken')
        if (!token) {
            return history.push('/service')
        }
        // setTimeout(() => setIstoken(token), 1000)
        setIstoken(token)
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

export default Tprotect