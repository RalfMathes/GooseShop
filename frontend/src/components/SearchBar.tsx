import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const SearchBar = (props: { searchTags: string[] }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.searchBarDiv}>
      <Autocomplete
        className={classes.searchBarAutoComplete}
        multiple
        id="tags-standard"
        options={props.searchTags}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            variant="standard"
            label="Search Tags"
          />
        )}
      />
      <IconButton className={classes.searchBarIcon}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;

const useStyles = makeStyles()(() => ({
  searchBarAutoComplete: {
    width: 400,
  },
  searchBarDiv: {
    borderRadius: "10px 10px 0 0",
    display: "flex",
  },
  searchBarIcon: {
    width: 45,
    ":hover": {
      color: "#fb8b17",
    },
  },
}));
