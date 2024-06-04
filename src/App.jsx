import Card from "./component/Card";
import data from "./data";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-800">
        <div className="my-16 grid grid-cols-1 gap-16">
          {data.map((i) => (
            <Card key={i.id} props={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
