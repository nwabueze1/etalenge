import { Skeleton } from "@mui/material";

export const CardSkeleton = () => (
  <div>
    <Skeleton width={"100%"} height={200} />
    <Skeleton width={"100%"} height={40} />
    <Skeleton width={"100%"} height={5} />
    <Skeleton width={"100%"} height={10} />
  </div>
);