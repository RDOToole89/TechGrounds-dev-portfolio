import { Child } from './Child';

export const Parent: React.FC = () => {
  return (
    <Child onClick={() => console.log('click')} color={'red'}>
      hjjhjfsafsf
    </Child>
  );
};
