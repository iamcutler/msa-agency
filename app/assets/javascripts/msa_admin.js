'use strict';

(function() {
    function AdminNews() {}
    AdminNews.prototype.setSlugFromSubject = function() {
        var self = this;
        var subject = document.getElementById('news_subject');

        subject.addEventListener('keyup', function() {
            self.setSlugValue(subject.value);
        });
    };

    AdminNews.prototype.setSlugValue = function(subject) {
        if(!subject) return;
        var slug = document.getElementById('news_slug');

        slug.value = subject.replace(/\s/g, '-').toLowerCase();
    };

    // Register when DOM is ready
    if (!!(window.addEventListener)) {
        window.addEventListener("DOMContentLoaded", function() {
            var news = new AdminNews();
            news.setSlugFromSubject();
        });
    } else {
        window.attachEvent("onload", function() {
            var news = new AdminNews();
            news.setSlugFromSubject();
        });
    }
})();

(function() {
    function AdminClients() {}
    AdminClients.prototype.setSlugFromName = function() {
        var self = this;
        var firstName = document.getElementById('client_first_name');
        var lastName = document.getElementById('client_last_name');

        firstName.addEventListener('keyup', function() {
            self.setSlugValue(firstName.value + (lastName.value ? ' ' : '') + lastName.value);
        });

        lastName.addEventListener('keyup', function() {
            self.setSlugValue(firstName.value + (lastName.value ? ' ' : '') + lastName.value);
        });
    };

    AdminClients.prototype.setSlugValue = function(subject) {
        if(!subject) return;
        var slug = document.getElementById('client_slug');

        slug.value = subject.replace(/\s/g, '-').toLowerCase();
    };

    // Register when DOM is ready
    if (!!(window.addEventListener)) {
        window.addEventListener("DOMContentLoaded", function() {
            var clients = new AdminClients();
            clients.setSlugFromName();
        });
    } else {
        window.attachEvent("onload", function() {
            var clients = new AdminClients();
            clients.setSlugFromName();
        });
    }
})();

(function() {
    function sendSortRequestOfModel(id, model_name) {
        var categories = $('#' + model_name + ' tbody tr td');
        var formData = [];

        $.each(categories, function(index, row) {
            formData.push($(row).text());
        });

        $.ajax({
            type: 'post',
            data: JSON.stringify({ categories: formData }),
            contentType: 'application/json',
            processData: false,
            url: '/api/v1/client-resume/'+ id +'/sort'
        });
    }

    $(document).ready(function() {
        if ($('body.edit.admin_clients').length) {
            var client_id = $('input#client_id').val();

            $( '#client-resume-ordering tbody' ).sortable({
                axis: 'y',
                cursor: 'move',
                update: function(event, ui) {
                    sendSortRequestOfModel(client_id, 'client-resume-ordering')
                }
            }).disableSelection();
        }
    });
})();
