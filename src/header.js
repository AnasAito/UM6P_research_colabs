/* This example requires Tailwind CSS v2.0+ */
import { useRef } from "react";
import Menu from "./menu";
import stats_ from "./stats";
export default function Header({ selected, setSelected }) {
  const store = stats_[selected];
  const scroll = useRef();
  const user = {
    name: selected.toUpperCase(),
    role: "UM6P International research collaborations ",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };
  const stats = [
    { label: "International collaborations", value: store["count"] },
    { label: `The major collaborator is  ${store["max_c"].toUpperCase()}`, value: "" },
    { label: "collaborators from african countries", value: store["c_afr"] }
  ];
  const executeScroll = () =>
    window.scrollTo({
      top: 120,
      behavior: "smooth"
    });
  return (
    <div
      ref={scroll}
      className="rounded-lg  z-0 bg-white overflow-hidden shadow"
    >
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="mt-5  sm:mt-0  items-center ">
            <Menu
              executeScroll={executeScroll}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-sm font-medium text-center"
          >
            <span className="text-gray-900">{stat.value}</span>{" "}
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
