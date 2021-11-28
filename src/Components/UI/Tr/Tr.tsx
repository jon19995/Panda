import React, { FC } from 'react';

interface ITr {}

const Tr: FC<ITr> = ({ children, ...props }) => {
    return <tr {...props}>{children}</tr>;
};

export default Tr;
