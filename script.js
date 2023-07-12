let container = $('#container');

for (let i = 0; i < 16; i++) {
    let box = $('<div>', { class: 'box' }).appendTo(container);

    box.on('click', function() {
      $(this).toggleClass('click-box');
    });

    if ((i + 1) % 4 === 0) {
        container.append('<br>');
    }

}