"use client";

import { CHART_COLORS } from "@/lib/utils/constans";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SpendingChartsProps {
  categoryData: { name: string; value: number }[];
  weeklyData: { week: string; value: number }[];
  balanceData: { date: string; balance: number }[];
}

function NoData() {
  return (
    <div className="flex items-center justify-center h-full text-slate-500 text-sm">
      No data available
    </div>
  );
}

export default function SpendingCharts({
  categoryData,
  weeklyData,
  balanceData,
}: SpendingChartsProps) {
  const tooltipStyle = {
    backgroundColor: "rgb(15 23 42)", // slate-900
    border: "1px solid rgb(30 41 59)", // slate-800
    borderRadius: "12px",
    color: "#e2e8f0",
    fontSize: "12px",
    fontWeight: "600",
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-sm">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
            Spending by Category
          </h3>
          <div className="h-[280px]">
            {categoryData.length === 0 ? (
              <NoData />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    innerRadius={60}
                    paddingAngle={5}
                  >
                    {categoryData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={CHART_COLORS[i % CHART_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-sm">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
            Weekly Trends
          </h3>
          <div className="h-[280px]">
            {weeklyData.length === 0 ? (
              <NoData />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(30, 41, 59, 0.5)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="week"
                    stroke="rgb(100 116 139)"
                    fontSize={10}
                    fontWeight="700"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="rgb(100 116 139)"
                    fontSize={10}
                    fontWeight="700"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    cursor={{ fill: "rgba(51, 65, 85, 0.3)" }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#10B981"
                    radius={[6, 6, 0, 0]}
                    barSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* LINE CHART */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-sm">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
          Balance Analysis
        </h3>
        <div className="h-[280px]">
          {balanceData.length === 0 ? (
            <NoData />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={balanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(30, 41, 59, 0.5)"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  stroke="rgb(100 116 139)"
                  fontSize={10}
                  fontWeight="700"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="rgb(100 116 139)"
                  fontSize={10}
                  fontWeight="700"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{
                    fill: "#10B981",
                    r: 5,
                    strokeWidth: 2,
                    stroke: "#0f172a",
                  }}
                  activeDot={{ r: 7, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
