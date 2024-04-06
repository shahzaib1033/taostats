"use client";
import React, { useEffect } from 'react';
import './styles.css';
import Header from '@/components/layout/Header';
import Details from '@/components/sections/Details';
import Navbar from '@/components/layout/Navbar';
import Graph from '@/components/sections/Graph';
import Table from '@/components/sections/Table';
import SingleTable from '@/components/sections/SingleTable';
import Footer from '@/components/layout/Footer';

const Page = () => {
  useEffect(() => {
    // Add any global initialization code here
  }, []);
  function toggleMenu() {
    var nav = document.getElementById("navbar-nav");
    nav.classList.toggle("active");
  }

  const data = [
    { title: "Market Cap", value: "$3.85b" },
    { title: "24hr Volume", value: "$27.97m" },
    { title: "Total Supply", value: "21,000,000τ" },
    { title: "Validating APY", value: "19.39%" },
    { title: "Staking APY", value: "15.9%" },
    { title: "Circulating Supply", value: "6,246,404τ" },
    { title: "Finalised Blocks", value: "2,365,427" },
    { title: "Signed extrinsics", value: "2,365,427" },
    { title: "Total Accounts", value: "93,741" },
    { title: "Transfers", value: "286,239" }
  ];

  let itemsPerRow = 5;
  const numRows = Math.ceil(data.length / itemsPerRow);
  let lastRowItems = data.length % itemsPerRow;

  const rows = [];
  let dataIndex = 0;
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < itemsPerRow; j++) {
      if (dataIndex < data.length) {
        row.push(data[dataIndex]);
        dataIndex++;
      } else if (lastRowItems > 0) {
        row.push({ title: "", value: "" });
        lastRowItems--;
      }
    }
    rows.push(row);
  }


  const series = [
    {
      type: 'rangeArea',
      name: 'Team B Range',
      data: [
        { x: 'Jan', y: [1100, 1900] },
        { x: 'Feb', y: [1200, 1800] },
        { x: 'Mar', y: [900, 2900] },
        { x: 'Apr', y: [1400, 2700] },
        { x: 'May', y: [2600, 3900] },
        { x: 'Jun', y: [500, 1700] },
        { x: 'Jul', y: [1900, 2300] },
        { x: 'Aug', y: [1000, 1500] }
      ]
    },
    {
      type: 'rangeArea',
      name: 'Team A Range',
      data: [
        { x: 'Jan', y: [3100, 3400] },
        { x: 'Feb', y: [4200, 5200] },
        { x: 'Mar', y: [3900, 4900] },
        { x: 'Apr', y: [3400, 3900] },
        { x: 'May', y: [5100, 5900] },
        { x: 'Jun', y: [5400, 6700] },
        { x: 'Jul', y: [4300, 4600] },
        { x: 'Aug', y: [2100, 2900] }
      ]
    },
    {
      type: 'line',
      name: 'Team B Median',
      data: [
        { x: 'Jan', y: 1500 },
        { x: 'Feb', y: 1700 },
        { x: 'Mar', y: 1900 },
        { x: 'Apr', y: 2200 },
        { x: 'May', y: 3000 },
        { x: 'Jun', y: 1000 },
        { x: 'Jul', y: 2100 },
        { x: 'Aug', y: 1200 },
        { x: 'Sep', y: 1800 },
        { x: 'Oct', y: 2000 }
      ]
    },
    {
      type: 'line',
      name: 'Team A Median',
      data: [
        { x: 'Jan', y: 3300 },
        { x: 'Feb', y: 4900 },
        { x: 'Mar', y: 4300 },
        { x: 'Apr', y: 3700 },
        { x: 'May', y: 5500 },
        { x: 'Jun', y: 5900 },
        { x: 'Jul', y: 4500 },
        { x: 'Aug', y: 2400 },
        { x: 'Sep', y: 2100 },
        { x: 'Oct', y: 1500 }
      ]
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'rangeArea',
      background: '#2b2b2b', // Dark theme background color
      foreColor: '#ffffff' // Dark theme font color
    },
    colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
    dataLabels: { enabled: false },
    fill: { opacity: [0.24, 0.24, 1, 1] },
    stroke: { curve: 'straight', width: [0, 0, 2, 2] },
    legend: { show: true, customLegendItems: ['Team B', 'Team A'], inverseOrder: true },
    title: { text: 'Range Area with Forecast Line (Combo)', align: 'left' }
  };

  return (
    <div className="page-container">
      <Header></Header>
      <Navbar ></Navbar>
      <Details></Details>
      <Graph></Graph>
      <div className="parallel-table">
        <Table></Table>
        <Table></Table>
      </div>
      <div className="parallel-graphs">
        <Graph></Graph>
        <Graph></Graph>
      </div>
      <div className="latest-blocks-table">
        <SingleTable></SingleTable>

      </div>

        <Footer></Footer>
    </div>
  );
};

export default Page;














