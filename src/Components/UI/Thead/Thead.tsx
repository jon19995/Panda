import React, { FC } from 'react';

interface IThead {}

const Thead: FC<IThead> = ({ children, ...props }) => {
    return <thead {...props}>{children}</thead>;
};

interface IThead {}

export default Thead;
