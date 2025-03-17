import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export interface IExperienceCompProps {}

export default function ExperienceComp(props: IExperienceCompProps) {
  const trans = useTranslations("experiences");
  const data = [
    {
      company: "company1.name",
      time: "company1.time",
      position: "positionFullstack",
      description: ["company1.description1"],
    },
    {
      company: "company2.name",
      time: "company2.time",
      position: "positionFullstack",
      description: [
        "company2.description1",
        "company2.description2",
        "company2.description3",
      ],
    },
    {
      company: "Công ty TNHH giải pháp VNTTS",
      time: "company3.time",
      position: "company3.position",
      description: ["company3.description1"],
    },
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
          pl: 0,
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
              // maxWidth: 400,
            }}
          >
            {trans("title")}
          </Typography>
          {data.map((item, index) => (
            <Stack key={index}>
              <Stack
                sx={{
                  color: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  pt: { xs: 5, sm: 2 },
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 20, sm: 30 },
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {trans(item.company)}
                </Typography>
                <Typography sx={{ fontSize: { xs: 10, sm: 14 } }}>
                  {trans(item.time)}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 20 },
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  {trans(item.position)}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  color: "white",
                  justifyContent: "center",
                  pt: 1,
                }}
              >
                {item.description.map((desc, index) => (
                  <Typography key={index} sx={{ fontSize: { xs: 14, sm: 16 } }}>
                    - {trans(desc)}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
