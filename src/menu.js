export default function MenuYear({ executeScroll, selected, setSelected }) {
  return (
    <div class="grid  grid-cols-3 gap-2">
      {[
        "all",
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
            filt.toLowerCase() === selected
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 text-indigo-800"
          } `}
          onClick={() => {
            executeScroll();
            setSelected(filt);
          }}
        >
          <svg
            className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          {filt.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
