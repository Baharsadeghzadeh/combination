import { useRef } from 'react';
import { useFetch } from 'hooks/use_fetch';
import DataTable from '../data-table/data-table';
import { FETCH_DATA_URL } from 'constants/urls';

const App = () => {
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(
    FETCH_DATA_URL,
    isComponentMounted,
    { results:[] }
  );

  return (
    <div>
      {loading ? (
        <div>Loading data...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <DataTable data={data.results} /> 
      )}
    </div>
  );
}

export default App;
