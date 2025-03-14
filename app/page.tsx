"use client";
import "@fontsource/roboto/500.css";
import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import style from "./page.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let p: any = document.querySelector(".newYear");
    const dob = new Date(
      new Date().getFullYear() + 1 + "-08-07 00:00:00"
    ).getTime();
    // if (new Date().getMonth() <= 1) {
    //   dob = new Date(new Date().getFullYear() + "-01-01 00:00:00").getTime();
    // }
    // const tet = new Date('1/1/2024 00:00:00').getTime();
    //Tổng số giây
    let countDown = setInterval(() => run(), 1000);
    const run = () => {
      const now = new Date().getTime();
      //Số s đến thời gian hiện tại
      const timeRest = dob - now;
      //Số s còn lại để đến tết;
      const day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
      //Số ngày còn lại
      const hours = Math.floor(
        (timeRest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      // Số giờ còn lại
      const minute = Math.floor((timeRest % (1000 * 60 * 60)) / (1000 * 60));
      // Số phút còn lại
      const sec = Math.floor((timeRest % (1000 * 60)) / 1000);
      // Số giây còn lại
      const CheckHour = hours / 10 >= 1 ? hours : "0" + hours;
      const CheckMinute = minute / 10 >= 1 ? minute : "0" + minute;
      const CheckSec = sec / 10 >= 1 ? sec : "0" + sec;
      p.innerHTML =
        day +
        " Ngày " +
        CheckHour +
        " : " +
        CheckMinute +
        " : " +
        CheckSec +
        "  ";

      if (new Date().getMonth() + 1 == 8 && new Date().getDate() == 7) {
        clearInterval(countDown);
        p.innerHTML = "Happy Birthday To Nguyễn Văn Phần";
      }
    };
  }, []);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: `radial-gradient(ellipse at center, rgba(0,0,255,0.3) 0%, rgba(0,0,0,0) 70%),
          radial-gradient(ellipse at center, rgba(255,0,0,0.3) 0%, rgba(0,0,0,0) 70%),
          radial-gradient(ellipse at center, rgba(0,255,0,0.3) 0%, rgba(0,0,0,0) 70%)
          #c3d7db`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "900px 900px, 900px 900px, 900px 900px",
        "@keyframes bganimation": {
          "0%": {
            backgroundPosition:
              "-100% -100%, 200% 200%, -100% 200%, 200% -100%",
          },
          "50%": {
            backgroundPosition: `150% 100%,
            -200% 100%,
            100% 0%,
            0% 100%`,
          },
          "100%": {
            backgroundPosition: `-100% -100%,
            200% 200%,
            -100% 200%,
            200% -100%`,
          },
        },
        animation: "bganimation 20s infinite",
      }}
    >
      <Stack id={style.left}>
        <Stack className={style.card}>
          <Stack className={style.avatar}></Stack>
          <Stack className={style.cover}></Stack>
          <Stack
            className={style.userinfomain}
            sx={{ justifyContent: "center", alignItems: "center", gap: 5 }}
          >
            <h1 className={style.h1}>Nguyễn Văn Phần</h1>
            <h2 className={style.h2}>Lập Trình Viên Fullstack</h2>
          </Stack>
          <Stack className={style.Stackider}></Stack>
          <Stack
            sx={{
              color: "#000",
              zIndex: 2,
              left: 30,
              bottom: 40,
              position: "absolute",
              webkitAnimation: "info 0.6s forwards",
              animation: "info 0.6s forwards",
              webkitAnimationIterationCount: 1,
              animationIterationCount: 1,
              webkitAnimationDelay: "2.6s",
              animationDelay: "2.6s",
              webkitTransitionTimingFunction: "ease-in-out",
              transitionTimingFunction: "ease-in-out",
              filter: "alpha(opacity=0)",
              opacity: 0,
              "@-webkit-keyframes info": {
                "0%": {
                  opacity: 0,
                  filter: "alpha(opacity=0)",
                  left: 30,
                  bottom: -20,
                },
                "100%": {
                  opacity: 1,
                  filter: "alpha(opacity=100)",
                  left: 30,
                  bottom: 40,
                },
              },
              "@keyframes info": {
                "0%": {
                  opacity: 0,
                  filter: "alpha(opacity=0)",
                  left: 30,
                  bottom: -20,
                },
                "100%": {
                  opacity: 1,
                  filter: "alpha(opacity=100)",
                  left: 30,
                  bottom: 40,
                },
              },
            }}
          >
            <Stack sx={{ flexDirection: "row" }}>
              <Stack>
                <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                  Email:
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                  Phone:
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                  DOB:
                </Typography>
              </Stack>
              <Stack sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
                  nguyenvanphan0708@gmail.com
                </Typography>
                <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
                  (+84) 338313262
                </Typography>
                <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
                  10/06/2000
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          className={style.instruction}
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
      <Stack
        sx={{
          color: "#fff",
          right: 20,
          top: { xs: "auto", md: 20 },
          position: "absolute",
          zIndex: 3,
          bottom: { xs: 20, md: "auto" },
        }}
      >
        <SpeedDialTooltipOpen />
      </Stack>
      <Stack
        sx={{
          color: "#fff",
          top: 20,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            flexDirection: "row",
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            pb: 2,
            pt: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              lineHeight: "20px",
              fontWeight: "bold",
              color: "white",
              pl: 2,
              pr: 2,
            }}
            className="newYear"
          ></Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
