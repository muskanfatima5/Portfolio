import Link from "next/link";

function Navbar() {
  return (
    <div className="text-5xl text-gray-800 text-center">
      <br />
      <ul>
        <li>
          <Link href="/About">. About</Link>
        </li>

        <br />
        <li>
          <Link href="/Education">. Education</Link>
        </li>

        <br />
        <li>
          <Link href="/Skills">. Skills</Link>
        </li>

        <br />
        <li>
          <Link href="/Contact">. Contact</Link>
        </li>

        <br />
        <li>
          <Link href="/Projects">. My Work</Link>
        </li>

        <br />
        <li>
          <Link href="/Websites">. Accounts</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
