document.addEventListener('DOMContentLoaded', function() {
    console.log('main.js');

    new Main();
});

class Main {
    constructor() {
        this.DOM = {};
        this.infectionRateCal = new InfectionRateCal();

        this.DOM.btn = document.querySelector('#decision-btn');
        this._addEvent();
    }

    _addEvent() {
        this.DOM.btn.addEventListener('click', this.infectionRateCal.cal.bind(this.infectionRateCal));
        this.DOM.btn.addEventListener('click', this.infectionRateCal.displayCal.bind(this.infectionRateCal));
    }
}