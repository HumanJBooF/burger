$(function () {

    $('.tooltipped').tooltip({
        exitDelay: 800,
        html: 'Click me if you are hungry!',
        position: 'left',
        inDuration: 800,
        outDuration: 800,

    });
    $('.tooltipped2').tooltip({
        exitDelay: 800,
        html: 'Carefull! I will be gone for good!',
        position: 'right',
        inDuration: 800,
        outDuration: 800,

    });
});