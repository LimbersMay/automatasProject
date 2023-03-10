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

export const getSymbol = async (name, scope) => {

    const response = await fetch(`${API_URL}/api/look-up?name=${name}&scope=${scope}`);
    const data = await response.json();

    if (response.status !== 200) {
        return {
            message: data.message,
            ok: false
        }
    }

    return {
        symbol: data.symbol,
        ok: true
    }
}

export const deleteSymbol = async (name, scope) => {
    const response = await fetch(`${API_URL}/api/delete?name=${name}&scope=${scope}`, {
        method: 'DELETE'
    });
    const data = await response.json();

    if (response.status !== 200) {
        return {
            message: data.message,
            ok: false
        }
    }

    return {
        message: data.message,
        ok: true
    }
}

export const freeTable = async () => {
    const response = await fetch(`${API_URL}/api/free`, {
        method: 'DELETE'
    });

    const data = await response.json();

    if (response.status !== 201) {
        return {
            message: data.message,
            ok: false
        }
    }

    return {
        message: data.message,
        ok: true
    }
}

export const updateSymbol = async (name, value, scope) => {

    const response = await fetch(`${API_URL}/api/set-attribute`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            scope,
            value
        })
    });

    const data = await response.json();

    if (response.status !== 200) {
        return {
            message: data.message,
            ok: false
        }
    }

    return {
        message: data.message,
        ok: true
    }
}
