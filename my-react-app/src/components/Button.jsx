export default function Button({ label = "Default Lable" }) {
  return (
    <button className="bg-blue-500 px-2 rounded-2xl">{label}</button>
  );
}
