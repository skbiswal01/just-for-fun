import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { rulesData } from '../../data';

function Dashboard() {

    const [rules, setrules] = useState(rulesData);
    const [selectedrule, setSelectedrule] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [rule] = rules.filter(rule => rule.id === id);

        setSelectedrule(rule);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [rule] = rules.filter(rule => rule.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${rule.firstName} ${rule.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setrules(rules.filter(rule => rule.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        rules={rules}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    rules={rules}
                    setrules={setrules}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    rules={rules}
                    selectedrule={selectedrule}
                    setrules={setrules}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;