/**
 * スプレッドシートサブクラス　meigenシート
 */
import GasSheet from './02_00_gasSheet';
const PO:any = PropertiesService.getScriptProperties();
const SHEETID:string = PO.getProperty('SHEETID');
const SHEETS = SpreadsheetApp.openById(SHEETID);
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