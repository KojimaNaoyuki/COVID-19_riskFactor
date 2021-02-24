document.addEventListener('DOMContentLoaded', function() {
    console.log('main.js');

    new Main();
});

class Main {
    constructor() {
        this.DOM = {};
        this.infectionRateCal = new InfectionRateCal();

        this.DOM.btn = document.querySelector('#decision-btn');
        this.DOM.result = document.querySelector('.result');
        this._addEvent();
    }

    _arrowAdd() {
        this.DOM.result.classList.add('calRuned');
    }

    _addEvent() {
        this.DOM.btn.addEventListener('click', this.infectionRateCal.cal.bind(this.infectionRateCal));
        this.DOM.btn.addEventListener('click', this.infectionRateCal.displayCal.bind(this.infectionRateCal));
        this.DOM.btn.addEventListener('click', this._arrowAdd.bind(this));
    }
}