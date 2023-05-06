import React from "react";
import DropDown from "../Components/DropDown";
import "./SecondTerm.css";

const SecondTerm = () => {
  const learnText = "";
  return (
    <>
      <h1 className="second-term-title" style={{ marginTop: "2rem" }}>
        Second-Term
      </h1>
      <DropDown
        text="During my second term at UBC IT, I found that I had already gained many of the technical skills necessary for the job. Instead, I focused on developing my communication and teamwork skills, as well as learning how to test new functionality that we added to projects. One example of this was when our team worked with John to test the contact statuses in the UNI project. At first, the task seemed daunting and confusing, but we were able to test and pass the ticket in a short amount of time thanks to our ability to remain patient and positive with one another. While much of this term felt similar to my first term, there was a notable shift when Jeevan joined our team."
        title="What I Learnt"
      />
      <DropDown
        text="During my second term at UBC IT, I worked exclusively on the Go Global project, where I was responsible for all testing. While the content of the work did not differ significantly from my first term, I did notice that the workload had increased slightly. At times, I felt overloaded with tasks, but I remained committed to completing each one to the best of my ability. Although this term presented a slightly bigger challenge than the first, it was still a rewarding experience for me. Seeing the positive growth of the Go Global project and being a part of that progress was fulfilling, and I felt proud to have contributed to its success."
        title="What I Worked On"
      />
      <DropDown
        text="While my technical skills related to my job at UBC IT saw minimal improvement, my ability to develop and create outside of work improved tremendously. In my free time, I took on a challenge and revamped the website for my associate's company. This project pushed me in ways that previous projects had not, and it was one of the most enjoyable experiences I have had. I appreciated the fact that this website would bring in more traffic and consumers for the company in the online community, in addition to their existing offline business partners. Applying principles of testing, such as regression testing, to this project helped me to appreciate the work of QA professionals in the future."
        title="What I Improved On"
      />
      <DropDown
        text="When Jeevan joined the team during my second term, I felt a significant change in the dynamic of the QA team. As someone who generally welcomes change, I must admit that I had some difficulty adjusting to the new team member at first. I tend to take time to build relationships with people, and my initial impressions with anyone are not the best. However, as we continued to work together, our relationship improved and we left on a good note. Working with Jeevan, Nati, and Sophia taught me a lot about the importance of soft skills, and they gave me valuable advice on how to improve in that area. I'm grateful for their guidance, and I will carry those lessons with me in my future endeavors. Thank you all for the support, and I hope our paths cross again someday."
        title="How It Will Help Me"
      />{" "}
    </>
  );
};

export default SecondTerm;
