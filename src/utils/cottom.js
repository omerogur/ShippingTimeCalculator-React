import moment from "moment";
const cottom = (cottomCount,selectDate) => {
    let day = selectDate.isoWeekday();
    console.log(selectDate.isoWeekday());
    let count = cottomCount
    if (count > 50) {
        if (day < 5) {
          selectDate.add(3, "day");
          if(selectDate.isoWeekday()> 5){
              let newDay = moment(selectDate);
              console.log("tsests",newDay.format());
             return  cottom(count,newDay)  
              console.log("calıstım");
         }
          console.log("hafta içi");
        } else if (day == 5) {
          selectDate.add(4, "day");
          console.log("cuma");
        } else {
          if (day == 6) {
            selectDate.add(3, "day");
            console.log("1111111111",selectDate.isoWeekday());
          } else {
            selectDate.add(2, "day");
            console.log("22222",selectDate.isoWeekday());
          }
          console.log("hafta sonu",selectDate.format());
        }
       
      } else {
        if (day < 5) {
            selectDate.add(2, "day");
            if(selectDate.isoWeekday()> 5){
                let newDay = moment(selectDate);
                console.log("tsests",newDay.format());
               return  cottom(count,newDay)  
                console.log("calıstım");
           }
            console.log("hafta içi");
          } else if (day == 5) {
            selectDate.add(4, "day");
            console.log("cuma");
          } else {
            if (day == 6) {
              selectDate.add(3, "day");
            } else {
              selectDate.add(2, "day");
            }
            console.log("hafta sonu",selectDate.format());
          }
        console.log("50den az cottom ");
       
      }
     return  selectDate;
}

export default cottom
