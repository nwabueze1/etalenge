import { FC, useRef, useState } from "react";
import { Button } from "../../../../components";
import { CircularProgress, ClassNameMap } from "@mui/material";

type TSearchbar = {
  onSearch?: (value: string) => void;
  classes: ClassNameMap<string>;
  loading: boolean;
};

export const Searchbar: FC<TSearchbar> = ({ onSearch, classes, loading }) => {
  const [state, setState] = useState<string>("");
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleBtnClick = () => {
    btnRef?.current?.click();
  };

  return (
    <form
      className={classes.searchContainer}
      onSubmit={(e) => {
        e.preventDefault();
        if (state.length > 0) onSearch?.(state);
      }}
    >
      <input placeholder={"Enter your keyword"} value={state} onChange={(e) => setState(e.target.value)} />
      <Button className={classes.button} onClick={handleBtnClick} size={"md"} variant={"contained"}>
        {loading ? <CircularProgress size={15} color={"inherit"} /> : " Search"}
      </Button>
      <button style={{ display: "none" }} type={"submit"} ref={btnRef} />
    </form>
  );
};
