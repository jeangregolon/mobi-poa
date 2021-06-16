import React from 'react'
import { Link } from 'react-router-dom'

export default function line(props) {
    const { line } = props
    return (
            <Link to={`/linha/${line.id}`}>
            <div key={line.id} className='card row'>
                <h3 className='line-code'>{line.codigo}</h3>
                <h3 className='line-name'>{line.nome}</h3>
            </div>
            </Link>
    )
}

