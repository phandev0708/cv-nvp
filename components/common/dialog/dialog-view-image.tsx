"use client";
import CloseIcon from "@mui/icons-material/Close";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { Modal, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface ModalShowImageProps {
  imageShow?: any;
  close: any;
  open: boolean;
}
export default function ModalShowImage(props: ModalShowImageProps) {
  const { imageShow, close, open } = props;
  const [sizeImage, setSizeImage] = useState(90);
  const [rotate, setRotate] = useState(0);
  return (
    <Modal
      open={open}
      onClose={() => {
        close();
        setSizeImage(90);
        setRotate(0);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Stack>
        <Stack
          sx={{
            maxWidth: "90vw",
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              position: "fixed",
              top: 20,
              right: 20,
              backgroundColor: "rgba(233, 79, 79, 0.8)",
              "&:hover ": {
                backgroundColor: "rgba(233, 79, 79, 1)",
              },
              width: 60,
              height: 30,
              borderRadius: 1,
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              close();
              setSizeImage(90);
              setRotate(0);
            }}
          >
            <CloseIcon />
          </Stack>
          <Stack
            sx={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              overflow: "auto",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Stack
              component="img"
              src={imageShow}
              alt={"photo"}
              sx={{
                maxWidth: `${sizeImage}%`,
                maxHeight: `${sizeImage}vh`,
                transform: `rotate(${rotate}deg)`,
              }}
            ></Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>{`${(
            (sizeImage / 90) *
            100
          ).toFixed(0)}%`}</Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={0.5}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => setSizeImage((pre) => pre + 10)}
              sx={{ bgcolor: "rgba(171, 180, 210, 0.3)" }}
            >
              <ZoomInIcon />
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => setSizeImage((pre) => (pre == 0 ? pre : pre - 10))}
              sx={{ bgcolor: "rgba(171, 180, 210, 0.3)" }}
            >
              <ZoomOutIcon />
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => setRotate((pre) => pre + 90)}
              sx={{ bgcolor: "rgba(171, 180, 210, 0.3)" }}
            >
              <RotateLeftIcon />
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => setRotate((pre) => pre - 90)}
              sx={{ bgcolor: "rgba(171, 180, 210, 0.3)" }}
            >
              <RotateRightIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}
