import Button from "./Button";
function TourCard(props) {
  return (
    <div>
      <div className="h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-center mt-2">{props.title}</h3>
      <div className="flex justify-around mt-2 text-blue-50">
        <Button label="Xem chi tiết" />
        <Button label="Đặt tour" />
      </div>
    </div>
  );
}
export default TourCard;
