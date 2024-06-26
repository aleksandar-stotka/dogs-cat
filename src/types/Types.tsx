
export interface linksNav {
    links: {
        id: number;
        text: string;
        url:string      
    }[]
}   
export interface Pet {
    id: number;
    name: string;
    species: string; // 'dog' or 'cat'
    category: 'sell' | 'give'; // 'sell' or 'give' category
    description: string;
  }

  export interface SignUpResult {
    signup: (email: string, password: string, displayName: string) => Promise<void>;
    error: string | null;
    isPending: boolean;
}
