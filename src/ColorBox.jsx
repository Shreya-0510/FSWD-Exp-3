const ColorBox = ({ color }) => {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "2px solid black",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {color}
      </div>
    );
  };
  
  export default ColorBox;
  