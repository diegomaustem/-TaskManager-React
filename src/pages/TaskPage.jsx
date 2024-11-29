import { useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="space-y-4 p-6 bg-my-gray rounded-md shadow">
      <h1> {title}</h1>
      <p> {description}</p>
    </div>
  );
}
