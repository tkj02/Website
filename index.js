let app = {};

let init = (app) => {
    app.data = {
        home: true,
        experience: false,
        skills: false,
        python: false,
        c: false,
        html: false,
        sql: false,
        tableau: false,
        excel: false,
        certificates: false
    };
    
    app.methods = {
        home_button: function(){
            app.data.home = true;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },

        experience_button: function(){
            app.data.home = false;
            app.data.experience = true;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        skills_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = true;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        python_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = true;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        c_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = true;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        html_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = true;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        sql_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = true;
            app.data.tableau = false;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        tableau_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = true;
            app.data.excel = false;
            app.data.certificates = false;
        },
        
        excel_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = true;
            app.data.certificates = false;
        },
        
        certificates_button: function(){
            app.data.home = false;
            app.data.experience = false;
            app.data.skills = false;
            app.data.python = false;
            app.data.c = false;
            app.data.html = false;
            app.data.sql = false;
            app.data.tableau = false;
            app.data.excel = false;
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
