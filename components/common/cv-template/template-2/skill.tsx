import { Stack, Typography } from "@mui/material";
import React from "react";

export interface ISkillCompProps {}

export default function SkillComp(props: ISkillCompProps) {
  return (
    <Stack
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        p: { xs: 1, md: 5 },
        borderRadius: "15px",
        width: { xs: "100%", sm: "95%" },
        animation: "slideInFromLeft 3s forwards",
        "@keyframes slideInFromLeft": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              // pt: 1,
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
            }}
          >
            Kỹ Năng
          </Typography>
          <Stack sx={{ pt: 2 }}>
            <Stack>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 20, sm: 30 },
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                Ngôn ngữ và Framework
              </Typography>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - HTML5, CSS, JavaScript
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - NestJs, NextJs, Typescript,...
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - SQL Server, MySQL, MariaDB, PostgreSQL
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ pt: 2 }}>
            <Stack>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 20, sm: 30 },
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                Quy trình làm việc
              </Typography>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  color: "white",
                  pt: 1,
                }}
              >
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - Phát triển website theo yêu cầu của khách hàng
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - Hỗ trợ Deploy sản phẩm lên server
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                >
                  - Xử lý dữ liệu và tối ưu hóa hệ thống
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
