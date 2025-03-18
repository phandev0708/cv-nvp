"use client";
import "@fontsource/roboto/500.css";
import {
  Avatar,
  MenuItem,
  Select,
  Stack,
  styled,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import style from "./page.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...(theme.palette.mode === "dark" && {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...(theme?.palette?.mode === "dark" && {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...(theme?.palette?.mode === "dark" && {
      backgroundColor: "#8796A5",
    }),
  },
}));

export default function Home({ params }: any) {
  const trans = useTranslations("home");
  const router = useRouter();
  const pathName = usePathname();
  const locale = params.locale;
  const { theme, setTheme } = useTheme();

  const handleChange = (event: any) => {
    const newLocale = event.target.value;
    router.push(`/${newLocale}${pathName.replace(/^\/(vi|en)/, "")}`);
  };

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
        ` ${trans("day")} ` +
        CheckHour +
        " : " +
        CheckMinute +
        " : " +
        CheckSec +
        "  ";

      if (new Date().getMonth() + 1 == 8 && new Date().getDate() == 7) {
        clearInterval(countDown);
        p.innerHTML = trans("birthday");
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
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <h1 className={style.h1}>Nguyễn Văn Phần</h1>
            <h2 className={style.h2} style={{ paddingTop: 5 }}>
              {trans("major")}
            </h2>
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
          flexDirection: "row",
          gap: 1,
        }}
      >
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        <Select
          value={locale}
          onChange={handleChange}
          size="small"
          variant="outlined"
          sx={{
            "& fieldset": {
              border: "none",
            },
            color: theme === "dark" ? "#fff" : "#000",
            "& .MuiSelect-icon": {
              color: theme === "dark" ? "#fff" : "#000",
            },
            "& .MuiSelect-select": {
              color: theme === "dark" ? "#fff" : "#000",
            },
            "& .MuiSelect-root": {
              backgroundColor: theme === "dark" ? "#000" : "#fff",
            },
          }}
        >
          <MenuItem value="vi">Vi</MenuItem>
          <MenuItem value="en" className="!text-red">
            Eng
          </MenuItem>
        </Select>
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
