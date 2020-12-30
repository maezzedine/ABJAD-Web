var URL = process.env.VUE_APP_API;

export class Api {

    async getLocalFile(name) {
        var response = await fetch(`/${name}`);
        return response.json();
    }

    async interpret(code) {
        var response = await fetch(`${URL}/interpreter`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(code)
        });

        return response;
    }
}

export default new Api();