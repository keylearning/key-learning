import React from "react";
import styled from "styled-components";

const Number = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  line-height: 20px;

  font-size: 13px;
  background-color: slateblue;
  color: white;
  font-family: "Roboto", sans-serif;
   
`;

const Title = styled.span`
  font-weight: normal;
  font-size: 20px;
  margin-left: 16px;
  font-family: "Roboto", sans-serif;
`;


const SimpleCircleList = props => {
  const { className, number, title} = props;

  return (
    <div className={className}>
        <Number className = "child">
          <span>{number}</span>
        </Number>
        <Title>{title}</Title>
    </div>
  );
};

export default styled(SimpleCircleList)`
  width: 100%;
  display: flex;
  background: transparent;
  margin-top: 3%;
  margin-bottom: 2%;
`;