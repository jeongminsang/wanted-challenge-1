import useRouter from '../hooks/useRouter';

function Root() {
  const { push } = useRouter();

  return (
    <>
      <p>Root</p>
      <button onClick={() => push('/about')}>about</button>
    </>
  );
}

export default Root;
