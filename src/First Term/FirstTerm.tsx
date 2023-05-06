import React from "react";
import DropDown from "../Components/DropDown";
import "./FirstTerm.css";

const FirstTerm = () => {
  return (
    <>
      <h1 className="first-term-title">First-Term</h1>

      <DropDown
        text="During my first term with UBC IT, I gained invaluable experience by delving into the principles associated with QA testing processes. Being able to apply these concepts hands-on was immensely beneficial to my learning process, and I hope that future employees have similar opportunities. While I found the various testing types to be fairly straightforward, I did struggle initially with familiarizing myself with the different project environments. For example, I was confused by the term PU (Partner University) at first, which caused some initial uncertainty. However, with more exposure and practice, I was able to gain a better understanding of the various environments and terminology associated with our projects."
        title="What I Learnt"
      />

      <DropDown
        text="During my first term, I had the opportunity to work on a variety of projects, although I found myself jumping around frequently at first. However, towards the end of the term, I was able to work more consistently on the Go Global project. In this role, I took on a significant amount of responsibility for testing, and even had the chance to delve into a few selenium automation test cases for student creation. Despite the challenges that came with this work, I found it to be immensely rewarding as I became more familiar with the project and knew what needed to be done day in and day out. Overall, it was a fun experience and I'm grateful for the chance to have been a part of it."
        title="What I Worked On"
      />
      <DropDown
        text="Throughout my co-op term, I focused on improving my time management skills. During downtime, I made a conscious effort to tackle the next task on my list, and if there were no outstanding tickets, I would work on my own personal projects to further develop my skills. Because the job was remote, I had the freedom to work from anywhere. At one point, I even worked remotely from Toronto and found that I was able to maintain a high level of productivity despite being in a different city. This experience gave me a greater appreciation for the benefits of remote work and has encouraged me to seek out more opportunities like this in the future."
        title="What I Improved On"
      />
      <DropDown
        text="Although I was able to absorb many technical skills within the first month of my co-op term, much of the remainder of my time was spent learning about the software development process and how it could be useful to me in future development-driven roles. However, one area that I found particularly challenging was developing my soft skills. I have a tendency to avoid reaching out for help when I'm stuck, for fear of bothering others. While this is still a work in progress, my time at UBC IT provided ample opportunities to collaborate and communicate with my colleagues on a daily basis. Through this experience, I gained a greater understanding of each individual's working style and how best to communicate with them. I believe that this skill will be valuable to me throughout my career, regardless of the role or industry."
        title="How It Will Help Me"
      />
    </>
  );
};

export default FirstTerm;
