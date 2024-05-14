import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SingleToolSection from "./SingleToolSection/SingleToolSection";
import { ToolsSectionData } from "./ToolsSectionData";

// FramerMotion
import { motion } from "framer-motion";

const ToolsSection = () => {
  return (
    <section className="pt-30" id="tools">
      <div className="container">
        <SectionTitle sectionTitleText={SectionTitleHelper.tools} />
        <div className="row">
          {ToolsSectionData?.map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-lg-2 col-md-6 col-sm-6 col-6"
              key={index}
            >
              <SingleToolSection
                key={item.id}
                toolName={item.toolName}
                toolLogo={item.toolLogo}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
