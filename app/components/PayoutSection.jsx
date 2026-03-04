import Image from "next/image";

const PayoutSection = () => {
  const payoutData = [
    {
      id: 1,
      title: "Up to 95%",
      subtitle: "Profit Split",
      icon: "/assets/icons/coin.png",
    },
    {
      id: 2,
      title: "Up to 1M",
      subtitle: "Trading Accounts",
      icon: "/assets/icons/dollar.png",
    },
    {
      id: 3,
      title: "24 Hours",
      subtitle: "Guaranteed Payout",
      icon: "/assets/icons/bank.png",
    },
    {
      id: 4,
      title: "No Time Limit",
      subtitle: "in Challenge Phase",
      icon: "/assets/icons/graph.png",
    },
  ];

  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-20">
       <div className="px-6 py-10 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {payoutData.map((item) => (
            <div key={item.id} className="text-center">
              <div className="mx-auto mb-5 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-full object-contain"
                />
              </div>
              <h3 className="text-[30px] font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayoutSection;