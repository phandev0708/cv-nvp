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
  { icon: PersonPinIcon, title: "homePage", path: "/" },
  { icon: DescriptionOutlinedIcon, title: "cvPage", path: "/my-cv" },
  { icon: ImageOutlinedIcon, title: "imagePage", path: "/image" },
];
