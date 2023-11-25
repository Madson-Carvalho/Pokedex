async function httpRequest(url) {
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            throw error;
        });
}

export default httpRequest;
