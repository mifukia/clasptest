/**
 * GASメイン
 */
import PostSlack from './01_postSlack';
import MeigenSheet from './02_01_meigenSheet';

const postSlack:PostSlack = new PostSlack();
const meigenSheet:MeigenSheet = new MeigenSheet();

const main = ():void =>{
    let done:boolean = false;
    meigenSheet.data.map((dataOfRow:any,index:number) => {
        const title:string = dataOfRow.person + dataOfRow.info;
        const text:string = dataOfRow.meigen;
        if(!meigenSheet.getValueIsSent(dataOfRow.rowNum) && !done){
            /**
             * slackに通知
             */
            postSlack.post(title,text);

            /**
             * sheetのisSentカラムに通知済のtrueを入れる
             */
            meigenSheet.setValueIsSent(dataOfRow.rowNum,true);

            /**
             * 最終行まで通知が終わったら、全てのisSentカラムをクリアする
             */
            if(dataOfRow.rowNum >= meigenSheet.getLastRow()){
                meigenSheet.clearRangeIsSentAll();
            }
            done = true;
        }
    });
}
