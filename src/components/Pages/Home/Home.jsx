import React from 'react'
import Chart from '../../Chart/Chart'
import Featuredinfo from '../../Featuredinfo/featuredinfo'
import './Home.css'
import { data } from '../../../dummydata'
import Widgetsmall from '../../Widgetsmall/Widgetsmall'
import Widgetslg from '../../widgetslg/Widgetslg'

const Home = () => {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
        <div className="homewidgets">
            <Widgetsmall/>
            <Widgetslg/>

        </div>
    </div>
  )
}

export default Home
