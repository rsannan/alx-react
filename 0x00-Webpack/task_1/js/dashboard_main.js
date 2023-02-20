import $  from "jquery";
import _  from "lodash";

let count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    count += 1;
    $("#count").empty();
    $("#count").append( `${count} clicks on the button` );
  };

$("button").click(_.debounce(updateCounter, 1000));