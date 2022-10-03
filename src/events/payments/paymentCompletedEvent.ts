import { Subjects } from "../subjects";
import { OrderStatus } from "../types/orderStatus";


export interface PaymentCompletedEvent {
    subject: Subjects.PaymentCompleted;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    }
}
