import type { GithubContributionData } from "../types/githubContributionData.ts";

type ContributionGraphProps = {
  contributions: GithubContributionData[];
  isUnavailable?: boolean;
};

const WEEKS_TO_SHOW = 13;
const DAYS_PER_WEEK = 7;
const LEVEL_CLASSES = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

function ContributionGraph({
  contributions,
  isUnavailable = false,
}: ContributionGraphProps) {
  const recentContributions = [...contributions]
    .sort((firstDay, secondDay) => firstDay.date.localeCompare(secondDay.date))
    .slice(-(WEEKS_TO_SHOW * DAYS_PER_WEEK));
  const weeks = Array.from({ length: WEEKS_TO_SHOW }, (_, weekIndex) =>
    recentContributions.slice(
      weekIndex * DAYS_PER_WEEK,
      (weekIndex + 1) * DAYS_PER_WEEK,
    ),
  );
  const totalContributions = recentContributions.reduce(
    (total, day) => total + day.count,
    0,
  );

  return (
    <div className="w-full shrink-0 rounded-xl border border-white/10 bg-white/5 p-2">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <span className="text-[0.6rem] font-medium uppercase tracking-wide text-slate-400">
          Contributions
        </span>
        <span className="text-xs font-semibold text-slate-200">
          {isUnavailable ? "Unavailable" : totalContributions}
        </span>
      </div>
      <div
        role="img"
        aria-label={
          isUnavailable
            ? "GitHub contribution activity is unavailable"
            : `GitHub contribution activity: ${totalContributions} contributions in the past three months`
        }
        className="grid grid-cols-[repeat(13,minmax(0,1fr))] grid-flow-col grid-rows-7 gap-0.5"
        aria-hidden="true"
      >
        {weeks.flatMap((week, weekIndex) =>
          Array.from({ length: DAYS_PER_WEEK }, (_, dayIndex) => {
            const contribution = week[dayIndex];
            const level = Math.min(contribution?.level ?? 0, 4);

            return (
              <span
                className={`h-2.5 w-full rounded-[2px] transition-transform duration-200 ease-out hover:z-10 hover:scale-150 ${LEVEL_CLASSES[level]}`}
                key={contribution?.date ?? `${weekIndex}-${dayIndex}`}
                title={
                  contribution
                    ? `${contribution.count} contributions on ${contribution.date}`
                    : "No contribution data"
                }
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

export { ContributionGraph };
