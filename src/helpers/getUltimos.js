

export const getUltimos = async () => {

    const resp = await fetch('https://react-socket-ticket.herokuapp.com/ultimos');

    const data = await resp.json();

    return data.ultimos;

}