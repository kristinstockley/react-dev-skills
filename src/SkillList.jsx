import SkillListItem from "./SkillListItem"


export default function SkillList({ skills }) {
  return (
  <ul className="padding-0">
    {skills.map((s, idx) =>
  (<SkillListItem skill={s} key={idx} index={idx} />
    ))}
  </ul>
  );
}