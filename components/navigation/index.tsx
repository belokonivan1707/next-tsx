import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/users">
            <a>users</a>
          </Link>
        </li>

        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  );
};

export default Navigation;
