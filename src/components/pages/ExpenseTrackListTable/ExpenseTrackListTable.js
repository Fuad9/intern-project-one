import React from "react";

const ExpenseTrackListTable = ({ expense }) => {
    return (
        <>
            <tr>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>{expense.checkIn}</td>
                <td>{expense.description}</td>
                <td>{expense.expense}</td>
            </tr>
        </>
    );
};

export default ExpenseTrackListTable;
