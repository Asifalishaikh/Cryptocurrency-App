import React from 'react';
import { useState } from 'react';
import {millify} from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi'; // ready to fetch
import {Cryptocurrencies, News} from '../components'
const {Title}= Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(); // after import in step-2
 
    //const globalStats = data?.data?.stats;

    const globalStats = useState(data?.data?.stats);
    if(isFetching) return 'Loading ...';
  return (
    <>
        <Title level={2} className="heading">Global Crypto State</Title>
         <Row>
          <Col span={12}><Statistic tiimtle="Total Cryptocurrencies" value={globalStats?.total} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value="5" /*{millify(globalStats.totalMarketCap)}*/ /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value="5" /*{millify(globalStats.exchanges)}*/ /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value="5" /*{millify(globalStats.total24hvolume)}*/ /></Col>
          <Col span={12}><Statistic title="Total Markets" value="5" /*{millify(globalStats.totalMarkets)}*/  /></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Latest Crypto News</Title>
          <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
        </div>
        <News simplified/>
    
    </>
  )
}
export default Homepage



////  console.log(danpm startta); //go in cryptoApi & add /react at and like this import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
