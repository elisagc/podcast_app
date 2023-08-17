import { SliderProps, styled } from "@mui/material";
import React from "react";
import { Slider as MUISlider } from "@mui/material";

const CustomSlider = styled(MUISlider)(({ theme }) => ({
  color: theme.palette.common.white,

  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
}));
const Slider = (props: SliderProps) => {
  return <CustomSlider {...props} />;
};

export default Slider;
