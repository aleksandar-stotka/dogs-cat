export interface greetProops {
    name: string;
    messageCount: number;
    isLogin: boolean;
}

export interface personProps {
    name: {
        first: string;
        last: string;
    };
}
export interface personNames {
    names: {
        first: string;
        last: string;
    }[]
}   