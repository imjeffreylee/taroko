import { CircularProgress } from "@material-ui/core"

const Loading = () => {
  return (
    <div className="loading-background">
      <CircularProgress className="circle" />
    </div>
  );
};

export default Loading;
