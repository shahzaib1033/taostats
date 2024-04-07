import React from 'react';
import styles from './Table.css'; 
import  '../layout/Navbar.css'; 
import '../../app/styles.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
const Table = () => {
    const data = [
        { ID: 8, Name: 'Time Series Prediction', CreatedAt: 'Oct 12, 2023', Owner: '5esfr297ga..', Emission: '9.58%' },
        { ID: 18, Name: 'Cortex.t', CreatedAt: 'Oct 30, 2023', Owner: '5hafjgafb..', Emission: '9%' },
        { ID: 8, Name: 'Vision', CreatedAt: 'Dec 18, 2023', Owner: '5furwbsfja..', Emission: '8.36%' },
        { ID: 8, Name: 'Filetao', CreatedAt: 'Nov 5, 2023', Owner: '5fubrg813f..', Emission: '7.52%' },
        { ID: 8, Name: 'Multi Modality', CreatedAt: 'Apr 13, 2023', Owner: '5esfr297ga..', Emission: '6.11%' }
    ];
    return (
        <table className={styles.table}>
            <thead>
                <tr> 
                    <th>ID</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Owner</th>
                    {/* <th className='sectionChanges' >Emission <RiArrowDropDownLine style={{ fontSize: "15px" }} />
                        <ul className="dropdown-menu">
                            <span><a href="#">Option 1</a></span>
                            <span><a href="#">Option 2</a></span>
                            <span><a href="#">Option 3</a></span>
                        </ul>
                    </th> */}
                    <th className="nav-item">
                        <span className='sectionChanges'>Emission <RiArrowDropDownLine style={{ fontSize: "15px" }} /></span>
                        <span className="dropdown-menu">
                            <span><a>Option 1</a></span>
                            <span><a >Option 2</a></span>
                            <span><a >Option 3</a></span>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.ID}</td>
                        <td>{row.Name}</td>
                        <td>{row.CreatedAt}</td>
                        <td className='lightText'>{row.Owner}</td>
                        <td>{row.Emission}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
