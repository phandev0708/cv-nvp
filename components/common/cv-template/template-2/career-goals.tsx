import { Stack, Typography } from "@mui/material";
import React from "react";

export interface ICareerGoalCompProps {}

export default function CareerGoalComp(props: ICareerGoalCompProps) {
  return (
    <Stack
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        p: { xs: 2, sm: 5 },
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
      <Stack sx={{ width: "100%" }}>
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 35, sm: 50 },
              fontWeight: 700,
              borderBottom: "2px solid white",
            }}
          >
            Mục Tiêu Nghề Nghiệp
          </Typography>
          <Stack
            sx={{
              color: "white",
              pt: 5,
            }}
          >
            <Typography sx={{ pt: 0 }}>
              Là một lập trình viên, tôi luôn trân trọng việc xây dựng và tạo ra
              những ứng dụng mang tính ứng dụng cao. Sự sáng tạo và thách thức
              trong việc giải quyết vấn đề kỹ thuật là động lực của tôi. Tôi tận
              hưởng việc học hỏi và áp dụng những công nghệ mới, tạo ra những
              sản phẩm có giá trị thực sự cho người dùng và đóng góp vào sự phát
              triển của thế giới số hóa.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
