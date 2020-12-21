export class Api {
    async getLocalFile(name) {
        var response = await fetch(`/${name}`);
        return response.json();
    }
}

export default new Api();