import React, { FC } from 'react';

interface ITd {}

const Td: FC<ITd> = ({ children, ...props }) => {
    return <td {...props}>{children}</td>;
};

export default Td;
