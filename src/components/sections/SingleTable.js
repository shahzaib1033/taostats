// components/Table.js

import React from 'react';
import './Table.mudule.css'; // Import the CSS file
import '../../app/styles.css'
const SingleTable = () => {
    const data = [
        { Height: 2635445, 'Spec Version': 141, Events: 170, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 62, Time: '57 seconds ago' },
        { Height: 2635444, 'Spec Version': 141, Events: 145, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 61, Time: '1 minute ago' },
        { Height: 2635443, 'Spec Version': 141, Events: 172, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 69, Time: '1 minute ago' },
        { Height: 2635442, 'Spec Version': 141, Events: 183, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 58, Time: '2 minutes ago' },
        { Height: 2635441, 'Spec Version': 141, Events: 44, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 49, Time: '2 minutes ago' },
        { Height: 2635441, 'Spec Version': 141, Events: 44, Hash: '0xb9e414a59a35f968da3922d968da3922...', Extrinsics: 49, Time: '2 minutes ago' }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Height</th>
                    <th>Spec Version</th>
                    <th>Events</th>
                    <th>Hash</th>
                    <th>Extrinsics</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Height}</td>
                        <td>{row['Spec Version']}</td>
                        <td>{row.Events}</td>
                        <td className='lightText'>{row.Hash}</td>
                        <td>{row.Extrinsics}</td>
                        <td>{row.Time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SingleTable;
