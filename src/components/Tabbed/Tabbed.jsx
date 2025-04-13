import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import ProjectVideoCard from "../ProjectVideCard/ProjectVideoCard";
import TabbedCotent from "../TabbedComponent/TabbedCotent";

const Tabbed = function ({ dispatch, projects, currentProject }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50rem",
        height: "100%",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#4b4947" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--bg--primary-orange)",
                height: "2.4px",
              },
              "& .MuiTab-root": {
                fontFamily: "Outfit",
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.6rem",
                  lg: "1.7rem",
                },
                color: "white",
                textTransform: "none",
                fontWeight: 500,
              },
              "& .MuiTab-root.Mui-selected": {
                color: "var(--bg--primary-orange)",
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
          sx={{
            padding: "1.8rem",
            overflowY: "auto",
            fontSize: {
              xs: "1.4rem",
              sm: "1.6rem",
              md: "1.8rem",
            },
            fontWeight: 400,
          }}
        >
          <TabbedCotent description={currentProject.description} />
        </TabPanel>

        <TabPanel
          value="2"
          sx={{
            display: "grid",
            gap: "2rem",
            paddingInline: "1.6rem",
            paddingBlock: "2.4rem",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            gridTemplateColumns: {
              sm: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            },
          }}
        >
          {Object.values(projects).map((project) => {
            return (
              <ProjectVideoCard
                key={project.id}
                project={project}
                dispatch={dispatch}
              />
            );
          })}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabbed;
