import IQuestion from './IQuestion';

interface IPoll {
    id: string,
    userId: string,
    name: string,
    description: string,
    isOpen: boolean,
    isPublic: boolean,
    questions: IQuestion[]
}

export default IPoll