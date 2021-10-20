import Link from "next/link";
// import UserItem from "../../components/User-item";

export interface UsersAPI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface UsersAPIResponse {
  data: UsersAPI[];
}

const UsersPage = ({ data }: UsersAPIResponse) => {
  return (
    <div>
      <div>
        <h1>Fucking Users Page</h1>
      </div>
      <div>
        {data.map((user: UsersAPI) => {
          return (
            <Link key={user.id} href="/users/[id]" as={`/users/${user.id}`}>
              <a>
                <h3>
                  {user.id}: {user.name}
                </h3>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
