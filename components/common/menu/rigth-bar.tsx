"use client";
import { ItemNavRight, navigationMock } from "@/mocks/data-menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Drawer,
  IconButton,
  MenuItem,
  Select,
  Stack,
  styled,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
interface RightBarComponentProps {
  close: () => void;
  open: boolean;
}

export const RightBarComponent = (props: RightBarComponentProps) => {
  const { close, open } = props;
  const router = useRouter();
  // get path
  const pathName = usePathname();
  const trans = useTranslations();

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={() => {
        close();
      }}
      sx={{ zIndex: 100000 }}
    >
      <Stack
        sx={{
          width: "300px",
          height: "100vh",
          padding: "0px 10px",
          bgcolor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <Stack sx={{ alignItems: "flex-end", p: 2 }}>
          <Tooltip title={trans("closeMenu")}>
            <IconButton
              aria-label="settings"
              color={"inherit"}
              onClick={(e) => {
                close();
              }}
            >
              <MenuOpenIcon sx={{ transform: "rotate(180deg)" }} />
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack sx={{}} spacing={"15px"}>
          {navigationMock.map((v: ItemNavRight, k) => {
            const isActived = v?.path
              ? v?.path === "/"
                ? pathName === "/en" || pathName === "/vi"
                  ? true
                  : false
                : pathName.includes(v.path)
              : false;
            return (
              <Stack
                key={`navigation-item-right-bar-${k}`}
                direction="row"
                sx={{
                  padding: "10px",
                  transition: "all ease .5s",
                  borderRadius: "10px",
                  cursor: "pointer",
                  "&:hover ": {
                    boxShadow: " rgba(149, 157, 165, 0.24) 0px 8px 24px;",
                  },
                  backgroundColor: isActived ? "#78C6E7" : "transparent",
                  color: isActived ? "white" : "initial",
                }}
                spacing={"15px"}
                onClick={() => {
                  if (v?.path) {
                    router.replace(v?.path);
                  }
                  close();
                }}
              >
                <v.icon />
                <Typography>{trans(v.title)}</Typography>
              </Stack>
            );
          })}

          {/* <Stack sx={{ border: "1px dashed #9AA0A6;" }} /> */}
          {/* <Stack
            direction="row"
            sx={{
              padding: "10px",
              transition: "all ease .5s",
              borderRadius: "10px",
              cursor: "pointer",
              "&:hover ": {
                boxShadow: " rgba(149, 157, 165, 0.24) 0px 8px 24px;",
              },
            }}
            onClick={() => {
              router.replace("/dashboard/quick-access");

              close();
            }}
            spacing={"15px"}
          >
            <SwapHorizIcon />
            <Typography>Xử lý khẩn cấp</Typography>
          </Stack>

          <Stack sx={{ border: "1px dashed #9AA0A6;" }} />
          <Stack
            direction="row"
            sx={{
              padding: "10px",
              transition: "all ease .5s",
              borderRadius: "10px",
              cursor: "pointer",
              "&:hover ": {
                boxShadow: " rgba(149, 157, 165, 0.24) 0px 8px 24px;",
              },
            }}
            spacing={"15px"}
          >
            <LocationOnIcon />
            <Typography>Quản Lý Vị Trí Đỗ</Typography>
          </Stack> */}
        </Stack>
      </Stack>
    </Drawer>
  );
};
