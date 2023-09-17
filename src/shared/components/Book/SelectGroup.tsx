// Interfaces
import { OrdersGroupsInt } from "@/interfaces/books.model";

interface Props {
    handleSelect: (type: string) => void;
    groups: OrdersGroupsInt[]
}

export const SelectGroup = ({ handleSelect, groups }: Props) => {

    return (
        <div className="book_type-conteiner">
            {groups?.map((order: OrdersGroupsInt, i: number) => (
                <div
                    key={i}
                    className={`book_type`}
                >
                    <div className="type-flex">
                        <h3>{order.title}</h3>

                        <div className="flex-content">
                            <h4>Price</h4>
                            {order?.prices?.adults && <h5>Adults €{order?.prices?.adults}</h5>}
                            {order?.prices?.children && <h5>Children €{order?.prices?.children}</h5>}
                        </div>
                    </div>

                    <div className="btn_select">
                        <button
                            onClick={() => {
                                handleSelect(order?.type);
                            }}
                        >
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};