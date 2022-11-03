import moment from "moment";
const cottom = (cottomCount, selectDate) => {
  const day = selectDate.isoWeekday();

  if (day < 5) {
    const newDay = cottomCount > 50 ? 3 : 2;
    selectDate.add(newDay, "day");
    if (selectDate.isoWeekday() > 5) {
      let newDay = moment(selectDate);
      return cottom(cottomCount, newDay);
    }
    return selectDate;
  }
  return selectDate.add(9 - day, "day");
};

export default cottom;
