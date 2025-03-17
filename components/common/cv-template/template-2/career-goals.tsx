import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export interface ICareerGoalCompProps {}

export default function CareerGoalComp(props: ICareerGoalCompProps) {
  const trans = useTranslations("careerObjective");
  return (
    <Stack
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        p: { xs: 2, sm: 5 },
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
      <Stack sx={{ width: "100%" }}>
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
            }}
          >
            {trans("title")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              pt: 5,
            }}
          >
            <Typography sx={{ pt: 0 }}>{trans("description")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
