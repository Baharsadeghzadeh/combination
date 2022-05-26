import type { Meta, Story } from '@storybook/react';
import DataTable from '../data-table';

type DataTableProps = Parameters<typeof DataTable>[0];

const data = [
    {
        name: {first:'Bahar', last: 'Sadeghzadeh'},
        location: {country: 'Malaysia'},
        picture: {medium: 'https://randomuser.me/api/portraits/med/women/69.jpg'}
    }
]

export default {
    title: 'DataTable',
    argTypes:{
        data:{
            description: 'Data',
            defaultValue: data,
        },
    }
} as Meta<DataTableProps>;

const Template: Story<DataTableProps> = args => <DataTable {...args} />;

export const AddAppTemplate = Template.bind({});
AddAppTemplate.args = {};