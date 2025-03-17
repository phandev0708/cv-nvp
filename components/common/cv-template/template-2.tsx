"use client";
import { Avatar, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import style from "../../../app/[locale]/my-cv/page.module.css";
import Infomation from "./template-2/infomation";
import EducationComp from "./template-2/education";
import ButtonCustomOne from "../button-customs/button-custom-1";
import CareerGoalComp from "./template-2/career-goals";
import SkillComp from "./template-2/skill";
import ExperienceComp from "./template-2/experience";
import InterestsComp from "./template-2/interests";
import { useTranslations } from "next-intl";

export interface ITemplateTwoProps {}

export default function TemplateTwo(props: ITemplateTwoProps) {
  const [choose, setChoose] = React.useState<string>("ABOUT");
  const trans = useTranslations("cv");

  const page = () => {
    switch (choose) {
      case "INTERESTS":
        return <InterestsComp />;
      case "EXPERIENCE":
        return <ExperienceComp />;
      case "SKILL":
        return <SkillComp />;
      case "CAREER_GOALS":
        return <CareerGoalComp />;
      case "EDUCATION":
        return <EducationComp />;
      default:
        return <Infomation />;
    }
  };
  return (
    <Stack sx={{ position: "absolute", zIndex: 9999, pt: { xs: 2, sm: 0 } }}>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          width: "100vw",
          height: { xs: "98vh", sm: "100vh" },
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: { xs: "100vw", sm: "30vw" },
            height: { xs: "33vh", sm: "100vh" },
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              webkitAnimation: "info 1.6s forwards",
              animation: "info 1.6s forwards",
              webkitAnimationIterationCount: 1,
              animationIterationCount: 1,
              webkitAnimationDelay: "0.2s",
              animationDelay: "0.2s",
              webkitTransitionTimingFunction: "ease-in-out",
              transitionTimingFunction: "ease-in-out",
              filter: "alpha(opacity=0)",
              opacity: 0,
              "@-webkit-keyframes info": {
                "0%": {
                  opacity: 0,
                  filter: "alpha(opacity=0)",
                },
                "100%": {
                  opacity: 1,
                  filter: "alpha(opacity=100)",
                },
              },
              "@keyframes info": {
                "0%": {
                  opacity: 0,
                  filter: "alpha(opacity=0)",
                },
                "100%": {
                  opacity: 1,
                  filter: "alpha(opacity=100)",
                },
              },
            }}
          >
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack className={style.avatar}>
                <Avatar
                  sx={{
                    width: { xs: 100, md: 150 },
                    height: { xs: 100, md: 150 },
                    position: "relative",
                  }}
                  src="/image/avatar/phan.jpg"
                  alt="avt"
                />
              </Stack>
            </Stack>
            <Stack sx={{ pt: { xs: 1, sm: 3 } }}>
              <ButtonCustomOne
                title={trans("personalInfo")}
                keySort={"ABOUT"}
                choose={choose}
                setChoose={setChoose}
              />
              <ButtonCustomOne
                title={trans("education")}
                keySort={"EDUCATION"}
                choose={choose}
                setChoose={setChoose}
              />
              <ButtonCustomOne
                title={trans("careerObjective")}
                keySort={"CAREER_GOALS"}
                choose={choose}
                setChoose={setChoose}
              />
              <ButtonCustomOne
                title={trans("skills")}
                keySort={"SKILL"}
                choose={choose}
                setChoose={setChoose}
              />
              <ButtonCustomOne
                title={trans("experience")}
                keySort={"EXPERIENCE"}
                choose={choose}
                setChoose={setChoose}
              />
              <ButtonCustomOne
                title={trans("interests")}
                keySort={"INTERESTS"}
                choose={choose}
                setChoose={setChoose}
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{
            color: "white",
            bgcolor: "white",
            display: { xs: "none", sm: "block" },
          }}
        />
        <Stack
          sx={{
            color: "#fff",
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid white",
            pt: 1,
            display: { xs: "block", sm: "none" },
          }}
        ></Stack>
        <Stack sx={{ width: { xs: "100vw", sm: "70vw" } }}>
          <Stack sx={{ pl: { xs: 1, sm: 10 } }}>{page()}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
