import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useGetTitle = () => {
  return useSelector<RootState, string>((state) => state.titleReducer.name);
};

export default useGetTitle;
