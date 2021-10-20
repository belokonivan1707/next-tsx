import Link from "next/link";

export interface UserAPIResponse {
  data: {
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
  };
}

const UserItem = ({ data }: UserAPIResponse) => {
  const { id, name, username, email } = data;

  return (
    <div>
      <div>
        <h1>Single Page with User</h1>
        <Link href="/">back to homepage</Link>
      </div>
      <div>
        <h3>
          {id}:{name}
        </h3>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserItem;

export async function getServerSideProps(context: { params: { id: number } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
