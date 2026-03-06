"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import ButtonGradient from "./ButtonGradient";
import {
  itemLeft,
  itemRight,
  itemUp,
  scaleIn,
  sectionStagger,
  viewportOnce,
} from "./motionVariants";

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
  { code: "USD", color: "#a855f7", amount: "$1.2K", percent: 13 },
  { code: "JPY", color: "#ef4444", amount: "$525", percent: 8 },
  { code: "EUR", color: "#60a5fa", amount: "$9.2K", percent: 77 },
  { code: "GBP", color: "#f59e0b", amount: "$293", percent: 5 },
  { code: "INR", color: "#34d399", amount: "$881", percent: 10 },
];

const STAT_CARDS = [
  {
    title: "Success Rate",
    value: "92.3%",
    badge: "+5.2%",
    detail: "of trades hit profit",
    icon: ChartColumn,
  },
  {
    title: "Average profit",
    value: "$185.50",
    badge: "+12.5%",
    detail: "per winning trade",
    icon: DollarSign,
  },
  {
    title: "Execution Rate",
    value: "0.04s",
    badge: "99.9%",
    detail: "average execution time",
    icon: Clock3,
  },
  {
    title: "Risk Management",
    value: "Active",
    badge: "99.9%",
    detail: "advanced protection enabled",
    icon: ShieldCheck,
  },
];

function ProfitTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const { date, value } = payload[0].payload;

  return (
    <div className="rounded-lg border border-[#4b5563] bg-[#1f2329] px-3 py-2 text-xs font-semibold text-[#f8fafc] shadow-lg">
      {date} | $
      {value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
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
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="min-h-screen w-full px-4 py-8 md:px-8 md:py-10"
      style={{
        backgroundImage: "url('/assets/images/bg-chart.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="mx-auto max-w-[1220px]"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h1 variants={itemUp} className="mb-2 text-center text-3xl font-bold text-[#111] md:text-5xl">
          Real-Time Performance Tracking
        </motion.h1>
        <motion.p variants={itemUp} className="mb-10 text-center text-gray-600">
          Monitor your trading performance with advanced analytics and real-time statistics
        </motion.p>

        <motion.div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.2fr_1fr]" variants={sectionStagger}>
          <motion.div variants={itemLeft} className="h-full rounded-[2px] border border-[#12161e] bg-[#05070b] p-5 text-[#f3f4f6] md:p-6">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[16px] leading-none text-[#7a7f87]">Profit</p>
                <h2 className="mt-1 text-[42px] leading-none font-semibold tracking-[-0.03em] text-[#d8dbe1] md:text-[46px]">
                  $7,223.43
                </h2>
              </div>
              <p className="text-[13px] text-[#7a7f87]">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {TIME_FILTERS.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <motion.button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`h-10 rounded-full border px-4 text-[18px] font-medium transition ${
                      isActive
                        ? "border-white bg-white text-[#111827]"
                        : "border-[#505560] bg-[#22262d] text-[#d1d5db] hover:bg-[#2b3038]"
                    }`}
                    whileTap={{ scale: 0.96 }}
                  >
                    {filter}
                  </motion.button>
                );
              })}
            </div>

            <div className="h-[290px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHART_DATA}
                  onMouseMove={(state) => {
                    if (
                      state &&
                      state.activePayload &&
                      state.activePayload[0]
                    ) {
                      setHoveredDate(state.activePayload[0].payload.date);
                    }
                  }}
                >
                  <XAxis dataKey="date" hide />
                  <YAxis hide domain={["dataMin - 300", "dataMax + 300"]} />
                  <Tooltip cursor={false} content={<ProfitTooltip />} />
                  <ReferenceLine
                    x={hoveredDate}
                    stroke="#d7e53a"
                    strokeWidth={4}
                    strokeOpacity={0.38}
                  />
                  <ReferenceLine
                    x={hoveredDate}
                    stroke="#ffffff"
                    strokeWidth={1}
                  />
                  <Bar dataKey="value" radius={[3, 3, 3, 3]} barSize={6}>
                    {CHART_DATA.map((entry) => (
                      <Cell
                        key={entry.date}
                        fill={
                          entry.date === hoveredDate ? "#ffffff" : "#3b3b3b"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div variants={itemRight} className="flex h-full flex-col rounded-2xl p-2">
            <motion.div variants={scaleIn} className="rounded-[2px] border border-[#12161e] bg-[#05070b] p-4 text-[#f8fafc]">
              <div className="mb-4">
                <p className="text-[16px] leading-none text-[#7a7f87]">Balance</p>
                <h2 className="mt-1 text-[42px] leading-none font-semibold tracking-[-0.03em] text-[#d8dbe1]">
                  $11,940.43
                </h2>
              </div>

              <div className="mb-4 flex w-full gap-1.5">
                {CURRENCY_ROWS.map((item) => (
                  <div
                    key={`${item.code}-line`}
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: item.color,
                      width: `${item.percent}%`,
                      minWidth: "8%",
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-5 gap-2">
                {CURRENCY_ROWS.map((item) => (
                  <div key={`${item.code}-label`} className="text-[15px] leading-none">
                    <p className="font-bold" style={{ color: item.color }}>
                      {item.code}
                    </p>
                    <p className="mt-1 font-semibold text-zinc-100">{item.amount}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-3 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 sm:auto-rows-fr" variants={sectionStagger}>
              {STAT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={itemUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full rounded-[2px] border border-[#12161e] bg-[#05070b] p-4 text-[#f8fafc]"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-zinc-300/20">
                        <Icon size={14} className="text-zinc-100" />
                      </div>
                      <div>
                        <p className="text-[15px] leading-none text-zinc-400">{card.title}</p>
                        <p className="text-[32px] leading-none font-semibold tracking-[-0.02em] text-[#f3f4f6]">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[18px] leading-none font-semibold text-[#00e88b]">
                      {card.badge}
                    </p>
                    <p className="mt-1 text-[14px] text-zinc-200">{card.detail}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 flex justify-center" variants={itemUp}>
          <ButtonGradient>Start Challenge</ButtonGradient>
        </motion.div>
      </motion.div>
    </section>
  );
}
