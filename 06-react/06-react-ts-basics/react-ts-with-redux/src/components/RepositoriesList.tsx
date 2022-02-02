import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // NOTE 1 at bottom
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading....</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name} </div>)}
    </div>
  );
};

// https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/learn/lecture/24337784#questions
// check out useActions hook to avoid this ugly code
// dispatch(actionCreators.searchRepostitories(term))
