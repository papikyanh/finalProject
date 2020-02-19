$(document).ready(function () {
    var week_total = 0;
    var index = 1;
    $(document).on('click', '#submit', function () {
        var week_day = $('#week-day').val();
        var breakfast = $('#breakfast').val() || 0;
        var lunch = $('#lunch').val() || 0;
        var dinner = $('#dinner').val() || 0;
        var snacks = $('#snacks').val() || 0;

        var total = parseInt(breakfast) + parseInt(lunch) + parseInt(dinner) + parseInt(snacks);

        week_total += total;
        $('#total').val(week_total);

        $('#week-day-' + week_day).val(total);
        if (total > 2000) {
            $('#this-' + week_day).addClass('red').removeClass('green');
        } else {
            $('#this-' + week_day).addClass('green').removeClass('red');
        }

        $('#breakfast, #lunch, #dinner, #snacks').val('');

        $('#week-day :nth('+index+')').prop('selected', true);
        index++;

        if(index > 7) {
          if (week_total > 14000) {
            $('#week-result-message').text('You have exceeded your recomended calorie limit! Head to the gym!');
          }

          else if (week_total > 13001 && week_total < 1399 ) {
            $('#week-result-message').text('Good work managing your calories. Keep it up!');
          }

          else if (week_total <= 13001) {
            $('#week-result-message').text('You have not eaten enough. Are you dieting?');
          }
        }
    })
});
