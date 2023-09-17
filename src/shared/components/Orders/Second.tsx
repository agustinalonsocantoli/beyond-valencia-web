import { OrdersDataInt, ProductInt } from "@/interfaces/orders.model";
import { Orders } from "../Custom/Orders";

interface Props {
    title: string;
    subtitle: string;
    small: number;
    setSmall: (action: number) => void;
    medium: number;
    setMedium: (action: number) => void;
    normal: number;
    setNormal: (action: number) => void;
    data: OrdersDataInt;
    product: ProductInt | undefined;
}

export const Second = (props: Props) => {
    const {
        title,
        subtitle,
        small,
        setSmall,
        medium,
        setMedium,
        normal,
        setNormal,
        data,
        product,
    } = props;
    const resposive = window.innerWidth < 1024 ? true : false;
    const { s, m, n } = data;

    return (
        <div className='contents_second'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{s.name}</span>
                    <Orders type={small} setType={setSmall} />
                </div>

                <div className='type_select-info'>
                    <div>
                        <span>{s.description}</span>
                        <span>{s.others}</span>
                    </div>

                    <span>
                        <span>Price per item {product?.price?.small}€</span>
                    </span>
                </div>
            </div>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{m.name}</span>
                    <Orders type={medium} setType={setMedium} />
                </div>

                <div className='type_select-info'>
                    <div>
                        <span>{m.description}</span>
                        <span>{m.others}</span>
                    </div>

                    <span>
                        <span>Price per item {product?.price.medium}€</span>
                    </span>
                </div>
            </div>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{n.name}</span>
                    <Orders type={normal} setType={setNormal} />
                </div>

                <div className='type_select-info'>
                    <div style={{ width: resposive ? '55%' : '50%' }}>
                        <span>{n.description}</span>
                        <span>{n.others}</span>
                    </div>

                    {!product?.price?.normal
                        ? 
                        <span>Free</span> 
                        :
                        <span>
                            <span>Price per item {product?.price?.normal}€</span>
                        </span>
                    }

                </div>
            </div>
        </div>
    );
};

