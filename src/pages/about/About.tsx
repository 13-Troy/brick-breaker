import React, { useEffect } from "react";

const About = ({ test = "hello" }: { test?: string }) => {
  useEffect(() => {
    console.log("hello", test);
  }, []);

  return <>Test page</>;
};

export default About;
