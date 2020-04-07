import PostSlack from './01_postSlack';
import GasSheet from './02_gasSheet';

const ACTIVESHEET = SpreadsheetApp.getActiveSheet();
const postSlack = new PostSlack();
const gasSheet = new GasSheet(ACTIVESHEET);
const sheet = gasSheet.sheet;
const main = ():void =>{
    const lastRow = sheet.getLastRow();
    const isSentAll = sheet.getRange(2,4,lastRow - 1);
    let done = false;
    const data = gasSheet.data;
    data.map((value:any,index:number) => {
        const rangeIsSent = sheet.getRange(value.rowNum,4);
        const title = value.person + value.info;
        const text = value.meigen;
        if(!rangeIsSent.getValue() && !done){
            postSlack.post(title,text);
            rangeIsSent.setValue(true);
            if(value.rowNum >= lastRow){
                isSentAll.clearContent();
            }
            done = true;
        }
    });
}
