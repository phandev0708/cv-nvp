import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export interface IInterestsCompProps {}

export default function InterestsComp(props: IInterestsCompProps) {
  const data = [
    "⚽ Đá banh",
    "🌏 Du lịch",
    "🎤 Ca hát",
    "📷 Chụp ảnh",
    "🥋 Võ thuật",
    "🌳 Làm vườn",
    "🎮 Chơi game",
    "🎧 Nghe nhạc",
  ];
  return (
    <Stack
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        p: { xs: 1, md: 5 },
        borderRadius: "15px",
        width: { xs: "100%", sm: "95%" },
        animation: "slideInFromLeft 3s forwards",
        "@keyframes slideInFromLeft": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
            }}
          >
            Sở Thích
          </Typography>

          <Stack sx={{ pt: 3, pl: { xs: 0, sm: 0 } }}>
            <Grid container spacing={0} gap={2}>
              {data.map((item, index) => (
                <Grid xs={3} sm={4} md={3} lg={2} key={index}>
                  <Stack
                    sx={{
                      color: "white",
                      width: { xs: 100, sm: 120 },
                      border: "1px solid white",
                      borderRadius: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      pt: 0.5,
                      pb: 0.5,
                    }}
                  >
                    <Typography
                      sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                    >
                      ️{item}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
