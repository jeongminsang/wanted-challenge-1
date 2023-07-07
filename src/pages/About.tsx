import useRouter from '../hooks/useRouter';

function About() {
  const { push } = useRouter();

  return (
    <>
      <p>About</p>
      <button onClick={() => push('/')}>go main</button>
    </>
  );
}

export default About;
