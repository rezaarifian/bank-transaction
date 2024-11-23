type Transaction = {
    id: string;
    amount: number;
    unique_code: number;
    status: 'SUCCESS' | 'PENDING';
    sender_bank: string;
    account_number: string;
    beneficiary_name: string;
    beneficiary_bank: string;
    remark: string;
    created_at: string;
    completed_at: string;
    fee: number;
  };

type TransactionsData = Record<string, Transaction>;

type StatusProps = 'SUCCESS' | 'PENDING';
