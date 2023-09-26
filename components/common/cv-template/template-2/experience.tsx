import { Stack, Typography } from "@mui/material";
import React from "react";

export interface IExperienceCompProps {}

export default function ExperienceComp(props: IExperienceCompProps) {
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
          pl: 0,
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
              // maxWidth: 400,
            }}
          >
            Kinh Nghiệm Làm Việc
          </Typography>
          <Stack>
            <Stack
              sx={{
                color: "white",
                flexDirection: "row",
                alignItems: "center",
                pt: { xs: 5, sm: 2 },
                justifyContent: "space-between",
                // maxWidth: 400,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 30 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Công ty cổ phần công nghệ ORYZA SYSTEMS
              </Typography>
              <Typography sx={{ fontSize: { xs: 10, sm: 14 } }}>
                04/2022 - Hiện nay
              </Typography>
            </Stack>
            <Stack
              sx={{
                color: "white",
                pt: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20 },
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                Nhân viên lập trình
              </Typography>
            </Stack>
            <Stack
              sx={{
                color: "white",
                justifyContent: "center",
                pt: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                - Phát triển website theo yêu cầu của khách hàng
              </Typography>
              <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                - Hỗ trợ Deploy sản phẩm lên server
              </Typography>
              <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                - Quản lý cơ sở dữ liệu và tối ưu hóa hệ thống
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              sx={{
                color: "white",
                flexDirection: "row",
                alignItems: "center",
                pt: { xs: 5, sm: 2 },
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 30 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                CÔNG TY TNHH GIẢI PHÁP VNTTS
              </Typography>
              <Typography sx={{ fontSize: { xs: 10, sm: 14 } }}>
                11/2021 - 04/2022
              </Typography>
            </Stack>
            <Stack
              sx={{
                color: "white",
                pt: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20 },
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                CTV Lập Trình Viên
              </Typography>
            </Stack>
            <Stack
              sx={{
                color: "white",
                justifyContent: "center",
                pt: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                - Hỗ trợ chỉnh sửa giao diện website và nghiên cứu phần mềm mã
                nguồn mở.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
