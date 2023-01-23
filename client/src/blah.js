// const blahBlahBlah = () => {
//     const handleClick = (a,b) => {
//         return ()=>console.log(`A: ${a}, B: ${b}`);
//     };

//     return <ComponentName handleClick={handleClick("a-value","b-value")} />;
// };







const PLACEHOLDERNAME = ({ selectedId }) => {
    const [data, setData] = useState([]);
    const client = new MongoClient('mongodb://localhost:27017');

