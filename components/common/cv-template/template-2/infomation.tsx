import { Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import CakeIcon from "@mui/icons-material/Cake";
import MaleIcon from "@mui/icons-material/Male";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface IInfomationProps {}

export default function Infomation(props: IInfomationProps) {
  return (
    <Stack
      sx={{
        // pt: { xs: 2, sm: 20 },
        opacity: 1,
        filter: "alpha(opacity=100)",
        webkitAnimation: "card 2s forwards",
        webkitAnimationIterationCount: 1,
        webkitAnimationDelay: 0,
        animation: "card 2s forwards",
        webkitAnimationIterationDount: 1,
        animationIterationCount: 1,
        animationDelay: 0,
        webkitTransitionTimingFunction: "ease-in-out",
        transitionTimingFunction: "ease-in-out",
        justifyContent: { xs: "flex-start", sm: "center" },
        // boxSizing: "border-box",
        // mozBoxSizing: "borderBox",
        // webkitBoxSizing: "border-box",
        "@-webkit-keyframes card": {
          "0%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "0px solid #fff",
            background: "#444a59",
            overflow: "hidden",
            pt: 0,
          },
          "60%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "100% solid #fff",
            background: "#444a59",
            overflow: "hidden",
            pt: 0,
          },
          "61%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "0px solid #fff",
            background: "rgba(0, 0, 0, 0.6)",
            overflow: "hidden",
            pt: 0,
          },
          "100%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "60vh",
            pt: { xs: 2, sm: 20 },
          },
        },
        "@keyframes card": {
          "0%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "0px solid #fff",
            background: "#444a59",
            overflow: "hidden",
            pt: 0,
          },
          "60%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "520px solid #fff",
            background: "#444a59",
            overflow: "hidden",
            pt: 0,
          },
          "61%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            height: "1px",
            borderLeft: "0px solid #fff",
            background: "rgba(0, 0, 0, 0.6)",
            overflow: "hidden",
            pt: 0,
          },
          "100%": {
            opacity: 1,
            filter: "alpha(opacity=100)",
            width: { xs: "100%", sm: "95%" },
            pt: { xs: 2, sm: 20 },
            height: "60vh",
          },
        },
      }}
    >
      <Stack
        sx={{
          bgcolor: "rgba(0,0,0,0.5)",
          p: { xs: 3, sm: 5 },
          borderRadius: "15px",
          width: { xs: "100%", sm: "95%" },
        }}
      >
        <Stack>
          <Stack>
            <Typography
              sx={{
                fontSize: { xs: 30, md: 70 },
                color: "white",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Nguyễn <span style={{ color: "aqua" }}>Văn Phần</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 30 },
                color: "white",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              Lập Trình Viên <span style={{ color: "aqua" }}>(FullStack)</span>
            </Typography>
          </Stack>
          <Stack sx={{ pt: 1 }}>
            <Stack
              sx={{
                color: "white",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CakeIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
              <Typography
                sx={{ color: "white", pt: 1, fontSize: { xs: 14, sm: 16 } }}
              >
                : 10/06/2000
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
              <MaleIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
              <Typography sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
                : Nam
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
              <PhoneIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
              <Typography sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
                : 0338313262
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
              <EmailIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
              <Typography sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
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
              <HomeIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
              <Typography
                sx={{ color: "white", pt: 0.3, fontSize: { xs: 14, sm: 16 } }}
              >
                : 289/G Tổ 9, Khu 7, P. Hiệp Thành, TP. Thủ Dầu Một, Tỉnh Bình
                Dương
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ pt: { xs: 2, sm: 5 } }}>
            <Stack
              sx={{
                // justifyContent: "center",
                // alignItems: "center",
                flexDirection: "row",
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 18, md: 25 },
                  pl: 2,
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 30 }}>❝</span> Là một người điềm tĩnh,
                thích ứng nhanh với môi trường mới, không ngại khó khăn, hứng
                thú trong việc tìm ra hướng giải quyết cho vấn đề.{" "}
                <span style={{ fontSize: 30 }}>❞</span>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 1, sm: 10 },
            color: "aqua",
            // position: "absolute",
          }}
        >
          <Tooltip title="Facebook" placement="top">
            <a href="https://www.facebook.com/Nguyenvanphan0708/">
              <FacebookIcon sx={{ fontSize: 50, cursor: "pointer" }} />
            </a>
          </Tooltip>
          <Tooltip title="Instagram" placement="top">
            <a href="https://www.instagram.com/st_star_oshin/">
              <InstagramIcon sx={{ fontSize: 50, cursor: "pointer" }} />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top">
            <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-v%C4%83n-ph%E1%BA%A7n-3ab31222b/">
              <LinkedInIcon sx={{ fontSize: 50, cursor: "pointer" }} />
            </a>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
}
