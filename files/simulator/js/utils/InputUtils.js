class InputUtils {
    constructor(root) {
        this.root = root;

        this.coords = this.root.querySelector('#coords');
        this.frames = this.root.querySelector('#frames');

        this.loadedCoords = null;
        this.loadedFrames = null;
    }

    async loadCoords(url) {
        const target = url ? url : this.coords.files[0];

        return new Promise(function (resolve) {
            Papa.parse(target, {
                header: false,
                download: validUrl(url),
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: (results) => {
                    this.loadedCoords = results.data;

                    // check header
                    const hasHeader = getType(this.loadedCoords[0][0]) === 'string';
                    const positions = !hasHeader ? this.loadedCoords : this.loadedCoords.slice(1);

                    // reset input value
                    this.coords.value = null;

                    // assume last three columns are X, Y, Z coordinates
                    resolve(positions.map((position) => position.slice(-3)));
                }
            });
        }.bind(this));
    }

    async loadFrames(url) {
        const target = url ? url : this.frames.files[0];

        return new Promise(function (resolve) {
            Papa.parse(target, {
                header: false,
                download: validUrl(url),
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: (results) => {
                    this.loadedFrames = results.data;

                    // check header
                    const hasHeader = getType(this.loadedFrames[0][0]) === 'string';
                    const frames = !hasHeader ? this.loadedFrames : this.loadedFrames.slice(1);

                    // reset input value
                    this.frames.value = null;

                    // assume first column is ID which will be ignored
                    resolve(frames.map((frame) => frame.slice(1)));
                }
            });
        }.bind(this));
    }
}