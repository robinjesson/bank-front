import { EPeriodUnit } from './enums'

export type TAccountRequest = {
    name: string;
    userId: number;
    total: number;
};

export type TEntryRequest = {
    title: string;
    amount: number;
    date: Date;
    end: Date;
    periodUnit: EPeriodUnit;
    period: number;
    accountId: number;
};

export type TLoginRequest = {
    username: string;
    password: string;
};

export type TUpdateFieldRequest = {
    field: string;
    value: unknown
};

export type TAccountResponse = {
    id: number;
    name: string;
    total: number;
    update: Date;
    lastEntries: TEntryResponse[];
};

export type TAuthenticationResponse = {
    token: string;
    user: TUserResponse;
};

export type TEntryResponse = {
    id: number;
    title: string;
    amount: number;
    date: Date;
};

export type TUserResponse = {
    id: number;
    username: string;
    periodicEntries: TEntryResponse[];
};

