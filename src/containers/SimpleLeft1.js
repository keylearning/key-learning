import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SimpleCircleList } from "../components";

const initState = [
  {
    title:"Healthcare"
  },
  {
    title:"Technology"
  },
  {
    title: "Construction"
  },
  {
    title: "Rental"
  },
  {
    title: "Manufacturing"
  },
];

const SimpleLeft1 = props => {
  const { className } = props;
  const [industries, setIndustries] = useState(initState);
  useEffect(() => {
    const url = 'http://Keylearningservercors-env.eba-fs83ec2u.us-east-2.elasticbeanstalk.com/industries';
    axios
      .get(url)
      .then(res => setIndustries(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
      {industries.map((industry, index) => (
        <SimpleCircleList {...industry} number={index + 1} key={index} className="parent"/>
      ))}
    </div>
  );
};

export default styled(SimpleLeft1)`
  padding: 2%;
`;