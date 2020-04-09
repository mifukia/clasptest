import PostSlack from './01_postSlack';
import MeigenSheet from './02_01_meigenSheet';

const postSlack = new PostSlack();
const meigenSheet = new MeigenSheet();
const main = ():void =>{
    let done = false;
    meigenSheet.data.map((dataOfRow:any,index:number) => {
        const title = dataOfRow.person + dataOfRow.info;
        const text = dataOfRow.meigen;
        if(!meigenSheet.getValueIsSent(dataOfRow.rowNum) && !done){
            postSlack.post(title,text);
            meigenSheet.setValueIsSent(dataOfRow.rowNum,true);
            if(dataOfRow.rowNum >= meigenSheet.getLastRow()){
                meigenSheet.clearRangeIsSentAll();
            }
            done = true;
        }
    });
}
