import { useContext, createContext } from 'react';

const UserInfo = createContext({
  name: 'yun',
  id: 'dev-yun',
  email: 'dev@gmail.com',
});

function One() {
  const { name, id, email } = useContext(UserInfo);
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <One />
    </div>
  );
}

export default App;
