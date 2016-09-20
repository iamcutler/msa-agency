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
    function sendSortRequestOfModel(params) {
        var categories = $(params.selector);
        var formData = [];

        $.each(categories, function(index, row) {
            formData.push($(row).text());
        });

        $.ajax({
            type: 'post',
            data: JSON.stringify({ categories: formData }),
            contentType: 'application/json',
            processData: false,
            url: params.url
        });
    }

    $(document).ready(function() {
        // Client resume category sorting
        if ($('body.edit.admin_clients').length) {
            var client_id = $('input#client_id').val();

            if(client_id) {
                $( '#client-resume-ordering tbody' ).sortable({
                    axis: 'y',
                    cursor: 'move',
                    update: function(event, ui) {
                        sendSortRequestOfModel({
                            selector: '#client-resume-ordering tbody tr td',
                            url: '/api/v1/client-resume/' + client_id + '/sort'
                        })
                    }
                }).disableSelection();
            }
        }

        // Client resource sorting
        if ($('body.index.admin_client_resumes').length) {
            var client_id = $('select#q_client_id').val();

            if(client_id) {
                $( '#index_table_client_resumes tbody' ).sortable({
                    axis: 'y',
                    cursor: 'move',
                    update: function(event, ui) {
                        sendSortRequestOfModel({
                            selector: '#index_table_client_resumes tbody tr td:nth-child(2)',
                            url: '/api/v1/client-resume/' + client_id + '/sort-records'
                        })
                    }
                }).disableSelection();
            }
        }
    });
})();
