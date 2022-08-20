import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Rule Adding Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Rule Button</button>
            </div>
        </header>
    )
}

export default Header