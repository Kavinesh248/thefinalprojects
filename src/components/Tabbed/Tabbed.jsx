import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import ProjectVideoCard from "../ProjectVideCard/ProjectVideoCard";

const Tabbed = function () {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#4b4947" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "orange",
                height: "2.4px",
              },
              "& .MuiTab-root": {
                fontFamily: "Outfit",
                fontSize: "1.4rem",
                color: "white",
                textTransform: "none",
                fontWeight: 500,
              },
              "& .Mui-selected": {
                color: "orange",
              },
            }}
          >
            <Tab label="Description" value="1" />
            <Tab label="Project Videos" value="2" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          className="customTabPanel"
          sx={{ padding: "1.8rem", maxHeight: "300px", overflowY: "auto" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat
          libero, sapiente ipsa ab at ex eos alias illo.
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            display: "grid",
            gap: "2rem",
            paddingInline: "1.6rem",
            paddingBlock: "2.4rem",
            maxHeight: "300px",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <ProjectVideoCard />
          <ProjectVideoCard />
          <ProjectVideoCard />
          <ProjectVideoCard />
          <ProjectVideoCard />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabbed;
