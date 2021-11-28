import React, { FC } from 'react';

interface ITbody {}

const Tbody: FC<ITbody> = ({ children, ...props }) => {
    return <tbody {...props}>{children}</tbody>;
};

export default Tbody;
