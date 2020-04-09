const _ = Underscore.load();
export default class GasSheet {
    sheet: any;
    /**
     *  [ { columnNum: 1, name: 'meigen' },
        { columnNum: 2, name: 'person' },
        { columnNum: 3, name: 'info' },
        { columnNum: 4, name: 'isSent' } ]
     */
    columns:{columnNum: number;name:string}[];
    /**
     * [['人生とは自転車のようなものだ。\r\n倒れないようにするには走らなければならない。',
        'アインシュタイン','理論物理学者、ノーベル物理学賞受賞 / 1879～1955',true ],]
     */
    rawData:any[][];
    /**
     * [{ rowNum: 3,
        meigen: '人生とは自転車のようなものだ。\r\n倒れないようにするには走らなければならない。',
        person: 'アインシュタイン',
        info: '理論物理学者、ノーベル物理学賞受賞 / 1879～1955',
        isSent: true },]
     */
    data:{}[];
    constructor(sheet){
        this.sheet = sheet;
        const rawColumns:any[] = sheet
            .getRange(1,1,1,this.getLastColumn())
            .getValues()[0];
        const columns:{columnNum: number;name:string}[] =
            rawColumns.map((dataOfcolumn,idx)=>{
                return {columnNum:idx + 1,name:dataOfcolumn};
            })
        this.columns = columns;
        const rawData:any[][] = sheet
            .getRange(2,1,this.getLastRow() - 1,this.getLastColumn())
            .getValues();
        const data:{}[] =
            rawData.map((dataOfRow,idx)=>{
                const obj = {rowNum: idx + 1 + 1};
                columns.forEach((column,i)=>{
                    obj[column.name] = dataOfRow[i];
                });
                return obj;
            })
        this.columns = columns;
        this.data = data;
    }
    /**
     * シートの最終行の行番号を返す
     * @return number
     */
    getLastRow(){
        return this.sheet.getLastRow();
    }
    /**
     * シートの最終列の列番号を返す
     * @return number
     */
    getLastColumn(){
        return this.sheet.getLastColumn();
    }
    /**
     * 引数で指定したキーの値が合致する複数のオブジェクトを配列に入れて返す
     * @param keyValue {}
     * @return {}[]
     */
    where(keyValue):{}[] {
        return _.where(this.data,keyValue);
    }
    /**
     * 引数で指定したキーの値が合致した最初のオブジェクトを返す
     * @param keyValue {}
     * @return {}
     */
    findWere(keyValue):{} {
        return _.findWere(this.data,keyValue);
    }
}