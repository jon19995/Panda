import React, { FC } from 'react';

interface ITable {}

const Table: FC<ITable> = ({ children, ...props }) => {
    return <table {...props}>{children}</table>;
};

export default Table;
