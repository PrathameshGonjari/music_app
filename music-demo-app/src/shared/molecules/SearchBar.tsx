import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

interface SearchBarProps {
  onFilterChange: any;
  filter: any;
}

function SearchBar(props: SearchBarProps) {
  const { onFilterChange, filter } = props;
  return (
    <Paper sx={{ p: "2px 2px", mb: 2, display: "flex", alignItems: "center" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Music"
        onChange={onFilterChange}
        defaultValue={filter.term}
        fullWidth
      />
      <SearchIcon />
    </Paper>
  );
}

export default SearchBar;
