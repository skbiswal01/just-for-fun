import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ rules, setrules, setIsAdding }) {

    const [type, settype] = useState('');
    const [contain, setcontain] = useState('');
    const [relevance, setrelevance] = useState('');
    const [rule, setrule] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!type || !contain || !relevance || !rule || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = rules.length + 1;
        const newrule = {
            id,
            type,
            contain,
            relevance,
            rule,
            date
        }
        rules.push(newrule);
        setrules(rules);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${type} ${contain}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Rule</h1>
                <label htmlFor="type">Type</label>
                <input
                    id="type"
                    type="text"
                    ref={textInput}
                    name="type"
                    value={type}
                    onChange={e => settype(e.target.value)}
                />
                <label htmlFor="contain">contain</label>
                <input
                    id="contain"
                    type="text"
                    name="contain"
                    value={contain}
                    onChange={e => setcontain(e.target.value)}
                />
                <label htmlFor="relevance">relevance</label>
                <input
                    id="relevance"
                    type="text"
                    name="relevance"
                    value={relevance}
                    onChange={e => setrelevance(e.target.value)}
                />
                <label htmlFor="rule">rule</label>
                <input
                    id="rule"
                    type="text"
                    name="rule"
                    value={rule}
                    onChange={e => setrule(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add