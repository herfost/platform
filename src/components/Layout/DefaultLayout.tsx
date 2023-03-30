import Navbar from "../Navbar/Navbar";

interface IDefaultLayout {
  children: JSX.Element | JSX.Element[];
}

export default function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
