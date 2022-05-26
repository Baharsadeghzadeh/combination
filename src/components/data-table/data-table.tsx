import { Tusers } from 'shared/types/data-table';
import './data-table.scss';

type TdataTable = {
    data: Tusers[];
}

const DataTable = ({ data } : TdataTable) => {
    return(
        <div>
            <table data-testid='dti_table' className='data-table'>
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;