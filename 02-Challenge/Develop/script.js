// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(document).ready(function() {
    var today=dayjs().format("M/D/YYYY")
    //6/30/2023
    $('#currentDay').text(today);
});
var notes=JSON.parse(localStorage.getItem("note")) || {}
$(".saveBtn").on("click",function(){
  var note=$(this).siblings("textarea").val()
  var hour=$(this).parent().attr("id")
  notes[hour]=note
  localStorage.setItem("note",JSON.stringify(notes))

})

var notes = JSON.parse(localStorage.getItem("note")) || {};
for (var hour in notes) {
  $("#" + hour + " textarea").val(notes[hour]);
}


console.log(notes)

function updateBoxClasses() {
  const boxes = document.querySelectorAll('.time-block');
  const currentTime = dayjs().hour();

  boxes.forEach((box, index) => {
      const hour = index + 9;
      // box.textContent = ${hour};

      // box.className = '';

      if (currentTime === hour) {
          box.classList.add('present');
      } else if (currentTime > hour) {
          box.classList.add('past');
      } else {
          box.classList.add('future');
      }
  });
}

updateBoxClasses();
setInterval(updateBoxClasses, 60000);
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
