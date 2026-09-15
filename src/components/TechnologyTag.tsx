import { tag, type TagName } from "../data/tags";

type TagProps = {
  name: TagName;
};

export function TechnologyTag({ name }: TagProps) {
  const tagData = tag[name];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${tagData.colorClass}`}
    >
      {tagData.label}
    </span>
  );
}
