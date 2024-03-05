let app = {};

let init = (app) => {
    app.data = {
        home: true,
        experience: false,
        analytics: false,
        html: false,
        certificates: false
    };
    
    app.methods = {
        home_button: function(){
            app.data.home = true;
            app.data.experience = false;
            app.data.analytics = false;
            app.data.html = false;
            app.data.certificates = false;
        },

        experience_button: function(){
            app.data.home = false;
            app.data.experience = true;
            app.data.analytics = false;
            app.data.html = false;
            app.data.certificates = false;
        },
        
        html_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.analytics = false;
            app.data.html = true;
            app.data.certificates = false;
        },
        
        analytics_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.analytics = true;
            app.data.html = false;
            app.data.certificates = false;
        },
        
        certificates_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.analytics = false;
            app.data.html = false;
            app.data.certificates = true;
        }
    };
    
    window.onload = function () {
        app.vue = new Vue({
            el: "#vue-target",
            data: app.data,
            methods: app.methods
        });
    }

};
    
init(app);
