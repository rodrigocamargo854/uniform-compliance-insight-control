export const generateWeekdays=(startDate: Date, days: number)=>{
    const weekdays = [];
    let currentDate = startDate;
  
    while (weekdays.length < days) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // Exclui domingo (0) e sábado (6)
        weekdays.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return weekdays;
  }