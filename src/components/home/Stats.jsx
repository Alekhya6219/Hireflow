function Stats() {

  const stats = [
    {
      number: "20K+",
      label: "Active Jobs",
    },
    {
      number: "500+",
      label: "Companies",
    },
    {
      number: "15K+",
      label: "Candidates",
    },
    {
      number: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-2xl bg-white p-8 shadow-md"
        >

          <h2 className="text-4xl font-bold text-blue-600">

            {item.number}

          </h2>

          <p className="mt-2 text-slate-500">

            {item.label}

          </p>

        </div>

      ))}

    </div>
  );
}

export default Stats;