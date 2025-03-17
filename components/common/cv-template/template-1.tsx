import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import InfoTop from "../info/info-top";
import InfoBottom from "../info/info-bottom";
import style from "../../../app/my-cv/page.module.css";
import { useTranslations } from "next-intl";

export interface ICvOneProps {}

export default function CvOne(props: ICvOneProps) {
  const trans = useTranslations();
  return (
    <Stack sx={{ position: "absolute", zIndex: 9999 }}>
      <Stack
        sx={{
          color: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          pt: 5,
          pr: { xs: 5, md: 0 },
        }}
      >
        <Stack className={style.avatar}>
          <Avatar
            sx={{
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              position: "relative",
            }}
            src="/image/avatar/phan.jpg"
            alt="avt"
          />
        </Stack>
        <Stack
          sx={{
            bgcolor: "rgba(128, 128, 128, 0.8)",
            ml: -5,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            height: { xs: 90, md: 130 },
            justifyContent: "space-around",
          }}
        >
          <Stack
            sx={{
              pl: 8,
              color: "#fff",
              pr: 5,
            }}
          >
            <Typography sx={{ fontSize: { xs: 25, md: 40 } }}>
              Nguyễn Văn Phần
            </Typography>
            <Typography sx={{ fontSize: { xs: 15, md: 20 } }}>
              {trans("major")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          mt: { xs: 0, md: -2 },
          width: { xs: "96vw", md: "100%" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 50,
            alignItems: "flex-start",
            height: { xs: 200, md: 180 },
          }}
        >
          ❝
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 20, md: 25 },
            width: { xs: "80%", md: "50%" },
            pl: 2,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {trans("note")}
        </Typography>
        <Stack
          sx={{ height: { xs: 200, md: 180 }, justifyContent: "flex-end" }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 50,
              textAlign: "center",
            }}
          >
            ❞
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ pr: { xs: 5, md: 0 } }}>
        <InfoTop />
        <InfoBottom />
      </Stack>
    </Stack>
  );
}
