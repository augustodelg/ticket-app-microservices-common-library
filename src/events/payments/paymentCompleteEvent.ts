import { Subjects } from "../subjects";
import { OrderStatus } from "../types/orderStatus";


export interface PaymentCompleteEvent {
    subject: Subjects.PaymentComplete;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    }
}
