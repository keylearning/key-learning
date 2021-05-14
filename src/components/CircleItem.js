import React from "react";
import styled from "styled-components";
import commaNumber from "comma-number";

const Number = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-align: center;
  line-height: 35.16px;
  margin-bottom: 6px;
`;

const Title = styled.span`
  width: 142px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  line-height: 20px;
  margin-bottom: 14px;
`;

const Entries = styled.span`
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-align: center;
  line-height: 18px;
`;

const CircleItem = props => {
  const { className, number, title, entries } = props;

  return (
    <div className={className}>
      <Number>#{number}</Number>
      <Title>{title}</Title>
      <Entries>{commaNumber(entries)} entries</Entries>
    </div>
  );
};

export default styled(CircleItem)`
  width: 165px;
  height: 165px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 40px rgba(118, 87, 254, 0.29);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #7657fe;
`;
