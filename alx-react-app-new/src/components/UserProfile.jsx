const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "8px" }}>
        {props.name}
      </h2>

      <p style={{ margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>

      <p style={{ margin: "5px 0", color: "#444" }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
