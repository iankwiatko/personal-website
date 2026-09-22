import { tag, type TagName } from "../data/tags";

type TagProps = {
  name: TagName;
};

export function TechnologyTag({ name }: TagProps) {
  const tagData = tag[name];

  return (
    <span
      className={`inline-flex h-6 items-center gap-2 rounded-full border px-2.5 text-xs leading-none font-semibold ${tagData.colorClass}`}
    >
      {tagData.label}
    </span>
  );
}
