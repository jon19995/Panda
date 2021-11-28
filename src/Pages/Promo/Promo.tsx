import { FC } from 'react';

import Table from '../../Core/Components/Table/Table';

interface IPromo {}

const Promo: FC<IPromo> = (props) => {
    return (
        <Table
            data={[
                { firstName: '', lastName: '', old: 26 },
                { firstName: '', lastName: '', old: 26 },
            ]}
            {...props}
        />
    );
};

export default Promo;
