import React from "react";
import styled from "styled-components";
import commaNumber from "comma-number";

const Number = styled.div`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  color: #7657fe;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  flex: 1;
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-left: 16px;
  font-family: "Poppins", sans-serif;
`;

const Entries = styled.span`
  color: white;
  font-weight: 500;
  font-size: 20px;
  margin-left: 16px;
  text-align: right;
  font-family: "Poppins", sans-serif;
`;

const BarGraph = props => {
  const { className, number, title, entries } = props;

  return (
    <div className={className}>
      <div className="bar">
        <Number>
          <span>{number}</span>
        </Number>
        <Title>{title}</Title>
        <Entries>{commaNumber(entries)} entries</Entries>
      </div>
    </div>
  );
};

export default styled(BarGraph)`
  width: 100%;
  height: 62px;
  background-color: white;
  border-radius: 14px;
  overflow: hidden;
  opacity: 0.9;
  box-shadow: 0px 4px 40px rgba(118, 87, 254, 0.3);
  .bar {
    width: ${props => `${props.percentage}%`};
    max-width: 100%;
    min-width: 481px;
    height: 100%;
    background-color: #7657fe;
    display: flex;
    align-items: center;
    padding-left: 22px;
    padding-right: 16px;
    border-radius: 14px;
  }
`;
