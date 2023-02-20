import $  from "jquery";
import _  from "lodash";


$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

let count = 0;
function updateCounter() {
    count += 1;
    $("#count").empty();
    $("#count").append( `${count} clicks on the button` );
  };

$("button").click(_.debounce(updateCounter, 1000));