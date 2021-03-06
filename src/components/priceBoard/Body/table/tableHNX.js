import React, { useEffect, useState } from "react";
import './table.scss';
import hnx_instruments from '../../../../Data/pbData/hnx_ins.json'

export default function TableHNX() {
    const listPropertyChange = ['bidPrice3','bidPrice2','bidPrice1','offerPrice1','offerPrice2','offerPrice3']
    
    const CaculatePB = (item, percent, fix) => {
        if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
            return ((Math.round(item * 1) / percent).toFixed(fix))
        } else if (item === undefined) {
            return ''
        }
    }
    const CaculatorPercent = (item) => {
        if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
            return ((item).toFixed(1))
        } else if (item === undefined) {
            return ''
        }
    }
    const setColor = (item, itemName) => {
        if (itemName == item.reference) {
            return 'yellow-color'
        } else if (itemName == item.ceiling) {
            return 'purple-color'
        } else if (itemName == item.floor) {
            return 'blue-color'
        } else if (itemName > item.reference) {
            return 'green-color'
        } else {
            return 'red-color'
        }
    }
    const setColorBeside = (item, Prc) => {
        if (Prc == item.reference) {
            return 'yellow-color'
        } else if (Prc == item.ceiling) {
            return 'purple-color'
        } else if (Prc == item.floor) {
            return 'blue-color'
        } else if (Prc > item.reference) {
            return 'green-color'
        } else {
            return 'red-color'
        }
    }
    const start = 0
    const end = Math.floor(Math.random() * (20 - 10)) + 10
    console.log(start,end);
    const randomValue = (min, max) => {
        let value = Math.floor(Math.random() * (max - min + 1) + min)
        return value;
      }



    let HNXData = hnx_instruments.d;
    let get20Data = HNXData.slice(0, 20)
    const ChangeData = () => {
        get20Data.slice(start, end).map((data) => {
            if (data.bidPrice2 && data.bidPrice3 &&
                data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
                data.closePrice != undefined) {
                    let key = randomValue(data.ceiling, data.floor)
                return (
                    setData(get20Data.slice(0, 10)),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data),
                    data[listPropertyChange+'_class_hightlight'] = randomValue(data[key], key,data)

                )
            } else {
                return ''
            }
        })
    }
    const [data, setData] = useState(get20Data)
    useEffect(() => {
        setInterval(ChangeData, 1000)
    }, [])
   
        const [backgroundColor, setBackgroundColor] = useState("");
        const [textColor, setTextColor] = useState("");
      
        useEffect(() => {
          const color = setColor();
          setBackgroundColor(`background_${color}`);
          setTextColor(color);
          setTimeout(() => {
            setBackgroundColor("");
          }, 2000);
        }, []);

    const TableHNX = HNXData.map((item) => {
        return (
            <>
                <tbody>
                    <tr>
                        <td className={setColor(item, item.closePrice)} scope="row" title={item.FullName}>{item.symbol}</td>
                        <td className="td-thamchieu">{CaculatePB(item.reference, 1000, 2)}</td>
                        <td className="td-tran">{CaculatePB(item.ceiling, 1000, 2)}</td>
                        <td className="td-san">{CaculatePB(item.floor, 1000, 2)}</td>
                        <td className={setColor(item, item.bidPrice3)}>{CaculatePB(item.bidPrice3, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.bidPrice3, item.bidVol3)}>{CaculatePB(item.bidVol3, 1000, 2)}</td>
                        <td className={setColor(item, item.bidPrice2)}>{CaculatePB(item.bidPrice2, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.bidPrice2, item.bidVol2)}>{CaculatePB(item.bidVol2, 1000, 2)}</td>
                        <td className={setColor(item, item.bidPrice1)}>{CaculatePB(item.bidPrice1, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.bidPrice1, item.bidVol1)}>{CaculatePB(item.bidVol1, 1000, 2)}</td>
                        <td className={setColor(item, item.closePrice)}>{CaculatePB(item.closePrice, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.closePrice)}>{CaculatePB(item.closeVol, 10, 0)}</td>
                        <td className={setColorBeside(item, item.closePrice)}>{CaculatorPercent(item.changePercent)} {item.changePercent ? '%' : ''}</td>
                        <td className={setColor(item, item.offerPrice1)}>{CaculatePB(item.offerPrice1, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.offerPrice1)}>{CaculatePB(item.offerVol1, 1000, 2)}</td>
                        <td className={setColor(item, item.offerPrice2)}>{CaculatePB(item.offerPrice2, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.offerPrice2)}>{CaculatePB(item.offerVol2, 1000, 2)}</td>
                        <td className={setColor(item, item.offerPrice3)}>{CaculatePB(item.offerPrice3, 1000, 2)}</td>
                        <td className={setColorBeside(item, item.offerPrice3)}>{CaculatePB(item.offerVol3, 1000, 2)}</td>
                        <td className="noneChangeColor">{CaculatePB(item.totalTrading, 1000, 2)}</td>
                        <td className={setColor(item, item.high)}>{CaculatePB(item.high, 1000, 2)}</td>
                        <td className={setColor(item, item.averagePrice)}>{CaculatePB(item.averagePrice, 1000, 2)}</td>
                        <td className={setColor(item, item.low)}>{CaculatePB(item.low, 1000, 2)}</td>
                        <td className="noneChangeColor">{ }</td>
                        <td className="noneChangeColor">{ }</td>
                        <td className="noneChangeColor">{CaculatePB(item.foreignBuy, 1000, 2)}</td>
                        <td className="noneChangeColor">{CaculatePB(item.foreignSell, 1000, 2)}</td>
                        <td className={[backgroundColor, textColor].join(" ")}></td>
                    </tr>
                </tbody>
            </>
        )
    }
    )
    return (
        <>
            {TableHNX}

        </>
    )
}

