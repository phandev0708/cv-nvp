import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

export interface ItemNavRight {
  icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  path?: string;
}

export const navigationMock: ItemNavRight[] = [
  { icon: PersonPinIcon, title: "Trang chủ", path: "/" },
  { icon: DescriptionOutlinedIcon, title: "CV", path: "/my-cv" },
  { icon: ImageOutlinedIcon, title: "Hình ảnh", path: "/image" },
];
