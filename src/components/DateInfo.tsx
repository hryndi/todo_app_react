// interface DateInfoProps {
//   time: Date;
// }

const DateInfo = () => {
  return <h2>{new Date().toDateString()}</h2>;
};

export default DateInfo;
