import { makeStyles } from "tss-react/mui";
import useGetBreakpointBool from "../hooks/useGetBreakpointBool";

const MobileSpacer = () => {
  const isMobileView = useGetBreakpointBool();
  const { classes } = useStyles();
  return isMobileView ? <div className={classes.mobileSpacer}></div> : null;
};

export default MobileSpacer;

const useStyles = makeStyles()(() => ({
  mobileSpacer: {
    height: 70,
  },
}));
