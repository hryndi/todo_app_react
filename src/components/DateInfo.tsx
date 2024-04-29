// interface DateInfoProps {
//   time: Date;
// }

const DateInfo = () => {
  return <h2 style={{ wordSpacing: "5px" }}>{new Date().toDateString()}</h2>;
};

export default DateInfo;
