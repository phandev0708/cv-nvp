import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export interface ISkillCompProps {}

export default function SkillComp(props: ISkillCompProps) {
  const trans = useTranslations("skills");
  const data = [
    {
      title: "skill1.title",
      content: [
        "skill1.description1",
        "skill1.description2",
        "skill1.description3",
      ],
    },
    {
      title: "skill2.title",
      content: [
        "skill2.description1",
        "skill2.description2",
        "skill2.description3",
      ],
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
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              // pt: 1,
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
            }}
          >
            {trans("title")}
          </Typography>
          {data.map((item, index) => (
            <Stack sx={{ pt: 2 }} key={index}>
              <Stack>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: 20, sm: 30 },
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  {trans(item.title)}
                </Typography>
              </Stack>
              <Stack>
                <Stack
                  sx={{
                    color: "white",
                    pt: 1,
                  }}
                >
                  {item.content.map((content, index) => (
                    <Typography
                      key={index}
                      sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                    >
                      - {trans(content)}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
