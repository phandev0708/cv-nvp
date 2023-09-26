import { Stack, Typography } from "@mui/material";
import React from "react";

export interface IButtonCustomOneProps {
  title: string;
  keySort: string;
  choose: string;
  setChoose: any;
}

export default function ButtonCustomOne(props: IButtonCustomOneProps) {
  const { title, keySort, choose, setChoose } = props;
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Stack
        sx={{
          bgcolor:
            choose == keySort
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(255, 255, 255, 0.3)",
          width: { xs: 200, md: 300 },
          borderRadius: "5px",
          alignItems: "center",
          mt: 1,
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.9)",
            transform: "scale(1.1)",
          },
          position: "relative",
          transition: "all .35s ease-Out",
          overflow: "hidden",
          //   "&:hover .slide": {
          //     left: 0,
          //   },
          "&:hover .title": {
            color: "rgba(0, 0, 0, 0.8)",
          },
          backdropFilter: "blur(10px)",
          boxShadow:
            "1px 1px 0 0 rgba(255, 255, 255, 0.8) inset, 3px 5px 10px 0 rgba(0, 0, 0, 0.1)",
          textDecoration: "none",
          willChange: "color, text-shadow, font-size",
          transform: choose == keySort ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
        }}
        onClick={() => setChoose(keySort)}
      >
        {/* <Stack
          sx={{
            width: "100%",
            height: "100%",
            left: "-300px",
            bgcolor: "rgba(255, 255, 255, 0.8)",
            position: "absolute",
            transition: "all .35s ease-Out",
            bottom: 0,
          }}
          className="slide"
        ></Stack> */}
        <Typography
          sx={{
            fontSize: { xs: 15, md: 20 },
            color:
              choose == keySort
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(255, 255, 255, 0.6)",
            zIndex: 2,
            fontWeight: "bold",
            transition: "all .35s ease-Out",
          }}
          className="title"
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
}
