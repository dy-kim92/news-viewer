import NewsList from './components/NewsList';

const App = () => {
    // const [data, setData] = useState(null);
    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(
    //             'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c58f460fad174a918b0ed8962a722011',
    //         );
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    return <NewsList />;
};

export default App;
