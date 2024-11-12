console.log("Jai Shree Ram");
const parent = document.getElementById('root');
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1",{style:{color:'orange'}},"ABES Engineering College");
// const l1 = React.createElement("li",{},"orange");
// const l2 = React.createElement("li",{},"Apple");
// const ul = React.createElement("ul",{style:{backgroundColor:'blue'}},l1,l2);
const element = <h1>Jai Shree Ram</h1>;
const l1 = <li>orange</li>;
const l2 = <li>Apple</li>;
const ul = <ul>{l1}{l2}</ul>;

const container=(
    <div style={{backgroundColor:'cyan'}} >
        <div>{element}</div>
        <div>{ul}</div>
    </div>
)

root.render(container);

