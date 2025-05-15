import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurFigures = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const figures = [
    { value: 7, suffix: "", label: "Hotels" },
    { value: 778093, suffix: "", label: "Visitors / Year" },
    { value: 4.7, suffix: " / 5", label: "Customer Rate" },
    { value: 1700, suffix: "+", label: "Team members" },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-white py-24  text-center overflow-hidden"
    >

      {/* <h2 className="text-4xl text-black font-bold mb-16 relative z-10">Our Figures</h2> */}

      <div className="section-container flex flex-wrap justify-center items-center gap-8 relative z-10">
        {figures.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center backdrop-blur-md border border-blue-950 rounded-2xl p-8 w-62 hover:scale-105 hover:border-blue-500 transition-transform duration-300 shadow-lg"
          >
            <p className="text-4xl font-extrabold text-blue-950 mb-2 animate-pulse">
              {inView && (
                <CountUp
                  end={item.value}
                  duration={2}
                  separator=","
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                />
              )}
              {item.suffix}
            </p>
            <p className="text-lg text-blue-950 font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFigures;
