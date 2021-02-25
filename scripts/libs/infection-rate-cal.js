class InfectionRateCal {
    constructor() {
        this.DOM = {};
        this.DOM.selecter = document.querySelector('#user-live');
        this.DOM.textNum = document.querySelector('#infected-person');
        this.DOM.infectionRateNumDisplay = document.querySelector('#infection-rate-num');
        this.DOM.infectionRateSizeMDisplay = document.querySelector('#infection-rate-sizeM');
        this.DOM.infectionRateSizeSDisplay = document.querySelector('#infection-rate-sizeS');
        this.DOM.populationDisplay = document.querySelector('#population-display');
        this.DOM.infectedDisplay = document.querySelector('#infected-display');
        this.data = new Data();

        this.userLive = '';
        this.infectedPerson = '';
        this.usePopulationData = 0;

        this.infectionRateNum = 0; //感染率
        this.infectionRateSizeMNum = 0; //1000人中何人感染者か
        this.infectionRateSizeSNum = 0; //100人中何人感染者か
    }

    _getData() {
        this.userLive = this.DOM.selecter.value;
        this.infectedPerson = this.DOM.textNum.value;
        this.populationData = this.data.getData();
        for(let i in this.populationData) {
            if(this.userLive == i) {
                this.usePopulationData = this.populationData[i];
            }
        }
        this.infectedPerson = this._inputJudg(this.infectedPerson, 0, '感染者数には数値を入力してください');
        console.log('user live : ' + this.userLive);
        console.log('infected person : ' + this.infectedPerson);
        console.log('use population data : ' + this.usePopulationData);
    }

    _inputJudg(text, pattern, errMsg) {
        let exp = ''; //正規表現パターンを格納
        switch(pattern) {
            case 0:
                exp = '/^[0-9]+$/';
                break;
            default:
                exp = '';
        }
        if(!exp.search(text)) {
            alert(errMsg);
            return 0;
        }
        return text;
    }
 
    cal() {
        this._getData(); //データを取得

        this.infectionRateNum = (Number(this.infectedPerson) / Number(this.usePopulationData)) * 100;
        console.log('感染者 : ' + this.infectionRateNum + '%');

        let tmp = (Number(this.usePopulationData)) / 1000; //人口は1000人の何倍か
        this.infectionRateSizeMNum = Number(this.infectedPerson) / tmp;
        console.log('1000人中 : ' + this.infectionRateSizeMNum + '人');

        tmp = (Number(this.usePopulationData)) / 100; //人口は1000人の何倍か
        this.infectionRateSizeSNum = Number(this.infectedPerson) / tmp;
        console.log('100人中 : ' + this.infectionRateSizeSNum + '人');
    }

    displayCal() {
        this.DOM.infectionRateNumDisplay.innerHTML = this.infectionRateNum + '&nbsp;%';
        this.DOM.infectionRateSizeMDisplay.innerHTML = this.infectionRateSizeMNum + '&nbsp;people';
        this.DOM.infectionRateSizeSDisplay.innerHTML = this.infectionRateSizeSNum + '&nbsp;people';

        this.DOM.populationDisplay.innerHTML = this.usePopulationData + '&nbsp;人';
        this.DOM.infectedDisplay.innerHTML = this.infectedPerson + '&nbsp;人';
    }
}