import React from "react";
import './table.scss';
import hose_instruments from '../../../../Data/pbData/hose_ins.json'
export default function TableHOSE() {
    const CalBoard = (item, percent) => {
        if (item != 0) {
            return ((Math.round(item * 1) / percent).toFixed(2))
        } else {
            return ''
        }
    }
    let HoseData = hose_instruments.d;
    const TableHose = HoseData.map((item, i) => {
        return (
            <>
                <tbody>
                    <tr key={i}>
                        <td className="td-symbol" scope="row" title={item.FullName}>{item.symbol}</td>
                        <td className="td-thamchieu">{CalBoard(item.reference, 1000)}</td>
                        <td className="td-tran">{CalBoard(item.ceiling, 1000)}</td>
                        <td className="td-san">{CalBoard(item.floor, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidPrice3, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidVol3, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidPrice2, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidVol2, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidPrice1, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidVol1, 1000)}</td>
                        <td className="red-color">{CalBoard(item.closePrice, 1000)}</td>
                        <td className="red-color">{CalBoard(item.bidVol1, 1000)}</td>
                        <td className="red-color">{CalBoard(item.changePercent, 1)}%</td>
                        <td className="red-color">{CalBoard(item.offerPrice1, 1000)}</td>
                        <td className="red-color">{CalBoard(item.offerVol1, 1000)}</td>
                        <td className="red-color">{CalBoard(item.offerPrice2, 1000)}</td>
                        <td className="red-color">{CalBoard(item.offerVol2, 1000)}</td>
                        <td className="red-color">{CalBoard(item.offerPrice3, 1000)}</td>
                        <td className="red-color">{CalBoard(item.offerVol3, 1000)}</td>
                        <td className="totalTrading_color">{CalBoard(item.totalTrading, 1000)}</td>
                        <td className="red-color">{CalBoard(item.high, 1000)}</td>
                        <td className="red-color">{CalBoard(item.averagePrice, 1000)}</td>
                        <td className="red-color">{CalBoard(item.low, 1000)}</td>
                        <td className="red-color">{CalBoard(item.PT_TOTAL_TRADED_QTTY, 1)}</td>
                        <td className="red-color">{CalBoard(item.PT_TOTAL_TRADED_VALUE, 1)}</td>
                        <td className="red-color">{CalBoard(item.foreignBuy, 1000)}</td>
                        <td className="red-color">{CalBoard(item.foreignSell, 1000)}</td>
                    </tr>
                </tbody>
            </>
        )
    }
    )
    return (
        <>
            {TableHose}
        </>
    )
}
