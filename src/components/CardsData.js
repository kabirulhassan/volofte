import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";



import { getCurrentTabSelector } from "../redux/slices/tabSlice";


import CardComponent from "./CardComponent";
const API_URL = 'http://localhost:4000/cards';



const CardsData = () => {
    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const currentTab = useSelector(getCurrentTabSelector);

    const getCardsData = (currentTab) => {
        let url = '';
        switch (currentTab) {
            case 'Your':
                console.log('Your');
                url = `${API_URL}?owner_id=1`;
                break;
            case 'All':
                console.log('All');
                url = API_URL;
                break;
            case 'Blocked':
                console.log('Blocked');
                url = `${API_URL}?status=blocked`;
                break;
            default:
                console.log('default');
                url = API_URL;
                break;
        }
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCardsData(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        getCardsData(currentTab);

    }, [currentTab]);

    return (
        <div className="cards px-4">
            {isLoading ? <h1>Loading</h1> :  cardsData.length>0 && cardsData.map((card) => (
                <CardComponent card={card} key={card.id} />
            ))}
        </div>
    )
}

export default CardsData;