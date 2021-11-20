import type {NextPage, GetStaticProps} from "next";
import type {User} from "../types";

import Link from "../ui/controls/Link";
import api from "../api";
interface Props {
  users: User[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const users = await api.user.list();

  return {
    props: {
      users,
    },
  };
};

const HomePage: NextPage<Props> = ({users}) => {
  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
