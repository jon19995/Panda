import { FC } from 'react';

import TableItem from '../../Components/Simple/TableItem/TableItem';

interface IPromo {}

const Promo: FC<IPromo> = (props): JSX.Element => {
    return <TableItem {...props} />;
};

export default Promo;
