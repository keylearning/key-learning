import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CircleItem } from "../components";

const CircleItemContainer = props => {
  const { className } = props;
  const [freelancingRoles, setFreelancingRoles] = useState(null);
  useEffect(() => {
    const url =
      "http://keylearningservercors-env.eba-fs83ec2u.us-east-2.elasticbeanstalk.com/jobs";
    axios
      .get(url)
      .then(res => {
        setFreelancingRoles(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
      {freelancingRoles &&
        freelancingRoles.map((role, index) => (
          <CircleItem {...role} number={index + 1} key={index} />
        ))}
    </div>
  );
};

export default styled(CircleItemContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 165px);
  grid-gap: 44px;
  padding-right: 76px;
  margin-bottom: 68px;
`;
