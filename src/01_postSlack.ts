/**
 * slack通知
 */
const PO:any = PropertiesService.getScriptProperties();
const HOOKSURL:string = PO.getProperty('HOOKSURL');

export default class PostSlack {
    title: string | number;
    text: string | number;
    jsonData: object;
    payload: string;
    options: object;
    constructor(){
        this.title = "";
        this.text = "";
        this.jsonData = {};
        this.payload = "";
        this.options = {};
    }
    public post(title:string | number,text:string | number):void{
        this.title = title;
        this.text = text;
        this.jsonData = {
            'attachments':[
                {
                    'color': '#3cb371',
                    'title': this.title,
                    'text': this.text,
                }
            ]
        };
        this.payload = JSON.stringify(this.jsonData);
        this.options = {
            "method": "POST",
            'headers': {'Content-type': 'application/json'},
            'payload' : this.payload
        };
        UrlFetchApp.fetch(HOOKSURL, this.options);
    }
}

