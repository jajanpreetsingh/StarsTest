module resources {
    export class ResourceData {
        public Sprites: Path[];
        public Sounds: Path[];
    }

    export class Path {
        public id: string;
        public src: string;
    }
}