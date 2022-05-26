import { render, screen } from '@testing-library/react';
import DataTable from './data-table';

describe('<DataTable />', () => {
    const props = {
        data : [
            {
                name: {first:'Bahar', last: 'Sadeghzadeh'},
                location: {country: 'Malaysia'},
                picture: {medium: 'https://randomuser.me/api/portraits/med/women/69.jpg'}
            }
        ]
    }
    it('Should render the whole table', () => {
        
        render(<DataTable {...props} />);

        expect(screen.queryByTestId('dti_table')).toBeTruthy();
        expect(screen.getByText('Malaysia')).toBeInTheDocument();
    });
})