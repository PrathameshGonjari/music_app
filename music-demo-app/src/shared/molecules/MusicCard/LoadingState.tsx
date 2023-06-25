
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Wrapper } from "./style";

const LoadingMusicCard = () => {
  return (
    <Wrapper>
      <Card sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "70%",
            maxWidth: "70%",
          }}
          id="parent"
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width={"80%"} />
            <Skeleton variant="text" width={"60%"} />
            <Skeleton variant="text" width={"40%"} />
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Skeleton variant="circular" width={38} height={38} />
          </Box>
        </Box>
        <Skeleton variant="rectangular" width={180} height={180} />
      </Card>
    </Wrapper >
  );
}

export default LoadingMusicCard
