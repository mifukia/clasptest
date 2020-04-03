function myFunction(){
    // const ss = SpreadsheetApp.getActiveSpreadsheet();
    // const sheet = ss.getSheetByName('シート１');
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const array_A = sheet.getRange(`A2:A${lastRow}`).getValues();
    let done = false;
    array_A.map((value,index) => {
        const rangeIsSent = sheet.getRange(index + 2,4);
        if(!rangeIsSent.getValue() && !done){
            console.log(value);
            rangeIsSent.setValue(true);
            done = true;
        }
    });
    //console.log(array_A);
}