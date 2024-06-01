import Card from "./component/Card";
import data from "./data";

function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-800 flex items-center justify-center">
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
