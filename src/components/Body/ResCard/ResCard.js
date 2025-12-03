const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="cardBody">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        className="resImage"
      />
      <ul className="resInfo">
        <li>{resData.info.name}</li>
        <li>{resData.info.avgRating}</li>
        <li>{resData.info.costForTwo}</li>
        <li>{resData.info.cuisines.join(", ")}</li>
      </ul>
    </div>
  );
};

export default ResCard;