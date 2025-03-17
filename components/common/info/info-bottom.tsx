import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export interface IInfoBottomProps {}

export default function InfoBottom(props: IInfoBottomProps) {
  const trans = useTranslations();
  return (
    <Stack
      sx={{
        width: { xs: "96vw", md: "100vw" },
        flexDirection: { xs: "column", md: "row" },
        pt: 1,
        pb: 2,
        pl: 0,
        pr: { xs: 0, md: 2 },
      }}
    >
      <Stack sx={{ width: { xs: "100%", md: "33%" }, pl: 2 }}>
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("careerObjective.title")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ pt: 0 }}>
              {trans("careerObjective.description")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", md: "33%" },
          pl: 2,
          pr: 2,
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("interests.title")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>
              - {trans("interests.football")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>
              - {trans("interests.travel")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>
              - {trans("interests.travel")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", md: "33%" },
          pl: { xs: 2, md: 0 },
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("education.title")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
              justifyContent: "space-between",
              maxWidth: 400,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
              {trans("education.university.name")}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              {trans("education.university.time")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
              fontSize: 14,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              {`${trans("education.university.keys.specialized")}: ${trans(
                "education.university.values.specialized"
              )}`}
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              {`${trans("education.university.keys.graduation")}: ${trans(
                "education.university.values.graduation"
              )}, ${trans("education.university.keys.gpa")}: ${trans(
                "education.university.values.gpa"
              )}`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
