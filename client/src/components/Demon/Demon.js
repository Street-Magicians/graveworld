const Demon = () => {
  const onClick = () => {
    window.alert("Check the console");
    console.log("Demonlord: GRAVEWORLD IS MINE MUAHAHAHA!");
  };

  return (
    <div className="ta-c">
      <img src={require("./Demonlord.png")} onClick={onClick} alt="an 8-bit rendering of a demon character" />
    </div>
  );
};

export default Demon;
