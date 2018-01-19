import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export function cycle<U, Z = U>(output: U, outputMock: Z) {
    Object.keys(output).forEach(key => {
        const item = (output as any)[key] as Observable<any>;
        item.subscribe((value) => {
            const subj = (outputMock as any)[key] as Subject<any>;
            subj.next(value);
        });
    });
}
