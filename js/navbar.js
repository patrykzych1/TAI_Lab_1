const nav = '<nav>' +
    '<ul class = "nav">\n' +
    '    <li class = "nav-item">\n' +
    '        <a class="nav-link active" href="index.html">Home</a>\n' +
    '    </li>\n' +
    '    <li class = "nav-item">\n' +
    '        <a class="nav-link active" href="quiz.html">Quiz</a>\n' +
    '    </li>\n' +
    '    <li class = "nav-item">\n' +
    '        <a class="nav-link active" href="contact.html">Kontakt</a>\n' +
    '    </li>\n' +
    '</ul>' +
    '</nav>';

const elem = document.querySelector(".navbar");
elem.innerHTML = nav;
