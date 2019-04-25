module utility {
    export class Utility {
        public static IsBetween(val: number, min: number, max: number): boolean {

            return val > min && val < max;
        }
    }
}