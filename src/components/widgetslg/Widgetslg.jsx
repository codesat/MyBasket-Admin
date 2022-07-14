import React from 'react'
import './Widgetslg.css'
import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/p4.jpg'
import p5 from '../../assets/images/p5.jpg'

const Widgetslg = () => {

  const Button=({type})=>{
    return <button className={'widgetlgbtn ' + type} >{type}</button>
  }

  return (
    <div className='widgetlg'>
        <span className="widgetlgtitle">Latest Transactions</span>
        <table className="widgetlgtable">
          <tr className="widgetlgtr">
            <th className="widgetlgth">Customer</th>
            <th className="widgetlgth">Date</th>
            <th className="widgetlgth">Amount</th>
            <th className="widgetlgth">Status</th>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlguser">
              <img src={p3} alt="" className="widgetlgimg" />
              <span className="widgetlgname">Susan Craol</span>
            </td>
            <td className="widgetlgdate">2 Jun 2021</td>
            <td className="widgetlgamount">$45.25</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlguser">
              <img src={p2} alt="" className="widgetlgimg" />
              <span className="widgetlgname">Peter Adms</span>
            </td>
            <td className="widgetlgdate">2 Jun 2021</td>
            <td className="widgetlgamount">$45.25</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlguser">
              <img src={p1} alt="" className="widgetlgimg" />
              <span className="widgetlgname">Amy Jackson</span>
            </td>
            <td className="widgetlgdate">2 Jun 2021</td>
            <td className="widgetlgamount">$45.25</td>
            <td className="widgetlgstatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlguser">
              <img src={p4} alt="" className="widgetlgimg" />
              <span className="widgetlgname">Jay Cutler</span>
            </td>
            <td className="widgetlgdate">2 Jun 2021</td>
            <td className="widgetlgamount">$45.25</td>
            <td className="widgetlgstatus"><Button type="Declined"/></td>
          </tr>
        </table>
    </div>
  )
}

export default Widgetslg
