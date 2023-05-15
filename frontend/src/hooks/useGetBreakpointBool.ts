import { useMediaQuery, useTheme } from "@mui/material";

const useGetBreakpointBool = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobileView;
};

export default useGetBreakpointBool;
