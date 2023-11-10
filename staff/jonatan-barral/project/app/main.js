
// Manage links and buttons to switch views
var reprisesLink = headView.querySelector('#reprises-link');
reprisesLink.onclick = function (event) {
    event.preventDefault();
    headView.style.display = 'none';
    reprisesView.style.display = '';
};

var reprisesGoBack = reprisesView.querySelector('#go-back');
reprisesGoBack.onclick = function(event) {
    event.preventDefault();

    reprisesView.style.display = 'none';
    headView.style.display = '';
};

var dressageLink = reprisesView.querySelector('#dressage-link');
dressageLink.onclick = function (event) {
    event.preventDefault();
    reprisesView.style.display = 'none';
    dressageView.style.display = '';
};

var goBackDressage = dressageView.querySelector('#go-back');
goBackDressage.onclick = function (event) {
    event.preventDefault();
    dressageView.style.display = 'none';
    reprisesView.style.display = '';
};

var paralimpicLink = reprisesView.querySelector('#paralimpic-link');
paralimpicLink.onclick = function (event) {
    event.preventDefault();
    reprisesView.style.display = 'none';
    paralimpicView.style.display = '';
};

var goBackParalimpic = paralimpicView.querySelector('#go-back');
goBackParalimpic.onclick = function (event) {
    event.preventDefault();
    paralimpicView.style.display = 'none';
    reprisesView.style.display = '';
};

var eventsLink = document.getElementById('events-link');
eventsLink.onclick = function(event) {
    event.preventDefault();

    headView.style.display = 'none';
    eventsView.style.display = '';
};

var goBackEvents = eventsView.querySelector('#go-back');
goBackEvents.onclick = function(event) {
    event.preventDefault();

    eventsView.style.display = 'none';
    headView.style.display = '';
};
