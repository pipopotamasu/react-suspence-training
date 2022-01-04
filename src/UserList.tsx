type User = {
  id: number;
  name: string;
  registeredAt: string;
};

let users: User[] | undefined;

export default function UserList() {
  if (!users) {
    throw fetch('http://localhost:3001/api/users').then(async (res) => (users = await res.json()));
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
