import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SkillItem = styled.li`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  line-height: 50px;
  &:first-child {
      margin-top: 10%;
  }

  
`;

const initState = [
  {
    title: "Communications",
  },
  {
    title: "Management",
  },
  {
    title: "Leadership",
  },
  {
    title: "Customer Service",
  },
  {
    title: "Operations",
  },
  {
    title: "Sales",
  },
  {
    title: "Innovation",
  },
  {
    title: "Problem Solving",
  },
  {
    title: "Detail Oriented",
  },
  {
    title: "Presentations",
  },
];

const SimpleRight1 = props => {
  const { className } = props;
  const [skills, setSkills] = useState(initState);
  useEffect(() => {
    const url = 'http://keylearningservercors-env.eba-fs83ec2u.us-east-2.elasticbeanstalk.com/skills';
    axios
      .get(url)
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={className}>
        <ul>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {index + 1}. {skill.title}
            </SkillItem>
          ))}
        </ul>
    </div>
  );
};

export default styled(SimpleRight1)`
    background: transparent; 
    > ul {
      width: 60%;
      margin: auto;
      list-style: none; 
    }
  }
`;
