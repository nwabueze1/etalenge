import { Dispatch, FC, SetStateAction, useRef } from "react";
import { Button } from "../../../../components";
import { CircularProgress, ClassNameMap } from "@mui/material";

type TSearchbar = {
  onSearch?: (value: string) => void;
  classes: ClassNameMap<string>;
  loading: boolean;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const Searchbar: FC<TSearchbar> = ({ onSearch, classes, loading, setSearchValue, searchValue }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleBtnClick = () => {
    btnRef?.current?.click();
  };

  return (
    <form
      className={classes.searchContainer}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(searchValue);
      }}
    >
      <input placeholder={"Enter your keyword"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Button className={classes.button} onClick={handleBtnClick} size={"md"} variant={"contained"}>
        {loading ? <CircularProgress size={15} color={"inherit"} /> : " Search"}
      </Button>
      <button style={{ display: "none" }} type={"submit"} ref={btnRef} />
    </form>
  );
};
