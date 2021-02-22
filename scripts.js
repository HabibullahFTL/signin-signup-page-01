let signinBtn = document.getElementById("signin-btn");
let signupBtn = document.getElementById("signup-btn");

// Form Viewer
function formViewer(activeBtn,deactiveBtn) {
    document.getElementById(activeBtn+"-btn").classList.add('active');
    document.getElementById(deactiveBtn+"-btn").classList.remove('active');
    document.querySelector("."+activeBtn).style.display = "block";
    document.querySelector("."+deactiveBtn).style.display = "none";
}
// Theme Handler
function themeHandler(themeName) {
    let themeColor =  '';
    if (themeName == 'sky-blue') {
        themeName = "sky-blue";
        themeColor =  '#0AB1FF';
    }else if (themeName == 'orange') {
        themeName = "orange";
        themeColor =  'orange';
    }else if (themeName == 'red') {
        themeName = "red";
        themeColor =  'red';
    }else if (themeName == 'green') {
        themeName = "green";
        themeColor =  'green';
    }else if (themeName == 'dark') {
        themeName = "dark";
        themeColor =  '#222';
    }else{
        return '';
    }
    const css = `.signup-signin h2{
        color: ${themeColor};
    }
    .form-control-btn{
        border: 1px solid ${themeColor};
    }
    .form-control-btn button.active{
        background: ${themeColor};
    }
    .input-group{
        border: 1px solid ${themeColor};
    }
    .input-group i{
        background-color: ${themeColor};
        border: 1px solid ${themeColor};
    }
    .term-condition input[type=checkbox]{
        background: ${themeColor};
    }
    .term-condition input[type=checkbox]::before{
        border: 2px solid ${themeColor};
    }
    .term-condition input[type=checkbox]:checked::after{
        background: ${themeColor};
        border: 2px solid ${themeColor};
    }
    .signin-form input[type=submit],.signup-form input[type=submit]{
        background: ${themeColor};
        border: 2px solid ${themeColor};
    }
    .signin-form input[type=submit]:hover,.signup-form input[type=submit]:hover{
        color: ${themeColor};
    }
    .theme.active{
        border: 3px solid ${themeColor};
    }
    .theme.active::after{
        background: ${themeColor};
    }`;

    // Adding style rules;
    let styles = document.createElement('style');
    styles.innerHTML = css;
    document.querySelector('head').appendChild(styles);

    // Activing theme button
    activeThemeBtn(themeName);

    // storing theme data to localstorage;
    localStorage.setItem('themeName',themeName);
    // Removing first style tag;
    document.querySelectorAll('style')[3].remove();
}

// Active theme button will be visible
function activeThemeBtn(themeName) {
    const themes = ['sky-blue','orange','red','green','dark'];
    for (let i = 0; i < themes.length; i++) {
        const theme = themes[i];
        if (themeName == theme) {
            document.querySelector("."+theme).classList.add('active');
            document.querySelector("."+theme).classList.remove('bg-'+theme);
        }else{
            document.querySelector("."+theme).classList.remove('active');
            document.querySelector("."+theme).classList.add('bg-'+theme);
        }
    }
}

// check theme set or not
function checkTheme() {
    if (localStorage.getItem('themeName') != null) {
        const themeName = localStorage.getItem('themeName');
        themeHandler(themeName);
    }
}