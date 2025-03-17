import { Stack, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import CakeIcon from "@mui/icons-material/Cake";
import MaleIcon from "@mui/icons-material/Male";
import { useTranslations } from "next-intl";

export interface IInfoTopProps {}

export default function InfoTop(props: IInfoTopProps) {
  const trans = useTranslations();
  return (
    <Stack
      sx={{
        width: { xs: "96vw", md: "100vw" },
        flexDirection: { xs: "column", md: "row" },
        pb: 2,
      }}
    >
      <Stack sx={{ width: { xs: "100%", md: "33%" }, pl: 2 }}>
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              // pt: 5,
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("cv.personalInfo")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <CakeIcon />
            <Typography sx={{ color: "white", pt: 1 }}>: 10/06/2000</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <MaleIcon />
            <Typography sx={{ color: "white" }}>: {trans("gender")}</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <PhoneIcon />
            <Typography sx={{ color: "white" }}>: 0338313262</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <EmailIcon />
            <Typography sx={{ color: "white" }}>
              : nguyenvanphan0708@gmail.com
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              // alignItems: "center",
              pt: 1,
            }}
          >
            <HomeIcon />
            <Typography sx={{ color: "white", pt: 0.3 }}>
              : {trans("address")}
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
            <FacebookIcon />
            <a href="https://www.facebook.com/Nguyenvanphan0708/">
              <Typography sx={{ color: "white" }}>
                : facebook.com/Nguyenvanphan0708/
              </Typography>
            </a>
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
              // pt: 1,
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("skills.title")}
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
              - {trans("skills.skill1.description1")}
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
              - {trans("skills.skill1.description2")}
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
              - {trans("skills.skill1.description3")}
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
              // pt: 5,
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            {trans("experiences.title")}
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              // alignItems: "center",
              pt: 1,
              justifyContent: "space-between",
              // maxWidth: 550,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {trans("experiences.company1.name")}
            </Typography>
            <Typography sx={{ fontSize: 14, width: 200, pt: 0.4, pl: 1 }}>
              {trans("experiences.company1.time")}
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
            <Typography sx={{ fontSize: 16 }}>Nhân viên lập trình</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              justifyContent: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              - Viết Backend cho các sản phẩm công ty và quản lý cơ sở dữ
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
              - Hỗ trợ viết Frontend
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              // alignItems: "center",
              pt: 1,
              justifyContent: "space-between",
              // maxWidth: 550,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              CÔNG TY TNHH GIẢI PHÁP VNTTS
            </Typography>
            <Typography sx={{ fontSize: 14, width: 200, pt: 0.4, pl: 1 }}>
              11/2021 - 4/2022
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
            <Typography sx={{ fontSize: 16 }}>CTV Lập Trình Viên</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              justifyContent: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              - Hỗ trợ chỉnh sửa giao diện website và nghiên cứu phần mềm mã
              nguồn mở.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
