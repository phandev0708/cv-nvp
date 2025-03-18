"use client";
import TemplateTwo from "@/components/common/cv-template/template-2";
import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";
import "@fontsource/roboto/500.css";
import { MenuItem, Select, Stack } from "@mui/material";
import style from "./page.module.css";
import { usePathname, useRouter } from "next/navigation";

// fix source
export default function Home({ params }: any) {
  const locale = params.locale;
  const router = useRouter();
  const pathName = usePathname();
  const handleChange = (event: any) => {
    const newLocale = event.target.value;
    router.push(`/${newLocale}${pathName.replace(/^\/(vi|en)/, "")}`);
  };

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
            flexDirection: "row",
          }}
        >
          {/* <MaterialUISwitch
          sx={{ m: 1 }}
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        /> */}
          <Select
            value={locale}
            onChange={handleChange}
            size="small"
            variant="outlined"
            sx={{
              "& fieldset": {
                border: "none",
              },
            }}
          >
            <MenuItem value="vi">Vi</MenuItem>
            <MenuItem value="en">Eng</MenuItem>
          </Select>
          <SpeedDialTooltipOpen />
        </Stack>
        {/* <CvOne /> */}
        <TemplateTwo />
      </Stack>
    </Stack>
  );
}
