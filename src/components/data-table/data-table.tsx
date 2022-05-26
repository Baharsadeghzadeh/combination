import React from 'react';
import { Tusers } from '../../types/data-table';
import './data-table.scss';

type TDataTable = {
    data: Tusers[];
}

const DataTable = ({ data } : TDataTable) => {
    return(
        <div>
            <table className='data-table'>
                <tr className='data-table-row'>
                    <th className='data-table__header-cell'>User Information</th>
                </tr>
                {data.map((user:Tusers)=>
                    <tr key={user.name.first} className='data-table__body'>
                        <td className='data-table__body-cell'>
                            <div>
                                <img className='data-table__body-cell-image' src={user.picture.medium}/>
                            </div>
                            <div className='data-table__body-cell-info'>
                                <p>{user.name.first} {user.name.last}</p>
                                <p className='data-table__body-cell-country'>{user.location.country}</p>
                            </div>
                        </td>
                    </tr>
                )
            }
            </table>
        </div>
    )
}

export default DataTable;