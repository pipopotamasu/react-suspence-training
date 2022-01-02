import { useQuery } from 'react-query';

type User = {
  id: number;
  name: string;
  registeredAt: string;
};

function getUsers(): Promise<User[]> {
  return fetch('http://localhost:3001/api/users').then((res) => res.json());
}

export default function UserList() {
  const { data } = useQuery('users', getUsers);

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
