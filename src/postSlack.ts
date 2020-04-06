const PO = PropertiesService.getScriptProperties();
const HOOKSURL:string = PO.getProperty('HOOKSURL');

const postSlack = (text:string):void =>{
    //postオプションを指定
    const jsonData = {
        'attachments':[
            {
                'color': '#3cb371',
                'title': 'test',
                'text': text,
            }
        ]
    }
    const payload = JSON.stringify(jsonData);
    const options:object = {
        "method": "POST",
        'headers': {'Content-type': 'application/json'},
        'payload' : payload
    };
    // UrlFetchAppを使って、POSTする
    UrlFetchApp.fetch(HOOKSURL, options);
}

