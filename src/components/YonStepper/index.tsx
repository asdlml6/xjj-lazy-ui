import add from '../../assets/images/add.png';
import reduce from '../../assets/images/reduce.png';
import './index.scss';
import React from 'react';

class YonStepper extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            newNum: props.num
        }
    } 
    // 数字栏
    inputChange = (num: any)=>{
        let { index, max=99999999, prec=8, truncation=4 } = this.props;
        if(num !== ""){
            let old_len = 0;
            let arr = [];
            num += "";
            if(num.indexOf(".") != "-1"){
                arr = num.split(".");
                old_len = arr[1].length;
            }
            num = Number(num);
            if(old_len > prec){
                let precision = Math.pow(10, prec); // 10 的 精度次方
                if(truncation==0){
                    num = ((Math.ceil(num * precision))/precision).toFixed(prec); //向上取整
                }else if(truncation==1){
                    num = ((Math.floor(num * precision))/precision).toFixed(prec); //向下取整
                }else if(truncation==4){
                    num = num.toFixed(prec); // 四舍五入
                }
                num = Number(num);
            }
            if(old_len){
                this.setState({
                    newNum: Number(arr[0])+"."+arr[1]
                })
            }else{
                this.setState({
                    newNum: num+""
                })
            }
            if(+num <= 0){
                num = 0;
            }else if(+num >= max){
                num = +max;
            }
        }
        this.props.onChange(num,index);
    }
    
    changeByStep = (step:any)=>{
        let { max=99999999, stopClick, num, min = 0} = this.props;
        let { newNum } = this.state;
        if(!num){
            num = 0;
        }
        if(stopClick || newNum < min){
            return;
        }
        if(step === -1){
            if(num > 1){
                num--;
            }else{
                num = 0;
            }
        }else{
            if(num < max-1){
                num++;
            }else{
                num = +max;
            }
                
        }
        this.inputChange(num);
    }
    render() {
        const { min = 0, max = 99999999, num, style, stopClick, className, step = 1 } = this.props;
        const { newNum } = this.state;
        return (
            <div className={stopClick?`mes-count stop-click ${className}`:`mes-count ${className}`}  style={style}>
                <img src={reduce} className={ num > min? "cbt cbt-left":"cbt cbt-left dis-btn"} onClick={()=>{this.changeByStep(Number(`-${step}`))}}/>
                <input type="number" value={newNum == num? newNum : num+""} onChange={(e)=>this.inputChange(e.target.value)} readOnly={stopClick} />
                <img src={add} className={num <max? "cbt cbt-right":"cbt cbt-right dis-btn"} onClick={()=>{this.changeByStep(Number(step))}}/>
            </div>
        )
    }
}
export default YonStepper;