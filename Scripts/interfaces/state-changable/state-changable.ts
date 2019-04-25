module interfaces {
    export interface Transition {
        ChangeState(stname: string): void;
    }
}