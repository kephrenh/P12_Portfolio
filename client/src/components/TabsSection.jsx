import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>OpenClassrooms</li>
        <li>Trailhead by Salesforce</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Intégrateur Web</li>
        <li>Administrateur Salesforce</li>
      </ul>
    ),
  },
];

const TabsSection = () => {
  const [tab, setTab] = useState("education");
  // eslint-disable-next-line
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
          {" "}
          Education{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}>
          {" "}
          Certifications{" "}
        </TabButton>
      </div>
      <div className="px-4 text-gray-600 mt-4">{TAB_DATA.find(t => t.id === tab).content}</div>
    </>
  );
};

export default TabsSection;
