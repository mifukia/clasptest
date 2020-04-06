const main = ():void =>{
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const values = sheet.getRange(2,1,lastRow - 1,4).getValues();
    const isSentAll = sheet.getRange(2,4,lastRow - 1);
    let done = false;

    values.map((value,index) => {
        const numRow = index + 2;
        const rangeIsSent = sheet.getRange(numRow,4);
        const meigen = value[0];
        const person = value[1];
        const info = value[2];
        const text = meigen + person + info;
        if(!rangeIsSent.getValue() && !done){
            //console.log(`meigen:${meigen}`,`person:${person}`,`info:${info}`);
            postSlack(text);
            rangeIsSent.setValue(true);
            if(numRow >= lastRow){
                isSentAll.clearContent();
            }
            done = true;
        }
    });
}
