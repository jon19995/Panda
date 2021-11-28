import { FC } from 'react';

import Tbody from '../../UI/Tbody/Tbody';
import Td from '../../UI/Td/Td';
import Tr from '../../UI/Tr/Tr';

interface ITbodyItem {}

const TbodyItem: FC<ITbodyItem> = (props) => {
    return (
        <Tbody {...props}>
            <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
        </Tbody>
    );
};

export default TbodyItem;
