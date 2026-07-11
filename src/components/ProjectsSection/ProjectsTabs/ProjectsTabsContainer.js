import React, { useState } from "react";

//Bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//Custom Comp
import ProjectsTab from "./ProjectsTab";

//Data Files
import PortfolioDataWeb from "../../../Data/PortfolioData/PortfolioDataWeb";
import PortfolioDataCatalogue from "../../../Data/PortfolioData/PortfolioDataCatalogue";
import PortfolioDataLogo from "../../../Data/PortfolioData/PortfolioDataLogo";
import PortfolioDataUiUx from "../../../Data/PortfolioData/PortfolioDataUiUx";
import PortfolioDataSocialMediaDesign from "../../../Data/PortfolioData/PortfolioDataSocialMediaDesign";
import PortfolioDataPoster from "../../../Data/PortfolioData/PortfolioDataPoster";
import PortfolioDataOther from "../../../Data/PortfolioData/PortfolioDataOther";

function ProjectsTabsContainer() {
  const [key, setKey] = useState("web");

  return (
    <div style={{ width: "100%", overflow: "hidden", margin: "auto" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="filters mb-3 justify-content-sm-center justify-content-md-space-between"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
          padding: "12px 15px",
          textTransform: "uppercase",
          color: "#222 !important",
          backgroundColor: "transparent !important",
          fontSize: "12px",
          fontWeight: "500",
          border: "none",
          // overflow: "auto",
          // flexWrap: "nowrap",
        }}
      >
        <Tab
          style={{ border: "none", textTransform: "Uppercase" }}
          eventKey="all"
          title="All"
        >
          <ProjectsTab data={PortfolioDataWeb} onlyPics={false} />
          <ProjectsTab data={PortfolioDataUiUx} onlyPics={false} />
          <ProjectsTab data={PortfolioDataLogo} onlyPics={false} />
          <ProjectsTab data={PortfolioDataSocialMediaDesign} onlyPics={false} />
          <ProjectsTab data={PortfolioDataPoster} onlyPics={false} />
          <ProjectsTab data={PortfolioDataCatalogue} onlyPics={false} />
          <ProjectsTab data={PortfolioDataOther} onlyPics={false} />
        </Tab>

        <Tab
          style={{ border: "none", textTransform: "Uppercase" }}
          eventKey="web"
          title="Web Development"
        >
          <ProjectsTab data={PortfolioDataWeb} onlyPics={false} />
        </Tab>

        <Tab eventKey="uiux" title="UI/UX">
          <ProjectsTab data={PortfolioDataUiUx} onlyPics={false} />
        </Tab>

        <Tab eventKey="logo" title="Logo Design">
          <ProjectsTab data={PortfolioDataLogo} onlyPics={false} />
        </Tab>

        <Tab eventKey="social-media-design" title="Social Media Design">
          <ProjectsTab data={PortfolioDataSocialMediaDesign} onlyPics={false} />
        </Tab>

        <Tab eventKey="poster" title="Poster/Banner">
          <ProjectsTab data={PortfolioDataPoster} onlyPics={false} />
        </Tab>

        <Tab eventKey="catalogue" title="Catalogue">
          <ProjectsTab data={PortfolioDataCatalogue} onlyPics={false} />
        </Tab>

        <Tab eventKey="other" title="Other">
          <ProjectsTab data={PortfolioDataOther} onlyPics={false} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProjectsTabsContainer;
