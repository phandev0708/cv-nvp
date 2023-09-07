import { Stack, Typography } from "@mui/material";
import React from "react";

export interface IInfoBottomProps {}

export default function InfoBottom(props: IInfoBottomProps) {
  return (
    <Stack
      sx={{
        width: { xs: "96vw", md: "100vw" },
        flexDirection: { xs: "column", md: "row" },
        pt: 1,
        pb: 2,
        pl: 0,
        pr: { xs: 0, md: 2 },
      }}
    >
      <Stack sx={{ width: { xs: "100%", md: "33%" }, pl: 2 }}>
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            Mục Tiêu Nghề Nghiệp
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
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
      <Stack
        sx={{
          width: { xs: "100%", md: "33%" },
          pl: 2,
          pr: 2,
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            Sở Thích
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>- Đá bóng</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>
              - Du lịch với gia đình và bạn bè
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ color: "white" }}>- Chơi game</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", md: "33%" },
          pl: { xs: 2, md: 0 },
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              borderBottom: "2px solid white",
              maxWidth: 400,
            }}
          >
            Học Vấn
          </Typography>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
              justifyContent: "space-between",
              maxWidth: 400,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
              Đại học Thủ Dầu Một
            </Typography>
            <Typography sx={{ fontSize: 14 }}>8/2018 - 6/2022</Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
              fontSize: 14,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              Chuyên ngành: Kỹ thuật phần mềm
            </Typography>
          </Stack>
          <Stack
            sx={{
              color: "white",
              flexDirection: "row",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              Tốt nghiệp loại: Khá, Điểm: 7.49
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
