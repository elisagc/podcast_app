import { Navigate, useLocation } from "react-router-dom";
import { PATH_EPISODE } from "../contants";
import { usePodcast } from "../hooks/usePodcast";

const GuardRoute = ({ children }: { children: any }) => {
  const { podcastSelectedId } = usePodcast();

  const location = useLocation();

  if (location.pathname.includes(PATH_EPISODE) && !podcastSelectedId) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default GuardRoute;
