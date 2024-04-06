"use client";
import { CgChevronUpR } from 'react-icons/cg';
import './Details.module.css';
export default function Details() {
  
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

  return (
      <div className="detailsSection">
          <div className="pricing">
              <div className="topOfPricingDetails">
                  <span className="logo">
                      T
                  </span>
                  <span className="lightText">
                      Bittensor price (τao)
                  </span>
              </div>
              <div className="MidOfprice">
                  $601.24
              </div>
              <div className="precentage">

                  <CgChevronUpR
                      className='icon'
                  />
                  24.43%
              </div>
          </div>
          <div className="secondSectionOfDetails">
              {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className='row-contianer' style={{ display: "flex", marginBottom: "10px" }}>
                      {row.map((item, index) => (
                          <div className='semi-container' key={index} style={{ marginRight: "20px" }}>
                              <div className='itemOfSecondSection'>{item.title}</div>
                              <div>{item.value}</div>
                          </div>
                      ))}
                  </div>
              ))}
          </div>
      </div>  )
}
