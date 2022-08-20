import React from 'react'

function List({ rules, handleEdit, handleDelete }) {


    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Type</th>
                        <th>Contains</th>
                        <th>Relevance</th>
                        <th>Rule</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rules.length > 0 ? (
                        rules.map((rule, i) => (
                            <tr key={rule.id}>
                                <td>{i + 1}</td>
                                <td>{rule.type}</td>
                                <td>{rule.contain}</td>
                                <td>{rule.relevance}</td>
                                <td>{rule.rule}</td>
                                <td>{rule.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(rule.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(rule.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Rule to Display</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List