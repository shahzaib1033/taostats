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

  return (
    <div className="page-container">
      <Header></Header>
      <Navbar ></Navbar>
      <Details></Details>
      <Graph></Graph>
      <div className="parallel-table">
        <div className="tableSection">
          <h3>Table 1</h3>
          <Table></Table>
        </div>
        <div className="tableSection">
          <h3>Table 1</h3>
          <Table></Table>

        </div>
      </div>
      <div className="parallel-graphs">
        <Graph></Graph>
        <Graph></Graph>
      </div>
      <div className="latest-blocks-table">
        <h3>Table 3</h3>
        <SingleTable></SingleTable>

      </div>

      <Footer></Footer>
    </div>
  );
};

export default Page;














