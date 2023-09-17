// Icons
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

interface Props {
    type: any;
    setType: (action: any) => void;
    isDisable?: boolean;
}

export const Orders = (props: Props) => {
    const { type, setType, isDisable = false } = props;

    return (
        <div className="order">
            <button
                disabled={type <= 0}
                onClick={() => {
                    type > 0 &&
                        setType((prev: number) => prev - 1)
                }}
            >
                <HiMinusSmall />
            </button>

            <h4>{type}</h4>

            <button
                disabled={isDisable}
                onClick={
                    () => setType((prev: number) => prev + 1)
                }
            >
                <HiPlusSmall />
            </button>
        </div>
    );
};