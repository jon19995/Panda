import React, { FC } from 'react';

import Table from '../../UI/Table/Table';

import TbodyItem from '../TbodyItem/TbodyItem';
import TheadItem from '../TheadItem/TheadItem';

interface ITableItem {}

const TableItem: FC<ITableItem> = (props) => {
    return (
        <Table {...props}>
            <TheadItem />
            <TbodyItem />
        </Table>
    );
};

export default TableItem;
