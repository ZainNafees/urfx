import { ArrowUpRight, Plus } from "lucide-react";

const timelineFilters = ["1W", "1M", "6M", "1Y", "All Time"];

const currencyRows = [
  { code: "USD", value: "2.0K", tone: "usd" },
  { code: "JPY", value: "3.9K", tone: "jpy" },
  { code: "EUR", value: "1.8K", tone: "eur" },
  { code: "GBP", value: "3.4K", tone: "gbp" },
  { code: "INR", value: "1.5K", tone: "inr" },
];

const barHeights = [
  5, 5, 7, 5, 8, 15, 24, 22, 24, 31, 27, 30, 35, 42, 47, 51, 50, 53, 53, 58,
  66, 63, 63, 71, 70, 77, 84, 89, 85, 91,
];

export default function TradingDashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <div className="dashboard-grid">
          <article className="trade-card profit-card">
            <div className="profit-top">
              <div>
                <span className="label">Profit</span>
                <h2 className="profit-amount">
                  <span>$76,484</span>
                  <strong>.01</strong>
                </h2>
              </div>
              <span className="timestamp">Last Updated: 03:08:17</span>
            </div>

            <div className="timeline-filters" role="group" aria-label="Timeline">
              {timelineFilters.map((filter) => (
                <button
                  key={filter}
                  className={`pill ${filter === "1M" ? "active" : ""}`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="chart-bars" aria-hidden="true">
              {barHeights.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                  className="bar"
                />
              ))}
            </div>
          </article>

          <section className="dashboard-right">
            <article className="trade-card balance-card">
              <div className="balance-head">
                <span className="label">Balance</span>
                <h3>
                  <span>$12,500</span>
                  <strong>.00</strong>
                </h3>
              </div>

              <div className="balance-lines" aria-hidden="true">
                <span className="line usd" />
                <span className="line jpy" />
                <span className="line eur" />
                <span className="line gbp" />
                <span className="line inr" />
              </div>

              <div className="currency-row">
                {currencyRows.map((currency) => (
                  <div className={`currency-item ${currency.tone}`} key={currency.code}>
                    <span>{currency.code}</span>
                    <strong>{currency.value}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="trade-card eur-card">
              <div className="eur-top">
                <div>
                  <h4>$0.80</h4>
                  <p>EUR</p>
                </div>
                <div className="eur-actions">
                  <button type="button" aria-label="Expand">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </button>
                  <button type="button" aria-label="Add">
                    <Plus size={22} strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="eur-chart" aria-hidden="true">
                <svg viewBox="0 0 320 130" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="eurFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34f3a5" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#34f3a5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,20 C40,35 70,45 100,60 C130,78 160,76 190,77 C220,77 240,79 265,70 C290,61 305,52 320,42 L320,130 L0,130 Z"
                    fill="url(#eurFill)"
                  />
                  <path
                    d="M0,20 C40,35 70,45 100,60 C130,78 160,76 190,77 C220,77 240,79 265,70 C290,61 305,52 320,42"
                    fill="none"
                    stroke="#39f4aa"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="eur-foot">
                <span>EUR</span>
                <strong>0.03%</strong>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
