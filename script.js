let m = moment();

// Set the current day
let currentDay = m.format('dddd, MMMM Do')
$('#currentDay').html(currentDay);

// Establish the work day (9AM-5PM)
// let workday = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let workday = [
    moment('9:00AM', 'h:mmA'),
    moment('10:00AM', 'h:mmA'),
    moment('11:00AM', 'h:mmA'),
    moment('12:00PM', 'h:mmA'),
    moment('1:00PM', 'h:mmA'),
    moment('2:00PM', 'h:mmA'),
    moment('3:00PM', 'h:mmA'),
    moment('4:00PM', 'h:mmA'),
    moment('5:00PM', 'h:mmA')];

// $('.container').html(moment().format('h'));



for (let i = 0; i < workday.length; i++) {

    let relativeTime = '';
    let thisTime = workday[i].format('hA');

    let data = localStorage.getItem(thisTime) != null ? localStorage.getItem(thisTime) : '';

    // Determine if past, present, or future
    if(m.format('hA') == thisTime){
        relativeTime = 'present';
    }else{
        relativeTime = workday[i].isSameOrBefore() ? 'past' : 'future';
    }

    let timeblock =
    '<div class="row row-cols-1"><div class="col">'
    +
    '<div class="input-group input-group-lg '+ relativeTime + '">' +
    '<span class="input-group-text hour" id="inputGroup-sizing-lg" style="width: 5em">' + thisTime + '</span>' +
    '<textarea class="form-control" aria-label="Schedule input" aria-describedby="inputGroup-sizing-lg">' +
    data +
    '</textarea>' +
    '<button class="btn saveBtn" type="button" id="button-addon2"><i class="fas fa-save"></i></button>' +
    '</div>'
    +

    '</div></div>';

    $('.container').append(timeblock);
}

$('.saveBtn').click(function() {
    let key = $(this).prev().prev().text();
    let value = $(this).prev().val();

    localStorage.setItem(key, value);
})