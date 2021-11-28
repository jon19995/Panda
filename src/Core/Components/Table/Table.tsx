import React, { FC } from 'react';

import { IData } from '../../Services/Dictionary/dictionary.model';

interface ITable {
    data: IData[];
}

const Table: FC<ITable> = ({ data, ...props }) => {
    return (
        <table className="table" {...props}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Old</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.old}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
