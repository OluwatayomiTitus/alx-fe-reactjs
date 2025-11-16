function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '8px',
        padding: '15px',
        margin: '15px',
        maxWidth: '300px'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>
        {props.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', marginTop: '5px' }}>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
