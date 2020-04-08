import GasSheet from './02_00_gasSheet';
const SHEETS = SpreadsheetApp.openById('1kbV6Im1Jjgsnjd30cyc07kh0jEXPZwoQbGnZJZ3k7aU');
const MEIGENSHEET = SHEETS.getSheetByName('meigen');

export default class MeigenSheet extends GasSheet {
    constructor(){
        super(MEIGENSHEET);
    }
    getRangeIsSentAll(){
        return this.sheet.getRange(2,4,this.getLastRow() - 1);
    }
    clearRangeIsSentAll(){
        this.getRangeIsSentAll().clearContent();
    }
    getRangeIsSent(num){
        return this.sheet.getRange(num,4);
    }
    getValueIsSent(num){
        return this.getRangeIsSent(num).getValue();
    }
    setValueIsSent(num,value){
        this.getRangeIsSent(num).setValue(value);
    }
}