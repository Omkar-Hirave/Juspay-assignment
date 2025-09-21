import React from "react";
import { Box, Typography } from "@mui/material";
import SubtitleText from "../LeftSidebar/SubtitleText";
const RevenueChart = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f9fb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          gap: "24px",
        }}
      >
        <SubtitleText title="Revenue" />
        <Box sx={{ width: "1px", height: "20px", backgroundColor: "#d1d5db" }} />
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "#1f2937",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography sx={{ color: "#6b7280", mr: 1, fontSize: 13 }}>
              Current Week
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "#1f2937", fontSize: 13 }}>
              $58,211
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "#9ca3af",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography sx={{ color: "#6b7280", mr: 1, fontSize: 13 }}>
              Previous Week
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "#1f2937", fontSize: 13 }}>
              $68,768
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", height: "280px" }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pr: 2,
            zIndex: 1,
          }}
        >
          {["30M", "20M", "10M", "0"].map((label) => (
            <Typography key={label} sx={{ fontSize: 12, color: "#9ca3af" }}>
              {label}
            </Typography>
          ))}
        </Box>

        <Box sx={{ pl: "40px", height: "240px", position: "relative" }}>
          <svg
            width="100%"
            height="240"
            viewBox="0 0 600 240"
            style={{ overflow: "visible" }}
          >
            <path
              d="M 20 150 Q 80 190 140 150 Q 200 110 260 150 Q 320 120 380 80 L 440 60"
              fill="none"
              stroke="#1f2937"
              strokeWidth="2.5"
            />
            <path
              d="M 440 60 L 500 40 L 560 40"
              fill="none"
              stroke="#1f2937"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />

            <path
              d="M 20 180 Q 80 160 140 180 Q 200 200 260 180 Q 320 160 380 140 Q 440 120 500 100 L 560 100"
              fill="none"
              stroke="#a8c5da"
              strokeWidth="2.5"
            />

            {[{ cx: 20, cy: 150 }, { cx: 140, cy: 150 }, { cx: 260, cy: 150 }, { cx: 380, cy: 80 }, { cx: 500, cy: 40 }, { cx: 560, cy: 40 }].map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="#1f2937" />
            ))}

            {[{ cx: 20, cy: 180 }, { cx: 140, cy: 180 }, { cx: 260, cy: 180 }, { cx: 380, cy: 140 }, { cx: 500, cy: 100 }, { cx: 560, cy: 100 }].map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="#a8c5da" />
            ))}
          </svg>

          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              pl: "20px",
              pr: "40px",
            }}
          >
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
              <Typography key={month} sx={{ fontSize: 12, color: "#9ca3af" }}>
                {month}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RevenueChart;
