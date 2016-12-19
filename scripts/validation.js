(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isComanyEmail: function(email) {
            return /.+me\.com$/.test(email);
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
