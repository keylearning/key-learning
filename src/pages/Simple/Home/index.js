import React from "react";
import styled from "styled-components";
import LogoImage from "./assets/logo.png";
import Shape1Image from "./assets/shape1.png";
import Shape2Image from "./assets/shape2.png";
import SearchBar from "../../../components/SearchBar";
import {SimpleLeft1, SimpleLeft2, SimpleRight1} from "../../../containers";


const Shape1 = styled.img`
  position: absolute;
  width: 402px;
  right: 0;
  top: 0;
`;

const Shape2 = styled.img`
  position: fixed;
  width: 100%;
  height: 379px;
  right: 0;
  bottom: 0;
  z-index:initial;
`;

const Header = styled.div`
  position: absolute;
  top: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.img`
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-left: 38px;
  margin-right: 59px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Logo = styled.img`
  width: 142px;
  height: 37px;
  margin-left: 69px;
`;

const KPICircleList = styled.div`
  border-radius: 14px;
  background: white;
  color: slateblue;
  
  padding:2%;
  text-align: left;
  filter: drop-shadow(0px 4px 40px rgba(118, 87, 254, 0.15));

  &:hover {
    color: white;
    background: slateblue;
    .parent .child{
      background-color: white;
      color: slateblue
    }
  }
`;
const KPIList = styled.div`
   border-radius: 14px;
   background:white;
   color: slateblue;

   padding-top:2%;
   padding-bottom:2%;
   text-align: left;

   filter: drop-shadow(0px 4px 40px rgba(118, 87, 254, 0.15));
   &:hover {
    color: white;
    background: slateblue;
    .parent .child{
      background-color: white;
      color: slateblue
    }
  }
`;

const KPIHeader = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;


const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Shape1 src={Shape1Image} alt="bg-shape-1" />
      <Shape2 src={Shape2Image} alt="bg-shape-2" />
      <Header>
        <Logo src={LogoImage} alt="logo" />
        <div className="header-right">
          <SearchBar />
          <Avatar src="https://picsum.photos/100/100" />
        </div>
      </Header>
      
      <div>
      <div className = "flexContainer">
        <div className = "leftCol">
          <div className = "innerFlex">
            <KPICircleList className="L1"> 
              <KPIHeader>Top 5 Most Popular Industries in U.S.</KPIHeader>
              <SimpleLeft1></SimpleLeft1>
            </KPICircleList>
            <KPICircleList className="L2">
              <KPIHeader>Top 5 Freelancing Roles for the U.S.</KPIHeader>
              <SimpleLeft2></SimpleLeft2>
            </KPICircleList>
          </div>
        </div>
        <KPIList className = "rightCol">
             <KPIHeader className="R1">10 most needed skills</KPIHeader>
             <SimpleRight1></SimpleRight1>
        </KPIList>

      </div>
      </div>

    </div>
  );
};

export default styled(Home)`
  height: 100%;
  body{
    background-color: #eff1f7;
  }
  * {
    font-family: "Poppins", sans-serif;
  }
  .header-right {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .flexContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
    
    width: 70%;
    margin: auto;
    margin-top: 130px;
    padding-bottom: 100px;
    
  }
  .leftCol{
    display: flex;
    width: 60%;
    min-width: 300px;
    order: 1;
    margin-top: 5%;
  }
  .leftCol .innerFlex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
  }
  .leftCol .innerFlex .L1{
    margin-bottom: 5%;
    width: 100%;
    order: 1
  }
  .leftCol .innerFlex .L2{
    width: 100%;
    align-self: flex-end;
    display: block;
    order: 2
  }
  .rightCol{
    width: 35%;
    min-width: 320px;
    order: 2;
    margin-top: 5%;
  }


  .R1{
    text-align: center;
  }
`;
