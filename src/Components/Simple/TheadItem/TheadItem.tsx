import { FC } from 'react';

import Td from '../../UI/Td/Td';

import Thead from '../../UI/Thead/Thead';
import Tr from '../../UI/Tr/Tr';

interface ITheadItem {}

const TheadItem: FC<ITheadItem> = ({ children, ...props }) => {
    return (
        <Thead {...props}>
            <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
        </Thead>
    );
};

export default TheadItem;
