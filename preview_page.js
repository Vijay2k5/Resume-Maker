var template = '';
let pre;

function show(preview) {
    pre = document.getElementById('pre');
    pre.style.display = 'block';
    pre.src = preview.src;

    template = preview.id;
}

function edit_page() {
    sessionStorage.setItem('template', "C:\\Users\\vijay\\OneDrive\\Documents\\College files\\My projects\\Resume Maker\\main\\"+template+'.html');
    window.location.href = 'edit_page.html';
}