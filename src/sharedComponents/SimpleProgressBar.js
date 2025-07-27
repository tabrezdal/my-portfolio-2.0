import ProgressBar from "react-bootstrap/ProgressBar";

function SimpleProgressbar(props) {
  const { endValue } = props;
  return <ProgressBar now={endValue} style={{ maxHeight: "10px" }} aria-label={ariaLabel}/>;
}

export default SimpleProgressbar;
