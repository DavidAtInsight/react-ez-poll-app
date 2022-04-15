import IOption from './IOption';
import IResponse from './IResponse';

interface IQuestion {
    id: string,
    pollId: string,
    text: string,
    options: IOption[],
    responses: IResponse[]
}

export default IQuestion