import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CachedIcon from '@mui/icons-material/Cached';

const CardComponent = ({ card }) => {
    const totalAmount = card.spent.value + card.available_to_spend.value;
    const spentPercentage = (card.spent.value / totalAmount) * 100;
    const balancePercentage = 100 - spentPercentage;
    const spentStyle = {
        width: `${spentPercentage}%`,
    };
    const balanceStyle = {
        width: `${balancePercentage}%`,
    };
    return (
        <div className="card p-4">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-left font-bold">{card.name}</h3>
                    <p className="text-left text-gray-400 mb-4">{card.budget_name}</p>
                </div>
                <div className={`h-10 w-10 flex items-center justify-center rounded-full ${card.card_type === 'burner' ? 'bg-orange-100' : 'bg-pink-100'}`} >

                    {card.card_type === 'burner' ?
                        <LocalFireDepartmentOutlinedIcon className="text-orange-500" />
                        :
                        <CachedIcon className="text-pink-500" />
                    }
                </div>

            </div>
            <div className="flex justify-between text-xs mb-4">
                <div className="flex-col">
                    <p className="text-left text-gray-400">AMOUNT</p>
                    <p className="text-left font-bold">300 {card.spent.currency}</p>
                </div>
                <div className="flex-col">
                    <p className="text-left text-gray-400">FREQUENCY</p>
                    <p className="text-left font-bold">Monthly</p>
                </div>
                {card.card_type === 'burner' ?
                    <div className="flex-col">
                        <p className="text-left text-gray-400">EXPIRY</p>
                        <p className="text-left font-bold">{card.expiry}</p>
                    </div> :
                    <div className="flex-col">
                        <p className="text-left text-gray-400">LIMIT</p>
                        <p className="text-left font-bold">{card.limit}</p>
                    </div>}
            </div>
            <div className="distribution flex h-2 w-full rounded-md mb-4">
                <div
                    className="bg-green-500 rounded-l"
                    style={spentStyle}>
                </div>
                <div
                    className="bg-pink-500 rounded-r"
                    style={balanceStyle}
                    >
                </div>
            </div>
            <div className="flex justify-between text-xs mb-4">
                <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-gray-400">Spent</p>
                </div>
                <p className="font-bold text-xs">{card.spent.value}</p>
            </div>
            <div className="flex justify-between text-xs mb-4">
                <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                    <p className="text-gray-400">Balance</p>
                </div>
                <p className="font-bold text-xs">{card.available_to_spend.value}</p>
            </div>
        </div>
    );

}

export default CardComponent;