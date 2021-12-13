const Play = ({ size, color, innerColor, pause }) => {
  const SIZE = size || 30;
  const HEIGHT_TRIANGLE = SIZE / 3.75;
  const WIDTH_TRIANGLE = SIZE / 2;

  const circleStyles = {
    minWidth: `${SIZE}px`,
    minHeight: `${SIZE}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color || "#8CCBDB",
    borderRadius: "50%",
    boxSizing: "border-box",
};

const triangleStyles = {
    width: 0,
    height: 0,
    marginLeft: `${SIZE / 10}px`,
    borderTop: `${HEIGHT_TRIANGLE}px solid transparent`,
    borderLeft: `${WIDTH_TRIANGLE}px solid ${innerColor || "#21222C"}`,
    borderBottom: `${HEIGHT_TRIANGLE}px solid transparent`,
  };

  const contPauseStyle = {
    display: "flex"
  }

  const pauseStyle = {
    width: "4px",
    height: "12px",
    backgroundColor: "black"
  }

  return (
    <div id="eee" style={circleStyles}>
      {!pause && <div style={triangleStyles}></div>}
      {pause && <div style={contPauseStyle}><div style={pauseStyle}></div><div style={ { ...pauseStyle, marginLeft: "2px" }}></div></div>}
    </div>
  );
};

export default Play;
