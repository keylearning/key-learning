import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = props => {
  const { className, label, selected, link } = props;

  return (
    <li className={className}>
      <Link className="link" to={link}>
        {label}
      </Link>
      {selected && <div className="selected-highlight" />}
    </li>
  );
};

export default styled(ListItem)`
  position: relative;
  a {
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    position: relative;
    z-index: 2;
    color: ${props => (props.selected ? "#7657FE" : "white")};
    text-decoration: none;
  }
  .selected-highlight {
    position: absolute;
    z-index: 1;
    top: -15px;
    left: -26px;
    width: 300px;
    height: 53px;
    border-radius: 14px;
    background-color: #eff1f7;
  }
`;
