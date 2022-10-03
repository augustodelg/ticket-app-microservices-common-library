export enum Subjects {
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',

    OrderCreated = 'order:created',
    OrderAwaitingPayment = 'order:awaiting-payment',
    OrderCancelled = 'order:cancelled',

    ExpirationComplete = 'expiration:complete',

    PaymentCreated = 'payment:created',
    PaymentComplete = 'payment:complete'
}