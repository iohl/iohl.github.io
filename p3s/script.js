$(document).ready(function () {
    var noModal = $('#no-modal');
    var yesModal = $('#yes-modal');

    $('.close').on('click', function() {
        noModal.removeClass('active');
        yesModal.removeClass('active');
        init();
    })

    var randomNumber, answer, lastNumber;
    init();

    function init() {
        var number;
        while (number === undefined || number === lastNumber) {
            number = Math.floor(Math.random() * 8) + 1;
        }
        lastNumber = number;
        randomNumber = number;
        answer = (randomNumber > 4) ? randomNumber - 4 : randomNumber;

        // Set the number
        $('#number').find('img').attr('src', randomNumber + '.png');
    }

    $('.option').on('click', function() {
        var userChoice = parseInt($(this).val());
        if (userChoice !== answer) {
            noModal.addClass('active');
        } else {
            yesModal.addClass('active');
        }
    });
});