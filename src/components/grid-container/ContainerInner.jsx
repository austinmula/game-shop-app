import CardContainer from "../card/CardContainer";
export default function ContainerInner({
  filteredItems,
  firstindex,
  lastindex,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 w-full mt-10">
      {filteredItems.map((game) => (
        <CardContainer game={game} key={game.id} />
      ))}
    </div>
  );
}
