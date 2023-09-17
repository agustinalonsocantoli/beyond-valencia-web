// Interfaces
import { ProductInt } from "@/interfaces/orders.model";
import { TypeProductEnum } from "@/shared/utils/types/types";

interface Props {
    title: string;
    subtitle: string;
    time: string | null;
    setTime: (action: string) => void;
    products: ProductInt[] | undefined;
    setPage: (action: any) => void;
}

export const First = (props: Props) => {
    const { title, subtitle, time, setTime, products, setPage } = props;

    return (
        <div className='contents_first'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className='contents_first-time'>
                {products?.map((product: ProductInt, index: number) => {
                    if (product.type === TypeProductEnum.LONGER)
                        return (
                            <div className='time-select' key={index}>
                                <div>
                                    <label>{product.title}</label>
                                    <select name='longerTime' defaultValue="default" onChange={(e) => {
                                        setTime(e.target.value);
                                        setPage((prev: number) => prev + 1);
                                    }}>
                                        <option value="default" disabled>How many days?</option>
                                        {product?.select?.map((item: string, index: number) => (
                                            <option key={index} value={item}>{index + 2}</option>
                                        ))}
                                    </select>
                                </div>
                                <span>{product.description}</span>
                            </div>
                        );

                    return (
                        <div key={index}>
                            <span className={time === product.select ? 'active' : 'disable'}
                                onClick={() => {
                                    setTime(product?.select);
                                    setPage((prev: number) => prev + 1);
                                }}
                            >
                                {product.title}
                            </span>
                            <span>{product.description}</span>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};