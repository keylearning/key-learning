import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BarGraph } from "../components";

const max = 4;
const getPercentage = num => (num / max) * 100;

const BarGraphContainer = props => {
  const { className } = props;
  const [industries, setIndustries] = useState(null);
  useEffect(() => {
    const url =
      "http://keylearningservercors-env.eba-fs83ec2u.us-east-2.elasticbeanstalk.com/industries";
    axios
      .get(url)
      .then(res => {
        const data = res.data.map(industry => ({
          ...industry,
          percentage: getPercentage(industry.entries),
        }));
        setIndustries(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
      {industries &&
        industries.map((industry, index) => (
          <BarGraph {...industry} number={index + 1} key={index} />
        ))}
    </div>
  );
};

export default styled(BarGraphContainer)`
  display: grid;
  grid-template-rows: 62px;
  grid-gap: 18px;
  padding-right: 89px;
  margin-bottom: 79px;
`;
