/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";

import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CollectionIcon,
  SearchIcon,
  SortAscendingIcon,
  StarIcon
} from "@heroicons/react/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Domains", href: "#", current: false }
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
const projects = [
  {
    name: "Workcation",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "debbielewis/workcation",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true
  }
  // More projects...
];
const activityItems = [
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h"
  }
  // More items...
];

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuYear({ selected, setSelected }) {
  console.log("menu", selected);
  return (
    <div class="grid  grid-cols-3 gap-2">
      {[
        "all years",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ].map((filt) => (
        <span
          key={filt}
          className={`inline-flex  cursor-pointer  items-center px-3 py-0.5 rounded-full text-sm font-medium ${
            filt === selected
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 text-indigo-800"
          } `}
          onClick={() => setSelected(filt)}
        >
          <svg
            className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          {filt}
        </span>
      ))}
    </div>
  );
}
