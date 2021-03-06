import React, { useState } from 'react'
import './table.scss';  
import TableHOSE from './tableHOSE'
import TableVN30 from './tableVN30'
import TableHNX from './tableHNX'
import TableUPCOM from './tableUPCOM'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Table() {
  const Table_tab = useSelector((state) => state.Login.table_tab)
  const themeMode = useSelector((state) => state.Theme.themeMode)
  const { t } = useTranslation();
  const Which_tab  = () => {
    if(Table_tab === 'Hose'){
      return (<TableHOSE/>)
    }else if(Table_tab === 'VN30'){
      return (<TableVN30/>)
    }else if(Table_tab === 'HNX'){
      return (<TableHNX/>)
    }else{
      return( <TableUPCOM/>)
    }
  }

  return (
    <>
      <table className={themeMode === 'dark' ? 'table-dark' : 'table-light'} >
        <thead className="fix-sticky">
          <tr>
            <th scope="col" rowSpan="2">{t('table.symbol')}</th>
            <th scope="col" rowSpan="2">{t('table.ref')}</th>
            <th scope="col" rowSpan="2">{t('table.celi')}</th>
            <th scope="col" rowSpan="2">{t('table.floor')}</th>
            <th scope="col" colSpan="6">{t('table.bid')} </th>
            <th scope="col" colSpan="3">{t('table.matched')} </th>
            <th scope="col" colSpan="6">{t('table.ask')} </th>
            <th scope="col" rowSpan="2">{t('table.total_vol')} </th>
            <th scope="col" colSpan="3">{t('table.price')}</th>
            <th scope="col" colSpan="2">{t('table.remain')}</th>
            <th scope="col" colSpan="2">{t('table.foreign')}</th>
          </tr>
          <tr>
            <th scope="col">{t('table.prc3')}</th>
            <th scope="col">{t('table.vol3')}</th>
            <th scope="col">{t('table.prc2')}</th>
            <th scope="col">{t('table.vol2')}</th>
            <th scope="col">{t('table.prc1')}</th>
            <th scope="col">{t('table.vol1')}</th>
            <th scope="col">{t('table.price')}</th>
            <th scope="col">{t('table.vol')}</th>
            <th scope="col">{t('table.percent')}</th>
            <th scope="col">{t('table.prc1')}</th>
            <th scope="col">{t('table.vol1')}</th>
            <th scope="col">{t('table.prc2')}</th>
            <th scope="col">{t('table.vol2')}</th>
            <th scope="col">{t('table.prc3')}</th>
            <th scope="col">{t('table.vol3')}</th>
            <th scope="col">{t('table.high')}</th>
            <th scope="col">{t('table.average')}</th>
            <th scope="col">{t('table.low')}</th>
            <th scope="col">{t('table.bought')}</th>
            <th scope="col">{t('table.sold')}</th>
            <th scope="col">{t('table.bought')}</th>
            <th scope="col">{t('table.sold')}</th>
          </tr>
        </thead>
        {Which_tab()}
      </table>
    </>
  )
}

export default Table