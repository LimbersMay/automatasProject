
export const API_URL = 'http://localhost:3000';

export const addSymbol = async (name, dataType, type, scope, line, value, father) => {

        const response = await fetch(`${API_URL}/api/save-symbol`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                dataType,
                type,
                scope,
                line,
                value,
                father
            })
        });

        const data = await response.json();

        if (response.status !== 200) {
            return {
                data: data.message,
                ok: false
            }
        }

        return {
            data,
            message: data.message,
            ok: true
        }
}

export const getSymbols = async () => {
    const response = await fetch(`${API_URL}/api/view`);
    return await response.json();
}
