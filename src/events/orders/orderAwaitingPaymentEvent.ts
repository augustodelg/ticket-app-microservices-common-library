import { Subjects } from "../subjects";
import { OrderStatus } from "../types/orderStatus";


export interface OrderAwaitingPaymentEvent {
    subject: Subjects.OrderAwaitingPayment;
    data:{
        id: string;
        version: number;
        ticket: {
            id: string;
        }
    }
}