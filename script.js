$(document).ready(function (){

    $('#list-items').html(localStorage.getItem('listItems'));

    // Add list items
    $('.add-items').submit(function(event) {
        event.preventDefault();
        
        var item = $('#todo-list-item').val();

        if(item) {
            $('#list-items')
                .append('<li><input class="checkbox" type="checkbox" />' + item + '<a class="remove"><i class="fa fa-trash" aria-hidden="true"></i></a><hr></li>');
        
            localStorage.setItem('listItems', $('#list-items').html());

            $('#todo-list-item').val("");
        }
    })

    // Check box
    $(document).on('change', '.checkbox', function() {

        if($(this).attr('checked')) {
            $(this).removeAttr('checked');
        }
        else {
            $(this).attr('checked', 'checked')
        }

        $(this).parent().toggleClass('completed');

        localStorage.setItem('listItems', $('#list-items').html());

    })

    // Remove item list
    $(document).on('click', '.remove', function() {
        $(this).parent().remove();

        localStorage.setItem('listItems', $('#list-items').html());
    })

})