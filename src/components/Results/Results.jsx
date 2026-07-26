import Profile from "./ResultsProfile/Profile";

const Results = ({resultObject}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(300px, 30%)_1fr]">
            <aside>
                <Profile resultObject={resultObject}/>
            </aside>
            <section>

            </section>
        </div>
    );
};

export default Results;