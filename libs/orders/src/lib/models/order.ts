import { OrderItem } from './order-item';
import { User } from '@bluebits/users';

export interface Order {
    id?: string;
    orderItems?: OrderItem[];
    user?: User;
    shippingAddress1?: string;
    shippingAddress2?: string;
    city?: string;
    zip?: string;
    country?: string;
    phone?: string;
    status?: string;
    totalPrice?: number;
    createdAt?: string;
}
