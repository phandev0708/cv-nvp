import InfoBottom from "@/components/common/info/info-bottom";
import InfoTop from "@/components/common/info/info-top";
import "@fontsource/roboto/500.css";
import { Avatar, Stack, Typography } from "@mui/material";
import style from "./page.module.css";

import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";

export default function Home() {
  return (
    <Stack sx={{ width: "100vw", height: "100vh", bgcolor: "#000" }}>
      <Stack id={style.ncMain} className={style.ncMain}>
        <Stack className={style.fullWh} p={5}>
          <Stack className={style.bgAnimation}>
            <Stack id={style.stars}></Stack>
            <Stack id={style.stars2}></Stack>
            <Stack id={style.stars3}></Stack>
            <Stack id={style.stars4}></Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            color: "#fff",
            right: { xs: 10, md: 20 },
            top: { xs: 10, md: 20 },
            position: "absolute",
            zIndex: 99999,
          }}
        >
          <SpeedDialTooltipOpen />
        </Stack>
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
                  Lập Trình Viên (FullStack)
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
              width: { xs: "96vw", md: "60%" },
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
              Là một người điềm tĩnh, thích ứng nhanh với môi trường mới, không
              ngại khó khăn, hứng thú trong việc tìm ra hướng giải quyết cho vấn
              đề.
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
      </Stack>
    </Stack>
  );
}
