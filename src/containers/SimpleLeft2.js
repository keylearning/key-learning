import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SimpleCircleList } from "../components";

const initState = [
    {
      title: "Software Development"
    },
    {
      title: "Video Marketing"
    },
    {
      title: "Web Development"
    },
    {
      title: "Content Writing"
    },
    {
      title: "Graphic Design"
    },
  ];

const SimpleLeft2 = props => {
  const { className } = props;
  const [freelancingRoles, setFreelancingRoles] = useState(initState);
  useEffect(() => {
    const url = 'http://keylearningservercors-env.eba-fs83ec2u.us-east-2.elasticbeanstalk.com/jobs';
    axios
      .get(url)
      .then(res => setFreelancingRoles(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
      {freelancingRoles.map((role, index) => (
        <SimpleCircleList {...role} number={index + 1} key={index} className="parent"/>
      ))}
    </div>
  );
};

export default styled(SimpleLeft2)`
  padding: 2%;
`;