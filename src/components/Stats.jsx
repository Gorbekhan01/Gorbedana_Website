import CountUp from 'react-countup';


export const Stats = () => {
    return (
        <div className="mt-2 flex flex-wrap justify-center items-center gap-4">
                <StatCard icon="📚" end={7} label="کتاب ها"/>

                <StatCard icon="📁" end={2} label="مجلات"/>

                <StatCard icon="+" end={250} label="دنبال کنندگان"/>

        </div>
    );
};

const StatCard = ({ icon, end, label }) => (
    <span className="flex h-30 w-50 flex-col items-center justify-center
    rounded-md border border-dashed border-gray-200 transition-colors
     duration-100 ease-in-out hover:border-gray-400/80 max-md:h-20 max-md:w-30">
    <div className="flex flex-row items-center justify-center">
      <span className="mr-3 text-2xl max-md:text-1xl">{icon}</span>
      <span className="text-2xl font-bold text-white max-md:text-xl">
        <CountUp end={end} duration={8} separator="," enableScrollSpy />
      </span>
    </div>
    <div className="mt-2 font-normal text-1xl text-white md:flex-wrap">{label}</div>
  </span>
);
