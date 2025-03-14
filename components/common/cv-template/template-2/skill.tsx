import { Stack, Typography } from "@mui/material";
import React from "react";

export interface ISkillCompProps {}

export default function SkillComp(props: ISkillCompProps) {
  const data = [
    {
      title: "Ngôn ngữ và Framework",
      content: [
        "HTML5, CSS, JavaScript",
        "NestJs, NextJs, Typescript,...",
        "SQL Server, MySQL, MariaDB, PostgreSQL",
      ],
    },
    {
      title: "Quy trình làm việc",
      content: [
        "Phát triển website theo yêu cầu của khách hàng",
        "Hỗ trợ Deploy sản phẩm lên server",
        "Xử lý dữ liệu và tối ưu hóa hệ thống",
      ],
    },
  ];
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
          {data.map((item, index) => (
            <Stack sx={{ pt: 2 }} key={index}>
              <Stack>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: 20, sm: 30 },
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
              <Stack>
                <Stack
                  sx={{
                    color: "white",
                    pt: 1,
                  }}
                >
                  {item.content.map((content, index) => (
                    <Typography
                      key={index}
                      sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                    >
                      - {content}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
