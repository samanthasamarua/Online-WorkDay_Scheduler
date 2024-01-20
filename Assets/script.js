// Creates and empty object names localeSettings
const localeSettings = {};
// Utilise the Day.JS method to set to default settings
dayjs.locale(localeSettings);

// Update Time Function - Update Date and Time Elements
$(function () {
  function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');

    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');

    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }

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

  // Call updateTime initially to set the initial values
  updateTime();

  // Use setInterval to update the time every second
  setInterval(updateTime, 1000);
});









// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
