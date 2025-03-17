import "@fontsource/roboto/500.css";
import { Stack } from "@mui/material";
import style from "./page.module.css";
import CvOne from "@/components/common/cv-template/template-1";
import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";
import TemplateTwo from "@/components/common/cv-template/template-2";

// fix source
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
        {/* <CvOne /> */}
        <TemplateTwo />
      </Stack>
    </Stack>
  );
}
