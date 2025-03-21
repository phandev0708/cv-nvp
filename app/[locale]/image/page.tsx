"use client";
import React, { useState } from "react";
import { dataImage } from "@/mocks/data-image";
import Image from "next/image";
import { Dialog, Stack, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import style from "./style.module.css";
import Grid2 from "@mui/material/Unstable_Grid2";
import SpeedDialTooltipOpen from "@/components/common/menu/menu-component";
import ModalShowImage from "@/components/common/dialog/dialog-view-image";
import { useTranslations } from "next-intl";

export default function TitlebarBelowImageList() {
  const [open, setOpen] = useState(false);
  const [dataImg, setDataImg] = useState({
    img: "",
    title: "",
  });
  const trans = useTranslations("imageComp");

  const handleClose = () => {
    setOpen(false);
    setDataImg({
      img: "",
      title: "",
    });
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        pl: 8,
        pr: 8,
        pb: 8,
        width: "100vw",
        height: "100vh",
        animation: "slideInFromLeft 3s forwards",
        "@keyframes slideInFromLeft": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        overflow: "auto",
      }}
    >
      <Grid2 container spacing={2}>
        {dataImage.map((item, index) => {
          return (
            <Grid2
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              key={index}
              sx={{ pt: 5 }}
            >
              <Tooltip title={trans(item.title)}>
                <Stack
                  className={style.swing}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpen(true);
                    setDataImg(item);
                  }}
                >
                  <Image
                    src={item.img}
                    alt={trans(item.title)}
                    width={500}
                    height={500}
                    loading="lazy"
                    className={style.img}
                  />
                </Stack>
              </Tooltip>
            </Grid2>
          );
        })}
      </Grid2>
      <ModalShowImage close={handleClose} open={open} imageShow={dataImg.img} />
      <Stack
        sx={{
          color: "#fff",
          right: 20,
          top: 20,
          position: "absolute",
          zIndex: 3,
        }}
      >
        <SpeedDialTooltipOpen />
      </Stack>
    </Stack>
  );
}
