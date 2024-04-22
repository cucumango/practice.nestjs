/**
 *
 */
export class ResponseDto<T> {
    message: string;
    status: number;
    payload?: T;
}
