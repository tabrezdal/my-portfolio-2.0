import ProgressBar from "react-bootstrap/ProgressBar";

function SimpleProgressbar(props) {
  const { endValue, label } = props;
  return (
    <ProgressBar
      now={endValue}
      label={label ? `${label} — ${endValue}%` : undefined}
      visuallyHidden
      style={{ maxHeight: "10px" }}
    />
  );
}

export default SimpleProgressbar;
