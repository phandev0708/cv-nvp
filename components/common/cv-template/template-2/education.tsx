import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export interface IEducationCompProps {}

export default function EducationComp(props: IEducationCompProps) {
  const trans = useTranslations("education");
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
      <Stack>
        <Stack
          sx={{
            width: "100%",
            pl: 0,
            pt: { xs: 2, md: 0 },
          }}
        >
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
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 2,
              justifyContent: "space-between",
              // maxWidth: 400,
            }}
          >
            <Typography sx={{ fontSize: { xs: 20, sm: 30 }, fontWeight: 600 }}>
              {trans("university.name")}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 12, sm: 14 }, pr: { xs: 1, sm: 0 } }}
            >
              {trans("university.time")}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 600 }}
                >
                  {trans("university.keys.specialized")}:{" "}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 600 }}
                >
                  {trans("university.keys.graduation")}:{" "}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 600 }}
                >
                  {trans("university.keys.gpa")}:{" "}
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ pl: 2 }}>
              <Stack
                sx={{
                  color: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  pt: 1,
                  fontSize: 14,
                }}
              >
                <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                  {trans("university.values.specialized")}
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
                <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                  {trans("university.values.graduation")}
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
                <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                  {trans("university.values.gpa")}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
