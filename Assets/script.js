// Creates and empty object named localeSettings
const localeSettings = {};
// Utilise the Day.JS library to set to default settings
dayjs.locale(localeSettings);
// Time Function
$(function () {
  // Displays current Date and Time at the top of the calendar
  function updateTime() {
    const dateElement = $('#date');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    dateElement.text(currentDate);
  }
// color codes time blocks based on current time. Colours differentiate Past, Present & Future. 
  const currentHour = dayjs().hour();
  $('.time-block').each(function () {
    const hourBlock = parseInt($(this).attr('id').split('-')[1]);
    if (hourBlock < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  // Call updateTime Function
  updateTime();
});

// Save data to the local storage once button is clicked
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
})
// Retrieves data from the local storage
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));

// clears data when backspace is pressed
$(".clearBtn").click(function (event) {
  event.preventDefault();
  $('.description').val(''); // Clear all text areas
  localStorage.clear(); // Clear local storage
});