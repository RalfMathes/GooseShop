import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";
import { RootState } from "../redux/store";

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
  mobileTopBar: {
    alignItems: "center",
    backgroundColor: "#fb8b17",
    borderRadius: 15,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    display: "flex",
    height: 56,
    justifyContent: "center",
    left: "2%",
    marginBottom: 8,
    marginTop: 6,
    position: "sticky",
    width: "96%",
  },
  title: {
    color: "white",
  },
}));
