import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../shared/molecules/Loader";
import MusicCard from "../../shared/molecules/MusicCard";
import SearchBar from "../../shared/molecules/SearchBar";
import { debounceCell, getMusic } from "./helper";

interface filterProps {
  term: string;
  offset: number;
  limit: number;
}

interface musicListTypes {
  artistName: string;
  trackName: string;
  artworkUrl100: string;
}

export default function MainPage() {
  const [queryParam, setQueryParam] = useSearchParams();

  const [filter, setFilter] = useState<filterProps>({
    term: queryParam.get("term") || "",
    offset: 0,
    limit: 12,
  });
  const [musicList, setMusicList] = useState<musicListTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    laodMusic(filter);
  }, []);

  const laodMusic = async (filter: any) => {
    const data: any = await getMusic(filter);

    if (data?.success) {
      setMusicList(data?.data?.results);
    }
    setIsLoading(false);
  };

  const onSearch = async (e: any) => {
    const value = e.target.value;

    const onSearchCB = async (searchValue: string) => {
      const newFilters = { ...filter, term: searchValue, page: 1 };
      const musicResponse = await getMusic(newFilters);
      return { musicList: musicResponse };
    };
    const {
      musicList: {
        data: { results, success },
      },
    } = (await debounceCell(onSearchCB, value, 500)) as {
      musicList: { data: { results: any; success: boolean } };
    };

    setFilter({ ...filter, term: value });
    setMusicList(results);
    setIsLoading(false);
  };

  if (true) {
    <Loader />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 64 }}>
      <SearchBar onFilterChange={onSearch} filter={filter} />
      {isLoading ? (
        <Loader />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {musicList?.map((music: musicListTypes, index: number) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <MusicCard
                  image={music?.artworkUrl100}
                  AlbumTitle={music?.trackName}
                  AlbumSubTitle={music?.artistName}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
