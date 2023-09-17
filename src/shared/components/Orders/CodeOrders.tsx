// Interfaces
import { OrdersDataInt } from "@/interfaces/orders.model";

interface Props {
    small: number;
    medium: number;
    normal: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number;
    data: OrdersDataInt;
}

export const CodeOrders = (props: Props) => {
    const { small, medium, normal, subTotal, validateCode, handleGetCode, discount, totalPay, data } = props;
    const { s, m, n } = data;

    return(
        <div className="contents_complete-total">
            {small > 0 && <h3>{s.name} x {small}</h3>}
            {medium > 0 && <h3>{m.name} x {medium}</h3>}
            {normal > 0 && <h3>{n.name} x {normal}</h3>}
            <h2>Subtotal €{subTotal}</h2>

            <p>Si te alojas con uno de nuestros socios solicita el codígo para obtener un descuento.</p>
            <label>Enter your code here!</label>

            <div>
                <input type="text" name="discountCode" onChange={handleGetCode}/>
                <button onClick={validateCode}>Validate Code</button>
            </div>

            <h3>Discount %{discount}</h3>
            <h2>Total €{totalPay}</h2>
        </div>  
    );
}