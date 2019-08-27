import React from "react";
import "./flex.css";

const Flex = ({ children }) => {
    return <div className="flex">{children}</div>;
};

export const FlexItem = ({ children }) => {
    return <div className="flex-item">{children}</div>;
};

export default Flex;