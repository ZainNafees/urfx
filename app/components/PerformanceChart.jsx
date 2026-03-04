
"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartColumn, Clock3, DollarSign, ShieldCheck } from "lucide-react";

const TIME_FILTERS = ["1W", "1M", "6M", "1Y", "All Time"];

const CHART_DATA = [
  { date: "Mar 01", value: 4210.22 },
  { date: "Mar 02", value: 5180.71 },
  { date: "Mar 03", value: 3899.44 },
  { date: "Mar 04", value: 4722.63 },
  { date: "Mar 05", value: 5320.4 },
  { date: "Mar 06", value: 5674.28 },
  { date: "Mar 07", value: 4931.12 },
  { date: "Mar 08", value: 4103.53 },
  { date: "Mar 09", value: 5755.6 },
  { date: "Mar 10", value: 5982.47 },
  { date: "Mar 11", value: 5036.87 },
  { date: "Mar 12", value: 5477.33 },
  { date: "Mar 13", value: 6208.92 },
  { date: "Mar 14", value: 5715.09 },
  { date: "Mar 15", value: 6440.25 },
  { date: "Mar 16", value: 5508.8 },
  { date: "Mar 17", value: 6249.58 },
  { date: "Mar 18", value: 5905.21 },
  { date: "Mar 19", value: 6436.44 },
  { date: "Mar 20", value: 6062.33 },
  { date: "Mar 21", value: 5732.71 },
  { date: "Mar 22", value: 6313.95 },
  { date: "Mar 23", value: 6122.49 },
  { date: "Mar 24", value: 6669.14 },
  { date: "Mar 25", value: 6223.43 },
];

const CURRENCY_ROWS = [
  { code: "USD", color: "#3b82f6", amount: "$1.2K", percent: 13 },
  { code: "JPY", color: "#a855f7", amount: "$525", percent: 8 },
  { code: "EUR", color: "#10b981", amount: "$9.2K", percent: 77 },
  { code: "GBP", color: "#f59e0b", amount: "$293", percent: 5 },
  { code: "INR", color: "#ef4444", amount: "$881", percent: 10 },
];

const STAT_CARDS = [
  {
    title: "Success Rate",
    value: "92.3%",
    badge: "+5.2%",
    icon: ChartColumn,
  },
  {
    title: "Average Profit",
    value: "$185.50",
    badge: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Execution Rate",
    value: "0.04s",
    badge: "Stable",
    icon: Clock3,
  },
  {
    title: "Risk Management",
    value: "Active",
    badge: "99.9%",
    icon: ShieldCheck,
  },
];

function ProfitTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const { date, value } = payload[0].payload;

  return (
    <div className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#111] shadow-lg">
      {date} | ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </div>
  );
}

export default function PerformanceChart() {
  const [activeFilter, setActiveFilter] = useState("1M");
  const [hoveredDate, setHoveredDate] = useState("Mar 19");
  const [lastUpdated, setLastUpdated] = useState("3:18:33 AM");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setLastUpdated(
        now.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [profitDollars, profitCents] = (7223.43).toFixed(2).split(".");

  return (
    <section
      className="min-h-screen w-full px-4 py-8 md:px-8 md:py-10"
      style={{
        background: "linear-gradient(90deg, #c8f000 0%, #00e5ff 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-3xl font-extrabold text-[#111] md:text-5xl">
          Real-Time Performance Tracking
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-3xl bg-[#1a1a1a] p-5 text-white md:p-6">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm text-zinc-400">Profit</p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  ${profitDollars}
                  <span className="text-[#22c55e]">.{profitCents}</span>
                </h2>
              </div>
              <p className="text-xs text-zinc-400">Last Updated: {lastUpdated}</p>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {TIME_FILTERS.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-1.5 text-sm transition ${
                      isActive
                        ? "bg-white text-[#111] font-bold"
                        : "bg-[#2b2b2b] text-zinc-300 hover:bg-[#333]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHART_DATA}
                  onMouseMove={(state) => {
                    if (state && state.activePayload && state.activePayload[0]) {
                      setHoveredDate(state.activePayload[0].payload.date);
                    }
                  }}
                >
                  <XAxis dataKey="date" hide />
                  <YAxis hide domain={["dataMin - 300", "dataMax + 300"]} />
                  <Tooltip cursor={false} content={<ProfitTooltip />} />
                  <ReferenceLine x={hoveredDate} stroke="#ffffff" strokeWidth={1} />
                  <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={10}>
                    {CHART_DATA.map((entry) => (
                      <Cell
                        key={entry.date}
                        fill={entry.date === hoveredDate ? "#ffffff" : "#3b3b3b"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-[#111] p-5 text-white md:p-6">
            <div className="mb-5">
              <p className="text-sm text-zinc-400">Balance</p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">$11,940.43</h2>
            </div>

            <div className="space-y-3">
              {CURRENCY_ROWS.map((item) => (
                <div key={item.code}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-semibold">{item.code}</span>
                    <span className="text-zinc-300">{item.amount}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {STAT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-2xl bg-[#1b1b1b] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs text-zinc-400">{card.title}</p>
                      <Icon size={16} className="text-zinc-300" />
                    </div>
                    <p className="text-xl font-bold">{card.value}</p>
                    <p className="mt-1 text-xs font-semibold text-[#22c55e]">{card.badge}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full border-2 border-[#111] bg-transparent px-8 py-3 text-sm font-bold text-[#111] transition hover:bg-[#111] hover:text-white"
          >
            Start Challenge
          </button>
        </div>
      </div>
    </section>
  );
}
