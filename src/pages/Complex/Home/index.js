import React from "react";
import styled from "styled-components";
import { SearchBar } from "../../../components";
import { Sidebar, ComplexKPIContainer } from "../../../containers";

const Header = styled.div`
  position: absolute;
  top: 47px;
  right: 59px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-left: 38px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Header>
        <SearchBar />
        <Avatar src="https://picsum.photos/100/100" />
      </Header>
      <Sidebar />
      <div className="kpi-containers">
        <ComplexKPIContainer title="Top 5 Industries for the U.S." type="bar" />
        <ComplexKPIContainer
          title="Top 5 Freelancing Roles for the U.S."
          type="circle"
        />
        <ComplexKPIContainer
          title="Top 10 Most Needed Skills for the U.S."
          type="list"
        />
      </div>
    </div>
  );
};

export default styled(Home)`
  position: relative;
  display: grid;
  grid-template-columns: 230px 1fr;
  width: 100%;
  height: 100%;
  background-color: #eff1f7;
  overflow-y: scroll;
  ${SearchBar} {
    width: 341px;
  }
  .kpi-containers {
    margin-top: 141px;
    margin-bottom: 127px;
    padding-left: 70px;
  }
`;
