import { Skeleton } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <div>
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={20} />
      <Skeleton width={"100%"} height={10} />
      <Skeleton width={"100%"} height={40} />
    </div>
  );
};
