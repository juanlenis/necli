export interface Transaction {
    id: string;
    amount: number;
    category: string;
    subcategory: string;
    date: Date;
    type: 'income' | 'expense';
}

export interface Category {
    name: string;
    subcategories: string[];
}

export type Period = 'weekly' | 'monthly' | 'annually';