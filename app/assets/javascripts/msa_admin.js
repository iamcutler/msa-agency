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
        })
    } else {
        window.attachEvent("onload", function() {
            var news = new AdminNews();
            news.setSlugFromSubject();
        })
    }
})();
