function post(url, data) {
    return new Promise(function(success, fail) {
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: false,
            /* Form data */
            processData: false,
            contentType: false,
            success: function (response) {                        
                success(response);
            },
            error: function (response) {
                fail(response);
            }
        });
    });
}

function post_csrf(url, data, token) {
    return new Promise(function(success, fail) {
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: false,
            beforeSend: function (request) {
                request.setRequestHeader("CSRF-Token", token);
            },
            success: function (response) {                        
                success(response);
            },
            error: function (response) {
                fail(response);
            }
        });
    });
}

