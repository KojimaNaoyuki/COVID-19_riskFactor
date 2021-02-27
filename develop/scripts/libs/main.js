import InfectionRateCal from './infection-rate-cal.js';

class Main {
    constructor() {
        this.DOM = {};
        this.infectionRateCal = new InfectionRateCal();

        this.DOM.btn = document.querySelector('#decision-btn');
        this.DOM.result = document.querySelector('.result');
        this.DOM.infoBtn = document.querySelector('#info-btn');
        this.DOM.global = document.querySelector('.global-contents');
        this.DOM.body = document.querySelector('body');
        this.DOM.startOpenBtn = document.querySelector('#start-open-btn');
        this._addEvent();
    }

    _arrowAdd() {
        this.DOM.result.classList.add('calRuned');
    }

    _startOpenAdd() {
        this.DOM.body.classList.add('start-open-close');
    }

    _toggleInfo() {
        this.DOM.result.classList.toggle('info-open');
        this.DOM.global.classList.toggle('info-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener('click', this.infectionRateCal.cal.bind(this.infectionRateCal));
        this.DOM.btn.addEventListener('click', this.infectionRateCal.displayCal.bind(this.infectionRateCal));
        this.DOM.btn.addEventListener('click', this._arrowAdd.bind(this));

        this.DOM.infoBtn.addEventListener('click', this._toggleInfo.bind(this));
        this.DOM.startOpenBtn.addEventListener('click', this._startOpenAdd.bind(this));
    }
}

export default Main;