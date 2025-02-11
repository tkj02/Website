let app = {};

let init = (app) => {
    app.data = {
        home: true,
        experience: false,
        analytics: false,
        html: false,
        certificates: false,
        textArray: ['Teresa Joseph', 'a software engineer', 'a web developer', 'a data analyst'],
        currentIndex: 0
    };
    
    app.methods = {
        home_button: function(){
            app.data.home = true;
            app.data.experience = false;
            app.data.analytics = false;
            app.data.html = false;
            app.data.certificates = false;
            app.data.currentIndex = 0;
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
        },

        nextString() {
            this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
          }
        }
    };
    
    window.onload = function () {
        app.vue = new Vue({
            el: "#vue-target",
            data: app.data,
            methods: app.methods,
            created() {
                setInterval(this.nextString, 2500);
              }
        });
    }
    
init(app);
