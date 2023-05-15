import { useSelector } from "react-redux";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { makeStyles } from "tss-react/mui";
import { RootState } from "../redux/store";
import { Typography } from "@mui/material";

const MobileTopBar = () => {
  const title: string = useSelector<RootState, string>(
    (state) => state.titleReducer.name
  );
  const isMobileView = useGetBreakpointBool();
  const { classes } = useStyles();
  return isMobileView ? (
    <div className={classes.mobileTopBar}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </div>
  ) : null;
};

export default MobileTopBar;

const useStyles = makeStyles()(() => ({
  title: {
    color: "white",
  },
  mobileTopBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 56,
    backgroundColor: "#fb8b17",
    position: "sticky",
    left: "2%",
    width: "96%",
    marginTop: 6,
    marginBottom: 8,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));
