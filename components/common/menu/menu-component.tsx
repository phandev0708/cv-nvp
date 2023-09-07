"use client";
import { Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { RightBarComponent } from "./rigth-bar";

export default function OpenIconSpeedDial() {
  const [open, setOpenRightBar] = useState(false);
  return (
    <Stack>
      <Tooltip title="Mở thanh công cụ phải.">
        <Stack
          onClick={() => setOpenRightBar(true)}
          sx={{
            backgroundColor: "rgba(128, 128, 128, 0.9)",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            width: { xs: 35, md: 50 },
            height: { xs: 35, md: 50 },
            borderRadius: "25px",
            cursor: "pointer",
            padding: "1px",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <MenuIcon />
          {/* <DashboardCustomizeIcon sx={{ color: '#fff' }} /> */}
        </Stack>
      </Tooltip>
      <RightBarComponent close={() => setOpenRightBar(false)} open={open} />
    </Stack>
  );
}
