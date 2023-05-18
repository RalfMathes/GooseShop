import { Chip, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const TagBox = () => {
  const { classes } = useStyles();
  const [activeTags, setActiveTags] = useState([]);
  const noActiveTags = activeTags === undefined;
  return (
    <>
      {noActiveTags ? (
        <>
          <Typography variant="body2" className={classes.descriptor}>
            {" "}
            Tags:{" "}
          </Typography>
          <div className={classes.horizontalDiv}>
            {activeTags.map((tag: string, index: number) => (
              <Chip key={index} label={tag} />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default TagBox;

const useStyles = makeStyles()(() => ({
  descriptor: {
    color: "white",
    paddingRight: 10,
  },
  horizontalDiv: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
}));
