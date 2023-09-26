import { Filters, Navbar, Topbar } from "../src/components";
import classNames from "classnames";

export default function Home() {
  return (
    <main
      className={classNames({
        "min-h-screen overflow-x-hidden bg-off-white": true,
        "flex flex-col items-start justify-start": true,
      })}
    >
      <Navbar />
      <Topbar />
      <Filters />
    </main>
  );
}