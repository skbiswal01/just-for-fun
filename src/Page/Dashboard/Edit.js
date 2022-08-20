import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ rules, selectedrule, setrules, setIsEditing }) {

    const id = selectedrule.id;

    const [type, settype] = useState(selectedrule.type);
    const [contain, setcontain] = useState(selectedrule.contain);
    const [relevance, setrelevance] = useState(selectedrule.relevance);
    const [rule, setrule] = useState(selectedrule.rule);
    const [date, setDate] = useState(selectedrule.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!type || !contain || !relevance || !rule || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const method = {
            id,
            type,
            contain,
            relevance,
            rule,
            date
        };

        for (let i = 0; i < rules.length; i++) {
            if (rules[i].id === id) {
                rules.splice(i, 1, method);
                break;
            }
        }

        setrules(rules);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${rule.type} ${rule.contain}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit rule</h1>
                <label htmlFor="type">Type</label>
                <input
                    id="type"
                    type="text"
                    name="type"
                    value={type}
                    onChange={e => settype(e.target.value)}
                />
                <label htmlFor="contain">Contain</label>
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit