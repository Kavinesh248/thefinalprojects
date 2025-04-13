import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const CustomAccordion = ({ project }) => {
  console.log(project);
  return (
    <Accordion
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        paddingInline: "0.2rem",
        paddingBlock: "0.4rem",
        "&.Mui-expanded": {
          margin: 0, // removes margin when expanded
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: "white", fontSize: "2.2rem" }} />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ fontFamily: "Outfit" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            {+project[0] + 1}
          </Box>
          <Typography fontSize="1.6rem" fontFamily="Outfit" fontWeight={400}>
            {project[1].title}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          backgroundColor: "#111",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "inset 4px 0 0 var(--bg--primary-orange)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#ff6600",
              fontSize: "2.4rem",
            }}
          >
            <PlayArrowIcon
              sx={{
                fontSize: "2.4rem",
              }}
            />
            <Typography fontSize="1.6rem">Project 1</Typography>
          </Box>
          <Typography fontSize="1.4rem">{project[1].duration}</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={0}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: "#444",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#ff6600",
              },
            }}
          />
        </Box>

        <Typography fontSize="1.3rem" marginTop="1.2rem" color="#ccc">
          Uploaded by admin 🧑‍💻
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
