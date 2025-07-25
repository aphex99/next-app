import { User } from '@/app/types';

export const getUsers = async (): Promise<User[]> => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        return data.json();
    } catch (error) {
        console.error(error);
    }
};
