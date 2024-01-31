import { getCountAndDate, incrementCounter } from "@/db/actions";

export default async function Counter() {
  const { count, date, error } = await getCountAndDate();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      {!!date && <h2>Last click date: {date.toDateString()}</h2>}
      <form action={incrementCounter}>
        <button>Increment</button>
      </form>
    </div>
  );
}
